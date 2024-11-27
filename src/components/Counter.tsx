import { createSignal } from "solid-js";

export function Counter() {
  const [counter, setCounter] = createSignal<number>(0);

  const increment = () => setCounter(counter() + 1);

  return (
    <section class="mt-64 flex flex-col items-center gap-6 rounded-lg bg-white px-6 py-4">
      <span class="text-2xl">{counter()}</span>
      <button
        class="rounded-md bg-stone-500 px-4 py-1 text-lg text-white transition-colors hover:bg-stone-600"
        onclick={increment}
      >
        add
      </button>
    </section>
  );
}
