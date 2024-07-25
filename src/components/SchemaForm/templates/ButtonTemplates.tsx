import {
  type FormContextType,
  type IconButtonProps,
  type RJSFSchema,
  type StrictRJSFSchema,
  type SubmitButtonProps,
} from "@rjsf/utils";

import { Button } from "@/components/ui/button";

export function AddButton<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: IconButtonProps<T, S, F>) {
  const { icon, iconType, ...btnProps } = props;
  return (
    <Button type="button" {...btnProps}>
      Add
    </Button>
  );
}

export function RemoveButton<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: IconButtonProps<T, S, F>) {
  const { icon, iconType, ...btnProps } = props;
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
  const { icon, iconType, ...btnProps } = props;
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
  const { icon, iconType, ...btnProps } = props;
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
  const { icon, iconType, ...btnProps } = props;
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
  return <Button type="submit">Submit</Button>;
}
