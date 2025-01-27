import { JSX, Show } from "solid-js";

type ButtonProps = JSX.IntrinsicElements["button"] & {
  variant?: "neutral" | "accent" | "primary" | "transparent";
  size?: "md" | "lg" | "sm-inline" | "md-inline" | "lg-inline";
  icon?: JSX.Element;
};

export function Button(props: ButtonProps) {
  const { variant, size, icon, ...attrs } = props;

  const variantClass = {
    neutral: "bg-neutral/50 text-accent/50",
    accent: "bg-accent text-white",
    primary: "bg-primary text-white",
    transparent: "text-accent/50 hover:text-accent/75",
  }[variant ?? "neutral"];

  const sizeClass = {
    md: "px-6 py-1 rounded-md text-base",
    lg: "px-6 py-2 rounded-md text-lg",
    "sm-inline": "text-sm",
    "md-inline": "text-base",
    "lg-inline": "text-lg",
  }[size ?? "md"];

  return (
    <button
      {...attrs}
      class={[
        "flex items-center justify-center gap-1 hover:brightness-95",
        variantClass,
        sizeClass,
        props.class,
      ].join(" ")}
    >
      <Show when={icon}>{icon}</Show>
      {props.children}
    </button>
  );
}
