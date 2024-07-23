import { RJSFSchema, UiSchema } from "@rjsf/utils";

export const schema: RJSFSchema = {
  type: "object",
  properties: {
    name: {
      title: "Name",
      type: "string",
    },
    age: {
      title: "Age",
      type: "number",
    },
    terms: {
      title: "Accept terms and conditions",
      type: "boolean",
    },
    demoProperties: {
      title: "Demo properties",
      type: "object",
      properties: {
        demoProperty1: {
          title: "Demo 1",
          type: "string",
        },
        demoProperty2: {
          title: "Demo 2",
          type: "string",
        },
        demoProperty3: {
          title: "Demo 3",
          type: "string",
          enum: ["one", "two", "three"],
        },
      },
      required: ["demoProperty1", "demoProperty2"],
    },
  },
  required: ["terms", "demoProperties"],
};

export const uiSchema: UiSchema = {
  demoProperties: {
    demoProperty2: {
      "ui:options": {
        inputType: "password",
      },
    },
  },
};
