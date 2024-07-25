import { FocusEvent, useCallback } from "react";

import {
  type FormContextType,
  type RJSFSchema,
  type StrictRJSFSchema,
  type WidgetProps,
  labelValue,
} from "@rjsf/utils";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function CheckboxWidget<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: WidgetProps<T, S, F>) {
  const {
    id,
    label,
    hideLabel,
    disabled,
    readonly,
    onBlur,
    onChange,
    onFocus,
    value,
  } = props;

  const handleChange = useCallback(
    (checked: boolean) => onChange(checked),
    [onChange],
  );

  const handleBlur = useCallback(
    (event: FocusEvent<HTMLButtonElement>) => onBlur(id, event.target.value),
    [id, onBlur],
  );

  const handleFocus = useCallback(
    (event: FocusEvent<HTMLButtonElement>) => onFocus(id, event.target.value),
    [id, onFocus],
  );

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={id}
        name={id}
        checked={value}
        disabled={disabled || readonly}
        onCheckedChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <Label htmlFor={id}>{labelValue(label, hideLabel, false)}</Label>
    </div>
  );
}
