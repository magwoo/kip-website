import { JSX } from "solid-js";

export function Nav() {
  return (
    <nav class="flex w-full justify-center bg-white/50 backdrop-blur-sm">
      <div class="flex w-full max-w-screen-2xl justify-between px-12 py-3">
        <div class="flex items-center gap-12">
          <NavLink class="text-stone-900/75">Главная</NavLink>
          <NavLink>Работы</NavLink>
          <NavLink>Отчеты</NavLink>
        </div>
        <NavLink class="flex items-center gap-4">
          <span>Бутин Роман</span>
          <img
            src="/assets/me-preview.png"
            alt="roman-preview"
            class="size-8"
          />
        </NavLink>
      </div>
    </nav>
  );
}

type NavLinkProps = JSX.IntrinsicElements["a"];

export function NavLink(props: NavLinkProps) {
  return (
    <a
      {...props}
      href={props.href ?? "#"}
      class={[
        "font-medium text-stone-900/50 transition-colors hover:text-stone-900",
        props.class,
      ].join(" ")}
    >
      {props.children}
    </a>
  );
}
