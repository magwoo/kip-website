export function Gradients() {
  return (
    <div class="absolute inset-0 -z-10 overflow-clip">
      <div class="relative mx-auto h-full w-full max-w-screen-xl">
        <div class="absolute -bottom-[100%] -left-32 -top-[100%] w-[900px] rotate-12 bg-gradient-to-r from-pink-600/0 via-pink-600/5 to-pink-600/0" />
        <div class="absolute -bottom-[100%] -top-[100%] right-0 w-[900px] rotate-45 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-blue-600/0" />
      </div>
    </div>
  );
}
