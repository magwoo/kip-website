import { Nav } from "@components/Nav";
import { A } from "@solidjs/router";

export function Index() {
  return (
    <>
      <Nav />
      <section class="mt-64 flex flex-col items-center gap-4">
        <h1 class="text-4xl font-medium">3ИСИП-722</h1>
        <h2 class="text-xl opacity-50">тема: Смартфоны</h2>
      </section>
    </>
  );
}
