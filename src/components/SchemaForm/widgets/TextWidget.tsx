import { ChangeEvent, FocusEvent, useCallback } from "react";

import { WidgetProps, getInputProps } from "@rjsf/utils";

import { Input } from "@/components/ui/input";

export function TextWidget(props: WidgetProps) {
  const {
    id,
    name,
    onBlur,
    onChange,
    onFocus,
    autofocus,
    readonly,
    disabled,
    options,
    schema,
  } = props;
  const inputProps = getInputProps(schema, undefined, options);

  const handleChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      onChange(value === "" ? options.emptyValue : value),
    [onChange, options],
  );

  const handleBlur = useCallback(
    ({ target }: FocusEvent<HTMLInputElement>) =>
      onBlur(id, target && target.value),
    [onBlur, id],
  );

  const handleFocus = useCallback(
    ({ target }: FocusEvent<HTMLInputElement>) =>
      onFocus(id, target && target.value),
    [onFocus, id],
  );

  return (
    <Input
      id={id}
      name={name}
      readOnly={readonly}
      disabled={disabled}
      autoFocus={autofocus}
      {...inputProps}
      onBlur={handleBlur}
      onChange={handleChange}
      onFocus={handleFocus}
    />
  );
}
