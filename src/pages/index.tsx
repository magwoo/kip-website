import { Gradients } from "@components/Background";
import { Header } from "@components/Header";
import { Modal } from "@components/Modal";
import { Nav } from "@components/Nav";
import { Search } from "@components/Search";
import { WorkBlock } from "@components/WorkBlock";
import { For } from "solid-js";

const works = [
  {
    title: "Корзина",
    description: "Описание проделанной работы примерно средней такой длины",
  },
  {
    title: "Поиск",
    description: "Описание проделанной работы примерно средней такой длины",
  },
  {
    title: "Карточка товара",
    description: "Описание проделанной работы примерно средней такой длины",
    cols: 2,
  },
];

export function Index() {
  return (
    <>
      <Nav />
      <Header works={works} />
      <Search />
      <div class="mb-96 mt-8 grid w-full max-w-screen-xl grid-cols-2 gap-8 px-4">
        <For each={works}>
          {(work, index) => <WorkBlock work={work} index={index() + 1} />}
        </For>
      </div>
      <Gradients />
    </>
  );
}
