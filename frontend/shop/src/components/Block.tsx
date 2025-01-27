import { VStack, StackProps } from "./uikit/Stack";

export type BlockProps = StackProps;

export function Block(props: BlockProps) {
  const { ...attrs } = props;

  return (
    <VStack
      {...attrs}
      class={["rounded-md bg-neutral/50 p-4", props.class].join(" ")}
    />
  );
}
