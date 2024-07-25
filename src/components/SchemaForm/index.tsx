import { forwardRef, useMemo } from "react";

import Form from "@rjsf/core";
import { type RJSFSchema, type UiSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";

import templates from "@/components/SchemaForm/templates";
import widgets from "@/components/SchemaForm/widgets";

export interface FormContext {
  showTypes?: boolean;
}

export interface SchemaFormProps {
  schema: RJSFSchema;
  uiSchema?: UiSchema;
  formData?: any;
  formContext?: FormContext;
  onSubmit: (data: any) => void | Promise<void>;
}

export type SchemaFormRef = Form<any>;

export const SchemaForm = forwardRef<SchemaFormRef, SchemaFormProps>(
  (props: SchemaFormProps, ref) => {
    const formContext = useMemo<FormContext>(
      () => ({
        showTypes: true,
        ...props.formContext,
      }),
      [props.formContext],
    );

    return (
      <Form
        ref={ref}
        schema={props.schema}
        uiSchema={props.uiSchema}
        validator={validator}
        templates={templates}
        widgets={widgets}
        formData={props.formData}
        autoComplete="off"
        showErrorList={false}
        formContext={formContext}
        onSubmit={(data) => {
          props.onSubmit(data.formData);
        }}
      />
    );
  },
);
