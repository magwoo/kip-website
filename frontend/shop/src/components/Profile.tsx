import { createSignal } from "solid-js";
import { Modal } from "./Modal";
import { Input } from "./uikit/Input";
import { HStack, VStack } from "./uikit/Stack";
import { Button } from "./uikit/Button";
import { Icon } from "./Icon";

type ProfileProps = {
  open: boolean;
  onclose: () => void;
};

export function Profile(props: ProfileProps) {
  return (
    <Modal
      open={props.open}
      onclose={props.onclose}
      class="flex w-[420px] flex-col gap-6 p-6"
    >
      <HStack class="justify-between">
        <h2 class="text-2xl font-medium text-accent">Личные данные</h2>
        <Button variant="transparent" size="md-inline" onclick={props.onclose}>
          <Icon class="text-accent/50 hover:text-accent/75" size="lg">
            close
          </Icon>
        </Button>
      </HStack>
      <VStack>
        <span class="text-accent/50">Имя</span>
        <Input placeholder="Борис" />
      </VStack>
      <VStack>
        <span class="text-accent/50">Телефон</span>
        <Input placeholder="+7 (987) 654-32-10" />
      </VStack>
      <HStack class="gap-6">
        <Button class="w-full" size="lg">
          Избранное
        </Button>
        <Button class="w-full" size="lg">
          История
        </Button>
      </HStack>
    </Modal>
  );
}
