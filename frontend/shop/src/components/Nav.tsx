import { A } from "@solidjs/router";
import { Icon } from "./Icon";
import { JSX } from "solid-js";

export function Nav() {
  return (
    <nav class="flex w-full justify-center border-b border-black/10">
      <div class="flex w-full max-w-[1440px] justify-between px-4 py-3">
        <div class="flex items-center gap-10">
          <NavLink href="/home">Telshop</NavLink>
          <NavLink href="/catalog">Товары</NavLink>
          <NavLink href="/stocks">Акции</NavLink>
        </div>
        <div class="flex items-center gap-6">
          <div class="flex w-64 items-center rounded-md bg-slate-200/50 px-2">
            <input
              type="text"
              placeholder="Найти.."
              class="grow bg-transparent text-sm text-stone-500 outline-none placeholder:text-stone-500/75"
            />
            <Icon class="text-xl text-stone-500/75">search</Icon>
          </div>
          <span class="text-stone-500/25">|</span>
          <NavLink href="/profile">
            <Icon>person</Icon>
          </NavLink>
          <NavLink href="/favourites">
            <Icon>favorite</Icon>
          </NavLink>
          <NavLink href="/cart">
            <Icon>shopping_bag</Icon>
          </NavLink>
        </div>
      </div>
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
