import { A } from "@solidjs/router";
import { Icon } from "./Icon";
import { JSX } from "solid-js";
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
            <Icon class="text-2xl">person</Icon>
          </Link>
          <Link href="/favorite">
            <Icon class="text-2xl">favorite</Icon>
          </Link>
          <Link href="/cart">
            <Icon class="text-2xl">shopping_bag</Icon>
          </Link>
        </HStack>
      </HStack>
    </nav>
  );
}

type NavLinkProps = JSX.IntrinsicElements["a"] & {
  href: string;
};

export function NavLink(props: NavLinkProps) {
  return (
    <A
      {...props}
      class={[
        "flex font-medium text-stone-500 transition-colors hover:text-stone-600",
        props.class,
      ].join(" ")}
      activeClass="text-blue-500"
    ></A>
  );
}
