import { FocusEvent, useCallback } from "react";

import {
  type WidgetProps,
  labelValue,
  schemaRequiresTrueValue,
} from "@rjsf/utils";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function CheckboxWidget(props: WidgetProps) {
  const {
    id,
    label,
    hideLabel,
    disabled,
    readonly,
    onBlur,
    onChange,
    onFocus,
    schema,
    value,
  } = props;

  const required = schemaRequiresTrueValue(schema);

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
        required={required}
        disabled={disabled || readonly}
        onCheckedChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <Label htmlFor={id}>{labelValue(label, hideLabel, false)}</Label>
    </div>
  );
}
