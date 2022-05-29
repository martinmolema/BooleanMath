import {TriggerDataParser} from "./app/classes/parser/TriggerDataParser";


enum ParserResult {
  EXPRESSION_PARSE_ERROR,
  EXPRESSION_OK,
  PROCESSING_DATA_ERROR,
  UNKNOWN,
  EXPRESSION_WRONG_RESULT
}

class Testcase {
  caseid: string;
  expression: string;
  expectedResult: any;
  realResult: any;
  error: Error;
  assertionResult: ParserResult;

  constructor(caseid: string, expression: string, expectedResult: any) {
    this.caseid = caseid;
    this.expression = expression;
    this.expectedResult = expectedResult;
  }
}

const identifiers = new Map<string, any>();
const tests = new Map<string, Testcase>();

const parser = new TriggerDataParser();

function RunOneTest(testcase: Testcase): ParserResult {
  console.log(`Running ${testcase.caseid}`);
  let resultProcessingExpression = false;

  resultProcessingExpression = parser.processExpression(testcase.expression);
  if (resultProcessingExpression) {
    try {
      testcase.realResult = parser.processUsingData(identifiers);
      if (testcase.realResult !== testcase.expectedResult) {
        testcase.assertionResult = ParserResult.EXPRESSION_WRONG_RESULT;
        return testcase.assertionResult;
      } else {
        testcase.assertionResult = ParserResult.EXPRESSION_OK;
        return testcase.assertionResult;
      }
    } catch (e) {
      const er = e as Error;
      testcase.error = er;
      testcase.assertionResult = ParserResult.PROCESSING_DATA_ERROR;
      return testcase.assertionResult;
    }
  } else {
    testcase.assertionResult = ParserResult.EXPRESSION_PARSE_ERROR;
    testcase.error = parser.parseError;
    return testcase.assertionResult;
  }
}

function AddOneTest(caseId: string, expression: string, expectedResult: any): void {
  tests.set(caseId, new Testcase(caseId, expression, expectedResult));
}

function RunTests(): void {
  for (const testcase of tests.values()) {
    RunOneTest(testcase);
  }
}

function ReportTestResults(): void {
  for (const testcase of tests.values()) {
    switch (testcase.assertionResult) {
      case ParserResult.EXPRESSION_OK:
        console.log(`${testcase.caseid} SUCCESS`);
        break;
      case ParserResult.UNKNOWN:
        console.log(`${testcase.caseid} ????`);
        break;
      case ParserResult.PROCESSING_DATA_ERROR:
        console.log(`${testcase.caseid} ERROR PROCESSING: ${testcase.error.message}`);
        break;
      case ParserResult.EXPRESSION_PARSE_ERROR:
        console.log(`${testcase.caseid} WRONG EXPRESSION : ${testcase.error.message}`);
        break;
      case ParserResult.EXPRESSION_WRONG_RESULT:
        console.log(`${testcase.caseid} WRONG RESULT : expected ${testcase.expectedResult}, got ${testcase.realResult}`);
        break;
    }
  }
}

/**
 * Arrange
 */
identifiers.set('x', 2);
identifiers.set('y', 13);
identifiers.set('z', 13.0);
identifiers.set('name', 'Martin');


AddOneTest('01', 'true and false', false);
AddOneTest('02', 'true and (1==1)', true);
AddOneTest('03', 'true and (1+1==x)', true);
AddOneTest('04', 'name == "Martin"', true);
AddOneTest('05', 'name != "Marti"', true);
AddOneTest('06', 'name == "Marti"', false);
AddOneTest('07', 'name', 'Martin');
AddOneTest('08', 'x * 2', 4);
AddOneTest('09', 'x * 2 == name', false);
AddOneTest('09', 'x * 2 != name', true);
AddOneTest('10', '"Martin" != "martin"', true);

AddOneTest('11', '"Martin" == "martin"', false);
AddOneTest('12', '(((((((((((((((((((((15==15)))))))))))))))))))))', true);
AddOneTest('13', `3 - 3==0`, true);
AddOneTest('14', `3 * 4 == 12`, true);
AddOneTest('15', `1/2==0.5`, true);
AddOneTest('16', `2^1/2 == 1`, true);
AddOneTest('17', `(0==0)`, true);
AddOneTest('18', `3-1==2`, true);
AddOneTest('19', `1*2*3*4==24`, true);
AddOneTest('20', `1+2+3+4==+10`, true);
AddOneTest('21', `10*-1==-10`, true);
AddOneTest('22', `-10*-1==+10`, true);
AddOneTest('23', `-10*-1==+11`, false);
AddOneTest('24', `(10*-1)==-10`, true);
AddOneTest('25', `cube(3)==27`, true);
AddOneTest('26', `1`, 1);
AddOneTest('27', `-1`, -1);
AddOneTest('28', `+1`, 1);
AddOneTest('29', `10`, 10);
AddOneTest('30', `-10`, -10);
AddOneTest('31', `+10`, 10);
AddOneTest('32', `(10)`, 10);
AddOneTest('33', `3 * -3`, -9);
AddOneTest('34', `true or false`, true);
AddOneTest('35', `true or true`, true);
AddOneTest('36', `false and true`, false);
AddOneTest('37', `true and false`, false);
AddOneTest('38', `true and true`, true);
AddOneTest('39', `true xor true`, false);
AddOneTest('40', `true xor false`, true);
AddOneTest('41', `false xor true`, true);
AddOneTest('42', `(10 == 10)`, true);
AddOneTest('43', `(10 != 9)`, true);
AddOneTest('44', `(10 == 10) AND (x != y)`, true);
AddOneTest('45', `((10 == 10)AND (not false)AND (1==1))`, true);
AddOneTest('46', `((((((10 == 10))))))`, true);
AddOneTest('47', `x in []`, false);

AddOneTest('48', `x == y`, false);
AddOneTest('49', `x == 1`, false);
AddOneTest('50', `y == 2`, false);
AddOneTest('51', `y == 10`, false);
AddOneTest('52', `y == 13`, true);
AddOneTest('53', `x == 10`, false);
AddOneTest('54', `x >1`, true);
AddOneTest('55', `x > 0`, true);
AddOneTest('56', `x > -1`, true);
AddOneTest('57', `x > -1.1`, true);
AddOneTest('58', `z == 13.00000`, true);
AddOneTest('59', `x == 10.0`, false);
AddOneTest('60', `z == 13`, true);

AddOneTest('70', `repeat("x", 3)`, 'xxx');
AddOneTest('71', `concat("a","bc","def")`, 'abcdef');
AddOneTest('72', `repeat("xy", 3)`, 'xyxyxy');
AddOneTest('73', `concat()`, ``);
AddOneTest('74', `repeat('', 0)`, '');
AddOneTest('74', `repeat('', -1)`, 'ERROR PROCESSING: Invalid count value');

/**
 * ACT
 */
RunTests();
console.log('----------------------------------------');
/**
 * Assert & Report
 */
ReportTestResults();
