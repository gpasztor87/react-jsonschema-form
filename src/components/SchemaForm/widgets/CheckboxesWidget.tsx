import { FocusEvent, useCallback } from "react";

import {
  type FormContextType,
  type RJSFSchema,
  type StrictRJSFSchema,
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

export function CheckboxesWidget<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: WidgetProps<T, S, F>) {
  const { id, disabled, readonly, value, onBlur, onChange, onFocus, options } =
    props;

  const { enumOptions, enumDisabled, emptyValue } = options;
  const checkboxesValues = Array.isArray(value) ? value : [value];
  const row = options ? options.inline : false;

  const handleBlur = useCallback(
    ({ target }: FocusEvent<HTMLButtonElement>) =>
      onBlur(
        id,
        enumOptionsValueForIndex<S>(
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
        enumOptionsValueForIndex<S>(
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
          const checked = enumOptionsIsSelected<S>(
            option.value,
            checkboxesValues,
          );
          const itemDisabled =
            Array.isArray(enumDisabled) &&
            enumDisabled.indexOf(option.value) !== -1;

          const handleChange = (checked: boolean) => {
            if (checked) {
              onChange(
                enumOptionsSelectValue<S>(index, checkboxesValues, enumOptions),
              );
            } else {
              onChange(
                enumOptionsDeselectValue<S>(
                  index,
                  checkboxesValues,
                  enumOptions,
                ),
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
                <Label htmlFor={optionId(id, index)} className="cursor-pointer">
                  {option.label}
                </Label>
              )}
            </div>
          );
        })}
    </div>
  );
}
