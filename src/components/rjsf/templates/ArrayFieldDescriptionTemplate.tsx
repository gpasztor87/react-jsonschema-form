import {
  type ArrayFieldDescriptionProps,
  type FormContextType,
  type RJSFSchema,
  type StrictRJSFSchema,
  descriptionId,
  getTemplate,
  getUiOptions,
} from "@rjsf/utils";

export function ArrayFieldDescriptionTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: ArrayFieldDescriptionProps<T, S, F>) {
  const { idSchema, description, registry, schema, uiSchema } = props;
  const options = getUiOptions<T, S, F>(uiSchema, registry.globalUiOptions);
  const { label: displayLabel = true } = options;

  if (!description || !displayLabel) {
    return null;
  }

  const DescriptionFieldTemplate = getTemplate<
    "DescriptionFieldTemplate",
    T,
    S,
    F
  >("DescriptionFieldTemplate", registry, options);

  return (
    <DescriptionFieldTemplate
      id={descriptionId<T>(idSchema)}
      description={description}
      schema={schema}
      uiSchema={uiSchema}
      registry={registry}
    />
  );
}