import {
  type FormContextType,
  type RJSFSchema,
  type StrictRJSFSchema,
  type WidgetProps,
  getTemplate,
} from "@rjsf/utils";

export function UpDownWidget<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: WidgetProps<T, S, F>) {
  const { options, registry } = props;

  const BaseInputTemplate = getTemplate<"BaseInputTemplate", T, S, F>(
    "BaseInputTemplate",
    registry,
    options,
  );

  return <BaseInputTemplate {...props} />;
}
