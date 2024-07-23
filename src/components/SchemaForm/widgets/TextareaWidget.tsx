import { ChangeEvent, FocusEvent, useCallback } from "react";

import { WidgetProps } from "@rjsf/utils";

import { Textarea } from "@/components/ui/textarea";

export function TextareaWidget(props: WidgetProps) {
  const {
    id,
    name,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    autofocus,
    disabled,
    readonly,
    options,
  } = props;

  const handleChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) =>
      onChange(value === "" ? options.emptyValue : value),
    [onChange, options],
  );

  const handleBlur = useCallback(
    ({ target }: FocusEvent<HTMLTextAreaElement>) =>
      onBlur(id, target && target.value),
    [onBlur, id],
  );

  const handleFocus = useCallback(
    ({ target }: FocusEvent<HTMLTextAreaElement>) =>
      onFocus(id, target && target.value),
    [onFocus, id],
  );

  return (
    <Textarea
      id={id}
      name={name}
      autoFocus={autofocus}
      placeholder={placeholder}
      disabled={disabled || readonly}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
      rows={options.rows}
    />
  );
}
