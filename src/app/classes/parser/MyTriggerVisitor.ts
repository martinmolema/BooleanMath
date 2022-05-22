import {
  AnexpressionContext,
  AstringContext,
  BinaryOperatorAssertionContext,
  BooleanexpressionContext, BooleanMathParser,
  BooleanvalueContext,
  BooleanValueContext,
  DecimalExpressionContext,
  FunctionWithArrayContext,
  FunctionWithSingleParameterContext,
  IdentifierContext,
  IdentifierExpressionContext,
  IdentifierWithBooleanValueContext,
  ListelementContext,
  NotExpressionContext,
  NumericComparatorAssertionContext,
  NumericexpressionContext,
  NumericValueInListAssertionContext,
  OperationPlusMinusExpressionContext,
  OperatorPowerExpressionContext,
  OperatorTimesDivExpressionContext,
  ParenthesedBooleanExpressionContext,
  ParenthesedNumericExpressionContext,
  ParenthesedStringExpressionContext,
  ParseContext,
  PlainStringExpressionContext,
  RepeatStringExpressionContext,
  StringComparisonAssertionContext,
  StringexpressionContext,
  StringValueInListAssertionContext,
  UnaryoperationleftContext,
  UnaryoperationrightContext,
  ValueContext,
  ValuelistContext,
} from './ANTLR4/BooleanMathParser';
import {AbstractParseTreeVisitor} from 'antlr4ts/tree';
import {TerminalNode} from 'antlr4ts/tree/TerminalNode';
import {BooleanMathVisitor} from "./ANTLR4/BooleanMathVisitor";

export class MyTriggerVisitor extends AbstractParseTreeVisitor<any> implements BooleanMathVisitor<any> {
  private identifiers: Map<string, any>;

  constructor() {
    super();
  }

  setData(identifiers: Map<string, any>): void {
    this.identifiers = identifiers;
  }

  performNumericComparison(left: number, right: number, operator: number): boolean | undefined {
    switch (operator) {
      case BooleanMathParser.GT:
        return left > right;
      case BooleanMathParser.GE:
        return left >= right;
      case BooleanMathParser.LT:
        return left < right;
      case BooleanMathParser.LE:
        return left <= right;
      case BooleanMathParser.NEQ:
        return left !== right;
      case BooleanMathParser.EQ:
        return left === right;
      case BooleanMathParser.APPROXIMATION:
        // FIXME: perform real 'approximation" operator
        return left - right < 0.0005;
    }
    return undefined;
  }

  processExpressionList(list: Array<any> | undefined): Array<any> {
    if (list === undefined || list.length === 0) {
      return [];
    }

    const result = new Array<any>();
    for (const item of list) {
      const value = this.visit(item);
      result.push(value);
    }

    return result;
  }// processExpressionList

  isItemInList(searchValue: any, list: Array<any> | undefined, invertresult: TerminalNode | undefined): boolean {

    const doInvert = (invertresult instanceof TerminalNode);

    if (list === undefined || list.length === 0) {
      return doInvert;
    }
    const result = list.findIndex(x => x === searchValue) !== -1;
    return doInvert ? !result : result;
  }// isItemInList


  getIdentifierValue(identifier: string): number | string | undefined {
    if (this.identifiers.has(identifier)) {
      return this.identifiers.get(identifier);
    }
    return undefined;
  }

  getDecimalValue(value: string): number {
    return parseFloat(value);
  }

  getString(quotedString: string | undefined): string {
    if (quotedString === undefined) {
      return '';
    }
    return quotedString.substring(1, quotedString.length - 1);
  }


  /***********************************************************************************************************
   * Parser generated overrides
   * ***********************************************************************************************************/

  visitBooleanexpression(ctx: BooleanexpressionContext): any {
    console.log(`~ visitBooleanexpression`);
    return true;
  }

  visitBinaryOperatorAssertion(ctx: BinaryOperatorAssertionContext): boolean {
    const left = this.visit(ctx._left);
    const right = this.visit(ctx._right);
    const op = ctx.binaryoperator().start.type;
    switch (op) {
      case BooleanMathParser.AND:
        return left && right;
      case BooleanMathParser.OR:
        return left || right;
      case BooleanMathParser.XOR:
        return left !== right;
      case BooleanMathParser.EQ:
        return left === right;
      case BooleanMathParser.NEQ:
        return left !== right;
    }
    return false;
  }

  visitBooleanvalue(ctx: BooleanvalueContext): boolean | undefined {
    if (ctx.TRUE()) {
      return true;
    } else if (ctx.FALSE()) {
      return false;
    }
    return undefined;
  }

  /**
   * COnverts a decimal expression. the helper function gets the prefix (+ or -) so it yields the correct value
   * without need to check the ctx.MINUS() status.
   */
  visitDecimalExpression(ctx: DecimalExpressionContext): any {
    return this.getDecimalValue(ctx.text);
  }

  visitFunctionWithArray(ctx: FunctionWithArrayContext): any {
    const operands = this.visit(ctx._operands);
    const functionName = ctx._funca.start.type;
    switch (functionName) {
      case BooleanMathParser.SUM:
        return operands.reduce((cur: number, val: number) => cur + val, 0);
      case BooleanMathParser.AVERAGE:
        if (operands.length === 0) {
          return 0;
        }
        const sum = operands.reduce((cur: number, val: number) => cur + val, 0);
        return sum / operands.length;
      case BooleanMathParser.MIN:
        return Math.min(...operands);
      case BooleanMathParser.MAX:
        return Math.max(...operands);
    }
    return undefined;
  }

  visitFunctionWithSingleParameter(ctx: FunctionWithSingleParameterContext): number | undefined {
    const operand = this.visit(ctx._operand);
    const functionName = ctx._funcs.start.type;
    switch (functionName) {
      case BooleanMathParser.CUBE:
        return Math.pow(operand, 3);
      case BooleanMathParser.SQRT:
        return Math.sqrt(operand);
    }
    return undefined;
  }

  visitIdentifier(ctx: IdentifierContext): any {
    if (ctx.IDENTIFIERCHARS()) {
      const identifierName = ctx._ident.text;
      if (!identifierName) {
        return undefined;
      }
      if (!this.identifiers.has(identifierName)) {
        throw new Error(`Unknown identifier ${identifierName}`);
      }
      return this.getIdentifierValue(identifierName);
    } else if (ctx.unaryoperationleft()) {
      return this.visit(ctx._uleft);
    } else if (ctx.unaryoperationright()) {
      return this.visit(ctx._uright);
    }

  }

  visitListelement(ctx: ListelementContext): number | string | undefined {
    if (ctx.numericexpression()) {
      return this.visit(ctx._num);
    } else if (ctx.stringexpression()) {
      return this.visit(ctx._str);
    }
    return undefined;
  }

  visitNotExpression(ctx: NotExpressionContext): boolean {
    const value = this.visit(ctx.booleanexpression());
    return !value;
  }

  visitNumericComparatorAssertion(ctx: NumericComparatorAssertionContext): boolean | undefined {
    const left = this.visit(ctx._left);
    const right = this.visit(ctx._right);
    const op = ctx._op.start.type;
    return this.performNumericComparison(left, right, op);
  }

  visitNumericValueInListAssertion(ctx: NumericValueInListAssertionContext): any {
    const items = this.visit(ctx._list);
    const searchValue = this.visit(ctx._left);
    const op = ctx._op;
    const result = items.findIndex((x: string) => x === searchValue) !== -1;
    if (op.NOT()) {
      return !result;
    }
    return result;
  }

  visitNumericexpression(ctx: NumericexpressionContext): any {
    console.log(`@@@ visitNumericexpression`);
  }

  visitOperationPlusMinusExpression(ctx: OperationPlusMinusExpressionContext): any {
    const left = this.visit(ctx._left);
    const right = this.visit(ctx._right);
    if (ctx.MINUS()) {
      return left - right;
    } else if (ctx.PLUS()) {
      return left + right;
    }
  }

  visitOperatorPowerExpression(ctx: OperatorPowerExpressionContext): number {
    const left = this.visit(ctx._left);
    const right = this.visit(ctx._right);
    return Math.pow(left, right);
  }

  visitOperatorTimesDivExpression(ctx: OperatorTimesDivExpressionContext): number {
    const left = this.visit(ctx._left);
    const right = this.visit(ctx._right);
    if (ctx.TIMES()) {
      return left * right;
    } else if (ctx.DIV()) {
      if (right === 0) {
        throw new Error('Division by zero');
      }
      return left / right;
    }
    return 0;
  }

  visitParenthesedBooleanExpression(ctx: ParenthesedBooleanExpressionContext): any {
    return this.visit(ctx.booleanexpression());
  }

  visitParenthesedNumericExpression(ctx: ParenthesedNumericExpressionContext): any {
    return this.visit(ctx.numericexpression());
  }

  visitParse(ctx: ParseContext): any {
    if (ctx.anexpression() !== undefined) {
      const expr = ctx.anexpression();
      if (expr === undefined) {
        return;
      }
      return this.visit(expr);
    }
  }


  visitStringComparisonAssertion(ctx: StringComparisonAssertionContext): boolean | undefined {
    const left = this.visit(ctx._left);
    const right = this.visit(ctx._right);
    const compareResult = left.localeCompare(right);
    switch (ctx._op.start.type) {
      case BooleanMathParser.EQ:
        return compareResult === 0;
      case BooleanMathParser.NEQ:
        return compareResult !== 0;
      case BooleanMathParser.GT:
        return compareResult > 0;
      case BooleanMathParser.GE:
        return compareResult >= 0;
      case BooleanMathParser.LT:
        return compareResult === 0;
      case BooleanMathParser.LE:
        return compareResult === 0;
      case BooleanMathParser.LIKE:
        const regex = new RegExp(right);
        return regex.test(left);
    }
    return undefined;
  }

  visitStringValueInListAssertion(ctx: StringValueInListAssertionContext): any {
    const items = this.visit(ctx._list);
    const searchValue = this.visit(ctx._left);

    return this.isItemInList(searchValue, items, ctx._op.NOT());
  }

  visitStringexpression(ctx: StringexpressionContext): any {
    console.warn(`?visitStringexpression?`);
  }

  visitAstring(ctx: AstringContext): any {
    if (ctx.STRING()) {
      return this.getString(ctx._str.text);
    }
    if (ctx.identifier()) {
      return this.visit(ctx._ident);
    }
    return undefined;
  }

  visitParenthesedStringExpression(ctx: ParenthesedStringExpressionContext): string {
    return this.visit(ctx._val);
  }

  visitRepeatStringExpression(ctx: RepeatStringExpressionContext): string {
    const str = this.visit(ctx._left);
    const num = this.visit(ctx._right);
    return str.repeat(num);
  }

  visitPlainStringExpression(ctx: PlainStringExpressionContext): string {
    return this.visit(ctx._str);
  }


  visitUnaryoperationleft(ctx: UnaryoperationleftContext): any {
    const ident = ctx._ident.text;
    if (ident === undefined) {
      throw new Error(`Unkown variable ???`);
    }
    if (!this.identifiers.has(ident)) {
      throw new Error(`Unkown variable ${ident}`);
    }

    let value = this.identifiers.get(ident);
    if (ctx.OPERATORPLUSPLUS()) {
      value++;
    } else if (ctx.OPERATORMINMIN()) {
      value--;
    }

    this.identifiers.set(ident, value);
    return value;
  }

  visitUnaryoperationright(ctx: UnaryoperationrightContext): any {
    const ident = ctx._ident.text;
    if (ident === undefined) {
      throw new Error(`Unkown variable ???`);
    }
    if (!this.identifiers.has(ident)) {
      throw new Error(`Unkown variable ${ident}`);
    }

    let value = this.identifiers.get(ident);
    const oldValue = value;
    if (ctx.OPERATORPLUSPLUS()) {
      value++;
    } else if (ctx.OPERATORMINMIN()) {
      value--;
    }

    this.identifiers.set(ident, value);
    return oldValue;
  }

  visitValue(ctx: ValueContext): any {
    if (ctx.booleanexpression()) {
      return this.visit(ctx._bool);
    } else if (ctx.numericexpression()) {
      return this.visit(ctx._num);
    } else if (ctx.stringexpression()) {
      return this.visit(ctx._str);
    }
    return undefined;
  }


  visitValuelist(ctx: ValuelistContext): Array<any> {
    const items = ctx.listelements()?.listelement();
    return this.processExpressionList(items);
  }

  protected defaultResult(): any {
    console.log(`### USING DEFAULT RESULT!!! `);
    return undefined;
  }

  visitBooleanValue(ctx: BooleanValueContext): any {
    return this.visit(ctx.booleanvalue());
  }

  visitIdentifierExpression(ctx: IdentifierExpressionContext): any {
    return this.visit(ctx.identifier());
  }


  visitIdentifierWithBooleanValue(ctx: IdentifierWithBooleanValueContext): any {
    const ident = ctx.IDENTIFIERCHARS().text;
    return this.getIdentifierValue(ident);
  }

  visitAnexpression(ctx: AnexpressionContext): any {
    if (ctx.booleanexpression()) {
      return this.visit(ctx._bool);
    } else if (ctx.numericexpression()) {
      return this.visit(ctx._num);
    } else if (ctx.stringexpression()) {
      return this.visit(ctx._str);
    }
    return undefined;
  }



}
