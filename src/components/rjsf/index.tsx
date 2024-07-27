import { forwardRef, useMemo } from "react";

import Form from "@rjsf/core";
import {
  type FormContextType,
  type RJSFSchema,
  type UiSchema,
} from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";

import templates from "@/components/rjsf/templates";
import widgets from "@/components/rjsf/widgets";

export interface SchemaFormProps {
  schema: RJSFSchema;
  uiSchema?: UiSchema;
  formData?: any;
  formContext?: FormContextType;
  onSubmit: (data: any) => void | Promise<void>;
}

export type SchemaFormRef = Form<any>;

export const SchemaForm = forwardRef<SchemaFormRef, SchemaFormProps>(
  (props: SchemaFormProps, ref) => {
    const formContext = useMemo<FormContextType>(
      () => ({
        // showTypes: true,
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
        formContext={formContext}
        onSubmit={(data) => {
          props.onSubmit(data.formData);
        }}
      />
    );
  },
);
