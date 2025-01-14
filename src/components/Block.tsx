import { JSX } from "solid-js";

type Props = JSX.IntrinsicElements["div"] & {
  title: string;
};

export function Block(props: Props) {
  return (
    <div class="flex flex-col">
      <span class="ml-2 text-lg font-medium">{props.title}</span>
      <div
        {...props}
        class={[
          "rounded-2xl bg-black/[0.04] p-2 ring-1 ring-black/[0.08]",
          props.class,
        ].join(" ")}
      >
        {props.children}
      </div>
    </div>
  );
}
