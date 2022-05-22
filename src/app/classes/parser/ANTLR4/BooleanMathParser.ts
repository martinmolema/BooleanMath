// Generated from BooleanMath.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { BooleanMathListener } from "./BooleanMathListener";
import { BooleanMathVisitor } from "./BooleanMathVisitor";


export class BooleanMathParser extends Parser {
	public static readonly COLON = 1;
	public static readonly TRUE = 2;
	public static readonly FALSE = 3;
	public static readonly CONCAT = 4;
	public static readonly PLUS = 5;
	public static readonly MINUS = 6;
	public static readonly TIMES = 7;
	public static readonly DIV = 8;
	public static readonly POW = 9;
	public static readonly SQRT = 10;
	public static readonly CUBE = 11;
	public static readonly SUM = 12;
	public static readonly AVERAGE = 13;
	public static readonly MIN = 14;
	public static readonly MAX = 15;
	public static readonly OPERATORMINMIN = 16;
	public static readonly OPERATORPLUSPLUS = 17;
	public static readonly LISTSEPERATOR = 18;
	public static readonly BEGINLIST = 19;
	public static readonly ENDLIST = 20;
	public static readonly WS = 21;
	public static readonly AND = 22;
	public static readonly OR = 23;
	public static readonly XOR = 24;
	public static readonly NOT = 25;
	public static readonly GT = 26;
	public static readonly GE = 27;
	public static readonly LT = 28;
	public static readonly LE = 29;
	public static readonly EQ = 30;
	public static readonly NEQ = 31;
	public static readonly APPROXIMATION = 32;
	public static readonly IN = 33;
	public static readonly LIKE = 34;
	public static readonly ISNULL = 35;
	public static readonly LPAREN = 36;
	public static readonly RPAREN = 37;
	public static readonly DECIMAL = 38;
	public static readonly IDENTIFIERCHARS = 39;
	public static readonly STRING = 40;
	public static readonly RULE_parse = 0;
	public static readonly RULE_anexpression = 1;
	public static readonly RULE_booleanvalue = 2;
	public static readonly RULE_booleanexpression = 3;
	public static readonly RULE_astring = 4;
	public static readonly RULE_stringexpression = 5;
	public static readonly RULE_numericexpression = 6;
	public static readonly RULE_functionwithsingleparameter = 7;
	public static readonly RULE_functionswitharray = 8;
	public static readonly RULE_numericcomparator = 9;
	public static readonly RULE_stringcomparator = 10;
	public static readonly RULE_listcomparator = 11;
	public static readonly RULE_binaryoperator = 12;
	public static readonly RULE_value = 13;
	public static readonly RULE_valuelist = 14;
	public static readonly RULE_listelements = 15;
	public static readonly RULE_listelement = 16;
	public static readonly RULE_unaryoperationleft = 17;
	public static readonly RULE_unaryoperationright = 18;
	public static readonly RULE_identifier = 19;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"parse", "anexpression", "booleanvalue", "booleanexpression", "astring", 
		"stringexpression", "numericexpression", "functionwithsingleparameter", 
		"functionswitharray", "numericcomparator", "stringcomparator", "listcomparator", 
		"binaryoperator", "value", "valuelist", "listelements", "listelement", 
		"unaryoperationleft", "unaryoperationright", "identifier",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "':'", undefined, undefined, undefined, "'+'", "'-'", "'*'", 
		"'/'", "'^'", undefined, undefined, undefined, undefined, undefined, undefined, 
		"'--'", "'++'", "','", "'['", "']'", undefined, undefined, undefined, 
		undefined, undefined, "'>'", "'>='", "'<'", "'<='", "'=='", "'!='", "'~'", 
		undefined, undefined, undefined, "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "COLON", "TRUE", "FALSE", "CONCAT", "PLUS", "MINUS", "TIMES", 
		"DIV", "POW", "SQRT", "CUBE", "SUM", "AVERAGE", "MIN", "MAX", "OPERATORMINMIN", 
		"OPERATORPLUSPLUS", "LISTSEPERATOR", "BEGINLIST", "ENDLIST", "WS", "AND", 
		"OR", "XOR", "NOT", "GT", "GE", "LT", "LE", "EQ", "NEQ", "APPROXIMATION", 
		"IN", "LIKE", "ISNULL", "LPAREN", "RPAREN", "DECIMAL", "IDENTIFIERCHARS", 
		"STRING",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(BooleanMathParser._LITERAL_NAMES, BooleanMathParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return BooleanMathParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public override get grammarFileName(): string { return "BooleanMath.g4"; }

	// @Override
	public override get ruleNames(): string[] { return BooleanMathParser.ruleNames; }

	// @Override
	public override get serializedATN(): string { return BooleanMathParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(BooleanMathParser._ATN, this);
	}
	// @RuleVersion(0)
	public parse(): ParseContext {
		let _localctx: ParseContext = new ParseContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, BooleanMathParser.RULE_parse);
		try {
			this.state = 42;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BooleanMathParser.TRUE:
			case BooleanMathParser.FALSE:
			case BooleanMathParser.PLUS:
			case BooleanMathParser.MINUS:
			case BooleanMathParser.SQRT:
			case BooleanMathParser.CUBE:
			case BooleanMathParser.SUM:
			case BooleanMathParser.AVERAGE:
			case BooleanMathParser.MIN:
			case BooleanMathParser.MAX:
			case BooleanMathParser.OPERATORMINMIN:
			case BooleanMathParser.OPERATORPLUSPLUS:
			case BooleanMathParser.NOT:
			case BooleanMathParser.LPAREN:
			case BooleanMathParser.DECIMAL:
			case BooleanMathParser.IDENTIFIERCHARS:
			case BooleanMathParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 40;
				this.anexpression();
				}
				break;
			case BooleanMathParser.EOF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 41;
				this.match(BooleanMathParser.EOF);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public anexpression(): AnexpressionContext {
		let _localctx: AnexpressionContext = new AnexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, BooleanMathParser.RULE_anexpression);
		try {
			this.state = 47;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 44;
				_localctx._str = this.stringexpression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 45;
				_localctx._num = this.numericexpression(0);
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 46;
				_localctx._bool = this.booleanexpression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanvalue(): BooleanvalueContext {
		let _localctx: BooleanvalueContext = new BooleanvalueContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, BooleanMathParser.RULE_booleanvalue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			_la = this._input.LA(1);
			if (!(_la === BooleanMathParser.TRUE || _la === BooleanMathParser.FALSE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public booleanexpression(): BooleanexpressionContext;
	public booleanexpression(_p: number): BooleanexpressionContext;
	// @RuleVersion(0)
	public booleanexpression(_p?: number): BooleanexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BooleanexpressionContext = new BooleanexpressionContext(this._ctx, _parentState);
		let _prevctx: BooleanexpressionContext = _localctx;
		let _startState: number = 6;
		this.enterRecursionRule(_localctx, 6, BooleanMathParser.RULE_booleanexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 76;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				_localctx = new BooleanValueContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 52;
				this.booleanvalue();
				}
				break;
			case 2:
				{
				_localctx = new IdentifierWithBooleanValueContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 53;
				this.match(BooleanMathParser.IDENTIFIERCHARS);
				}
				break;
			case 3:
				{
				_localctx = new NumericComparatorAssertionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 54;
				(_localctx as NumericComparatorAssertionContext)._left = this.numericexpression(0);
				this.state = 55;
				(_localctx as NumericComparatorAssertionContext)._op = this.numericcomparator();
				this.state = 56;
				(_localctx as NumericComparatorAssertionContext)._right = this.numericexpression(0);
				}
				break;
			case 4:
				{
				_localctx = new StringComparisonAssertionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 58;
				(_localctx as StringComparisonAssertionContext)._left = this.stringexpression(0);
				this.state = 59;
				(_localctx as StringComparisonAssertionContext)._op = this.stringcomparator();
				this.state = 60;
				(_localctx as StringComparisonAssertionContext)._right = this.stringexpression(0);
				}
				break;
			case 5:
				{
				_localctx = new StringValueInListAssertionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 62;
				(_localctx as StringValueInListAssertionContext)._left = this.stringexpression(0);
				this.state = 63;
				(_localctx as StringValueInListAssertionContext)._op = this.listcomparator();
				this.state = 64;
				(_localctx as StringValueInListAssertionContext)._list = this.valuelist();
				}
				break;
			case 6:
				{
				_localctx = new NumericValueInListAssertionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 66;
				(_localctx as NumericValueInListAssertionContext)._left = this.numericexpression(0);
				this.state = 67;
				(_localctx as NumericValueInListAssertionContext)._op = this.listcomparator();
				this.state = 68;
				(_localctx as NumericValueInListAssertionContext)._list = this.valuelist();
				}
				break;
			case 7:
				{
				_localctx = new ParenthesedBooleanExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 70;
				this.match(BooleanMathParser.LPAREN);
				this.state = 71;
				this.booleanexpression(0);
				this.state = 72;
				this.match(BooleanMathParser.RPAREN);
				}
				break;
			case 8:
				{
				_localctx = new NotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 74;
				this.match(BooleanMathParser.NOT);
				this.state = 75;
				this.booleanexpression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 84;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new BinaryOperatorAssertionContext(new BooleanexpressionContext(_parentctx, _parentState));
					(_localctx as BinaryOperatorAssertionContext)._left = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, BooleanMathParser.RULE_booleanexpression);
					this.state = 78;
					if (!(this.precpred(this._ctx, 7))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
					}
					this.state = 79;
					(_localctx as BinaryOperatorAssertionContext)._op = this.binaryoperator();
					this.state = 80;
					(_localctx as BinaryOperatorAssertionContext)._right = this.booleanexpression(8);
					}
					}
				}
				this.state = 86;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public astring(): AstringContext {
		let _localctx: AstringContext = new AstringContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, BooleanMathParser.RULE_astring);
		try {
			this.state = 89;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BooleanMathParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 87;
				_localctx._str = this.match(BooleanMathParser.STRING);
				}
				break;
			case BooleanMathParser.OPERATORMINMIN:
			case BooleanMathParser.OPERATORPLUSPLUS:
			case BooleanMathParser.IDENTIFIERCHARS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 88;
				_localctx._ident = this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public stringexpression(): StringexpressionContext;
	public stringexpression(_p: number): StringexpressionContext;
	// @RuleVersion(0)
	public stringexpression(_p?: number): StringexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: StringexpressionContext = new StringexpressionContext(this._ctx, _parentState);
		let _prevctx: StringexpressionContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, BooleanMathParser.RULE_stringexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BooleanMathParser.OPERATORMINMIN:
			case BooleanMathParser.OPERATORPLUSPLUS:
			case BooleanMathParser.IDENTIFIERCHARS:
			case BooleanMathParser.STRING:
				{
				_localctx = new PlainStringExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 92;
				(_localctx as PlainStringExpressionContext)._str = this.astring();
				}
				break;
			case BooleanMathParser.LPAREN:
				{
				_localctx = new ParenthesedStringExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 93;
				this.match(BooleanMathParser.LPAREN);
				this.state = 94;
				(_localctx as ParenthesedStringExpressionContext)._val = this.stringexpression(0);
				this.state = 95;
				this.match(BooleanMathParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 107;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 105;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						_localctx = new ConcatStringExpressionContext(new StringexpressionContext(_parentctx, _parentState));
						(_localctx as ConcatStringExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, BooleanMathParser.RULE_stringexpression);
						this.state = 99;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 100;
						(_localctx as ConcatStringExpressionContext)._op = this.match(BooleanMathParser.PLUS);
						this.state = 101;
						(_localctx as ConcatStringExpressionContext)._right = this.stringexpression(4);
						}
						break;
					case 2:
						{
						_localctx = new RepeatStringExpressionContext(new StringexpressionContext(_parentctx, _parentState));
						(_localctx as RepeatStringExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, BooleanMathParser.RULE_stringexpression);
						this.state = 102;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 103;
						(_localctx as RepeatStringExpressionContext)._op = this.match(BooleanMathParser.TIMES);
						this.state = 104;
						(_localctx as RepeatStringExpressionContext)._right = this.numericexpression(0);
						}
						break;
					}
					}
				}
				this.state = 109;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public numericexpression(): NumericexpressionContext;
	public numericexpression(_p: number): NumericexpressionContext;
	// @RuleVersion(0)
	public numericexpression(_p?: number): NumericexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NumericexpressionContext = new NumericexpressionContext(this._ctx, _parentState);
		let _prevctx: NumericexpressionContext = _localctx;
		let _startState: number = 12;
		this.enterRecursionRule(_localctx, 12, BooleanMathParser.RULE_numericexpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 111;
				this.identifier();
				}
				break;
			case 2:
				{
				_localctx = new DecimalExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BooleanMathParser.PLUS || _la === BooleanMathParser.MINUS) {
					{
					this.state = 112;
					_la = this._input.LA(1);
					if (!(_la === BooleanMathParser.PLUS || _la === BooleanMathParser.MINUS)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 115;
				this.match(BooleanMathParser.DECIMAL);
				}
				break;
			case 3:
				{
				_localctx = new ParenthesedNumericExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BooleanMathParser.MINUS) {
					{
					this.state = 116;
					this.match(BooleanMathParser.MINUS);
					}
				}

				this.state = 119;
				this.match(BooleanMathParser.LPAREN);
				this.state = 120;
				(_localctx as ParenthesedNumericExpressionContext)._parexpression = this.numericexpression(0);
				this.state = 121;
				this.match(BooleanMathParser.RPAREN);
				}
				break;
			case 4:
				{
				_localctx = new FunctionWithSingleParameterContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 123;
				(_localctx as FunctionWithSingleParameterContext)._funcs = this.functionwithsingleparameter();
				this.state = 124;
				this.match(BooleanMathParser.LPAREN);
				this.state = 125;
				(_localctx as FunctionWithSingleParameterContext)._operand = this.numericexpression(0);
				this.state = 126;
				this.match(BooleanMathParser.RPAREN);
				}
				break;
			case 5:
				{
				_localctx = new FunctionWithArrayContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 128;
				(_localctx as FunctionWithArrayContext)._funca = this.functionswitharray();
				this.state = 129;
				this.match(BooleanMathParser.LPAREN);
				this.state = 130;
				(_localctx as FunctionWithArrayContext)._operands = this.valuelist();
				this.state = 131;
				this.match(BooleanMathParser.RPAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 146;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 144;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
					case 1:
						{
						_localctx = new OperatorPowerExpressionContext(new NumericexpressionContext(_parentctx, _parentState));
						(_localctx as OperatorPowerExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, BooleanMathParser.RULE_numericexpression);
						this.state = 135;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 136;
						(_localctx as OperatorPowerExpressionContext)._operator = this.match(BooleanMathParser.POW);
						this.state = 137;
						(_localctx as OperatorPowerExpressionContext)._right = this.numericexpression(8);
						}
						break;
					case 2:
						{
						_localctx = new OperatorTimesDivExpressionContext(new NumericexpressionContext(_parentctx, _parentState));
						(_localctx as OperatorTimesDivExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, BooleanMathParser.RULE_numericexpression);
						this.state = 138;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 139;
						_la = this._input.LA(1);
						if (!(_la === BooleanMathParser.TIMES || _la === BooleanMathParser.DIV)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 140;
						(_localctx as OperatorTimesDivExpressionContext)._right = this.numericexpression(7);
						}
						break;
					case 3:
						{
						_localctx = new OperationPlusMinusExpressionContext(new NumericexpressionContext(_parentctx, _parentState));
						(_localctx as OperationPlusMinusExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, BooleanMathParser.RULE_numericexpression);
						this.state = 141;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 142;
						_la = this._input.LA(1);
						if (!(_la === BooleanMathParser.PLUS || _la === BooleanMathParser.MINUS)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 143;
						(_localctx as OperationPlusMinusExpressionContext)._right = this.numericexpression(6);
						}
						break;
					}
					}
				}
				this.state = 148;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionwithsingleparameter(): FunctionwithsingleparameterContext {
		let _localctx: FunctionwithsingleparameterContext = new FunctionwithsingleparameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, BooleanMathParser.RULE_functionwithsingleparameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			_la = this._input.LA(1);
			if (!(_la === BooleanMathParser.SQRT || _la === BooleanMathParser.CUBE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionswitharray(): FunctionswitharrayContext {
		let _localctx: FunctionswitharrayContext = new FunctionswitharrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, BooleanMathParser.RULE_functionswitharray);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BooleanMathParser.SUM) | (1 << BooleanMathParser.AVERAGE) | (1 << BooleanMathParser.MIN) | (1 << BooleanMathParser.MAX))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numericcomparator(): NumericcomparatorContext {
		let _localctx: NumericcomparatorContext = new NumericcomparatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, BooleanMathParser.RULE_numericcomparator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			_la = this._input.LA(1);
			if (!(((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (BooleanMathParser.GT - 26)) | (1 << (BooleanMathParser.GE - 26)) | (1 << (BooleanMathParser.LT - 26)) | (1 << (BooleanMathParser.LE - 26)) | (1 << (BooleanMathParser.EQ - 26)) | (1 << (BooleanMathParser.NEQ - 26)) | (1 << (BooleanMathParser.APPROXIMATION - 26)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringcomparator(): StringcomparatorContext {
		let _localctx: StringcomparatorContext = new StringcomparatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, BooleanMathParser.RULE_stringcomparator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			_la = this._input.LA(1);
			if (!(((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (BooleanMathParser.GT - 26)) | (1 << (BooleanMathParser.GE - 26)) | (1 << (BooleanMathParser.LT - 26)) | (1 << (BooleanMathParser.LE - 26)) | (1 << (BooleanMathParser.EQ - 26)) | (1 << (BooleanMathParser.NEQ - 26)) | (1 << (BooleanMathParser.LIKE - 26)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public listcomparator(): ListcomparatorContext {
		let _localctx: ListcomparatorContext = new ListcomparatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, BooleanMathParser.RULE_listcomparator);
		try {
			this.state = 160;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BooleanMathParser.IN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 157;
				this.match(BooleanMathParser.IN);
				}
				break;
			case BooleanMathParser.NOT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 158;
				this.match(BooleanMathParser.NOT);
				this.state = 159;
				this.match(BooleanMathParser.IN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binaryoperator(): BinaryoperatorContext {
		let _localctx: BinaryoperatorContext = new BinaryoperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, BooleanMathParser.RULE_binaryoperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BooleanMathParser.AND) | (1 << BooleanMathParser.OR) | (1 << BooleanMathParser.XOR) | (1 << BooleanMathParser.EQ) | (1 << BooleanMathParser.NEQ))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, BooleanMathParser.RULE_value);
		try {
			this.state = 167;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 164;
				_localctx._bool = this.booleanexpression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 165;
				_localctx._num = this.numericexpression(0);
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 166;
				_localctx._str = this.stringexpression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valuelist(): ValuelistContext {
		let _localctx: ValuelistContext = new ValuelistContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, BooleanMathParser.RULE_valuelist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 169;
			this.match(BooleanMathParser.BEGINLIST);
			this.state = 171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BooleanMathParser.PLUS) | (1 << BooleanMathParser.MINUS) | (1 << BooleanMathParser.SQRT) | (1 << BooleanMathParser.CUBE) | (1 << BooleanMathParser.SUM) | (1 << BooleanMathParser.AVERAGE) | (1 << BooleanMathParser.MIN) | (1 << BooleanMathParser.MAX) | (1 << BooleanMathParser.OPERATORMINMIN) | (1 << BooleanMathParser.OPERATORPLUSPLUS))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (BooleanMathParser.LPAREN - 36)) | (1 << (BooleanMathParser.DECIMAL - 36)) | (1 << (BooleanMathParser.IDENTIFIERCHARS - 36)) | (1 << (BooleanMathParser.STRING - 36)))) !== 0)) {
				{
				this.state = 170;
				this.listelements();
				}
			}

			this.state = 173;
			this.match(BooleanMathParser.ENDLIST);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public listelements(): ListelementsContext {
		let _localctx: ListelementsContext = new ListelementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, BooleanMathParser.RULE_listelements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			this.listelement();
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BooleanMathParser.LISTSEPERATOR) {
				{
				{
				this.state = 176;
				this.match(BooleanMathParser.LISTSEPERATOR);
				this.state = 177;
				this.listelement();
				}
				}
				this.state = 182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public listelement(): ListelementContext {
		let _localctx: ListelementContext = new ListelementContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, BooleanMathParser.RULE_listelement);
		try {
			this.state = 185;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 183;
				_localctx._num = this.numericexpression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 184;
				_localctx._str = this.stringexpression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryoperationleft(): UnaryoperationleftContext {
		let _localctx: UnaryoperationleftContext = new UnaryoperationleftContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, BooleanMathParser.RULE_unaryoperationleft);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			_la = this._input.LA(1);
			if (!(_la === BooleanMathParser.OPERATORMINMIN || _la === BooleanMathParser.OPERATORPLUSPLUS)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 188;
			_localctx._ident = this.match(BooleanMathParser.IDENTIFIERCHARS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryoperationright(): UnaryoperationrightContext {
		let _localctx: UnaryoperationrightContext = new UnaryoperationrightContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, BooleanMathParser.RULE_unaryoperationright);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
			_localctx._ident = this.match(BooleanMathParser.IDENTIFIERCHARS);
			this.state = 191;
			_la = this._input.LA(1);
			if (!(_la === BooleanMathParser.OPERATORMINMIN || _la === BooleanMathParser.OPERATORPLUSPLUS)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, BooleanMathParser.RULE_identifier);
		try {
			this.state = 196;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 193;
				_localctx._uleft = this.unaryoperationleft();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 194;
				_localctx._uright = this.unaryoperationright();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 195;
				_localctx._ident = this.match(BooleanMathParser.IDENTIFIERCHARS);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 3:
			return this.booleanexpression_sempred(_localctx as BooleanexpressionContext, predIndex);
		case 5:
			return this.stringexpression_sempred(_localctx as StringexpressionContext, predIndex);
		case 6:
			return this.numericexpression_sempred(_localctx as NumericexpressionContext, predIndex);
		}
		return true;
	}
	private booleanexpression_sempred(_localctx: BooleanexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}
	private stringexpression_sempred(_localctx: StringexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 3);
		case 2:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private numericexpression_sempred(_localctx: NumericexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 7);
		case 4:
			return this.precpred(this._ctx, 6);
		case 5:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03*\xC9\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x05\x02-\n\x02" +
		"\x03\x03\x03\x03\x03\x03\x05\x032\n\x03\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05O\n\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x07\x05U\n\x05\f\x05\x0E\x05X\v\x05\x03\x06\x03\x06\x05" +
		"\x06\\\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07d" +
		"\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07l\n\x07" +
		"\f\x07\x0E\x07o\v\x07\x03\b\x03\b\x03\b\x05\bt\n\b\x03\b\x03\b\x05\bx" +
		"\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x05\b\x88\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x07\b\x93\n\b\f\b\x0E\b\x96\v\b\x03\t\x03\t\x03\n\x03\n" +
		"\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x05\r\xA3\n\r\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xAA\n\x0F\x03\x10\x03\x10\x05\x10\xAE" +
		"\n\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x07\x11\xB5\n\x11\f\x11" +
		"\x0E\x11\xB8\v\x11\x03\x12\x03\x12\x05\x12\xBC\n\x12\x03\x13\x03\x13\x03" +
		"\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x05\x15\xC7\n\x15" +
		"\x03\x15\x02\x02\x05\b\f\x0E\x16\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
		"\x02 \x02\"\x02$\x02&\x02(\x02\x02\v\x03\x02\x04\x05\x03\x02\x07\b\x03" +
		"\x02\t\n\x03\x02\f\r\x03\x02\x0E\x11\x03\x02\x1C\"\x04\x02\x1C!$$\x04" +
		"\x02\x18\x1A !\x03\x02\x12\x13\x02\xD4\x02,\x03\x02\x02\x02\x041\x03\x02" +
		"\x02\x02\x063\x03\x02\x02\x02\bN\x03\x02\x02\x02\n[\x03\x02\x02\x02\f" +
		"c\x03\x02\x02\x02\x0E\x87\x03\x02\x02\x02\x10\x97\x03\x02\x02\x02\x12" +
		"\x99\x03\x02\x02\x02\x14\x9B\x03\x02\x02\x02\x16\x9D\x03\x02\x02\x02\x18" +
		"\xA2\x03\x02\x02\x02\x1A\xA4\x03\x02\x02\x02\x1C\xA9\x03\x02\x02\x02\x1E" +
		"\xAB\x03\x02\x02\x02 \xB1\x03\x02\x02\x02\"\xBB\x03\x02\x02\x02$\xBD\x03" +
		"\x02\x02\x02&\xC0\x03\x02\x02\x02(\xC6\x03\x02\x02\x02*-\x05\x04\x03\x02" +
		"+-\x07\x02\x02\x03,*\x03\x02\x02\x02,+\x03\x02\x02\x02-\x03\x03\x02\x02" +
		"\x02.2\x05\f\x07\x02/2\x05\x0E\b\x0202\x05\b\x05\x021.\x03\x02\x02\x02" +
		"1/\x03\x02\x02\x0210\x03\x02\x02\x022\x05\x03\x02\x02\x0234\t\x02\x02" +
		"\x024\x07\x03\x02\x02\x0256\b\x05\x01\x026O\x05\x06\x04\x027O\x07)\x02" +
		"\x0289\x05\x0E\b\x029:\x05\x14\v\x02:;\x05\x0E\b\x02;O\x03\x02\x02\x02" +
		"<=\x05\f\x07\x02=>\x05\x16\f\x02>?\x05\f\x07\x02?O\x03\x02\x02\x02@A\x05" +
		"\f\x07\x02AB\x05\x18\r\x02BC\x05\x1E\x10\x02CO\x03\x02\x02\x02DE\x05\x0E" +
		"\b\x02EF\x05\x18\r\x02FG\x05\x1E\x10\x02GO\x03\x02\x02\x02HI\x07&\x02" +
		"\x02IJ\x05\b\x05\x02JK\x07\'\x02\x02KO\x03\x02\x02\x02LM\x07\x1B\x02\x02" +
		"MO\x05\b\x05\x03N5\x03\x02\x02\x02N7\x03\x02\x02\x02N8\x03\x02\x02\x02" +
		"N<\x03\x02\x02\x02N@\x03\x02\x02\x02ND\x03\x02\x02\x02NH\x03\x02\x02\x02" +
		"NL\x03\x02\x02\x02OV\x03\x02\x02\x02PQ\f\t\x02\x02QR\x05\x1A\x0E\x02R" +
		"S\x05\b\x05\nSU\x03\x02\x02\x02TP\x03\x02\x02\x02UX\x03\x02\x02\x02VT" +
		"\x03\x02\x02\x02VW\x03\x02\x02\x02W\t\x03\x02\x02\x02XV\x03\x02\x02\x02" +
		"Y\\\x07*\x02\x02Z\\\x05(\x15\x02[Y\x03\x02\x02\x02[Z\x03\x02\x02\x02\\" +
		"\v\x03\x02\x02\x02]^\b\x07\x01\x02^d\x05\n\x06\x02_`\x07&\x02\x02`a\x05" +
		"\f\x07\x02ab\x07\'\x02\x02bd\x03\x02\x02\x02c]\x03\x02\x02\x02c_\x03\x02" +
		"\x02\x02dm\x03\x02\x02\x02ef\f\x05\x02\x02fg\x07\x07\x02\x02gl\x05\f\x07" +
		"\x06hi\f\x04\x02\x02ij\x07\t\x02\x02jl\x05\x0E\b\x02ke\x03\x02\x02\x02" +
		"kh\x03\x02\x02\x02lo\x03\x02\x02\x02mk\x03\x02\x02\x02mn\x03\x02\x02\x02" +
		"n\r\x03\x02\x02\x02om\x03\x02\x02\x02pq\b\b\x01\x02q\x88\x05(\x15\x02" +
		"rt\t\x03\x02\x02sr\x03\x02\x02\x02st\x03\x02\x02\x02tu\x03\x02\x02\x02" +
		"u\x88\x07(\x02\x02vx\x07\b\x02\x02wv\x03\x02\x02\x02wx\x03\x02\x02\x02" +
		"xy\x03\x02\x02\x02yz\x07&\x02\x02z{\x05\x0E\b\x02{|\x07\'\x02\x02|\x88" +
		"\x03\x02\x02\x02}~\x05\x10\t\x02~\x7F\x07&\x02\x02\x7F\x80\x05\x0E\b\x02" +
		"\x80\x81\x07\'\x02\x02\x81\x88\x03\x02\x02\x02\x82\x83\x05\x12\n\x02\x83" +
		"\x84\x07&\x02\x02\x84\x85\x05\x1E\x10\x02\x85\x86\x07\'\x02\x02\x86\x88" +
		"\x03\x02\x02\x02\x87p\x03\x02\x02\x02\x87s\x03\x02\x02\x02\x87w\x03\x02" +
		"\x02\x02\x87}\x03\x02\x02\x02\x87\x82\x03\x02\x02\x02\x88\x94\x03\x02" +
		"\x02\x02\x89\x8A\f\t\x02\x02\x8A\x8B\x07\v\x02\x02\x8B\x93\x05\x0E\b\n" +
		"\x8C\x8D\f\b\x02\x02\x8D\x8E\t\x04\x02\x02\x8E\x93\x05\x0E\b\t\x8F\x90" +
		"\f\x07\x02\x02\x90\x91\t\x03\x02\x02\x91\x93\x05\x0E\b\b\x92\x89\x03\x02" +
		"\x02\x02\x92\x8C\x03\x02\x02\x02\x92\x8F\x03\x02\x02\x02\x93\x96\x03\x02" +
		"\x02\x02\x94\x92\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x0F\x03\x02" +
		"\x02\x02\x96\x94\x03\x02\x02\x02\x97\x98\t\x05\x02\x02\x98\x11\x03\x02" +
		"\x02\x02\x99\x9A\t\x06\x02\x02\x9A\x13\x03\x02\x02\x02\x9B\x9C\t\x07\x02" +
		"\x02\x9C\x15\x03\x02\x02\x02\x9D\x9E\t\b\x02\x02\x9E\x17\x03\x02\x02\x02" +
		"\x9F\xA3\x07#\x02\x02\xA0\xA1\x07\x1B\x02\x02\xA1\xA3\x07#\x02\x02\xA2" +
		"\x9F\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA3\x19\x03\x02\x02\x02\xA4" +
		"\xA5\t\t\x02\x02\xA5\x1B\x03\x02\x02\x02\xA6\xAA\x05\b\x05\x02\xA7\xAA" +
		"\x05\x0E\b\x02\xA8\xAA\x05\f\x07\x02\xA9\xA6\x03\x02\x02\x02\xA9\xA7\x03" +
		"\x02\x02\x02\xA9\xA8\x03\x02\x02\x02\xAA\x1D\x03\x02\x02\x02\xAB\xAD\x07" +
		"\x15\x02\x02\xAC\xAE\x05 \x11\x02\xAD\xAC\x03\x02\x02\x02\xAD\xAE\x03" +
		"\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\xB0\x07\x16\x02\x02\xB0\x1F\x03" +
		"\x02\x02\x02\xB1\xB6\x05\"\x12\x02\xB2\xB3\x07\x14\x02\x02\xB3\xB5\x05" +
		"\"\x12\x02\xB4\xB2\x03\x02\x02\x02\xB5\xB8\x03\x02\x02\x02\xB6\xB4\x03" +
		"\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7!\x03\x02\x02\x02\xB8\xB6\x03" +
		"\x02\x02\x02\xB9\xBC\x05\x0E\b\x02\xBA\xBC\x05\f\x07\x02\xBB\xB9\x03\x02" +
		"\x02\x02\xBB\xBA\x03\x02\x02\x02\xBC#\x03\x02\x02\x02\xBD\xBE\t\n\x02" +
		"\x02\xBE\xBF\x07)\x02\x02\xBF%\x03\x02\x02\x02\xC0\xC1\x07)\x02\x02\xC1" +
		"\xC2\t\n\x02\x02\xC2\'\x03\x02\x02\x02\xC3\xC7\x05$\x13\x02\xC4\xC7\x05" +
		"&\x14\x02\xC5\xC7\x07)\x02\x02\xC6\xC3\x03\x02\x02\x02\xC6\xC4\x03\x02" +
		"\x02\x02\xC6\xC5\x03\x02\x02\x02\xC7)\x03\x02\x02\x02\x15,1NV[ckmsw\x87" +
		"\x92\x94\xA2\xA9\xAD\xB6\xBB\xC6";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!BooleanMathParser.__ATN) {
			BooleanMathParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(BooleanMathParser._serializedATN));
		}

		return BooleanMathParser.__ATN;
	}

}

export class ParseContext extends ParserRuleContext {
	public anexpression(): AnexpressionContext | undefined {
		return this.tryGetRuleContext(0, AnexpressionContext);
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return BooleanMathParser.RULE_parse; }
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterParse) {
			listener.enterParse(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitParse) {
			listener.exitParse(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitParse) {
			return visitor.visitParse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnexpressionContext extends ParserRuleContext {
	public _str!: StringexpressionContext;
	public _num!: NumericexpressionContext;
	public _bool!: BooleanexpressionContext;
	public stringexpression(): StringexpressionContext | undefined {
		return this.tryGetRuleContext(0, StringexpressionContext);
	}
	public numericexpression(): NumericexpressionContext | undefined {
		return this.tryGetRuleContext(0, NumericexpressionContext);
	}
	public booleanexpression(): BooleanexpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return BooleanMathParser.RULE_anexpression; }
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterAnexpression) {
			listener.enterAnexpression(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitAnexpression) {
			listener.exitAnexpression(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitAnexpression) {
			return visitor.visitAnexpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanvalueContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return BooleanMathParser.RULE_booleanvalue; }
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterBooleanvalue) {
			listener.enterBooleanvalue(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitBooleanvalue) {
			listener.exitBooleanvalue(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitBooleanvalue) {
			return visitor.visitBooleanvalue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanexpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return BooleanMathParser.RULE_booleanexpression; }
	public copyFrom(ctx: BooleanexpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class BooleanValueContext extends BooleanexpressionContext {
	public booleanvalue(): BooleanvalueContext {
		return this.getRuleContext(0, BooleanvalueContext);
	}
	constructor(ctx: BooleanexpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterBooleanValue) {
			listener.enterBooleanValue(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitBooleanValue) {
			listener.exitBooleanValue(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitBooleanValue) {
			return visitor.visitBooleanValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierWithBooleanValueContext extends BooleanexpressionContext {
	public IDENTIFIERCHARS(): TerminalNode { return this.getToken(BooleanMathParser.IDENTIFIERCHARS, 0); }
	constructor(ctx: BooleanexpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterIdentifierWithBooleanValue) {
			listener.enterIdentifierWithBooleanValue(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitIdentifierWithBooleanValue) {
			listener.exitIdentifierWithBooleanValue(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitIdentifierWithBooleanValue) {
			return visitor.visitIdentifierWithBooleanValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinaryOperatorAssertionContext extends BooleanexpressionContext {
	public _left!: BooleanexpressionContext;
	public _op!: BinaryoperatorContext;
	public _right!: BooleanexpressionContext;
	public booleanexpression(): BooleanexpressionContext[];
	public booleanexpression(i: number): BooleanexpressionContext;
	public booleanexpression(i?: number): BooleanexpressionContext | BooleanexpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanexpressionContext);
		} else {
			return this.getRuleContext(i, BooleanexpressionContext);
		}
	}
	public binaryoperator(): BinaryoperatorContext {
		return this.getRuleContext(0, BinaryoperatorContext);
	}
	constructor(ctx: BooleanexpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterBinaryOperatorAssertion) {
			listener.enterBinaryOperatorAssertion(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitBinaryOperatorAssertion) {
			listener.exitBinaryOperatorAssertion(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitBinaryOperatorAssertion) {
			return visitor.visitBinaryOperatorAssertion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumericComparatorAssertionContext extends BooleanexpressionContext {
	public _left!: NumericexpressionContext;
	public _op!: NumericcomparatorContext;
	public _right!: NumericexpressionContext;
	public numericexpression(): NumericexpressionContext[];
	public numericexpression(i: number): NumericexpressionContext;
	public numericexpression(i?: number): NumericexpressionContext | NumericexpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumericexpressionContext);
		} else {
			return this.getRuleContext(i, NumericexpressionContext);
		}
	}
	public numericcomparator(): NumericcomparatorContext {
		return this.getRuleContext(0, NumericcomparatorContext);
	}
	constructor(ctx: BooleanexpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterNumericComparatorAssertion) {
			listener.enterNumericComparatorAssertion(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitNumericComparatorAssertion) {
			listener.exitNumericComparatorAssertion(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitNumericComparatorAssertion) {
			return visitor.visitNumericComparatorAssertion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringComparisonAssertionContext extends BooleanexpressionContext {
	public _left!: StringexpressionContext;
	public _op!: StringcomparatorContext;
	public _right!: StringexpressionContext;
	public stringexpression(): StringexpressionContext[];
	public stringexpression(i: number): StringexpressionContext;
	public stringexpression(i?: number): StringexpressionContext | StringexpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringexpressionContext);
		} else {
			return this.getRuleContext(i, StringexpressionContext);
		}
	}
	public stringcomparator(): StringcomparatorContext {
		return this.getRuleContext(0, StringcomparatorContext);
	}
	constructor(ctx: BooleanexpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterStringComparisonAssertion) {
			listener.enterStringComparisonAssertion(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitStringComparisonAssertion) {
			listener.exitStringComparisonAssertion(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitStringComparisonAssertion) {
			return visitor.visitStringComparisonAssertion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringValueInListAssertionContext extends BooleanexpressionContext {
	public _left!: StringexpressionContext;
	public _op!: ListcomparatorContext;
	public _list!: ValuelistContext;
	public stringexpression(): StringexpressionContext {
		return this.getRuleContext(0, StringexpressionContext);
	}
	public listcomparator(): ListcomparatorContext {
		return this.getRuleContext(0, ListcomparatorContext);
	}
	public valuelist(): ValuelistContext {
		return this.getRuleContext(0, ValuelistContext);
	}
	constructor(ctx: BooleanexpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterStringValueInListAssertion) {
			listener.enterStringValueInListAssertion(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitStringValueInListAssertion) {
			listener.exitStringValueInListAssertion(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitStringValueInListAssertion) {
			return visitor.visitStringValueInListAssertion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumericValueInListAssertionContext extends BooleanexpressionContext {
	public _left!: NumericexpressionContext;
	public _op!: ListcomparatorContext;
	public _list!: ValuelistContext;
	public numericexpression(): NumericexpressionContext {
		return this.getRuleContext(0, NumericexpressionContext);
	}
	public listcomparator(): ListcomparatorContext {
		return this.getRuleContext(0, ListcomparatorContext);
	}
	public valuelist(): ValuelistContext {
		return this.getRuleContext(0, ValuelistContext);
	}
	constructor(ctx: BooleanexpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterNumericValueInListAssertion) {
			listener.enterNumericValueInListAssertion(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitNumericValueInListAssertion) {
			listener.exitNumericValueInListAssertion(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitNumericValueInListAssertion) {
			return visitor.visitNumericValueInListAssertion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesedBooleanExpressionContext extends BooleanexpressionContext {
	public LPAREN(): TerminalNode { return this.getToken(BooleanMathParser.LPAREN, 0); }
	public booleanexpression(): BooleanexpressionContext {
		return this.getRuleContext(0, BooleanexpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(BooleanMathParser.RPAREN, 0); }
	constructor(ctx: BooleanexpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterParenthesedBooleanExpression) {
			listener.enterParenthesedBooleanExpression(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitParenthesedBooleanExpression) {
			listener.exitParenthesedBooleanExpression(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitParenthesedBooleanExpression) {
			return visitor.visitParenthesedBooleanExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotExpressionContext extends BooleanexpressionContext {
	public NOT(): TerminalNode { return this.getToken(BooleanMathParser.NOT, 0); }
	public booleanexpression(): BooleanexpressionContext {
		return this.getRuleContext(0, BooleanexpressionContext);
	}
	constructor(ctx: BooleanexpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterNotExpression) {
			listener.enterNotExpression(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitNotExpression) {
			listener.exitNotExpression(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitNotExpression) {
			return visitor.visitNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AstringContext extends ParserRuleContext {
	public _str!: Token;
	public _ident!: IdentifierContext;
	public STRING(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.STRING, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return BooleanMathParser.RULE_astring; }
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterAstring) {
			listener.enterAstring(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitAstring) {
			listener.exitAstring(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitAstring) {
			return visitor.visitAstring(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringexpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return BooleanMathParser.RULE_stringexpression; }
	public copyFrom(ctx: StringexpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PlainStringExpressionContext extends StringexpressionContext {
	public _str!: AstringContext;
	public astring(): AstringContext {
		return this.getRuleContext(0, AstringContext);
	}
	constructor(ctx: StringexpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterPlainStringExpression) {
			listener.enterPlainStringExpression(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitPlainStringExpression) {
			listener.exitPlainStringExpression(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitPlainStringExpression) {
			return visitor.visitPlainStringExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConcatStringExpressionContext extends StringexpressionContext {
	public _left!: StringexpressionContext;
	public _op!: Token;
	public _right!: StringexpressionContext;
	public stringexpression(): StringexpressionContext[];
	public stringexpression(i: number): StringexpressionContext;
	public stringexpression(i?: number): StringexpressionContext | StringexpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringexpressionContext);
		} else {
			return this.getRuleContext(i, StringexpressionContext);
		}
	}
	public PLUS(): TerminalNode { return this.getToken(BooleanMathParser.PLUS, 0); }
	constructor(ctx: StringexpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterConcatStringExpression) {
			listener.enterConcatStringExpression(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitConcatStringExpression) {
			listener.exitConcatStringExpression(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitConcatStringExpression) {
			return visitor.visitConcatStringExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RepeatStringExpressionContext extends StringexpressionContext {
	public _left!: StringexpressionContext;
	public _op!: Token;
	public _right!: NumericexpressionContext;
	public stringexpression(): StringexpressionContext {
		return this.getRuleContext(0, StringexpressionContext);
	}
	public TIMES(): TerminalNode { return this.getToken(BooleanMathParser.TIMES, 0); }
	public numericexpression(): NumericexpressionContext {
		return this.getRuleContext(0, NumericexpressionContext);
	}
	constructor(ctx: StringexpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterRepeatStringExpression) {
			listener.enterRepeatStringExpression(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitRepeatStringExpression) {
			listener.exitRepeatStringExpression(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitRepeatStringExpression) {
			return visitor.visitRepeatStringExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesedStringExpressionContext extends StringexpressionContext {
	public _val!: StringexpressionContext;
	public LPAREN(): TerminalNode { return this.getToken(BooleanMathParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(BooleanMathParser.RPAREN, 0); }
	public stringexpression(): StringexpressionContext {
		return this.getRuleContext(0, StringexpressionContext);
	}
	constructor(ctx: StringexpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterParenthesedStringExpression) {
			listener.enterParenthesedStringExpression(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitParenthesedStringExpression) {
			listener.exitParenthesedStringExpression(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitParenthesedStringExpression) {
			return visitor.visitParenthesedStringExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumericexpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return BooleanMathParser.RULE_numericexpression; }
	public copyFrom(ctx: NumericexpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class IdentifierExpressionContext extends NumericexpressionContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: NumericexpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterIdentifierExpression) {
			listener.enterIdentifierExpression(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitIdentifierExpression) {
			listener.exitIdentifierExpression(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitIdentifierExpression) {
			return visitor.visitIdentifierExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OperatorPowerExpressionContext extends NumericexpressionContext {
	public _left!: NumericexpressionContext;
	public _operator!: Token;
	public _right!: NumericexpressionContext;
	public numericexpression(): NumericexpressionContext[];
	public numericexpression(i: number): NumericexpressionContext;
	public numericexpression(i?: number): NumericexpressionContext | NumericexpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumericexpressionContext);
		} else {
			return this.getRuleContext(i, NumericexpressionContext);
		}
	}
	public POW(): TerminalNode { return this.getToken(BooleanMathParser.POW, 0); }
	constructor(ctx: NumericexpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterOperatorPowerExpression) {
			listener.enterOperatorPowerExpression(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitOperatorPowerExpression) {
			listener.exitOperatorPowerExpression(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitOperatorPowerExpression) {
			return visitor.visitOperatorPowerExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OperatorTimesDivExpressionContext extends NumericexpressionContext {
	public _left!: NumericexpressionContext;
	public _right!: NumericexpressionContext;
	public numericexpression(): NumericexpressionContext[];
	public numericexpression(i: number): NumericexpressionContext;
	public numericexpression(i?: number): NumericexpressionContext | NumericexpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumericexpressionContext);
		} else {
			return this.getRuleContext(i, NumericexpressionContext);
		}
	}
	public TIMES(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.TIMES, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.DIV, 0); }
	constructor(ctx: NumericexpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterOperatorTimesDivExpression) {
			listener.enterOperatorTimesDivExpression(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitOperatorTimesDivExpression) {
			listener.exitOperatorTimesDivExpression(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitOperatorTimesDivExpression) {
			return visitor.visitOperatorTimesDivExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OperationPlusMinusExpressionContext extends NumericexpressionContext {
	public _left!: NumericexpressionContext;
	public _right!: NumericexpressionContext;
	public numericexpression(): NumericexpressionContext[];
	public numericexpression(i: number): NumericexpressionContext;
	public numericexpression(i?: number): NumericexpressionContext | NumericexpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumericexpressionContext);
		} else {
			return this.getRuleContext(i, NumericexpressionContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.MINUS, 0); }
	constructor(ctx: NumericexpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterOperationPlusMinusExpression) {
			listener.enterOperationPlusMinusExpression(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitOperationPlusMinusExpression) {
			listener.exitOperationPlusMinusExpression(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitOperationPlusMinusExpression) {
			return visitor.visitOperationPlusMinusExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DecimalExpressionContext extends NumericexpressionContext {
	public DECIMAL(): TerminalNode { return this.getToken(BooleanMathParser.DECIMAL, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.MINUS, 0); }
	constructor(ctx: NumericexpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterDecimalExpression) {
			listener.enterDecimalExpression(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitDecimalExpression) {
			listener.exitDecimalExpression(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitDecimalExpression) {
			return visitor.visitDecimalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesedNumericExpressionContext extends NumericexpressionContext {
	public _parexpression!: NumericexpressionContext;
	public LPAREN(): TerminalNode { return this.getToken(BooleanMathParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(BooleanMathParser.RPAREN, 0); }
	public numericexpression(): NumericexpressionContext {
		return this.getRuleContext(0, NumericexpressionContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.MINUS, 0); }
	constructor(ctx: NumericexpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterParenthesedNumericExpression) {
			listener.enterParenthesedNumericExpression(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitParenthesedNumericExpression) {
			listener.exitParenthesedNumericExpression(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitParenthesedNumericExpression) {
			return visitor.visitParenthesedNumericExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionWithSingleParameterContext extends NumericexpressionContext {
	public _funcs!: FunctionwithsingleparameterContext;
	public _operand!: NumericexpressionContext;
	public LPAREN(): TerminalNode { return this.getToken(BooleanMathParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(BooleanMathParser.RPAREN, 0); }
	public functionwithsingleparameter(): FunctionwithsingleparameterContext {
		return this.getRuleContext(0, FunctionwithsingleparameterContext);
	}
	public numericexpression(): NumericexpressionContext {
		return this.getRuleContext(0, NumericexpressionContext);
	}
	constructor(ctx: NumericexpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterFunctionWithSingleParameter) {
			listener.enterFunctionWithSingleParameter(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitFunctionWithSingleParameter) {
			listener.exitFunctionWithSingleParameter(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitFunctionWithSingleParameter) {
			return visitor.visitFunctionWithSingleParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionWithArrayContext extends NumericexpressionContext {
	public _funca!: FunctionswitharrayContext;
	public _operands!: ValuelistContext;
	public LPAREN(): TerminalNode { return this.getToken(BooleanMathParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(BooleanMathParser.RPAREN, 0); }
	public functionswitharray(): FunctionswitharrayContext {
		return this.getRuleContext(0, FunctionswitharrayContext);
	}
	public valuelist(): ValuelistContext {
		return this.getRuleContext(0, ValuelistContext);
	}
	constructor(ctx: NumericexpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterFunctionWithArray) {
			listener.enterFunctionWithArray(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitFunctionWithArray) {
			listener.exitFunctionWithArray(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitFunctionWithArray) {
			return visitor.visitFunctionWithArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionwithsingleparameterContext extends ParserRuleContext {
	public SQRT(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.SQRT, 0); }
	public CUBE(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.CUBE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return BooleanMathParser.RULE_functionwithsingleparameter; }
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterFunctionwithsingleparameter) {
			listener.enterFunctionwithsingleparameter(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitFunctionwithsingleparameter) {
			listener.exitFunctionwithsingleparameter(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitFunctionwithsingleparameter) {
			return visitor.visitFunctionwithsingleparameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionswitharrayContext extends ParserRuleContext {
	public SUM(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.SUM, 0); }
	public AVERAGE(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.AVERAGE, 0); }
	public MIN(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.MIN, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.MAX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return BooleanMathParser.RULE_functionswitharray; }
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterFunctionswitharray) {
			listener.enterFunctionswitharray(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitFunctionswitharray) {
			listener.exitFunctionswitharray(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitFunctionswitharray) {
			return visitor.visitFunctionswitharray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumericcomparatorContext extends ParserRuleContext {
	public GT(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.GT, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.GE, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.LT, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.LE, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.NEQ, 0); }
	public APPROXIMATION(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.APPROXIMATION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return BooleanMathParser.RULE_numericcomparator; }
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterNumericcomparator) {
			listener.enterNumericcomparator(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitNumericcomparator) {
			listener.exitNumericcomparator(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitNumericcomparator) {
			return visitor.visitNumericcomparator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringcomparatorContext extends ParserRuleContext {
	public GT(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.GT, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.GE, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.LT, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.LE, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.EQ, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.LIKE, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.NEQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return BooleanMathParser.RULE_stringcomparator; }
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterStringcomparator) {
			listener.enterStringcomparator(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitStringcomparator) {
			listener.exitStringcomparator(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitStringcomparator) {
			return visitor.visitStringcomparator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListcomparatorContext extends ParserRuleContext {
	public IN(): TerminalNode { return this.getToken(BooleanMathParser.IN, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return BooleanMathParser.RULE_listcomparator; }
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterListcomparator) {
			listener.enterListcomparator(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitListcomparator) {
			listener.exitListcomparator(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitListcomparator) {
			return visitor.visitListcomparator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinaryoperatorContext extends ParserRuleContext {
	public AND(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.OR, 0); }
	public XOR(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.XOR, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.NEQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return BooleanMathParser.RULE_binaryoperator; }
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterBinaryoperator) {
			listener.enterBinaryoperator(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitBinaryoperator) {
			listener.exitBinaryoperator(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitBinaryoperator) {
			return visitor.visitBinaryoperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public _bool!: BooleanexpressionContext;
	public _num!: NumericexpressionContext;
	public _str!: StringexpressionContext;
	public booleanexpression(): BooleanexpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanexpressionContext);
	}
	public numericexpression(): NumericexpressionContext | undefined {
		return this.tryGetRuleContext(0, NumericexpressionContext);
	}
	public stringexpression(): StringexpressionContext | undefined {
		return this.tryGetRuleContext(0, StringexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return BooleanMathParser.RULE_value; }
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValuelistContext extends ParserRuleContext {
	public BEGINLIST(): TerminalNode { return this.getToken(BooleanMathParser.BEGINLIST, 0); }
	public ENDLIST(): TerminalNode { return this.getToken(BooleanMathParser.ENDLIST, 0); }
	public listelements(): ListelementsContext | undefined {
		return this.tryGetRuleContext(0, ListelementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return BooleanMathParser.RULE_valuelist; }
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterValuelist) {
			listener.enterValuelist(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitValuelist) {
			listener.exitValuelist(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitValuelist) {
			return visitor.visitValuelist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListelementsContext extends ParserRuleContext {
	public listelement(): ListelementContext[];
	public listelement(i: number): ListelementContext;
	public listelement(i?: number): ListelementContext | ListelementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ListelementContext);
		} else {
			return this.getRuleContext(i, ListelementContext);
		}
	}
	public LISTSEPERATOR(): TerminalNode[];
	public LISTSEPERATOR(i: number): TerminalNode;
	public LISTSEPERATOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BooleanMathParser.LISTSEPERATOR);
		} else {
			return this.getToken(BooleanMathParser.LISTSEPERATOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return BooleanMathParser.RULE_listelements; }
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterListelements) {
			listener.enterListelements(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitListelements) {
			listener.exitListelements(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitListelements) {
			return visitor.visitListelements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListelementContext extends ParserRuleContext {
	public _num!: NumericexpressionContext;
	public _str!: StringexpressionContext;
	public numericexpression(): NumericexpressionContext | undefined {
		return this.tryGetRuleContext(0, NumericexpressionContext);
	}
	public stringexpression(): StringexpressionContext | undefined {
		return this.tryGetRuleContext(0, StringexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return BooleanMathParser.RULE_listelement; }
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterListelement) {
			listener.enterListelement(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitListelement) {
			listener.exitListelement(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitListelement) {
			return visitor.visitListelement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryoperationleftContext extends ParserRuleContext {
	public _ident!: Token;
	public OPERATORPLUSPLUS(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.OPERATORPLUSPLUS, 0); }
	public OPERATORMINMIN(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.OPERATORMINMIN, 0); }
	public IDENTIFIERCHARS(): TerminalNode { return this.getToken(BooleanMathParser.IDENTIFIERCHARS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return BooleanMathParser.RULE_unaryoperationleft; }
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterUnaryoperationleft) {
			listener.enterUnaryoperationleft(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitUnaryoperationleft) {
			listener.exitUnaryoperationleft(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitUnaryoperationleft) {
			return visitor.visitUnaryoperationleft(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryoperationrightContext extends ParserRuleContext {
	public _ident!: Token;
	public IDENTIFIERCHARS(): TerminalNode { return this.getToken(BooleanMathParser.IDENTIFIERCHARS, 0); }
	public OPERATORPLUSPLUS(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.OPERATORPLUSPLUS, 0); }
	public OPERATORMINMIN(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.OPERATORMINMIN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return BooleanMathParser.RULE_unaryoperationright; }
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterUnaryoperationright) {
			listener.enterUnaryoperationright(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitUnaryoperationright) {
			listener.exitUnaryoperationright(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitUnaryoperationright) {
			return visitor.visitUnaryoperationright(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public _uleft!: UnaryoperationleftContext;
	public _uright!: UnaryoperationrightContext;
	public _ident!: Token;
	public unaryoperationleft(): UnaryoperationleftContext | undefined {
		return this.tryGetRuleContext(0, UnaryoperationleftContext);
	}
	public unaryoperationright(): UnaryoperationrightContext | undefined {
		return this.tryGetRuleContext(0, UnaryoperationrightContext);
	}
	public IDENTIFIERCHARS(): TerminalNode | undefined { return this.tryGetToken(BooleanMathParser.IDENTIFIERCHARS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return BooleanMathParser.RULE_identifier; }
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


