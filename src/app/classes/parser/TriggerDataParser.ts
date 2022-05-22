/**
 * A class that can parse a given expression based on the given grammar, and process it using a set of data.
 * Pass the constructor the expression and later process it using the function processUsingData()
 */
import {MyTriggerVisitor} from './MyTriggerVisitor';
import {CharStreams, CommonTokenStream} from 'antlr4ts';
import {CodePointCharStream} from 'antlr4ts/CodePointCharStream';
import {BooleanMathLexer} from "./ANTLR4/BooleanMathLexer";
import {BooleanMathParser, ParseContext} from "./ANTLR4/BooleanMathParser";

export type TriggerDataParserSet = Map<number, TriggerDataParser>;

export class TriggerDataParser {
  lexer: BooleanMathLexer;
  tokenStream: CommonTokenStream;
  parser:  BooleanMathParser// NatLangForTriggersParser;
  visitor: MyTriggerVisitor;
  inputStream: CodePointCharStream;
  tree: ParseContext;
  hasValidExpression: boolean;
  parseError: Error;

  constructor() {
    this.hasValidExpression = false;
  }

  protected prepareForTestInput(): void {
  }

  protected convertStringToCharStream(expression: string): void {
    this.inputStream = CharStreams.fromString(expression);
  }

  protected doLexing(): void {
    this.lexer = new BooleanMathLexer(this.inputStream);
    this.tokenStream = new CommonTokenStream(this.lexer);
  }

  protected createParser(): void {
    this.parser = new BooleanMathParser(this.tokenStream);
    // custom error handling
    this.parser.removeErrorListeners();
    this.parser.addErrorListener({
      syntaxError: (recognizer,
                    offendingSymbol,
                    line,
                    charPositionInLine,
                    msg,
                    e) => {
        const errmsg = `!!! Exception: at line ${line}/${charPositionInLine}: ${msg}`;
        throw  new Error(errmsg);
      }
    });
  }

  protected doParse(): boolean {
    try {
      this.tree = this.parser.parse();
      this.hasValidExpression = true;
    }
    catch (e) {
      const ex = e as Error;
      this.parseError = ex;
      this.hasValidExpression = false;
    }
    return this.hasValidExpression;
  }

  protected createVisitor(): void {
    this.visitor = new MyTriggerVisitor();
  }

  protected doPostProcessing(): void {

  }

  processExpression(expression: string | undefined): boolean {
    if (expression === undefined) return false;
    this.prepareForTestInput();
    this.convertStringToCharStream(expression);
    this.doLexing();
    this.createParser();
    this.createVisitor();
    const result = this.doParse();
    if (result) {
      this.doPostProcessing();
    }
    return this.hasValidExpression;
  }// processExpression

  /**
   * This will do the actual processing using the given data
   */
  processUsingData(identifiers: Map<string, any>): any {
    this.visitor.setData(identifiers);
    return this.visitor.visit(this.tree);
  }// processUsingData
}// TriggerDataParser

