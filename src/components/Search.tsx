import { SearchIcon } from "./icons/Search";

export function Search() {
  return (
    <section class="mt-16 flex w-full max-w-screen-xl flex-col items-start gap-6 px-4">
      <h1 class="text-6xl font-semibold text-stone-800">Работы</h1>
      <div class="flex w-full gap-8">
        <div class="flex w-full items-center gap-2 rounded-2xl bg-white/50 px-3 ring-1 ring-black/5">
          <SearchIcon class="size-6 fill-stone-800/50" />
          <input
            type="text"
            placeholder="Найти..."
            class="text-semibold w-full bg-transparent py-1.5 text-lg text-stone-800/75 outline-none placeholder:text-stone-800/50"
          />
        </div>
      </div>
    </section>
  );
}
