/***
@Author: Martin Molema
@Date: March 12, 2022
@Version: 1
@Status: Review

Grammar for parsing expressions including boolean, arithmatic

ANTLR convention says Uppercase first letter means lexer rule.

**/
grammar BooleanMath;
import BooleanMathLex;

parse : anexpression | EOF ;

anexpression:
num=numericexpression
| bool=booleanexpression
| str=stringexpression
;
// --------------------------------------------------------------------------------------------------------------
//boolean expressions
// --------------------------------------------------------------------------------------------------------------

booleanvalue: TRUE | FALSE ;

booleanexpression
 : booleanvalue                                                                #booleanValue
 | IDENTIFIERCHARS                                                             #identifierWithBooleanValue
 | left=booleanexpression op=binaryoperator      right=booleanexpression       #binaryOperatorAssertion
 | left=numericexpression op=numericcomparator   right=numericexpression       #numericComparatorAssertion
 | left=stringexpression  op=stringcomparator    right=stringexpression        #stringComparisonAssertion
 | left=stringexpression  op=listcomparator      list=valuelist                #stringValueInListAssertion
 | left=numericexpression op=listcomparator      list=valuelist                #numericValueInListAssertion
 | LPAREN booleanexpression RPAREN                                             #parenthesedBooleanExpression
 | NOT booleanexpression                                                       #notExpression
  ;

// --------------------------------------------------------------------------------------------------------------
// STRING Expression
// --------------------------------------------------------------------------------------------------------------
astring
: str=STRING
| ident=identifier;

stringexpression
  : str=astring                                            #plainStringExpression
  | LPAREN val=stringexpression RPAREN                     #parenthesedStringExpression
;

// --------------------------------------------------------------------------------------------------------------
//Expression with a lot of different values/possibilites
// --------------------------------------------------------------------------------------------------------------

numericexpression
 : identifier                                                                               #identifierExpression
 | left=numericexpression operator=POW right=numericexpression                              #operatorPowerExpression
 | left=numericexpression (TIMES|DIV) right=numericexpression                               #operatorTimesDivExpression
 | left=numericexpression (PLUS|MINUS) right=numericexpression                              #operationPlusMinusExpression
 | (PLUS | MINUS)? DECIMAL                                                                  #decimalExpression
 | MINUS? LPAREN parexpression=numericexpression RPAREN                                     #parenthesedNumericExpression
 | funcs=functionwithsingleparameter LPAREN operand=numericexpression RPAREN                #functionWithSingleParameter
 | funca=functionswitharray LPAREN operands=valuelist RPAREN                                #functionWithArray
  ;

// --------------------------------------------------------------------------------------------------------------
// Mathematics
// --------------------------------------------------------------------------------------------------------------

functionwithsingleparameter: SQRT | CUBE ;
functionswitharray: SUM | AVERAGE | MIN | MAX;

numericcomparator:    GT | GE | LT | LE | EQ | NEQ | APPROXIMATION;
stringcomparator:     GT | GE | LT | LE | EQ | LIKE | NEQ ;
listcomparator:       IN | NOT IN;
binaryoperator:       AND | OR | XOR | EQ | NEQ;

value
: bool=booleanexpression
| num=numericexpression
| str=stringexpression
;

// --------------------------------------------------------------------------------------------------------------
// Lists
// --------------------------------------------------------------------------------------------------------------

valuelist : BEGINLIST listelements? ENDLIST ;
listelements : listelement ( LISTSEPERATOR listelement )* ;
listelement: num=numericexpression | str=stringexpression ;

// --------------------------------------------------------------------------------------------------------------
// Finally: define what an identifier may look like and what a string is (either double or single quoted)
// --------------------------------------------------------------------------------------------------------------
unaryoperationleft: (OPERATORPLUSPLUS | OPERATORMINMIN) ident=IDENTIFIERCHARS;
unaryoperationright: ident=IDENTIFIERCHARS (OPERATORPLUSPLUS | OPERATORMINMIN);

identifier
 : uleft=unaryoperationleft
 | uright=unaryoperationright
 | ident=IDENTIFIERCHARS
 ;
