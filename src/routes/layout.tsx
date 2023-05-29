import {
  Slot,
  component$,
  // useContext,
  useSignal,
  useVisibleTask$,
  // type NoSerialize,
} from "@builder.io/qwik";
import DynamicFormWrapper from "~/feature/DynamicContactFormWrapper";
import ContactForm from "~/feature/ContactForm";

// import { IsOpenedContext } from "~/root";
import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import { useWindowScroll } from "~/hooks/useWindowScroll";

import { routeLoader$ } from "@builder.io/qwik-city";
import { type InitialValues } from "@modular-forms/qwik";

export type ContactForm = {
  categories: string[];
  username: string;
  email: string;
  phone: string; // phone length
  company: string;
  message: string;
  about: string;
  file: any;
};

export const useContactFormLoader = routeLoader$<InitialValues<ContactForm>>(
  () => ({
    categories: [],
    username: "",
    email: "",
    message: "",
    phone: "",
    company: "",
    about: "",
    file: undefined,
  })
);

export default component$(() => {
  const show = useSignal(true);
  const position = useSignal(0);
  const pos = useWindowScroll();
  // const globalState = useContext(IsOpenedContext);

  //tracking page scroll to hide/show header
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

      <DynamicFormWrapper>
        <ContactForm variant="dynamic" />
      </DynamicFormWrapper>
    </div>
  );
});
