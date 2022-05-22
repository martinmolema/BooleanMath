// Generated from BooleanMath.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `BooleanMathParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface BooleanMathVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `plainStringExpression`
	 * labeled alternative in `BooleanMathParser.stringexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlainStringExpression?: (ctx: PlainStringExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `concatStringExpression`
	 * labeled alternative in `BooleanMathParser.stringexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConcatStringExpression?: (ctx: ConcatStringExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `repeatStringExpression`
	 * labeled alternative in `BooleanMathParser.stringexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeatStringExpression?: (ctx: RepeatStringExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `parenthesedStringExpression`
	 * labeled alternative in `BooleanMathParser.stringexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesedStringExpression?: (ctx: ParenthesedStringExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `identifierExpression`
	 * labeled alternative in `BooleanMathParser.numericexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExpression?: (ctx: IdentifierExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `operatorPowerExpression`
	 * labeled alternative in `BooleanMathParser.numericexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorPowerExpression?: (ctx: OperatorPowerExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `operatorTimesDivExpression`
	 * labeled alternative in `BooleanMathParser.numericexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorTimesDivExpression?: (ctx: OperatorTimesDivExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `operationPlusMinusExpression`
	 * labeled alternative in `BooleanMathParser.numericexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperationPlusMinusExpression?: (ctx: OperationPlusMinusExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `decimalExpression`
	 * labeled alternative in `BooleanMathParser.numericexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimalExpression?: (ctx: DecimalExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `parenthesedNumericExpression`
	 * labeled alternative in `BooleanMathParser.numericexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesedNumericExpression?: (ctx: ParenthesedNumericExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `functionWithSingleParameter`
	 * labeled alternative in `BooleanMathParser.numericexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionWithSingleParameter?: (ctx: FunctionWithSingleParameterContext) => Result;
	/**
	 * Visit a parse tree produced by the `functionWithArray`
	 * labeled alternative in `BooleanMathParser.numericexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionWithArray?: (ctx: FunctionWithArrayContext) => Result;
	/**
	 * Visit a parse tree produced by the `booleanValue`
	 * labeled alternative in `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanValue?: (ctx: BooleanValueContext) => Result;
	/**
	 * Visit a parse tree produced by the `identifierWithBooleanValue`
	 * labeled alternative in `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierWithBooleanValue?: (ctx: IdentifierWithBooleanValueContext) => Result;
	/**
	 * Visit a parse tree produced by the `binaryOperatorAssertion`
	 * labeled alternative in `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryOperatorAssertion?: (ctx: BinaryOperatorAssertionContext) => Result;
	/**
	 * Visit a parse tree produced by the `numericComparatorAssertion`
	 * labeled alternative in `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericComparatorAssertion?: (ctx: NumericComparatorAssertionContext) => Result;
	/**
	 * Visit a parse tree produced by the `stringComparisonAssertion`
	 * labeled alternative in `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringComparisonAssertion?: (ctx: StringComparisonAssertionContext) => Result;
	/**
	 * Visit a parse tree produced by the `stringValueInListAssertion`
	 * labeled alternative in `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringValueInListAssertion?: (ctx: StringValueInListAssertionContext) => Result;
	/**
	 * Visit a parse tree produced by the `numericValueInListAssertion`
	 * labeled alternative in `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericValueInListAssertion?: (ctx: NumericValueInListAssertionContext) => Result;
	/**
	 * Visit a parse tree produced by the `parenthesedBooleanExpression`
	 * labeled alternative in `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesedBooleanExpression?: (ctx: ParenthesedBooleanExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `notExpression`
	 * labeled alternative in `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotExpression?: (ctx: NotExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `BooleanMathParser.parse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParse?: (ctx: ParseContext) => Result;
	/**
	 * Visit a parse tree produced by `BooleanMathParser.anexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnexpression?: (ctx: AnexpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `BooleanMathParser.booleanvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanvalue?: (ctx: BooleanvalueContext) => Result;
	/**
	 * Visit a parse tree produced by `BooleanMathParser.booleanexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanexpression?: (ctx: BooleanexpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `BooleanMathParser.astring`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAstring?: (ctx: AstringContext) => Result;
	/**
	 * Visit a parse tree produced by `BooleanMathParser.stringexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringexpression?: (ctx: StringexpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `BooleanMathParser.numericexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericexpression?: (ctx: NumericexpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `BooleanMathParser.functionwithsingleparameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionwithsingleparameter?: (ctx: FunctionwithsingleparameterContext) => Result;
	/**
	 * Visit a parse tree produced by `BooleanMathParser.functionswitharray`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionswitharray?: (ctx: FunctionswitharrayContext) => Result;
	/**
	 * Visit a parse tree produced by `BooleanMathParser.numericcomparator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericcomparator?: (ctx: NumericcomparatorContext) => Result;
	/**
	 * Visit a parse tree produced by `BooleanMathParser.stringcomparator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringcomparator?: (ctx: StringcomparatorContext) => Result;
	/**
	 * Visit a parse tree produced by `BooleanMathParser.listcomparator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListcomparator?: (ctx: ListcomparatorContext) => Result;
	/**
	 * Visit a parse tree produced by `BooleanMathParser.binaryoperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryoperator?: (ctx: BinaryoperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `BooleanMathParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
	/**
	 * Visit a parse tree produced by `BooleanMathParser.valuelist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValuelist?: (ctx: ValuelistContext) => Result;
	/**
	 * Visit a parse tree produced by `BooleanMathParser.listelements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListelements?: (ctx: ListelementsContext) => Result;
	/**
	 * Visit a parse tree produced by `BooleanMathParser.listelement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListelement?: (ctx: ListelementContext) => Result;
	/**
	 * Visit a parse tree produced by `BooleanMathParser.unaryoperationleft`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryoperationleft?: (ctx: UnaryoperationleftContext) => Result;
	/**
	 * Visit a parse tree produced by `BooleanMathParser.unaryoperationright`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryoperationright?: (ctx: UnaryoperationrightContext) => Result;
	/**
	 * Visit a parse tree produced by `BooleanMathParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
}

