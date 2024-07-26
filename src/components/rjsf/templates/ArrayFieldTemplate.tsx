import {
  type ArrayFieldTemplateItemType,
  type ArrayFieldTemplateProps,
  type FormContextType,
  type RJSFSchema,
  type StrictRJSFSchema,
  getTemplate,
  getUiOptions,
} from "@rjsf/utils";

export function ArrayFieldTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: ArrayFieldTemplateProps<T, S, F>) {
  const {
    items,
    title,
    disabled,
    readonly,
    required,
    canAdd,
    onAddClick,
    registry,
    schema,
    idSchema,
    uiSchema,
  } = props;
  const uiOptions = getUiOptions<T, S, F>(uiSchema);

  const ArrayFieldDescriptionTemplate = getTemplate<
    "ArrayFieldDescriptionTemplate",
    T,
    S,
    F
  >("ArrayFieldDescriptionTemplate", registry, uiOptions);

  const ArrayFieldItemTemplate = getTemplate<"ArrayFieldItemTemplate", T, S, F>(
    "ArrayFieldItemTemplate",
    registry,
    uiOptions,
  );

  const ArrayFieldTitleTemplate = getTemplate<
    "ArrayFieldTitleTemplate",
    T,
    S,
    F
  >("ArrayFieldTitleTemplate", registry, uiOptions);

  const {
    ButtonTemplates: { AddButton },
  } = registry.templates;

  return (
    <>
      <ArrayFieldTitleTemplate
        title={uiOptions.title || title}
        required={required}
        schema={schema}
        idSchema={idSchema}
        uiSchema={uiSchema}
        registry={registry}
      />
      <ArrayFieldDescriptionTemplate
        description={uiOptions.description || schema.description}
        schema={schema}
        idSchema={idSchema}
        uiSchema={uiSchema}
        registry={registry}
      />
      <div>
        {items &&
          items.map(
            ({ key, ...itemProps }: ArrayFieldTemplateItemType<T, S, F>) => (
              <ArrayFieldItemTemplate key={key} {...itemProps} />
            ),
          )}
      </div>
      {canAdd && (
        <div className="flex">
          <div className="ml-auto py-4">
            <AddButton
              onClick={onAddClick}
              disabled={disabled || readonly}
              uiSchema={uiSchema}
              registry={registry}
            />
          </div>
        </div>
      )}
    </>
  );
}
