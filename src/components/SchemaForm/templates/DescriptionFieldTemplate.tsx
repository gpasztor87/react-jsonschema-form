import {
  type DescriptionFieldProps,
  type FormContextType,
  type RJSFSchema,
  type StrictRJSFSchema,
} from "@rjsf/utils";

export function DescriptionFieldTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: DescriptionFieldProps<T, S, F>) {
  const { description, id } = props;

  if (description === undefined || description === "") {
    return null;
  }

  if (typeof description === "string") {
    return (
      <p id={id} className="text-sm text-destructive">
        {description}
      </p>
    );
  } else {
    return (
      <div id={id} className="text-sm text-muted-foreground">
        {description}
      </div>
    );
  }
}
