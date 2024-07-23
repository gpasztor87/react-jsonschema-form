import { FocusEvent, useCallback } from "react";

import {
  type WidgetProps,
  enumOptionsDeselectValue,
  enumOptionsIsSelected,
  enumOptionsSelectValue,
  enumOptionsValueForIndex,
  optionId,
} from "@rjsf/utils";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import { cn } from "@/lib/utils";

export function CheckboxesWidget(props: WidgetProps) {
  const { id, disabled, readonly, value, onBlur, onChange, onFocus, options } =
    props;

  const { enumOptions, enumDisabled, emptyValue } = options;
  const checkboxesValues = Array.isArray(value) ? value : [value];
  const row = options ? options.inline : false;

  const handleBlur = useCallback(
    ({ target }: FocusEvent<HTMLButtonElement>) =>
      onBlur(
        id,
        enumOptionsValueForIndex(
          target && target.value,
          enumOptions,
          emptyValue,
        ),
      ),
    [onBlur, id, enumOptions, emptyValue],
  );

  const handleFocus = useCallback(
    ({ target }: FocusEvent<HTMLButtonElement>) =>
      onFocus(
        id,
        enumOptionsValueForIndex(
          target && target.value,
          enumOptions,
          emptyValue,
        ),
      ),
    [onFocus, id, enumOptions, emptyValue],
  );

  return (
    <div
      className={cn(
        "flex items-start",
        row ? "flex-row space-x-4 space-y-0" : "flex-col space-y-3 space-x-0",
      )}
    >
      {Array.isArray(enumOptions) &&
        enumOptions.map((option, index) => {
          const checked = enumOptionsIsSelected(option.value, checkboxesValues);
          const itemDisabled =
            Array.isArray(enumDisabled) &&
            enumDisabled.indexOf(option.value) !== -1;

          const handleChange = (checked: boolean) => {
            if (checked) {
              onChange(
                enumOptionsSelectValue(index, checkboxesValues, enumOptions),
              );
            } else {
              onChange(
                enumOptionsDeselectValue(index, checkboxesValues, enumOptions),
              );
            }
          };

          return (
            <div key={index} className="flex items-center space-x-2">
              <Checkbox
                id={optionId(id, index)}
                name={id}
                value={String(index)}
                checked={checked}
                onCheckedChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                disabled={disabled || itemDisabled || readonly}
              />
              {option.label && (
                <Label htmlFor={optionId(id, index)}>{option.label}</Label>
              )}
            </div>
          );
        })}
    </div>
  );
}
