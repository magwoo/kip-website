import { Icon } from "./Icon";
import { HStack } from "./uikit/Stack";
import { Link } from "./uikit/Link";
import { useSearchParams } from "@solidjs/router";
import { Profile } from "./Profile";
import { createSignal } from "solid-js";
import { Button } from "./uikit/Button";
import { Input } from "./uikit/Input";

export function Nav() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <nav class="flex w-full justify-center border-b border-black/10">
      <Profile
        open={!!searchParams.profile}
        onclose={() => setSearchParams({ profile: undefined })}
      />
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
          <Input
            placeholder="Найти..."
            class="w-48"
            size="sm"
            after={
              <Icon class="text-accent/50" size="sm">
                search
              </Icon>
            }
          />
          <span class="text-stone-500/25">|</span>
          <Button
            variant="transparent"
            size="lg-inline"
            onclick={() => setSearchParams({ profile: "open" })}
          >
            <Icon size="lg" class="text-accent/75 hover:text-accent">
              person
            </Icon>
          </Button>
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
