import {
  type ArrayFieldTemplateItemType,
  type FormContextType,
  type RJSFSchema,
  type StrictRJSFSchema,
} from "@rjsf/utils";

export function ArrayFieldItemTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: ArrayFieldTemplateItemType<T, S, F>) {
  const {
    index,
    children,
    disabled,
    readonly,
    hasCopy,
    hasMoveDown,
    hasMoveUp,
    hasRemove,
    onCopyIndexClick,
    onReorderClick,
    onDropIndexClick,
    registry,
    uiSchema,
  } = props;

  const {
    ButtonTemplates: { CopyButton, MoveDownButton, MoveUpButton, RemoveButton },
  } = registry.templates;

  return (
    <div className="flex gap-4">
      <div className="flex-1">{children}</div>
      <div className="flex flex-row items-start mt-6">
        {(hasMoveUp || hasMoveDown) && (
          <MoveUpButton
            disabled={disabled || readonly || !hasMoveUp}
            onClick={onReorderClick(index, index - 1)}
            uiSchema={uiSchema}
            registry={registry}
          />
        )}
        {(hasMoveUp || hasMoveDown) && (
          <MoveDownButton
            disabled={disabled || readonly || !hasMoveDown}
            onClick={onReorderClick(index, index + 1)}
            uiSchema={uiSchema}
            registry={registry}
          />
        )}
        {hasCopy && (
          <CopyButton
            disabled={disabled || readonly}
            onClick={onCopyIndexClick(index)}
            uiSchema={uiSchema}
            registry={registry}
          />
        )}
        {hasRemove && (
          <RemoveButton
            disabled={disabled || readonly}
            onClick={onDropIndexClick(index)}
            uiSchema={uiSchema}
            registry={registry}
          />
        )}
      </div>
    </div>
  );
}
