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
      type: "integer",
    },
    bio: {
      title: "Bio",
      type: "string",
    },
    password: {
      title: "Password",
      type: "string",
      minLength: 3,
    },
    telephone: {
      title: "Telephone",
      type: "string",
      minLegth: 10,
    },
    terms: {
      title: "Accept terms and conditions",
      type: "boolean",
    },
    multipleChoicesList: {
      type: "array",
      title: "A multiple choices list",
      items: {
        type: "string",
        enum: ["foo", "bar", "fuzz", "qux"],
      },
      uniqueItems: true,
    },
  },
  required: ["terms"],
};

export const uiSchema: UiSchema = {
  bio: {
    "ui:widget": "textarea",
  },
  password: {
    "ui:widget": "password",
    "ui:help": "Hint: Make it strong!",
  },
  telephone: {
    "ui:options": {
      inputType: "tel",
    },
  },
  multipleChoicesList: {
    "ui:widget": "checkboxes",
    "ui:options": {
      inline: true,
    },
  },
};
