import { type IconButtonProps, type SubmitButtonProps } from "@rjsf/utils";

import { Button } from "@/components/ui/button";

export function AddButton(props: IconButtonProps) {
  const { icon, iconType, ...btnProps } = props;
  return (
    <Button type="button" {...btnProps}>
      Add
    </Button>
  );
}

export function RemoveButton(props: IconButtonProps) {
  const { icon, iconType, ...btnProps } = props;
  return (
    <Button type="button" {...btnProps}>
      Remove
    </Button>
  );
}

export function MoveUpButton(props: IconButtonProps) {
  const { icon, iconType, ...btnProps } = props;
  return (
    <Button type="button" {...btnProps}>
      Move up
    </Button>
  );
}

export function MoveDownButton(props: IconButtonProps) {
  const { icon, iconType, ...btnProps } = props;
  return (
    <Button type="button" {...btnProps}>
      Move down
    </Button>
  );
}

export function CopyButton(props: IconButtonProps) {
  const { icon, iconType, ...btnProps } = props;
  return (
    <Button type="button" {...btnProps}>
      Copy
    </Button>
  );
}

export function SubmitButton(props: SubmitButtonProps) {
  return <Button type="submit">Submit</Button>;
}

export const ButtonTemplates = {
  AddButton,
  RemoveButton,
  MoveUpButton,
  MoveDownButton,
  CopyButton,
  SubmitButton,
} as const;
