import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import Header from "~/components/header/header";
import Footer from "~/components/footer/footer";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <div class="xl:pt-[var(--header-h-xl) relative min-h-screen pt-[var(--header-h)] lg:pt-[var(--header-h-lg)]">
      <Header />
      <main class="relative z-10 bg-light dark:bg-dark">
        <Slot />
      </main>

      <Footer />
    </div>
  );
});
