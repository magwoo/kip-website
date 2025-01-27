import { Icon } from "./Icon";
import { HStack } from "./uikit/Stack";
import { Link } from "./uikit/Link";

export function Nav() {
  return (
    <nav class="flex w-full justify-center border-b border-black/10">
      <HStack class="w-full max-w-[1440px] justify-between px-4 py-3">
        <HStack class="items-center gap-10">
          <Link href="/home" class="font-medium">
            Telshop
          </Link>
          <Link href="/catalog" class="font-medium">
            Товары
          </Link>
          <Link href="/stocks" class="font-medium">
            Акции
          </Link>
        </HStack>
        <HStack class="items-center gap-6">
          <HStack class="w-64 items-center rounded-md bg-slate-200/50 px-2">
            <input
              type="text"
              placeholder="Найти.."
              class="grow bg-transparent text-sm text-stone-500 outline-none placeholder:text-stone-500/75"
            />
            <Icon class="text-xl text-stone-500/75">search</Icon>
          </HStack>
          <span class="text-stone-500/25">|</span>
          <Link href="/profile">
            <Icon size="lg">person</Icon>
          </Link>
          <Link href="/favorite">
            <Icon size="lg">favorite</Icon>
          </Link>
          <Link href="/cart">
            <Icon size="lg">shopping_bag</Icon>
          </Link>
        </HStack>
      </HStack>
    </nav>
  );
}
