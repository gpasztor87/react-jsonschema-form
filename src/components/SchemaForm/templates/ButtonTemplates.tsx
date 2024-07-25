import {
  type FormContextType,
  type IconButtonProps,
  type RJSFSchema,
  type StrictRJSFSchema,
  type SubmitButtonProps,
  TranslatableString,
  getSubmitButtonOptions,
} from "@rjsf/utils";
import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export function AddButton<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: IconButtonProps<T, S, F>) {
  const { uiSchema, registry, ...btnProps } = props;
  const { translateString } = registry;

  return (
    <Button type="button" variant="secondary" {...btnProps}>
      <PlusIcon className="h-4 w-4 mr-2" />
      {translateString(TranslatableString.AddItemButton)}
    </Button>
  );
}

export function RemoveButton<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: IconButtonProps<T, S, F>) {
  const { uiSchema, registry, ...btnProps } = props;

  return (
    <Button type="button" {...btnProps}>
      Remove
    </Button>
  );
}

export function MoveUpButton<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: IconButtonProps<T, S, F>) {
  const { uiSchema, registry, ...btnProps } = props;

  return (
    <Button type="button" {...btnProps}>
      Move up
    </Button>
  );
}

export function MoveDownButton<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: IconButtonProps<T, S, F>) {
  const { uiSchema, registry, ...btnProps } = props;

  return (
    <Button type="button" {...btnProps}>
      Move down
    </Button>
  );
}

export function CopyButton<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: IconButtonProps<T, S, F>) {
  const { uiSchema, registry, ...btnProps } = props;

  return (
    <Button type="button" {...btnProps}>
      Copy
    </Button>
  );
}

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
