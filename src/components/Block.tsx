import { JSX } from "solid-js";

type Props = JSX.IntrinsicElements["div"] & {
  title: string;
};

export function Block(props: Props) {
  const { title, ...attrs } = props;

  return (
    <div class="flex flex-col gap-1">
      <span class="ml-2 text-lg font-medium">{title}</span>
      <div
        {...attrs}
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
