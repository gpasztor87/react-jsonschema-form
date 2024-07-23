import { ComponentProps, forwardRef, useState } from "react";

import Form from "@rjsf/core";
import { RJSFSchema, UiSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";

import templates from "@/components/SchemaForm/templates";
import widgets from "@/components/SchemaForm/widgets";

interface BaseSchemaFormProps {
  schema: RJSFSchema;
  uiSchema?: UiSchema;
  onSubmit: (data: any) => void | Promise<void>;
}

export interface SchemaFormProps extends BaseSchemaFormProps {
  formProps?: Omit<
    ComponentProps<typeof Form>,
    keyof BaseSchemaFormProps | "validator"
  >;
}

export type SchemaFormRef = Form<any>;

export const SchemaForm = forwardRef<SchemaFormRef, SchemaFormProps>(
  (props: SchemaFormProps, ref) => {
    const [formData, setFormData] = useState<any>(
      props.formProps?.formData ?? {},
    );

    return (
      <Form
        ref={ref}
        schema={props.schema}
        uiSchema={props.uiSchema}
        validator={validator}
        templates={templates}
        widgets={widgets}
        formData={formData}
        autoComplete="off"
        showErrorList={false}
        onSubmit={(data) => {
          props.onSubmit(data.formData);
        }}
        onChange={(e) => {
          setFormData(e.formData);
          props.formProps?.onChange?.(e);
        }}
      />
    );
  },
);
