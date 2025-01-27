import { JSX } from "solid-js";

export type StackProps = JSX.IntrinsicElements["div"];

export function VStack(props: StackProps) {
  const { ...attrs } = props;

  return (
    <div {...attrs} class={["flex flex-col", props.class].join(" ")}>
      {props.children}
    </div>
  );
}

export function HStack(props: StackProps) {
  const { ...attrs } = props;

  return (
    <div {...attrs} class={["flex", props.class].join(" ")}>
      {props.children}
    </div>
  );
}
