import { JSX } from "solid-js";

type IconProps = JSX.IntrinsicElements["span"];

export function Icon(props: IconProps) {
  return (
    <span
      {...props}
      class={["material-symbols-outlined", props.class].join(" ")}
    >
      {props.children}
    </span>
  );
}
