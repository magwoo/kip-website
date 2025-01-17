import { JSX } from "solid-js";

type ArrowProps = JSX.IntrinsicElements["svg"];

export function Arrow(props: ArrowProps) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
      <path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" />
    </svg>
  );
}