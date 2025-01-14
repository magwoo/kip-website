import { For, JSX } from "solid-js";
import { Block } from "./Block";

const works = [
  { title: "Работа 1", href: "#" },
  { title: "Работа 1", href: "#" },
  { title: "Работа 1", href: "#" },
  { title: "Работа 1", href: "#" },
  { title: "Работа 1", href: "#" },
  { title: "Работа 1", href: "#" },
  { title: "Работа 1", href: "#" },
  { title: "Работа 1", href: "#" },
  { title: "Работа 1", href: "#" },
  { title: "Работа 1", href: "#" },
  { title: "Работа 1", href: "#" },
  { title: "Работа 1", href: "#" },
];

export function Header() {
  return (
    <header class="mt-24 flex w-full max-w-screen-xl justify-between gap-24 px-4">
      <div class="flex flex-col gap-16">
        <div class="flex flex-col gap-2">
          <h1 class="text-7xl font-semibold text-stone-800">3ИСИП-322</h1>
          <h2 class="text-5xl font-medium text-stone-800/60">Смартфоны</h2>
        </div>
        <div class="flex flex-col gap-10">
          <Block title="Работы" class="grid grid-cols-5 gap-x-4 gap-y-2">
            <For each={works}>
              {(work, index) => (
                <WorkItem href={work.href}>Работа {index()}</WorkItem>
              )}
            </For>
          </Block>
          <Block
            title="Отчеты"
            class="grid grid-flow-row-dense grid-cols-5 gap-x-4 gap-y-2"
          >
            <For each={works}>
              {(work, index) => (
                <WorkItem href={work.href}>Отчет {index()}</WorkItem>
              )}
            </For>
          </Block>
        </div>
      </div>
      <img
        src="/assets/me-preview.jpg"
        alt="roman-preview"
        class="aspect-[4/5] w-[40%] rounded-2xl object-cover"
      />
    </header>
  );
}

type WorkItemProps = JSX.IntrinsicElements["div"] & {
  href?: string;
};

export function WorkItem(props: WorkItemProps) {
  return (
    <div {...props} class={["flex items-center gap-2", props.class].join(" ")}>
      <span class="select-none text-stone-800/25">|</span>
      <a
        href={props.href}
        class="font-medium transition-colors hover:text-stone-800/75"
      >
        {props.children}
      </a>
    </div>
  );
}
