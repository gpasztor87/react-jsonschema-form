import { FocusEvent, useCallback } from "react";

import {
  type FormContextType,
  type RJSFSchema,
  type StrictRJSFSchema,
  type WidgetProps,
  enumOptionsIsSelected,
  enumOptionsValueForIndex,
  optionId,
} from "@rjsf/utils";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { cn } from "@/lib/utils";

export function RadioWidget<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: WidgetProps<T, S, F>) {
  const { id, options, disabled, readonly, value, onBlur, onChange, onFocus } =
    props;
  const { enumOptions, enumDisabled, inline, emptyValue } = options;

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
    [emptyValue, enumOptions, id, onBlur],
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

  const handleChange = useCallback(
    (value: string) => onChange(value),
    [onChange],
  );

  return (
    <RadioGroup
      name={id}
      onValueChange={handleChange}
      orientation={inline ? "horizontal" : "vertical"}
      className={cn(inline ? "flex gap-4" : "flex-col gap-2")}
      value={value}
    >
      {Array.isArray(enumOptions) &&
        enumOptions.map((option, i) => {
          const checked = enumOptionsIsSelected<S>(option.value, value);
          const itemDisabled =
            Array.isArray(enumDisabled) &&
            enumDisabled.indexOf(option.value) !== -1;

          return (
            <div key={i} className="flex items-center space-x-2">
              <RadioGroupItem
                id={optionId(id, i)}
                value={option.value}
                checked={checked}
                disabled={disabled || itemDisabled || readonly}
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
              <Label htmlFor={optionId(id, i)} className="cursor-pointer">
                {option.label}
              </Label>
            </div>
          );
        })}
    </RadioGroup>
  );
}
