import { JSX } from "solid-js";

export function Nav() {
  return (
    <nav class="flex w-full justify-center bg-white/50 backdrop-blur-sm">
      <div class="flex w-full max-w-screen-2xl justify-between px-4 py-3">
        <div class="flex items-center gap-12">
          <NavLink active>Главная</NavLink>
          <NavLink>Работы</NavLink>
          <NavLink>Отчеты</NavLink>
        </div>
        <NavLink class="flex items-center gap-4">
          <span>Бутин Роман</span>
          <img
            src="/assets/me-icon.png"
            alt="roman-preview"
            class="size-8 rounded-lg"
          />
        </NavLink>
      </div>
    </nav>
  );
}

type NavLinkProps = JSX.IntrinsicElements["a"] & {
  active?: boolean;
};

export function NavLink(props: NavLinkProps) {
  return (
    <a
      {...props}
      href={props.href ?? "#"}
      class={[
        "font-medium transition-colors hover:text-stone-800",
        props.class,
      ].join(" ")}
      classList={{
        "text-stone-800/50": !props.active,
        "text-stone-800/75": props.active,
      }}
    >
      {props.children}
    </a>
  );
}
