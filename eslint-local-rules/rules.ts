import { AnyRuleModule } from "@typescript-eslint/utils/ts-eslint";

const rules = {
  "no-entity-public-constructor": {
    meta: {
      docs: {
        description: "Prevent public constructor in Entity subclasses",
      },
      type: "problem",
      schema: [],
      messages: {
        "no-entity-public-constructor":
          "Public constructor in Entity subclasses is not allowed",
      },
    },
    defaultOptions: [],
    create: function (context) {
      return {
        ClassDeclaration: function (classNode) {
          if (
            classNode.superClass?.type === "Identifier" &&
            classNode.superClass.name === "Entity"
          ) {
            for (const node of classNode.body.body) {
              if (
                node.type === "MethodDefinition" &&
                node.kind === "constructor" &&
                (!node.accessibility || node.accessibility === "public")
              ) {
                context.report({
                  node,
                  messageId: "no-entity-public-constructor",
                });
              }
            }
          }
        },
      };
    },
  },
} satisfies Record<string, AnyRuleModule>;

export default rules;
