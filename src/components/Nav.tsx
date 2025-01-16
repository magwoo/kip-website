import { JSX } from "solid-js";
import { GithubIcon } from "./icons/github";

export function Nav() {
  return (
    <nav class="fixed flex w-full justify-center bg-white/75 backdrop-blur-md">
      <div class="flex w-full max-w-screen-xl justify-between px-4 py-3">
        <div class="flex items-center gap-8">
          <NavLink active>Главная</NavLink>
          <NavLink>Работы</NavLink>
          <NavLink>Отчеты</NavLink>
        </div>
        <div class="flex flex-row-reverse items-center gap-4">
          <a
            href="https://github.com/magwoo/kip-website"
            target="_blank"
            title="github проекта"
          >
            <GithubIcon class="size-8 opacity-60 transition-opacity hover:opacity-100" />
          </a>
          <span class="select-none">|</span>
          <NavLink class="flex items-center gap-4">
            <span>Бутин Роман</span>
            <img
              src="/assets/me-icon.jpg"
              alt="roman-preview"
              class="size-8 rounded-lg"
            />
          </NavLink>
        </div>
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
