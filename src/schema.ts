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
      minLength: 10,
    },
    terms: {
      title: "Accept terms and conditions",
      type: "boolean",
    },
    jobs: {
      title: "Jobs",
      type: "object",
      additionalProperties: {
        title: "Job",
        type: "object",
        properties: {
          companyName: {
            title: "Company name",
            type: "string",
          },
          position: {
            title: "Position",
            type: "string",
            enum: ["Software developer", "Manager", "Tester"],
          },
        },
        required: ["companyName", "position"],
      },
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
  required: ["name", "terms", "jobs"],
};

export const uiSchema: UiSchema = {
  bio: {
    "ui:widget": "textarea",
    "ui:enableMarkdownInDescription": true,
    "ui:description":
      "Make things **bold** or *italic*. Embed snippets of `code`. <small>And this is a small texts.</small>",
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
