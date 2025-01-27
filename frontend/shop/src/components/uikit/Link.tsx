import { A } from "@solidjs/router";
import { JSX } from "solid-js";

export type LinkProps = JSX.IntrinsicElements["a"] & {
  variant?: "base";
  size?: "md";
  href: string;
};

export function Link(props: LinkProps) {
  const { variant, size, ...attrs } = props;

  const varaintClass = {
    base: "text-accent/75 hover:text-accent",
  }[variant ?? "base"];

  const sizeClass = {
    md: "text-base",
  }[size ?? "md"];

  return (
    <A
      {...attrs}
      class={["flex", varaintClass, sizeClass, props.class].join(" ")}
    >
      {props.children}
    </A>
  );
}
