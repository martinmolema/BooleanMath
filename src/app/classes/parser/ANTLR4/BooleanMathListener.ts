// Generated from BooleanMath.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { PlainStringExpressionContext } from "./BooleanMathParser";
import { ConcatStringExpressionContext } from "./BooleanMathParser";
import { RepeatStringExpressionContext } from "./BooleanMathParser";
import { ParenthesedStringExpressionContext } from "./BooleanMathParser";
import { IdentifierExpressionContext } from "./BooleanMathParser";
import { OperatorPowerExpressionContext } from "./BooleanMathParser";
import { OperatorTimesDivExpressionContext } from "./BooleanMathParser";
import { OperationPlusMinusExpressionContext } from "./BooleanMathParser";
import { DecimalExpressionContext } from "./BooleanMathParser";
import { ParenthesedNumericExpressionContext } from "./BooleanMathParser";
import { FunctionWithSingleParameterContext } from "./BooleanMathParser";
import { FunctionWithArrayContext } from "./BooleanMathParser";
import { BooleanValueContext } from "./BooleanMathParser";
import { IdentifierWithBooleanValueContext } from "./BooleanMathParser";
import { BinaryOperatorAssertionContext } from "./BooleanMathParser";
import { NumericComparatorAssertionContext } from "./BooleanMathParser";
import { StringComparisonAssertionContext } from "./BooleanMathParser";
import { StringValueInListAssertionContext } from "./BooleanMathParser";
import { NumericValueInListAssertionContext } from "./BooleanMathParser";
import { ParenthesedBooleanExpressionContext } from "./BooleanMathParser";
import { NotExpressionContext } from "./BooleanMathParser";
import { ParseContext } from "./BooleanMathParser";
import { AnexpressionContext } from "./BooleanMathParser";
import { BooleanvalueContext } from "./BooleanMathParser";
import { BooleanexpressionContext } from "./BooleanMathParser";
import { AstringContext } from "./BooleanMathParser";
import { StringexpressionContext } from "./BooleanMathParser";
import { NumericexpressionContext } from "./BooleanMathParser";
import { FunctionwithsingleparameterContext } from "./BooleanMathParser";
import { FunctionswitharrayContext } from "./BooleanMathParser";
import { NumericcomparatorContext } from "./BooleanMathParser";
import { StringcomparatorContext } from "./BooleanMathParser";
import { ListcomparatorContext } from "./BooleanMathParser";
import { BinaryoperatorContext } from "./BooleanMathParser";
import { ValueContext } from "./BooleanMathParser";
import { ValuelistContext } from "./BooleanMathParser";
import { ListelementsContext } from "./BooleanMathParser";
import { ListelementContext } from "./BooleanMathParser";
import { UnaryoperationleftContext } from "./BooleanMathParser";
import { UnaryoperationrightContext } from "./BooleanMathParser";
import { IdentifierContext } from "./BooleanMathParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `BooleanMathParser`.
 */
export interface BooleanMathListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `plainStringExpression`
	 * labeled alternative in `BooleanMathParser.stringexpression`.
	 * @param ctx the parse tree
	 */
	enterPlainStringExpression?: (ctx: PlainStringExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `plainStringExpression`
	 * labeled alternative in `BooleanMathParser.stringexpression`.
	 * @param ctx the parse tree
	 */
	exitPlainStringExpression?: (ctx: PlainStringExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `concatStringExpression`
	 * labeled alternative in `BooleanMathParser.stringexpression`.
	 * @param ctx the parse tree
	 */
	enterConcatStringExpression?: (ctx: ConcatStringExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `concatStringExpression`
	 * labeled alternative in `BooleanMathParser.stringexpression`.
	 * @param ctx the parse tree
	 */
	exitConcatStringExpression?: (ctx: ConcatStringExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `repeatStringExpression`
	 * labeled alternative in `BooleanMathParser.stringexpression`.
	 * @param ctx the parse tree
	 */
	enterRepeatStringExpression?: (ctx: RepeatStringExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `repeatStringExpression`
	 * labeled alternative in `BooleanMathParser.stringexpression`.
	 * @param ctx the parse tree
	 */
	exitRepeatStringExpression?: (ctx: RepeatStringExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `parenthesedStringExpression`
	 * labeled alternative in `BooleanMathParser.stringexpression`.
	 * @param ctx the parse tree
	 */
	enterParenthesedStringExpression?: (ctx: ParenthesedStringExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesedStringExpression`
	 * labeled alternative in `BooleanMathParser.stringexpression`.
	 * @param ctx the parse tree
	 */
	exitParenthesedStringExpression?: (ctx: ParenthesedStringExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `identifierExpression`
	 * labeled alternative in `BooleanMathParser.numericexpression`.
	 * @param ctx the parse tree
	 */
	enterIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `identifierExpression`
	 * labeled alternative in `BooleanMathParser.numericexpression`.
	 * @param ctx the parse tree
	 */
	exitIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `operatorPowerExpression`
	 * labeled alternative in `BooleanMathParser.numericexpression`.
	 * @param ctx the parse tree
	 */
	enterOperatorPowerExpression?: (ctx: OperatorPowerExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `operatorPowerExpression`
	 * labeled alternative in `BooleanMathParser.numericexpression`.
	 * @param ctx the parse tree
	 */
	exitOperatorPowerExpression?: (ctx: OperatorPowerExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `operatorTimesDivExpression`
	 * labeled alternative in `BooleanMathParser.numericexpression`.
	 * @param ctx the parse tree
	 */
	enterOperatorTimesDivExpression?: (ctx: OperatorTimesDivExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `operatorTimesDivExpression`
	 * labeled alternative in `BooleanMathParser.numericexpression`.
	 * @param ctx the parse tree
	 */
	exitOperatorTimesDivExpression?: (ctx: OperatorTimesDivExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `operationPlusMinusExpression`
	 * labeled alternative in `BooleanMathParser.numericexpression`.
	 * @param ctx the parse tree
	 */
	enterOperationPlusMinusExpression?: (ctx: OperationPlusMinusExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `operationPlusMinusExpression`
	 * labeled alternative in `BooleanMathParser.numericexpression`.
	 * @param ctx the parse tree
	 */
	exitOperationPlusMinusExpression?: (ctx: OperationPlusMinusExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `decimalExpression`
	 * labeled alternative in `BooleanMathParser.numericexpression`.
	 * @param ctx the parse tree
	 */
	enterDecimalExpression?: (ctx: DecimalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `decimalExpression`
	 * labeled alternative in `BooleanMathParser.numericexpression`.
	 * @param ctx the parse tree
	 */
	exitDecimalExpression?: (ctx: DecimalExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `parenthesedNumericExpression`
	 * labeled alternative in `BooleanMathParser.numericexpression`.
	 * @param ctx the parse tree
	 */
	enterParenthesedNumericExpression?: (ctx: ParenthesedNumericExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesedNumericExpression`
	 * labeled alternative in `BooleanMathParser.numericexpression`.
	 * @param ctx the parse tree
	 */
	exitParenthesedNumericExpression?: (ctx: ParenthesedNumericExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `functionWithSingleParameter`
	 * labeled alternative in `BooleanMathParser.numericexpression`.
	 * @param ctx the parse tree
	 */
	enterFunctionWithSingleParameter?: (ctx: FunctionWithSingleParameterContext) => void;
	/**
	 * Exit a parse tree produced by the `functionWithSingleParameter`
	 * labeled alternative in `BooleanMathParser.numericexpression`.
	 * @param ctx the parse tree
	 */
	exitFunctionWithSingleParameter?: (ctx: FunctionWithSingleParameterContext) => void;
	/**
	 * Enter a parse tree produced by the `functionWithArray`
	 * labeled alternative in `BooleanMathParser.numericexpression`.
	 * @param ctx the parse tree
	 */
	enterFunctionWithArray?: (ctx: FunctionWithArrayContext) => void;
	/**
	 * Exit a parse tree produced by the `functionWithArray`
	 * labeled alternative in `BooleanMathParser.numericexpression`.
	 * @param ctx the parse tree
	 */
	exitFunctionWithArray?: (ctx: FunctionWithArrayContext) => void;
	/**
	 * Enter a parse tree produced by the `booleanValue`
	 * labeled alternative in `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanValue?: (ctx: BooleanValueContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanValue`
	 * labeled alternative in `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanValue?: (ctx: BooleanValueContext) => void;
	/**
	 * Enter a parse tree produced by the `identifierWithBooleanValue`
	 * labeled alternative in `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 */
	enterIdentifierWithBooleanValue?: (ctx: IdentifierWithBooleanValueContext) => void;
	/**
	 * Exit a parse tree produced by the `identifierWithBooleanValue`
	 * labeled alternative in `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 */
	exitIdentifierWithBooleanValue?: (ctx: IdentifierWithBooleanValueContext) => void;
	/**
	 * Enter a parse tree produced by the `binaryOperatorAssertion`
	 * labeled alternative in `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 */
	enterBinaryOperatorAssertion?: (ctx: BinaryOperatorAssertionContext) => void;
	/**
	 * Exit a parse tree produced by the `binaryOperatorAssertion`
	 * labeled alternative in `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 */
	exitBinaryOperatorAssertion?: (ctx: BinaryOperatorAssertionContext) => void;
	/**
	 * Enter a parse tree produced by the `numericComparatorAssertion`
	 * labeled alternative in `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 */
	enterNumericComparatorAssertion?: (ctx: NumericComparatorAssertionContext) => void;
	/**
	 * Exit a parse tree produced by the `numericComparatorAssertion`
	 * labeled alternative in `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 */
	exitNumericComparatorAssertion?: (ctx: NumericComparatorAssertionContext) => void;
	/**
	 * Enter a parse tree produced by the `stringComparisonAssertion`
	 * labeled alternative in `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 */
	enterStringComparisonAssertion?: (ctx: StringComparisonAssertionContext) => void;
	/**
	 * Exit a parse tree produced by the `stringComparisonAssertion`
	 * labeled alternative in `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 */
	exitStringComparisonAssertion?: (ctx: StringComparisonAssertionContext) => void;
	/**
	 * Enter a parse tree produced by the `stringValueInListAssertion`
	 * labeled alternative in `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 */
	enterStringValueInListAssertion?: (ctx: StringValueInListAssertionContext) => void;
	/**
	 * Exit a parse tree produced by the `stringValueInListAssertion`
	 * labeled alternative in `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 */
	exitStringValueInListAssertion?: (ctx: StringValueInListAssertionContext) => void;
	/**
	 * Enter a parse tree produced by the `numericValueInListAssertion`
	 * labeled alternative in `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 */
	enterNumericValueInListAssertion?: (ctx: NumericValueInListAssertionContext) => void;
	/**
	 * Exit a parse tree produced by the `numericValueInListAssertion`
	 * labeled alternative in `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 */
	exitNumericValueInListAssertion?: (ctx: NumericValueInListAssertionContext) => void;
	/**
	 * Enter a parse tree produced by the `parenthesedBooleanExpression`
	 * labeled alternative in `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 */
	enterParenthesedBooleanExpression?: (ctx: ParenthesedBooleanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesedBooleanExpression`
	 * labeled alternative in `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 */
	exitParenthesedBooleanExpression?: (ctx: ParenthesedBooleanExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `notExpression`
	 * labeled alternative in `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 */
	enterNotExpression?: (ctx: NotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `notExpression`
	 * labeled alternative in `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 */
	exitNotExpression?: (ctx: NotExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `BooleanMathParser.parse`.
	 * @param ctx the parse tree
	 */
	enterParse?: (ctx: ParseContext) => void;
	/**
	 * Exit a parse tree produced by `BooleanMathParser.parse`.
	 * @param ctx the parse tree
	 */
	exitParse?: (ctx: ParseContext) => void;
	/**
	 * Enter a parse tree produced by `BooleanMathParser.anexpression`.
	 * @param ctx the parse tree
	 */
	enterAnexpression?: (ctx: AnexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `BooleanMathParser.anexpression`.
	 * @param ctx the parse tree
	 */
	exitAnexpression?: (ctx: AnexpressionContext) => void;
	/**
	 * Enter a parse tree produced by `BooleanMathParser.booleanvalue`.
	 * @param ctx the parse tree
	 */
	enterBooleanvalue?: (ctx: BooleanvalueContext) => void;
	/**
	 * Exit a parse tree produced by `BooleanMathParser.booleanvalue`.
	 * @param ctx the parse tree
	 */
	exitBooleanvalue?: (ctx: BooleanvalueContext) => void;
	/**
	 * Enter a parse tree produced by `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanexpression?: (ctx: BooleanexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanexpression?: (ctx: BooleanexpressionContext) => void;
	/**
	 * Enter a parse tree produced by `BooleanMathParser.astring`.
	 * @param ctx the parse tree
	 */
	enterAstring?: (ctx: AstringContext) => void;
	/**
	 * Exit a parse tree produced by `BooleanMathParser.astring`.
	 * @param ctx the parse tree
	 */
	exitAstring?: (ctx: AstringContext) => void;
	/**
	 * Enter a parse tree produced by `BooleanMathParser.stringexpression`.
	 * @param ctx the parse tree
	 */
	enterStringexpression?: (ctx: StringexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `BooleanMathParser.stringexpression`.
	 * @param ctx the parse tree
	 */
	exitStringexpression?: (ctx: StringexpressionContext) => void;
	/**
	 * Enter a parse tree produced by `BooleanMathParser.numericexpression`.
	 * @param ctx the parse tree
	 */
	enterNumericexpression?: (ctx: NumericexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `BooleanMathParser.numericexpression`.
	 * @param ctx the parse tree
	 */
	exitNumericexpression?: (ctx: NumericexpressionContext) => void;
	/**
	 * Enter a parse tree produced by `BooleanMathParser.functionwithsingleparameter`.
	 * @param ctx the parse tree
	 */
	enterFunctionwithsingleparameter?: (ctx: FunctionwithsingleparameterContext) => void;
	/**
	 * Exit a parse tree produced by `BooleanMathParser.functionwithsingleparameter`.
	 * @param ctx the parse tree
	 */
	exitFunctionwithsingleparameter?: (ctx: FunctionwithsingleparameterContext) => void;
	/**
	 * Enter a parse tree produced by `BooleanMathParser.functionswitharray`.
	 * @param ctx the parse tree
	 */
	enterFunctionswitharray?: (ctx: FunctionswitharrayContext) => void;
	/**
	 * Exit a parse tree produced by `BooleanMathParser.functionswitharray`.
	 * @param ctx the parse tree
	 */
	exitFunctionswitharray?: (ctx: FunctionswitharrayContext) => void;
	/**
	 * Enter a parse tree produced by `BooleanMathParser.numericcomparator`.
	 * @param ctx the parse tree
	 */
	enterNumericcomparator?: (ctx: NumericcomparatorContext) => void;
	/**
	 * Exit a parse tree produced by `BooleanMathParser.numericcomparator`.
	 * @param ctx the parse tree
	 */
	exitNumericcomparator?: (ctx: NumericcomparatorContext) => void;
	/**
	 * Enter a parse tree produced by `BooleanMathParser.stringcomparator`.
	 * @param ctx the parse tree
	 */
	enterStringcomparator?: (ctx: StringcomparatorContext) => void;
	/**
	 * Exit a parse tree produced by `BooleanMathParser.stringcomparator`.
	 * @param ctx the parse tree
	 */
	exitStringcomparator?: (ctx: StringcomparatorContext) => void;
	/**
	 * Enter a parse tree produced by `BooleanMathParser.listcomparator`.
	 * @param ctx the parse tree
	 */
	enterListcomparator?: (ctx: ListcomparatorContext) => void;
	/**
	 * Exit a parse tree produced by `BooleanMathParser.listcomparator`.
	 * @param ctx the parse tree
	 */
	exitListcomparator?: (ctx: ListcomparatorContext) => void;
	/**
	 * Enter a parse tree produced by `BooleanMathParser.binaryoperator`.
	 * @param ctx the parse tree
	 */
	enterBinaryoperator?: (ctx: BinaryoperatorContext) => void;
	/**
	 * Exit a parse tree produced by `BooleanMathParser.binaryoperator`.
	 * @param ctx the parse tree
	 */
	exitBinaryoperator?: (ctx: BinaryoperatorContext) => void;
	/**
	 * Enter a parse tree produced by `BooleanMathParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `BooleanMathParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
	/**
	 * Enter a parse tree produced by `BooleanMathParser.valuelist`.
	 * @param ctx the parse tree
	 */
	enterValuelist?: (ctx: ValuelistContext) => void;
	/**
	 * Exit a parse tree produced by `BooleanMathParser.valuelist`.
	 * @param ctx the parse tree
	 */
	exitValuelist?: (ctx: ValuelistContext) => void;
	/**
	 * Enter a parse tree produced by `BooleanMathParser.listelements`.
	 * @param ctx the parse tree
	 */
	enterListelements?: (ctx: ListelementsContext) => void;
	/**
	 * Exit a parse tree produced by `BooleanMathParser.listelements`.
	 * @param ctx the parse tree
	 */
	exitListelements?: (ctx: ListelementsContext) => void;
	/**
	 * Enter a parse tree produced by `BooleanMathParser.listelement`.
	 * @param ctx the parse tree
	 */
	enterListelement?: (ctx: ListelementContext) => void;
	/**
	 * Exit a parse tree produced by `BooleanMathParser.listelement`.
	 * @param ctx the parse tree
	 */
	exitListelement?: (ctx: ListelementContext) => void;
	/**
	 * Enter a parse tree produced by `BooleanMathParser.unaryoperationleft`.
	 * @param ctx the parse tree
	 */
	enterUnaryoperationleft?: (ctx: UnaryoperationleftContext) => void;
	/**
	 * Exit a parse tree produced by `BooleanMathParser.unaryoperationleft`.
	 * @param ctx the parse tree
	 */
	exitUnaryoperationleft?: (ctx: UnaryoperationleftContext) => void;
	/**
	 * Enter a parse tree produced by `BooleanMathParser.unaryoperationright`.
	 * @param ctx the parse tree
	 */
	enterUnaryoperationright?: (ctx: UnaryoperationrightContext) => void;
	/**
	 * Exit a parse tree produced by `BooleanMathParser.unaryoperationright`.
	 * @param ctx the parse tree
	 */
	exitUnaryoperationright?: (ctx: UnaryoperationrightContext) => void;
	/**
	 * Enter a parse tree produced by `BooleanMathParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `BooleanMathParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
}

