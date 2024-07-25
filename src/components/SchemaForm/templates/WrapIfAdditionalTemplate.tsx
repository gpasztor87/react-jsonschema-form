import {
  ADDITIONAL_PROPERTY_FLAG,
  type FormContextType,
  type RJSFSchema,
  type StrictRJSFSchema,
  TranslatableString,
  type WrapIfAdditionalTemplateProps,
} from "@rjsf/utils";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function WrapIfAdditionalTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: WrapIfAdditionalTemplateProps<T, S, F>) {
  const {
    id,
    label,
    children,
    disabled,
    readonly,
    onKeyChange,
    onDropPropertyClick,
    registry,
    schema,
    uiSchema,
  } = props;
  const { translateString, templates } = registry;

  const keyLabel = translateString(TranslatableString.KeyLabel, [label]);
  const additional = ADDITIONAL_PROPERTY_FLAG in schema;

  const {
    ButtonTemplates: { RemoveButton },
  } = templates;

  if (!additional) {
    return <>{children}</>;
  }

  return (
    <div className="flex w-full gap-4">
      <div className="flex-1">
        <Label htmlFor={`${id}-key`} className="block mb-2">
          {keyLabel}
        </Label>
        <Input
          id={`${id}-key`}
          onBlur={({ target }) => onKeyChange(target && target.value)}
          defaultValue={label}
        />
      </div>
      <div className="flex-1">{children}</div>
      <div className="flex flex-row items-center">
        <RemoveButton
          onClick={onDropPropertyClick(label)}
          disabled={disabled || readonly}
          uiSchema={uiSchema}
          registry={registry}
        />
      </div>
    </div>
  );
}
