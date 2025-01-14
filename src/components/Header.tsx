export function Header() {
  return (
    <header class="mt-24 flex w-full max-w-screen-xl justify-between gap-24 px-4">
      <div class="flex flex-col gap-12">
        <div class="flex flex-col gap-2">
          <h1 class="text-7xl font-semibold text-stone-800">3ИСИП-322</h1>
          <h2 class="text-5xl font-medium text-stone-800/60">Смартфоны</h2>
        </div>
      </div>
      <img
        src="/assets/me-preview.jpg"
        alt="roman-preview"
        class="w-[40%] rounded-2xl"
      />
    </header>
  );
}
