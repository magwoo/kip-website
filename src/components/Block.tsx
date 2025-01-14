import { JSX } from "solid-js";

type Props = JSX.IntrinsicElements["div"] & {
  title: string;
};

export function Block(props: Props) {
  return (
    <div {...props} class={["fit flex flex-col", props.class].join(" ")}>
      <span class="fit ml-2 text-lg font-medium">{props.title}</span>
      <div class="flex flex-wrap gap-x-3 gap-y-2 rounded-2xl bg-black/[0.04] p-2 ring-1 ring-black/[0.08]">
        {props.children}
      </div>
    </div>
  );
}
