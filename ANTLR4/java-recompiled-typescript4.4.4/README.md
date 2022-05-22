# Documentation on recompiling the antrl4ts for Typescript 4.4.4

Please see issue [528](https://github.com/tunnelvisionlabs/antlr4ts/issues/528)

I really am benefiting from your great work. However, now that I am migrating to Angular 13 the language used is
TypeScript version 4.4.4. When running the your antlr4ts tool to generate the files and visitors, the //@OverRide is not
enough anymore and generates error TS4114. For instance: This member must have an 'override' modifier because it
overrides a member in the base class 'ParserRuleContext'.

In the mean time I am looking at how to turn off this error in my project, but really: these are useful errors ...

Edit: cloned the repo and found the .stg file (
tool/resources/org/antlr/v4/tool/templates/codegen/TypeScript/TypeScript.stg). I think all that needs to be done is
improve this file.

Edit: managed to edit the file (see attachment) and recompile the whole thing (./tool folder using npm -i). So for now I
am out of trouble. Maybe for future searchers this might help.

# Solution

Managed to recompile the .jar file for the generation tool (in folder 'tool'). Then put the file
antlr4-typescript-4.9.0-SNAPSHOT-complete.jar in the Angular project folder for antlr4ts-cli (
node_modules/antlr4ts-cli/target) and ran the regular antlr4ts script to generate new files.