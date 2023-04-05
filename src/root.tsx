import { component$ } from "@builder.io/qwik";
// import Cookie from "~/components/cookie/cookie";

import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  /*
   * Dont remove the `<head>` and `<body>` elements.
   */
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
      <body lang="en" class="relative min-h-screen bg-light dark:bg-dark">
        <RouterOutlet />
        <ServiceWorkerRegister />
        {/* {visibleCookie.value && <Cookie click={handleCookie} />} */}
      </body>
    </QwikCityProvider>
  );
});
