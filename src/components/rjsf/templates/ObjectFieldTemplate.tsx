import {
  type FormContextType,
  type ObjectFieldTemplateProps,
  type RJSFSchema,
  type StrictRJSFSchema,
  canExpand,
  descriptionId,
  getTemplate,
  getUiOptions,
  titleId,
} from "@rjsf/utils";

import { cn } from "@/lib/utils";

export function ObjectFieldTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: ObjectFieldTemplateProps<T, S, F>) {
  const {
    description,
    title,
    properties,
    required,
    disabled,
    readonly,
    registry,
    formData,
    onAddClick,
    idSchema,
    schema,
    uiSchema,
  } = props;
  const uiOptions = getUiOptions<T, S, F>(uiSchema);

  const TitleFieldTemplate = getTemplate<"TitleFieldTemplate", T, S, F>(
    "TitleFieldTemplate",
    registry,
    uiOptions,
  );

  const DescriptionFieldTemplate = getTemplate<
    "DescriptionFieldTemplate",
    T,
    S,
    F
  >("DescriptionFieldTemplate", registry, uiOptions);

  const {
    ButtonTemplates: { AddButton },
  } = registry.templates;

  return (
    <>
      {title && (
        <TitleFieldTemplate
          id={titleId<T>(idSchema)}
          title={title}
          required={required}
          schema={schema}
          uiSchema={uiSchema}
          registry={registry}
        />
      )}
      {description && (
        <DescriptionFieldTemplate
          id={descriptionId<T>(idSchema)}
          description={description}
          schema={schema}
          uiSchema={uiSchema}
          registry={registry}
        />
      )}
      {properties.map((element: any, index: number) => (
        <div
          key={index}
          className={cn(element.hidden && "hidden", "flex mb-2.5")}
        >
          <div className="w-full">{element.content}</div>
        </div>
      ))}
      {canExpand<T, S, F>(schema, uiSchema, formData) ? (
        <div className="flex">
          <div className="ml-auto py-4">
            <AddButton
              onClick={onAddClick(schema)}
              disabled={disabled || readonly}
              uiSchema={uiSchema}
              registry={registry}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
