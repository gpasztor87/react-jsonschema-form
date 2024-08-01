import {
  MouseEvent,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";

import {
  type DateElementFormat,
  type DateObject,
  type FormContextType,
  type RJSFSchema,
  type StrictRJSFSchema,
  TranslatableString,
  type WidgetProps,
  dateRangeOptions,
  getDateElementProps,
  parseDateString,
  toDateString,
} from "@rjsf/utils";

import { Button } from "@/components/ui/button";

function readyForChange(state: DateObject) {
  return Object.values(state).every((value) => value !== -1);
}

type DateElementProps<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
> = Pick<
  WidgetProps<T, S, F>,
  | "value"
  | "name"
  | "disabled"
  | "readonly"
  | "autofocus"
  | "registry"
  | "onBlur"
  | "onFocus"
> & {
  rootId: string;
  select: (property: keyof DateObject, value: any) => void;
  type: string;
  range: [number, number];
};

function DateElement<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>({
  type,
  range,
  value,
  select,
  rootId,
  name,
  disabled,
  readonly,
  autofocus,
  registry,
  onBlur,
  onFocus,
}: DateElementProps<T, S, F>) {
  const id = rootId + "_" + type;
  const { SelectWidget } = registry.widgets;

  return (
    <SelectWidget
      schema={{ type: "integer" } as S}
      id={id}
      name={name}
      options={{ enumOptions: dateRangeOptions<S>(range[0], range[1]) }}
      placeholder={type}
      value={value}
      disabled={disabled}
      readonly={readonly}
      autofocus={autofocus}
      onChange={(value: any) => select(type as keyof DateObject, value)}
      onBlur={onBlur}
      onFocus={onFocus}
      registry={registry}
      label=""
    />
  );
}

export function AltDateWidget<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: WidgetProps<T, S, F>) {
  const {
    time = false,
    disabled = false,
    readonly = false,
    autofocus = false,
    options,
    id,
    name,
    registry,
    onBlur,
    onFocus,
    onChange,
    value,
  } = props;

  const { translateString } = registry;
  const [lastValue, setLastValue] = useState(value);
  const [state, setState] = useReducer(
    (state: DateObject, action: Partial<DateObject>) => {
      return { ...state, ...action };
    },
    parseDateString(value, time),
  );

  useEffect(() => {
    const stateValue = toDateString(state, true);
    if (readyForChange(state) && stateValue !== value) {
      onChange(value);
      setState(parseDateString(value, time));
    } else if (lastValue !== value) {
      setLastValue(value);
      setState(parseDateString(value, time));
    }
  }, [time, value, state, onChange, lastValue]);

  const handleChange = useCallback(
    (property: keyof DateObject, value: string) => {
      setState({ [property]: value });
    },
    [],
  );

  const handleSetNow = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      if (disabled || readonly) {
        return;
      }
      const nextState = parseDateString(new Date().toJSON(), time);
      onChange(toDateString(nextState, time));
    },
    [disabled, onChange, readonly, time],
  );

  const handleClear = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      if (disabled || readonly) {
        return;
      }

      onChange(undefined);
    },
    [disabled, readonly, onChange],
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-stretch gap-2">
        {getDateElementProps(
          state,
          time,
          options.yearsRange as [number, number] | undefined,
          options.format as DateElementFormat | undefined,
        ).map((elemProps, i) => (
          <DateElement
            key={i}
            rootId={id}
            name={name}
            select={handleChange}
            {...elemProps}
            disabled={disabled}
            readonly={readonly}
            registry={registry}
            onBlur={onBlur}
            onFocus={onFocus}
            autofocus={autofocus && i === 0}
          />
        ))}
      </div>
      <div className="flex flex-row gap-4">
        {(options.hideNowButton !== "undefined"
          ? !options.hideNowButton
          : true) && (
          <Button variant="outline" onClick={handleSetNow}>
            {translateString(TranslatableString.NowLabel)}
          </Button>
        )}
        {(options.hideClearButton !== "undefined"
          ? !options.hideClearButton
          : true) && (
          <Button variant="outline" onClick={handleClear}>
            {translateString(TranslatableString.ClearLabel)}
          </Button>
        )}
      </div>
    </div>
  );
}
