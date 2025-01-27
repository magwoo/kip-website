import { JSX } from "solid-js";

export type IconProps = JSX.IntrinsicElements["span"] & {
  size?: "sm" | "md" | "lg";
};

export function Icon(props: IconProps) {
  const { size, ...attrs } = props;

  const sizeClass = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }[size ?? "md"];

  return (
    <span
      {...attrs}
      class={["material-symbols-outlined", sizeClass, props.class].join(" ")}
    >
      {props.children}
    </span>
  );
}
