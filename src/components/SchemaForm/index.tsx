import { ComponentProps, forwardRef, useMemo, useState } from "react";

import Form from "@rjsf/core";
import { RJSFSchema, UiSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";

import templates from "@/components/SchemaForm/templates";
import widgets from "@/components/SchemaForm/widgets";

export interface FormContext {
  isFoldable?: boolean;
  showTypes?: boolean;
}

interface BaseSchemaFormProps {
  schema: RJSFSchema;
  uiSchema?: UiSchema;
  formContext?: FormContext;
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

    const formContext = useMemo<FormContext>(
      () => ({
        showTypes: true,
        isFoldable: false,
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
        formData={formData}
        autoComplete="off"
        showErrorList={false}
        formContext={formContext}
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
