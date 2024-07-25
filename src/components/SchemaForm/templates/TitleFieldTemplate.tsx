import {
  type FormContextType,
  type RJSFSchema,
  type StrictRJSFSchema,
  type TitleFieldProps,
  getUiOptions,
} from "@rjsf/utils";

export function TitleFieldTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: TitleFieldProps<T, S, F>) {
  const { id, title, uiSchema } = props;
  const uiOptions = getUiOptions<T, S, F>(uiSchema);

  return (
    <div id={id}>
      <h5 className="mb-2 text-xl font-medium leading-tight">
        {uiOptions.title || title}
      </h5>
      <hr className="my-4 border-t border-muted" />
    </div>
  );
}
