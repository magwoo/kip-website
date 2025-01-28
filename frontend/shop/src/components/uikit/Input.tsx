import { JSX } from "solid-js";
import { HStack } from "./Stack";

export type InputProps = JSX.IntrinsicElements["input"] & {
  containerClass?: string;
  before?: JSX.Element;
  after?: JSX.Element;
  size?: "sm" | "md";
};

export function Input(props: InputProps) {
  const { containerClass, before, after, size, ...attrs } = props;

  const sizeClass = {
    sm: "px-2 text-sm",
    md: "px-3 py-2 text-base",
  }[size ?? "md"];

  return (
    <HStack
      class={["rounded-md bg-neutral/50", sizeClass, containerClass].join(" ")}
    >
      {before}
      <input
        {...attrs}
        class={[
          "grow bg-transparent text-accent outline-none placeholder:text-accent/50",
          props.class,
        ].join(" ")}
      />
      {after}
    </HStack>
  );
}
