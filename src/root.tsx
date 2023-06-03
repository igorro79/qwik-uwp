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

        
   
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css" rel="stylesheet" />
        {/* Added swiperjs. */}
         <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
    />
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

        {/* Added slider */}
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/swiper@9.2.0/swiper-bundle.min.js"></script>
   

    {/* <script>
      const swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: { delay: 10000 },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        navigation: {
          nextEl: ".swiper-next-slide",
        },
      });
      const swiperBlog = new Swiper(".blogSwiper", {
        spaceBetween: 31,
        breakpoints: {
          820: {
            spaceBetween: 20,
          },
          1280: {
            spaceBetween: 30,
          },
        },

        slidesPerView: "auto",
        freeMode: true,
        // TODO remove scrollbar settings
      });
      swiperBlog.setGrabCursor();
    </script> */}
      </body>
    </QwikCityProvider>
  );
});
