import { createSignal, JSX } from "solid-js";
import { Arrow } from "./icons/Arrow";
import { Modal } from "./Modal";

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
              imgUrl="cart/wildberries.png"
              title="Wildberries"
              src="/assets/wildberries-icon.png"
              alt="wildberries-icon"
              class="size-12 rounded-lg"
            />
            <span class="text-xl text-stone-800/25">|</span>
            <ReferenceItem
              imgUrl="cart/ozon.png"
              title="Ozon"
              src="/assets/ozon-icon.png"
              alt="ozon-icon"
              class="size-12 rounded-lg"
            />
            <span class="text-xl text-stone-800/25">|</span>
            <ReferenceItem
              imgUrl="cart/aliexpress.png"
              title="Aliexpress"
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
          <button class="flex gap-1 rounded-lg bg-slate-500 px-6 py-1 text-lg font-medium text-white ring-1 ring-black/10 hover:brightness-90">
            Перейти <Arrow class="h-full fill-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

type ReferenceItemProps = JSX.IntrinsicElements["img"] & {
  title: string;
  imgUrl: string;
};

export function ReferenceItem(props: ReferenceItemProps) {
  const { title, imgUrl, ...attrs } = props;

  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <>
      <Modal
        open={isOpen()}
        onclose={() => setIsOpen(false)}
        class="mx-12 flex w-full max-w-screen-2xl flex-col gap-4 p-4"
      >
        <div class="flex w-full justify-between">
          <h1 class="text-3xl font-semibold text-stone-700">
            Референс {title}
          </h1>
          <button
            title="Закрыть"
            class="flex size-8 items-center justify-center rounded-lg text-xl transition-colors hover:bg-red-500 hover:text-white"
            onclick={() => setIsOpen(false)}
          >
            ✗
          </button>
        </div>
        <img
          src={"/assets/references/" + imgUrl}
          alt="reference-preview"
          class="w-full rounded-lg ring-1 ring-black/10"
        />
      </Modal>
      <button
        class="group relative size-12 cursor-pointer transition-all"
        onclick={() => setIsOpen(true)}
      >
        <img {...attrs} class="relative z-10 size-12 rounded-lg" />
        <div class="absolute inset-0 rounded-lg bg-black/10 opacity-0 transition-all duration-200 group-hover:-inset-1 group-hover:rounded-xl group-hover:opacity-100" />
      </button>
    </>
  );
}
