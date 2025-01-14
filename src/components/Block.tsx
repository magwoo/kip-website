import { JSX } from "solid-js";

type Props = JSX.IntrinsicElements["div"] & {
  title: string;
};

export function Block(props: Props) {
  return (
    <div class="flex flex-col gap-1">
      <span class="ml-2 text-lg font-medium">{props.title}</span>
      <div
        {...props}
        class={[
          "rounded-2xl bg-white/25 p-3 ring-1 ring-black/[0.04]",
          props.class,
        ].join(" ")}
      >
        {props.children}
      </div>
    </div>
  );
}
