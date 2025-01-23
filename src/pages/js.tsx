import { For, JSX, Show } from "solid-js";
import scripts from "../scripts.json";
import { A } from "@solidjs/router";

export function Js() {
  return (
    <section class="mx-12 mb-64 mt-12 flex flex-col items-start gap-12">
      <A
        href="/"
        class="rounded-md bg-blue-500 px-6 py-1 text-white transition-colors hover:bg-blue-600"
      >
        Вернуться на главную
      </A>
      <div class="flex w-full flex-col gap-2 divide-y">
        <For each={scripts}>
          {(item, index) => (
            <TaskItem
              index={index() + 1}
              title={item.title}
              html={item.html}
              script={item.script}
              isExec={item.exec}
            />
          )}
        </For>
      </div>
    </section>
  );
}

type TaskItemProps = JSX.IntrinsicElements["div"] & {
  index: number;
  title: string;
  html?: string;
  script: string;
  isExec?: boolean;
};

export function TaskItem(props: TaskItemProps) {
  const { index, title, html, script, isExec, ...attrs } = props;

  const exec = () => {
    isExec !== false && eval(script);
  };

  return (
    <div {...attrs} class="grid grid-cols-6 gap-8 pt-8">
      <span class="col-span-3">
        {index}. {title}
      </span>
      <pre class="col-span-2">{script}</pre>
      <Show when={html}>
        <div
          class="size-fit space-x-2 rounded-md bg-blue-500 px-4 py-2 text-white"
          ref={(h) => {
            h.innerHTML = html!;
            setTimeout(() => eval(script), 100);
          }}
        ></div>
      </Show>
      <Show when={!html}>
        <button
          onclick={exec}
          class="h-fit w-fit place-self-center self-center disabled:cursor-not-allowed disabled:opacity-50"
          disabled={isExec == false}
        >
          Запустить
        </button>
      </Show>
    </div>
  );
}
