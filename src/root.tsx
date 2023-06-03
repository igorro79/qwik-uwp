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

        
   
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css" rel="stylesheet" />
        {/* Added swiperjs. */}
         <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
    />
        <RouterHead />
      </head>
      <body lang="en" class="relative min-h-screen bg-light dark:bg-dark">
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
