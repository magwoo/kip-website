import { JSX, Show } from "solid-js";

type ModalProps = JSX.IntrinsicElements["div"] & {
  open: boolean;
  onclose: () => any;
};

export function Modal(props: ModalProps) {
  const { open, onclose, ...attrs } = props;

  return (
    <Show when={props.open}>
      <div
        class="fixed inset-0 z-40 flex items-center justify-center bg-black/35 pb-[25vh] backdrop-blur-sm"
        onclick={(e) => {
          props.onclose();
          e.stopPropagation();
        }}
      >
        <div
          {...attrs}
          class={["rounded-2xl bg-white", props.class].join(" ")}
          onclick={(e) => e.stopPropagation()}
        >
          {props.children}
        </div>
      </div>
    </Show>
  );
}
