import {
  type FormContextType,
  type RJSFSchema,
  type StrictRJSFSchema,
  type WidgetProps,
  enumOptionsIndexForValue,
  enumOptionsValueForIndex,
} from "@rjsf/utils";

import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui/multi-select";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectWidget<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: WidgetProps<T, S, F>) {
  const {
    id,
    options,
    value,
    disabled,
    multiple = false,
    onChange,
    placeholder,
  } = props;
  const { enumOptions, enumDisabled, emptyValue } = options;

  const handleChange = (newValue: string | string[]) => {
    onChange(enumOptionsValueForIndex<S>(newValue, enumOptions, emptyValue));
  };

  const selectedIndexes = enumOptionsIndexForValue<S>(
    value,
    enumOptions,
    multiple,
  );

  if (multiple) {
    return (
      <MultiSelector
        values={
          typeof selectedIndexes !== "undefined"
            ? (selectedIndexes as string[])
            : emptyValue
        }
        onValuesChange={handleChange}
        enumOptions={enumOptions}
      >
        <MultiSelectorTrigger>
          <MultiSelectorInput placeholder={placeholder} />
        </MultiSelectorTrigger>
        <MultiSelectorContent>
          <MultiSelectorList>
            {Array.isArray(enumOptions) &&
              enumOptions.map(({ value, label }, i) => {
                const disabled =
                  enumDisabled && enumDisabled.indexOf(value) !== -1;
                return (
                  <MultiSelectorItem
                    key={i}
                    value={String(i)}
                    disabled={disabled}
                  >
                    {label}
                  </MultiSelectorItem>
                );
              })}
          </MultiSelectorList>
        </MultiSelectorContent>
      </MultiSelector>
    );
  } else {
    return (
      <Select
        value={
          typeof selectedIndexes !== "undefined"
            ? (selectedIndexes as string)
            : emptyValue
        }
        disabled={disabled}
        onValueChange={handleChange}
      >
        <SelectTrigger id={id}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {Array.isArray(enumOptions) &&
              enumOptions.map(({ value, label }, i) => {
                const disabled =
                  enumDisabled && enumDisabled.indexOf(value) !== -1;
                return (
                  <SelectItem key={i} value={String(i)} disabled={disabled}>
                    {label}
                  </SelectItem>
                );
              })}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  }
}
