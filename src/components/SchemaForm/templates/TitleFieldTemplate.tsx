import type { TitleFieldProps } from "@rjsf/utils";

export function TitleFieldTemplate(props: TitleFieldProps) {
  const { id, title } = props;

  return (
    <h6 id={id} className="flex font-semibold">
      {title}
    </h6>
  );
}
