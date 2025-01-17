import { JSX } from "solid-js";

type WorkBlockProps = JSX.IntrinsicElements["div"] & {
  work: any;
  index: number;
};

export function WorkBlock(props: WorkBlockProps) {
  const { work, index, ...attrs } = props;

  return (
    <div
      {...attrs}
      id={"work-" + work.title}
      class="flex h-[272px] justify-between gap-24 rounded-2xl bg-white/25 p-6 ring-1 ring-black/10"
    >
      <div class="flex h-full flex-col justify-between">
        <div class="flex flex-col">
          <h3 class="text-3xl font-semibold text-stone-800/75">{work.title}</h3>
          <p>{work.description}</p>
        </div>
        <div class="flex flex-col gap-2">
          <span class="font-medium">Референсы</span>
          <div class="flex items-center gap-3">
            <ReferenceItem
              src="/assets/wildberries-icon.png"
              alt="wildberries-icon"
              class="size-12 rounded-lg"
            />
            <span class="text-xl text-stone-800/25">|</span>
            <ReferenceItem
              src="/assets/ozon-icon.png"
              alt="ozon-icon"
              class="size-12 rounded-lg"
            />
            <span class="text-xl text-stone-800/25">|</span>
            <ReferenceItem
              src="/assets/aliexpress-icon.png"
              alt="aliexpress-icon"
              class="size-12 rounded-lg"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col items-end justify-between">
        <h3 class="text-3xl font-medium">#{index}</h3>
        <div class="flex flex-col items-end gap-4">
          <button class="rounded-lg bg-white/25 px-6 py-1 text-lg font-medium ring-1 ring-black/10 hover:brightness-90">
            Figma
          </button>
          <button class="rounded-lg bg-white/25 px-6 py-1 text-lg font-medium ring-1 ring-black/10 hover:brightness-90">
            Диаграммы
          </button>
          <button class="rounded-lg bg-slate-500 px-6 py-1 text-lg font-medium text-white ring-1 ring-black/10 hover:brightness-90">
            Перейти {"->"}
          </button>
        </div>
      </div>
    </div>
  );
}

type ReferenceItemProps = JSX.IntrinsicElements["img"];

export function ReferenceItem(props: ReferenceItemProps) {
  return (
    <div class="group relative size-12 cursor-pointer transition-all">
      <img {...props} class="relative z-10 size-12 rounded-lg" />
      <div class="absolute inset-0 rounded-xl bg-black/10 opacity-0 transition-all duration-200 group-hover:-inset-1 group-hover:opacity-100" />
    </div>
  );
}
