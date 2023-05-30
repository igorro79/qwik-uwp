import { component$, useStore, useTask$ } from "@builder.io/qwik";
// import Cookie from "~/components/cookie/cookie";
// import DynamicForm from "~/widgets/dynamicContactForm";
// import DynamicForm1 from "~/components/dynamic-form";
import { useContextProvider, createContextId } from "@builder.io/qwik";

import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import "./global.css";

export interface GenericType {
  menu: boolean;
  form: boolean;
  submenu: boolean;
}

export const IsOpenedContext = createContextId<GenericType>(
  "mobile-menu-context"
);

export default component$(() => {
  const globalState = useStore({ menu: false, form: false, submenu: false });

  useContextProvider(IsOpenedContext, globalState);

  useTask$(({ track }) => {
    track(globalState);
    if (globalState.form === true && globalState.menu === true) {
      globalState.menu = false;
    }
    if (globalState.menu === false && globalState.submenu === true) {
      globalState.submenu = false;
    }
  });

  // const visibleCookie = useSignal(true);
  // const handleCookie = $(() => {
  //   visibleCookie.value = false;
  // });

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="robots" content="noindex, nofollow" />

        <RouterHead />
      </head>
      <body
        lang="en"
        class={`relative min-h-screen bg-light dark:bg-dark ${
          (globalState.menu || globalState.form) && "h-screen overflow-hidden"
        }`}
      >
        <RouterOutlet />
        <ServiceWorkerRegister />
        {/* {visibleCookie.value && <Cookie click={handleCookie} />} */}
      </body>
    </QwikCityProvider>
  );
});
