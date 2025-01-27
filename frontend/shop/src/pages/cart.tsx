import { Button } from "@components/uikit/Button";
import { Icon } from "@components/Icon";
import { Nav } from "@components/Nav";
import { HStack, VStack } from "@components/uikit/Stack";
import { Block } from "@components/Block";
import { createSignal } from "solid-js";

export function CartPage() {
  return (
    <>
      <Nav />
      <main class="mt-12 flex w-full max-w-[1440px] flex-col gap-8 px-4">
        <h2 class="flex gap-3 text-xl font-medium text-stone-700">
          Корзина <span class="text-stone-400">2</span>
        </h2>
        <HStack class="gap-12">
          <VStack class="grow gap-6">
            <HStack class="justify-between border-b border-black/10 pb-2">
              <Button variant="transparent" size="md-inline">
                Выбрать все
              </Button>
              <Button variant="transparent" size="md-inline">
                Удалить выбранные
              </Button>
            </HStack>
            <VStack class="gap-6">
              <CartItem />
              <CartItem />
            </VStack>
          </VStack>
          <VStack class="w-[440px] gap-4">
            <Block>
              <span class="font-medium text-stone-700">
                1 товар на сумму 101 700 ₽
              </span>
            </Block>
            <Block class="gap-4">
              <HStack class="justify-between border-b border-black/10 pb-2">
                <span class="text-stone-600">Скидка:</span>
                <span class="text-stone-600">- 20 000 ₽</span>
              </HStack>
              <span class="font-medium text-stone-700">К оплате: 81 700 ₽</span>
              <Button variant="primary" size="lg">
                Оформить заказ
              </Button>
            </Block>
            <VStack class="gap-2">
              <span>Есть промокод?</span>
              <HStack class="flex gap-2">
                <input
                  type="text"
                  class="grow rounded-md bg-slate-200/50 px-4 py-2 text-stone-500 outline-none placeholder:text-stone-500/60"
                  placeholder="Промокод"
                />
                <Button variant="accent">Применить</Button>
              </HStack>
            </VStack>
          </VStack>
        </HStack>
      </main>
    </>
  );
}

export function CartItem() {
  const [amount, setAmount] = createSignal(1);

  return (
    <HStack class="justify-between">
      <HStack class="gap-6">
        <div class="size-4 rounded-sm border border-black/10" />
        <div class="h-[96px] w-[78px] rounded-md bg-stone-100" />
        <VStack class="justify-between">
          <VStack>
            <span class="font-medium text-accent">
              Apple iPhone 16 pro SIM 512 ГБ,
            </span>
            <span class="font-medium text-accent/75">“титановый белый”</span>
          </VStack>
          <HStack class="items-center gap-4">
            <span class="text-sm text-stone-600/25">10116PRO512WHTn</span>
            <Button variant="transparent" size="sm-inline">
              <Icon size="sm">favorite</Icon>В избранное
            </Button>
          </HStack>
        </VStack>
      </HStack>
      <HStack class="h-min min-w-16 items-center justify-between gap-2">
        <Button
          variant="transparent"
          size="lg-inline"
          onclick={() => setAmount((a) => --a)}
        >
          -
        </Button>
        <span class="text-accent/75">{amount()}</span>
        <Button
          variant="transparent"
          size="lg-inline"
          onclick={() => setAmount((a) => ++a)}
        >
          +
        </Button>
      </HStack>
      <HStack class="items-start gap-4">
        <VStack class="items-end">
          <span class="text-lg font-medium text-stone-600">199 990 ₽</span>
          <span class="text-sm font-medium text-stone-500/75 line-through">
            204 990 ₽
          </span>
        </VStack>
        <Button variant="transparent" size="md-inline" class="pt-[1px]">
          <Icon>close</Icon>
        </Button>
      </HStack>
    </HStack>
  );
}
