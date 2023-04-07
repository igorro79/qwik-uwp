import { component$, Slot, useSignal, useVisibleTask$ } from "@builder.io/qwik";

import Header from "~/components/header/header";
import Footer from "~/components/footer/footer";
import { useWindowScroll } from "~/hooks/useWindowScroll";

export default component$(() => {
  const show = useSignal(true);
  const position = useSignal(0);
  const pos = useWindowScroll();

  useVisibleTask$(({ track }) => {
    track(pos);
    if (pos.value === 0 && show.value === false) {
      show.value = true;
      position.value = pos.value;
      return;
    }
    if (pos.value > 300 && pos.value > position.value) {
      show.value = false;
      position.value = pos.value;
      return;
    }
    if (pos.value !== 0 && pos.value <= position.value) {
      show.value = true;
      position.value = pos.value;
      return;
    }
  });

  return (
    <div class="xl:pt-[var(--header-h-xl) relative min-h-screen pt-[var(--header-h)] lg:pt-[var(--header-h-lg)]">
      <Header
        class={!show.value ? "invisible opacity-0" : "visible opacity-100"}
      />
      <main class="relative z-10 bg-light dark:bg-dark">
        <Slot />
      </main>

      <Footer />
    </div>
  );
});
