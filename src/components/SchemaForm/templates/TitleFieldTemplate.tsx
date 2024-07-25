import { type TitleFieldProps, getUiOptions } from "@rjsf/utils";

export function TitleFieldTemplate(props: TitleFieldProps) {
  const { id, title, uiSchema } = props;
  const uiOptions = getUiOptions(uiSchema);

  return (
    <div id={id}>
      <h5 className="mb-2 text-xl font-medium leading-tight">
        {uiOptions.title || title}
      </h5>
      <hr className="my-4 border-t border-muted" />
    </div>
  );
}
