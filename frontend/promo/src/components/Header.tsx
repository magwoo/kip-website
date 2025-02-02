import { JSX } from "solid-js";
import { Block } from "./Block";
import { A } from "@solidjs/router";

type HeaderProps = JSX.IntrinsicElements["header"] & {
  works: any[];
};

export function Header(props: HeaderProps) {
  return (
    <header
      {...props}
      class="mt-32 flex w-full max-w-screen-xl justify-between gap-24 px-4"
    >
      <div class="flex flex-col gap-16">
        <div class="flex flex-col gap-2">
          <h1 class="text-7xl font-semibold text-stone-800">3ИСИП-722</h1>
          <h2 class="text-5xl font-medium text-stone-800/60">Смартфоны</h2>
        </div>
        <div class="flex flex-col items-start gap-10">
          <Block
            title="Лабораторные"
            class="grid grid-flow-row-dense grid-cols-6 gap-x-6 gap-y-3"
          >
            <A
              href="/js"
              class="font-medium text-stone-800/40 hover:text-stone-800/60"
            >
              19 задач
            </A>
          </Block>
          <a
            href="/assets/report.pdf"
            target="_blank"
            class="rounded-lg bg-white/25 px-6 py-1 font-medium ring-1 ring-black/10"
          >
            Отчет
          </a>
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
  cols: number;
};

export function WorkItem(props: WorkItemProps) {
  const { href, cols, ...attrs } = props;

  return (
    <div
      {...attrs}
      class={["flex items-center gap-2", props.class].join(" ")}
      style={`grid-column: span ${cols} / span ${cols}`}
    >
      <span class="select-none text-stone-800/25">|</span>
      <a
        href={href}
        title="перейти"
        class="font-medium transition-colors hover:text-stone-800/75"
      >
        {props.children}
      </a>
    </div>
  );
}
