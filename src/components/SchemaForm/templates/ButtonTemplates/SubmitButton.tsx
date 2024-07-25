import {
  type FormContextType,
  type RJSFSchema,
  type StrictRJSFSchema,
  type SubmitButtonProps,
  getSubmitButtonOptions,
} from "@rjsf/utils";

import { Button } from "@/components/ui/button";

export function SubmitButton<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: SubmitButtonProps<T, S, F>) {
  const { uiSchema } = props;
  const {
    submitText,
    norender,
    props: submitButtonProps = {},
  } = getSubmitButtonOptions<T, S, F>(uiSchema);

  if (norender) {
    return null;
  }

  return (
    <Button type="submit" {...submitButtonProps}>
      {submitText}
    </Button>
  );
}
