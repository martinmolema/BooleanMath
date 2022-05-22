import {TriggerDataParser} from "./app/classes/parser/TriggerDataParser";

const identifiers = new Map<string, any>();
identifiers.set('x', 2);

const parser = new TriggerDataParser();
const resultProcessingExpression = parser.processExpression('true and (1+1 == x)');
if (resultProcessingExpression) {
  const result = parser.processUsingData(identifiers);
  console.log(result);
}