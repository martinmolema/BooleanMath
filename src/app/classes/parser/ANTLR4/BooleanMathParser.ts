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
	public static readonly REPEAT = 5;
	public static readonly PLUS = 6;
	public static readonly MINUS = 7;
	public static readonly TIMES = 8;
	public static readonly DIV = 9;
	public static readonly POW = 10;
	public static readonly SQRT = 11;
	public static readonly CUBE = 12;
	public static readonly SUM = 13;
	public static readonly AVERAGE = 14;
	public static readonly MIN = 15;
	public static readonly MAX = 16;
	public static readonly OPERATORMINMIN = 17;
	public static readonly OPERATORPLUSPLUS = 18;
	public static readonly LISTSEPARATOR = 19;
	public static readonly BEGINLIST = 20;
	public static readonly ENDLIST = 21;
	public static readonly WS = 22;
	public static readonly AND = 23;
	public static readonly OR = 24;
	public static readonly XOR = 25;
	public static readonly NOT = 26;
	public static readonly GT = 27;
	public static readonly GE = 28;
	public static readonly LT = 29;
	public static readonly LE = 30;
	public static readonly EQ = 31;
	public static readonly NEQ = 32;
	public static readonly APPROXIMATION = 33;
	public static readonly IN = 34;
	public static readonly LIKE = 35;
	public static readonly ISNULL = 36;
	public static readonly LPAREN = 37;
	public static readonly RPAREN = 38;
	public static readonly DECIMAL = 39;
	public static readonly IDENTIFIERCHARS = 40;
	public static readonly STRING = 41;
	public static readonly RULE_parse = 0;
	public static readonly RULE_anexpression = 1;
	public static readonly RULE_booleanvalue = 2;
	public static readonly RULE_booleanexpression = 3;
	public static readonly RULE_astring = 4;
	public static readonly RULE_stringexpression = 5;
	public static readonly RULE_stringFunctionConcat = 6;
	public static readonly RULE_stringFunctionRepeat = 7;
	public static readonly RULE_stringlist = 8;
	public static readonly RULE_stringfunction = 9;
	public static readonly RULE_numericexpression = 10;
	public static readonly RULE_functionwithsingleparameter = 11;
	public static readonly RULE_functionswitharray = 12;
	public static readonly RULE_numericcomparator = 13;
	public static readonly RULE_stringcomparator = 14;
	public static readonly RULE_listcomparator = 15;
	public static readonly RULE_binaryoperator = 16;
	public static readonly RULE_valuelist = 17;
	public static readonly RULE_listelements = 18;
	public static readonly RULE_listelement = 19;
	public static readonly RULE_unaryoperationleft = 20;
	public static readonly RULE_unaryoperationright = 21;
	public static readonly RULE_identifier = 22;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"parse", "anexpression", "booleanvalue", "booleanexpression", "astring", 
		"stringexpression", "stringFunctionConcat", "stringFunctionRepeat", "stringlist", 
		"stringfunction", "numericexpression", "functionwithsingleparameter", 
		"functionswitharray", "numericcomparator", "stringcomparator", "listcomparator", 
		"binaryoperator", "valuelist", "listelements", "listelement", "unaryoperationleft", 
		"unaryoperationright", "identifier",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "':'", undefined, undefined, undefined, undefined, "'+'", "'-'", 
		"'*'", "'/'", "'^'", undefined, undefined, undefined, undefined, undefined, 
		undefined, "'--'", "'++'", "','", "'['", "']'", undefined, undefined, 
		undefined, undefined, undefined, "'>'", "'>='", "'<'", "'<='", "'=='", 
		"'!='", "'~'", undefined, undefined, undefined, "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "COLON", "TRUE", "FALSE", "CONCAT", "REPEAT", "PLUS", "MINUS", 
		"TIMES", "DIV", "POW", "SQRT", "CUBE", "SUM", "AVERAGE", "MIN", "MAX", 
		"OPERATORMINMIN", "OPERATORPLUSPLUS", "LISTSEPARATOR", "BEGINLIST", "ENDLIST", 
		"WS", "AND", "OR", "XOR", "NOT", "GT", "GE", "LT", "LE", "EQ", "NEQ", 
		"APPROXIMATION", "IN", "LIKE", "ISNULL", "LPAREN", "RPAREN", "DECIMAL", 
		"IDENTIFIERCHARS", "STRING",
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
			this.state = 48;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BooleanMathParser.TRUE:
			case BooleanMathParser.FALSE:
			case BooleanMathParser.CONCAT:
			case BooleanMathParser.REPEAT:
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
				this.state = 46;
				this.anexpression();
				}
				break;
			case BooleanMathParser.EOF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 47;
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
			this.state = 53;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 50;
				_localctx._num = this.numericexpression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 51;
				_localctx._bool = this.booleanexpression(0);
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 52;
				_localctx._str = this.stringexpression();
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
			this.state = 55;
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
			this.state = 82;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				_localctx = new BooleanValueContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 58;
				this.booleanvalue();
				}
				break;
			case 2:
				{
				_localctx = new IdentifierWithBooleanValueContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 59;
				this.match(BooleanMathParser.IDENTIFIERCHARS);
				}
				break;
			case 3:
				{
				_localctx = new NumericComparatorAssertionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 60;
				(_localctx as NumericComparatorAssertionContext)._left = this.numericexpression(0);
				this.state = 61;
				(_localctx as NumericComparatorAssertionContext)._op = this.numericcomparator();
				this.state = 62;
				(_localctx as NumericComparatorAssertionContext)._right = this.numericexpression(0);
				}
				break;
			case 4:
				{
				_localctx = new StringComparisonAssertionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 64;
				(_localctx as StringComparisonAssertionContext)._left = this.stringexpression();
				this.state = 65;
				(_localctx as StringComparisonAssertionContext)._op = this.stringcomparator();
				this.state = 66;
				(_localctx as StringComparisonAssertionContext)._right = this.stringexpression();
				}
				break;
			case 5:
				{
				_localctx = new StringValueInListAssertionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 68;
				(_localctx as StringValueInListAssertionContext)._left = this.stringexpression();
				this.state = 69;
				(_localctx as StringValueInListAssertionContext)._op = this.listcomparator();
				this.state = 70;
				(_localctx as StringValueInListAssertionContext)._list = this.valuelist();
				}
				break;
			case 6:
				{
				_localctx = new NumericValueInListAssertionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 72;
				(_localctx as NumericValueInListAssertionContext)._left = this.numericexpression(0);
				this.state = 73;
				(_localctx as NumericValueInListAssertionContext)._op = this.listcomparator();
				this.state = 74;
				(_localctx as NumericValueInListAssertionContext)._list = this.valuelist();
				}
				break;
			case 7:
				{
				_localctx = new ParenthesedBooleanExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 76;
				this.match(BooleanMathParser.LPAREN);
				this.state = 77;
				this.booleanexpression(0);
				this.state = 78;
				this.match(BooleanMathParser.RPAREN);
				}
				break;
			case 8:
				{
				_localctx = new NotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 80;
				this.match(BooleanMathParser.NOT);
				this.state = 81;
				this.booleanexpression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 90;
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
					this.state = 84;
					if (!(this.precpred(this._ctx, 7))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
					}
					this.state = 85;
					(_localctx as BinaryOperatorAssertionContext)._op = this.binaryoperator();
					this.state = 86;
					(_localctx as BinaryOperatorAssertionContext)._right = this.booleanexpression(8);
					}
					}
				}
				this.state = 92;
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
			this.state = 95;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BooleanMathParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 93;
				_localctx._str = this.match(BooleanMathParser.STRING);
				}
				break;
			case BooleanMathParser.OPERATORMINMIN:
			case BooleanMathParser.OPERATORPLUSPLUS:
			case BooleanMathParser.IDENTIFIERCHARS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 94;
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
	// @RuleVersion(0)
	public stringexpression(): StringexpressionContext {
		let _localctx: StringexpressionContext = new StringexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, BooleanMathParser.RULE_stringexpression);
		try {
			this.state = 103;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BooleanMathParser.OPERATORMINMIN:
			case BooleanMathParser.OPERATORPLUSPLUS:
			case BooleanMathParser.IDENTIFIERCHARS:
			case BooleanMathParser.STRING:
				_localctx = new PlainStringExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 97;
				(_localctx as PlainStringExpressionContext)._str = this.astring();
				}
				break;
			case BooleanMathParser.CONCAT:
			case BooleanMathParser.REPEAT:
				_localctx = new StringFunctionExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 98;
				(_localctx as StringFunctionExpressionContext)._func = this.stringfunction();
				}
				break;
			case BooleanMathParser.LPAREN:
				_localctx = new ParenthesedStringExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 99;
				this.match(BooleanMathParser.LPAREN);
				this.state = 100;
				(_localctx as ParenthesedStringExpressionContext)._val = this.stringexpression();
				this.state = 101;
				this.match(BooleanMathParser.RPAREN);
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
	public stringFunctionConcat(): StringFunctionConcatContext {
		let _localctx: StringFunctionConcatContext = new StringFunctionConcatContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, BooleanMathParser.RULE_stringFunctionConcat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this.match(BooleanMathParser.CONCAT);
			this.state = 106;
			this.match(BooleanMathParser.LPAREN);
			this.state = 107;
			_localctx._list = this.stringlist();
			this.state = 108;
			this.match(BooleanMathParser.RPAREN);
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
	public stringFunctionRepeat(): StringFunctionRepeatContext {
		let _localctx: StringFunctionRepeatContext = new StringFunctionRepeatContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, BooleanMathParser.RULE_stringFunctionRepeat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			this.match(BooleanMathParser.REPEAT);
			this.state = 111;
			this.match(BooleanMathParser.LPAREN);
			this.state = 112;
			_localctx._str = this.stringexpression();
			this.state = 113;
			this.match(BooleanMathParser.LISTSEPARATOR);
			this.state = 114;
			_localctx._num = this.numericexpression(0);
			this.state = 115;
			this.match(BooleanMathParser.RPAREN);
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
	public stringlist(): StringlistContext {
		let _localctx: StringlistContext = new StringlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, BooleanMathParser.RULE_stringlist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (BooleanMathParser.OPERATORMINMIN - 17)) | (1 << (BooleanMathParser.OPERATORPLUSPLUS - 17)) | (1 << (BooleanMathParser.IDENTIFIERCHARS - 17)) | (1 << (BooleanMathParser.STRING - 17)))) !== 0)) {
				{
				this.state = 117;
				this.astring();
				}
			}

			this.state = 124;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BooleanMathParser.LISTSEPARATOR) {
				{
				{
				this.state = 120;
				this.match(BooleanMathParser.LISTSEPARATOR);
				this.state = 121;
				this.astring();
				}
				}
				this.state = 126;
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
	public stringfunction(): StringfunctionContext {
		let _localctx: StringfunctionContext = new StringfunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, BooleanMathParser.RULE_stringfunction);
		try {
			this.state = 129;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BooleanMathParser.CONCAT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 127;
				_localctx._concat = this.stringFunctionConcat();
				}
				break;
			case BooleanMathParser.REPEAT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 128;
				_localctx._repeat = this.stringFunctionRepeat();
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
		let _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, BooleanMathParser.RULE_numericexpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 132;
				this.identifier();
				}
				break;
			case 2:
				{
				_localctx = new DecimalExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BooleanMathParser.PLUS || _la === BooleanMathParser.MINUS) {
					{
					this.state = 133;
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

				this.state = 136;
				this.match(BooleanMathParser.DECIMAL);
				}
				break;
			case 3:
				{
				_localctx = new ParenthesedNumericExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === BooleanMathParser.MINUS) {
					{
					this.state = 137;
					this.match(BooleanMathParser.MINUS);
					}
				}

				this.state = 140;
				this.match(BooleanMathParser.LPAREN);
				this.state = 141;
				(_localctx as ParenthesedNumericExpressionContext)._parexpression = this.numericexpression(0);
				this.state = 142;
				this.match(BooleanMathParser.RPAREN);
				}
				break;
			case 4:
				{
				_localctx = new FunctionWithSingleParameterContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 144;
				(_localctx as FunctionWithSingleParameterContext)._funcs = this.functionwithsingleparameter();
				this.state = 145;
				this.match(BooleanMathParser.LPAREN);
				this.state = 146;
				(_localctx as FunctionWithSingleParameterContext)._operand = this.numericexpression(0);
				this.state = 147;
				this.match(BooleanMathParser.RPAREN);
				}
				break;
			case 5:
				{
				_localctx = new FunctionWithArrayContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 149;
				(_localctx as FunctionWithArrayContext)._funca = this.functionswitharray();
				this.state = 150;
				this.match(BooleanMathParser.LPAREN);
				this.state = 151;
				(_localctx as FunctionWithArrayContext)._operands = this.valuelist();
				this.state = 152;
				this.match(BooleanMathParser.RPAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 167;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 165;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
					case 1:
						{
						_localctx = new OperatorPowerExpressionContext(new NumericexpressionContext(_parentctx, _parentState));
						(_localctx as OperatorPowerExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, BooleanMathParser.RULE_numericexpression);
						this.state = 156;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 157;
						(_localctx as OperatorPowerExpressionContext)._operator = this.match(BooleanMathParser.POW);
						this.state = 158;
						(_localctx as OperatorPowerExpressionContext)._right = this.numericexpression(8);
						}
						break;
					case 2:
						{
						_localctx = new OperatorTimesDivExpressionContext(new NumericexpressionContext(_parentctx, _parentState));
						(_localctx as OperatorTimesDivExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, BooleanMathParser.RULE_numericexpression);
						this.state = 159;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 160;
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
						this.state = 161;
						(_localctx as OperatorTimesDivExpressionContext)._right = this.numericexpression(7);
						}
						break;
					case 3:
						{
						_localctx = new OperationPlusMinusExpressionContext(new NumericexpressionContext(_parentctx, _parentState));
						(_localctx as OperationPlusMinusExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, BooleanMathParser.RULE_numericexpression);
						this.state = 162;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 163;
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
						this.state = 164;
						(_localctx as OperationPlusMinusExpressionContext)._right = this.numericexpression(6);
						}
						break;
					}
					}
				}
				this.state = 169;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
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
		this.enterRule(_localctx, 22, BooleanMathParser.RULE_functionwithsingleparameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 170;
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
		this.enterRule(_localctx, 24, BooleanMathParser.RULE_functionswitharray);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 172;
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
		this.enterRule(_localctx, 26, BooleanMathParser.RULE_numericcomparator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			_la = this._input.LA(1);
			if (!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (BooleanMathParser.GT - 27)) | (1 << (BooleanMathParser.GE - 27)) | (1 << (BooleanMathParser.LT - 27)) | (1 << (BooleanMathParser.LE - 27)) | (1 << (BooleanMathParser.EQ - 27)) | (1 << (BooleanMathParser.NEQ - 27)) | (1 << (BooleanMathParser.APPROXIMATION - 27)))) !== 0))) {
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
		this.enterRule(_localctx, 28, BooleanMathParser.RULE_stringcomparator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			_la = this._input.LA(1);
			if (!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (BooleanMathParser.GT - 27)) | (1 << (BooleanMathParser.GE - 27)) | (1 << (BooleanMathParser.LT - 27)) | (1 << (BooleanMathParser.LE - 27)) | (1 << (BooleanMathParser.EQ - 27)) | (1 << (BooleanMathParser.NEQ - 27)) | (1 << (BooleanMathParser.LIKE - 27)))) !== 0))) {
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
		this.enterRule(_localctx, 30, BooleanMathParser.RULE_listcomparator);
		try {
			this.state = 181;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BooleanMathParser.IN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 178;
				this.match(BooleanMathParser.IN);
				}
				break;
			case BooleanMathParser.NOT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 179;
				this.match(BooleanMathParser.NOT);
				this.state = 180;
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
		this.enterRule(_localctx, 32, BooleanMathParser.RULE_binaryoperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
			_la = this._input.LA(1);
			if (!(((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (BooleanMathParser.AND - 23)) | (1 << (BooleanMathParser.OR - 23)) | (1 << (BooleanMathParser.XOR - 23)) | (1 << (BooleanMathParser.EQ - 23)) | (1 << (BooleanMathParser.NEQ - 23)))) !== 0))) {
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
	public valuelist(): ValuelistContext {
		let _localctx: ValuelistContext = new ValuelistContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, BooleanMathParser.RULE_valuelist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			this.match(BooleanMathParser.BEGINLIST);
			this.state = 187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BooleanMathParser.CONCAT) | (1 << BooleanMathParser.REPEAT) | (1 << BooleanMathParser.PLUS) | (1 << BooleanMathParser.MINUS) | (1 << BooleanMathParser.SQRT) | (1 << BooleanMathParser.CUBE) | (1 << BooleanMathParser.SUM) | (1 << BooleanMathParser.AVERAGE) | (1 << BooleanMathParser.MIN) | (1 << BooleanMathParser.MAX) | (1 << BooleanMathParser.OPERATORMINMIN) | (1 << BooleanMathParser.OPERATORPLUSPLUS))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (BooleanMathParser.LPAREN - 37)) | (1 << (BooleanMathParser.DECIMAL - 37)) | (1 << (BooleanMathParser.IDENTIFIERCHARS - 37)) | (1 << (BooleanMathParser.STRING - 37)))) !== 0)) {
				{
				this.state = 186;
				this.listelements();
				}
			}

			this.state = 189;
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
		this.enterRule(_localctx, 36, BooleanMathParser.RULE_listelements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
			this.listelement();
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BooleanMathParser.LISTSEPARATOR) {
				{
				{
				this.state = 192;
				this.match(BooleanMathParser.LISTSEPARATOR);
				this.state = 193;
				this.listelement();
				}
				}
				this.state = 198;
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
		this.enterRule(_localctx, 38, BooleanMathParser.RULE_listelement);
		try {
			this.state = 201;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 199;
				_localctx._num = this.numericexpression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 200;
				_localctx._str = this.stringexpression();
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
		this.enterRule(_localctx, 40, BooleanMathParser.RULE_unaryoperationleft);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
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
			this.state = 204;
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
		this.enterRule(_localctx, 42, BooleanMathParser.RULE_unaryoperationright);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			_localctx._ident = this.match(BooleanMathParser.IDENTIFIERCHARS);
			this.state = 207;
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
		this.enterRule(_localctx, 44, BooleanMathParser.RULE_identifier);
		try {
			this.state = 212;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 209;
				_localctx._uleft = this.unaryoperationleft();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 210;
				_localctx._uright = this.unaryoperationright();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 211;
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
		case 10:
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
	private numericexpression_sempred(_localctx: NumericexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 7);
		case 2:
			return this.precpred(this._ctx, 6);
		case 3:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03+\xD9\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x03\x02\x03\x02\x05\x023\n\x02\x03\x03\x03\x03\x03\x03\x05" +
		"\x038\n\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x05\x05U\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05[\n" +
		"\x05\f\x05\x0E\x05^\v\x05\x03\x06\x03\x06\x05\x06b\n\x06\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07j\n\x07\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x05\ny\n\n\x03" +
		"\n\x03\n\x07\n}\n\n\f\n\x0E\n\x80\v\n\x03\v\x03\v\x05\v\x84\n\v\x03\f" +
		"\x03\f\x03\f\x05\f\x89\n\f\x03\f\x03\f\x05\f\x8D\n\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05" +
		"\f\x9D\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f" +
		"\xA8\n\f\f\f\x0E\f\xAB\v\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x05\x11\xB8\n\x11\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x05\x13\xBE\n\x13\x03\x13\x03\x13\x03\x14\x03\x14" +
		"\x03\x14\x07\x14\xC5\n\x14\f\x14\x0E\x14\xC8\v\x14\x03\x15\x03\x15\x05" +
		"\x15\xCC\n\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x18" +
		"\x03\x18\x03\x18\x05\x18\xD7\n\x18\x03\x18\x02\x02\x04\b\x16\x19\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02" +
		".\x02\x02\v\x03\x02\x04\x05\x03\x02\b\t\x03\x02\n\v\x03\x02\r\x0E\x03" +
		"\x02\x0F\x12\x03\x02\x1D#\x04\x02\x1D\"%%\x04\x02\x19\x1B!\"\x03\x02\x13" +
		"\x14\x02\xE1\x022\x03\x02\x02\x02\x047\x03\x02\x02\x02\x069\x03\x02\x02" +
		"\x02\bT\x03\x02\x02\x02\na\x03\x02\x02\x02\fi\x03\x02\x02\x02\x0Ek\x03" +
		"\x02\x02\x02\x10p\x03\x02\x02\x02\x12x\x03\x02\x02\x02\x14\x83\x03\x02" +
		"\x02\x02\x16\x9C\x03\x02\x02\x02\x18\xAC\x03\x02\x02\x02\x1A\xAE\x03\x02" +
		"\x02\x02\x1C\xB0\x03\x02\x02\x02\x1E\xB2\x03\x02\x02\x02 \xB7\x03\x02" +
		"\x02\x02\"\xB9\x03\x02\x02\x02$\xBB\x03\x02\x02\x02&\xC1\x03\x02\x02\x02" +
		"(\xCB\x03\x02\x02\x02*\xCD\x03\x02\x02\x02,\xD0\x03\x02\x02\x02.\xD6\x03" +
		"\x02\x02\x0203\x05\x04\x03\x0213\x07\x02\x02\x0320\x03\x02\x02\x0221\x03" +
		"\x02\x02\x023\x03\x03\x02\x02\x0248\x05\x16\f\x0258\x05\b\x05\x0268\x05" +
		"\f\x07\x0274\x03\x02\x02\x0275\x03\x02\x02\x0276\x03\x02\x02\x028\x05" +
		"\x03\x02\x02\x029:\t\x02\x02\x02:\x07\x03\x02\x02\x02;<\b\x05\x01\x02" +
		"<U\x05\x06\x04\x02=U\x07*\x02\x02>?\x05\x16\f\x02?@\x05\x1C\x0F\x02@A" +
		"\x05\x16\f\x02AU\x03\x02\x02\x02BC\x05\f\x07\x02CD\x05\x1E\x10\x02DE\x05" +
		"\f\x07\x02EU\x03\x02\x02\x02FG\x05\f\x07\x02GH\x05 \x11\x02HI\x05$\x13" +
		"\x02IU\x03\x02\x02\x02JK\x05\x16\f\x02KL\x05 \x11\x02LM\x05$\x13\x02M" +
		"U\x03\x02\x02\x02NO\x07\'\x02\x02OP\x05\b\x05\x02PQ\x07(\x02\x02QU\x03" +
		"\x02\x02\x02RS\x07\x1C\x02\x02SU\x05\b\x05\x03T;\x03\x02\x02\x02T=\x03" +
		"\x02\x02\x02T>\x03\x02\x02\x02TB\x03\x02\x02\x02TF\x03\x02\x02\x02TJ\x03" +
		"\x02\x02\x02TN\x03\x02\x02\x02TR\x03\x02\x02\x02U\\\x03\x02\x02\x02VW" +
		"\f\t\x02\x02WX\x05\"\x12\x02XY\x05\b\x05\nY[\x03\x02\x02\x02ZV\x03\x02" +
		"\x02\x02[^\x03\x02\x02\x02\\Z\x03\x02\x02\x02\\]\x03\x02\x02\x02]\t\x03" +
		"\x02\x02\x02^\\\x03\x02\x02\x02_b\x07+\x02\x02`b\x05.\x18\x02a_\x03\x02" +
		"\x02\x02a`\x03\x02\x02\x02b\v\x03\x02\x02\x02cj\x05\n\x06\x02dj\x05\x14" +
		"\v\x02ef\x07\'\x02\x02fg\x05\f\x07\x02gh\x07(\x02\x02hj\x03\x02\x02\x02" +
		"ic\x03\x02\x02\x02id\x03\x02\x02\x02ie\x03\x02\x02\x02j\r\x03\x02\x02" +
		"\x02kl\x07\x06\x02\x02lm\x07\'\x02\x02mn\x05\x12\n\x02no\x07(\x02\x02" +
		"o\x0F\x03\x02\x02\x02pq\x07\x07\x02\x02qr\x07\'\x02\x02rs\x05\f\x07\x02" +
		"st\x07\x15\x02\x02tu\x05\x16\f\x02uv\x07(\x02\x02v\x11\x03\x02\x02\x02" +
		"wy\x05\n\x06\x02xw\x03\x02\x02\x02xy\x03\x02\x02\x02y~\x03\x02\x02\x02" +
		"z{\x07\x15\x02\x02{}\x05\n\x06\x02|z\x03\x02\x02\x02}\x80\x03\x02\x02" +
		"\x02~|\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x13\x03\x02\x02\x02\x80" +
		"~\x03\x02\x02\x02\x81\x84\x05\x0E\b\x02\x82\x84\x05\x10\t\x02\x83\x81" +
		"\x03\x02\x02\x02\x83\x82\x03\x02\x02\x02\x84\x15\x03\x02\x02\x02\x85\x86" +
		"\b\f\x01\x02\x86\x9D\x05.\x18\x02\x87\x89\t\x03\x02\x02\x88\x87\x03\x02" +
		"\x02\x02\x88\x89\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x9D\x07)" +
		"\x02\x02\x8B\x8D\x07\t\x02\x02\x8C\x8B\x03\x02\x02\x02\x8C\x8D\x03\x02" +
		"\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x8F\x07\'\x02\x02\x8F\x90\x05\x16" +
		"\f\x02\x90\x91\x07(\x02\x02\x91\x9D\x03\x02\x02\x02\x92\x93\x05\x18\r" +
		"\x02\x93\x94\x07\'\x02\x02\x94\x95\x05\x16\f\x02\x95\x96\x07(\x02\x02" +
		"\x96\x9D\x03\x02\x02\x02\x97\x98\x05\x1A\x0E\x02\x98\x99\x07\'\x02\x02" +
		"\x99\x9A\x05$\x13\x02\x9A\x9B\x07(\x02\x02\x9B\x9D\x03\x02\x02\x02\x9C" +
		"\x85\x03\x02\x02\x02\x9C\x88\x03\x02\x02\x02\x9C\x8C\x03\x02\x02\x02\x9C" +
		"\x92\x03\x02\x02\x02\x9C\x97\x03\x02\x02\x02\x9D\xA9\x03\x02\x02\x02\x9E" +
		"\x9F\f\t\x02\x02\x9F\xA0\x07\f\x02\x02\xA0\xA8\x05\x16\f\n\xA1\xA2\f\b" +
		"\x02\x02\xA2\xA3\t\x04\x02\x02\xA3\xA8\x05\x16\f\t\xA4\xA5\f\x07\x02\x02" +
		"\xA5\xA6\t\x03\x02\x02\xA6\xA8\x05\x16\f\b\xA7\x9E\x03\x02\x02\x02\xA7" +
		"\xA1\x03\x02\x02\x02\xA7\xA4\x03\x02\x02\x02\xA8\xAB\x03\x02\x02\x02\xA9" +
		"\xA7\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\x17\x03\x02\x02\x02\xAB" +
		"\xA9\x03\x02\x02\x02\xAC\xAD\t\x05\x02\x02\xAD\x19\x03\x02\x02\x02\xAE" +
		"\xAF\t\x06\x02\x02\xAF\x1B\x03\x02\x02\x02\xB0\xB1\t\x07\x02\x02\xB1\x1D" +
		"\x03\x02\x02\x02\xB2\xB3\t\b\x02\x02\xB3\x1F\x03\x02\x02\x02\xB4\xB8\x07" +
		"$\x02\x02\xB5\xB6\x07\x1C\x02\x02\xB6\xB8\x07$\x02\x02\xB7\xB4\x03\x02" +
		"\x02\x02\xB7\xB5\x03\x02\x02\x02\xB8!\x03\x02\x02\x02\xB9\xBA\t\t\x02" +
		"\x02\xBA#\x03\x02\x02\x02\xBB\xBD\x07\x16\x02\x02\xBC\xBE\x05&\x14\x02" +
		"\xBD\xBC\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02" +
		"\xBF\xC0\x07\x17\x02\x02\xC0%\x03\x02\x02\x02\xC1\xC6\x05(\x15\x02\xC2" +
		"\xC3\x07\x15\x02\x02\xC3\xC5\x05(\x15\x02\xC4\xC2\x03\x02\x02\x02\xC5" +
		"\xC8\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7" +
		"\'\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC9\xCC\x05\x16\f\x02\xCA\xCC" +
		"\x05\f\x07\x02\xCB\xC9\x03\x02\x02\x02\xCB\xCA\x03\x02\x02\x02\xCC)\x03" +
		"\x02\x02\x02\xCD\xCE\t\n\x02\x02\xCE\xCF\x07*\x02\x02\xCF+\x03\x02\x02" +
		"\x02\xD0\xD1\x07*\x02\x02\xD1\xD2\t\n\x02\x02\xD2-\x03\x02\x02\x02\xD3" +
		"\xD7\x05*\x16\x02\xD4\xD7\x05,\x17\x02\xD5\xD7\x07*\x02\x02\xD6\xD3\x03" +
		"\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD6\xD5\x03\x02\x02\x02\xD7/\x03" +
		"\x02\x02\x02\x1527T\\aix~\x83\x88\x8C\x9C\xA7\xA9\xB7\xBD\xC6\xCB\xD6";
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
	public _num!: NumericexpressionContext;
	public _bool!: BooleanexpressionContext;
	public _str!: StringexpressionContext;
	public numericexpression(): NumericexpressionContext | undefined {
		return this.tryGetRuleContext(0, NumericexpressionContext);
	}
	public booleanexpression(): BooleanexpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanexpressionContext);
	}
	public stringexpression(): StringexpressionContext | undefined {
		return this.tryGetRuleContext(0, StringexpressionContext);
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
export class StringFunctionExpressionContext extends StringexpressionContext {
	public _func!: StringfunctionContext;
	public stringfunction(): StringfunctionContext {
		return this.getRuleContext(0, StringfunctionContext);
	}
	constructor(ctx: StringexpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterStringFunctionExpression) {
			listener.enterStringFunctionExpression(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitStringFunctionExpression) {
			listener.exitStringFunctionExpression(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitStringFunctionExpression) {
			return visitor.visitStringFunctionExpression(this);
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


export class StringFunctionConcatContext extends ParserRuleContext {
	public _list!: StringlistContext;
	public CONCAT(): TerminalNode { return this.getToken(BooleanMathParser.CONCAT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(BooleanMathParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(BooleanMathParser.RPAREN, 0); }
	public stringlist(): StringlistContext {
		return this.getRuleContext(0, StringlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return BooleanMathParser.RULE_stringFunctionConcat; }
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterStringFunctionConcat) {
			listener.enterStringFunctionConcat(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitStringFunctionConcat) {
			listener.exitStringFunctionConcat(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitStringFunctionConcat) {
			return visitor.visitStringFunctionConcat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringFunctionRepeatContext extends ParserRuleContext {
	public _str!: StringexpressionContext;
	public _num!: NumericexpressionContext;
	public REPEAT(): TerminalNode { return this.getToken(BooleanMathParser.REPEAT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(BooleanMathParser.LPAREN, 0); }
	public LISTSEPARATOR(): TerminalNode { return this.getToken(BooleanMathParser.LISTSEPARATOR, 0); }
	public RPAREN(): TerminalNode { return this.getToken(BooleanMathParser.RPAREN, 0); }
	public stringexpression(): StringexpressionContext {
		return this.getRuleContext(0, StringexpressionContext);
	}
	public numericexpression(): NumericexpressionContext {
		return this.getRuleContext(0, NumericexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return BooleanMathParser.RULE_stringFunctionRepeat; }
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterStringFunctionRepeat) {
			listener.enterStringFunctionRepeat(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitStringFunctionRepeat) {
			listener.exitStringFunctionRepeat(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitStringFunctionRepeat) {
			return visitor.visitStringFunctionRepeat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringlistContext extends ParserRuleContext {
	public astring(): AstringContext[];
	public astring(i: number): AstringContext;
	public astring(i?: number): AstringContext | AstringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AstringContext);
		} else {
			return this.getRuleContext(i, AstringContext);
		}
	}
	public LISTSEPARATOR(): TerminalNode[];
	public LISTSEPARATOR(i: number): TerminalNode;
	public LISTSEPARATOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BooleanMathParser.LISTSEPARATOR);
		} else {
			return this.getToken(BooleanMathParser.LISTSEPARATOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return BooleanMathParser.RULE_stringlist; }
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterStringlist) {
			listener.enterStringlist(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitStringlist) {
			listener.exitStringlist(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitStringlist) {
			return visitor.visitStringlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringfunctionContext extends ParserRuleContext {
	public _concat!: StringFunctionConcatContext;
	public _repeat!: StringFunctionRepeatContext;
	public stringFunctionConcat(): StringFunctionConcatContext | undefined {
		return this.tryGetRuleContext(0, StringFunctionConcatContext);
	}
	public stringFunctionRepeat(): StringFunctionRepeatContext | undefined {
		return this.tryGetRuleContext(0, StringFunctionRepeatContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return BooleanMathParser.RULE_stringfunction; }
	// @Override
	public override  enterRule(listener: BooleanMathListener): void {
		if (listener.enterStringfunction) {
			listener.enterStringfunction(this);
		}
	}
	// @Override
	public override  exitRule(listener: BooleanMathListener): void {
		if (listener.exitStringfunction) {
			listener.exitStringfunction(this);
		}
	}
	// @Override
	public override accept<Result>(visitor: BooleanMathVisitor<Result>): Result {
		if (visitor.visitStringfunction) {
			return visitor.visitStringfunction(this);
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
	public LISTSEPARATOR(): TerminalNode[];
	public LISTSEPARATOR(i: number): TerminalNode;
	public LISTSEPARATOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BooleanMathParser.LISTSEPARATOR);
		} else {
			return this.getToken(BooleanMathParser.LISTSEPARATOR, i);
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


