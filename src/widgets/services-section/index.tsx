import {
  component$,
  useSignal,
  useOnWindow,
  $,
  useVisibleTask$,
} from "@builder.io/qwik";
//  useVisibleTask$  useOn
import MainBtn from "~/components/main-btn/main-btn";

export default component$(() => {
  /***
   * Open card services
   */
  const cardVisible = useSignal(true);
  const cardVisible_02 = useSignal(false);
  /**
   * Visible card to windiws >= 820
   */
  //  const handleResize = $((width: number) => {
  //    if (width < 820) {
  //           cardVisible_02.value = false;
  //   } else {
  //     cardVisible_02.value = true;
  //   }
  // });
  const handleResize = $(() => {
    if (window.innerWidth >= 820) {
      cardVisible_02.value = true;
    } else {
      cardVisible_02.value = false;
    }
  });

  // const cards = document.querySelectorAll(".is-active");
  //   console.log(cards);
  //   if (window.innerWidth >= 820) {
  //     cards.forEach(card => {
  //     (card  as HTMLButtonElement).disabled = true
  //   });
  //   return;
  // }

  // console.log(handleResize);

  useVisibleTask$(() => {
    handleResize();
  });

  useOnWindow(
    "resize",
    $(() => {
      // console.log(event)
      // console.log(window.innerWidth)
      // handleResize(window.innerWidth);
      handleResize();
    })
  );

  //  useOn(
  //   'click',
  //    $((event) => {
  //  console.log(event);

  //     // store.element.x = (event as MouseEvent).x;
  //     // store.element.y = (event as MouseEvent).y;
  //   })

  // );

  // useVisibleTask$(() => {
  //  const tl = document.querySelectorAll("#servicesCardsWrp, h3 ");

  //   for (let i = 0; i < tl.length; i++) {
  //     tl[i].addEventListener("click", function () {
  //       console.log(tl[i]);
  //       return
  //     })

  //     // })

  //     // Добавляем обработчик события изменения размера окна
  //     // window.addEventListener('resize', handleResize);

  //     // Вызываем обработчик при первом рендере компонента

  //     // Очищаем обработчик при размонтировании компонента
  //     // return () => {
  //     //   // window.removeEventListener('resize', handleResize);
  //     // };
  //   }
  // });

  // const cardVisible_03 = useSignal(false);
  // const cardVisible_04 = useSignal(false);
  // const cardVisible_05 = useSignal(false);
  // const cardVisible_06 = useSignal(false);
  // const cardVisible_07 = useSignal(false);
  // const cardVisible_08 = useSignal(false);
  // const cardVisible_09 = useSignal(false);

  return (
    <section
      id="services"
      class=" bg-light pb-[44px] pt-[24px] dark:bg-dark dark:text-white lg:pb-[111px] lg:pt-[2px] xl:pb-[182px] xl:pt-[31px]"
    >
      <div class="container sm:max-w-full lg:px-[30px] 3xl:max-w-[1920px] 3xl:px-[135px]">
        <h2 class=" mb-[29px] text-4xl font-bold uppercase lg:mb-[39px] lg:text-[45px] lg:leading-[54px] xl:mb-[26px] xl:text-[50px] 2xl:mb-[73px] 2xl:text-[90px]">
          Our Services
        </h2>
        <p class=" border__top pt-[31px] text-base font-medium leading-[1.37] lg:mb-0 lg:pt-[40px] lg:leading-[1.4] xl:hidden">
          Our advantage is not in one-time contact with the customer, but in
          complex interaction with him. It allows for attracting attention and
          forming a trusting relationship between the company and customers for
          a long time.
        </p>

        {/* <!-- BEGIN: wrapper-services-columns-3 --> */}
        <div class="xl:border__top xl:flex xl:flex-row-reverse ">
          {/* <!-- wrapper-services-columns-2 --> */}
          <div
            id="servicesCardsWrp"
            class="lg:flex-col-2 lg:flex  xl:basis-[75%]"
          >
            {/* <!-- wrapper-cards-services col-02.1 --> */}
            <div class="xl:border__left lg:basis-1/2 xl:pl-[50px] ">
              {/* <!-- BEGIN: branding__01 --> */}
              <div class=" group/card pointer-events-none pb-[18px] pt-[38px] lg:grid lg:grid-flow-row lg:auto-rows-max lg:pb-[30px] lg:pt-[30px] xl:mt-[68px] xl:pb-[64px] xl:pt-0">
                {/*  href="#https://dev.uwp.digital/en/services/branding"
                  aria-label="service card" */}

                <button
                  id="card-01"
                  onClick$={() => (cardVisible.value = !cardVisible.value)}
                  class="lg:border__bottom pointer-events-none relative block w-full lg:pointer-events-auto xl:border-b-0"
                >
                  <h3 class="border__bottom text__hover-red xl:translate-underline__hover-line__white pointer-events-auto mb-0 pb-[17px] pr-[50px] text-left text-[19px] font-bold uppercase sm:text-[24px] lg:border-b-0 lg:pb-[27px] lg:capitalize xl:pb-[40px] 2xl:text-[42px] 2xl:leading-[50px]">
                    Branding varumarkesutveckling
                  </h3>

                  <div class="absolute right-[0px] top-[calc(50%-17px)] mt-[-14px] rounded-full p-[13.5px] transition-all ease-in group-hover/card:bg-main lg:right-[10px] lg:top-0 lg:mt-[-16px] lg:p-[23px] xl:right-[10px] xl:top-[-6px] xl:p-[26px] 2xl:top-[-8px] 2xl:p-8">
                    <svg
                      class="h-[11px] w-[11px] fill-black transition-all ease-in group-hover/card:fill-white dark:fill-white lg:h-[16px] lg:w-[16px] xl:h-[22px] xl:w-[22px]"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.8545 3.6H2.20003V0H22V19.8H18.4V6.14559L3.47283 21.0728L0.927246 18.5272L15.8545 3.6Z"
                      ></path>
                    </svg>
                  </div>
                </button>

                {/* <!-- paragraph-01 --> */}
                {cardVisible.value && (
                  <>
                    {/* xl:flex xl:flex-col xl:justify-center */}
                    {/* <div class=" "> */}
                    <p
                      class="xl:border__top  pointer-events-none pb-10 pt-5 text-base font-medium leading-[1.5] text-dark   dark:text-white
                   lg:pt-[32px]   lg:pr-[30px]
                   xl:pr-[50px]    xl:pt-[40px]"
                    >
                      UWP Digital knows how to combine creativity and
                      effectiveness in one solution. We reveal the unique story
                      of your brand through graphic design, the tone of voice of
                      your brand, developing logos, corporate identity, and
                      creating a brand book for companies. The brand stories
                      start with UWP.Digital.
                    </p>
                    {/* </div> */}

                    {/* pictures-mobile-desktop-01 */}
                    <div
                      class=" pointer-events-auto  relative mx-auto mb-[39px] h-[216px] w-[216px] rounded-full bg-[#E0E0E0] dark:bg-[#474747] 
              lg:row-start-1    lg:mx-0 lg:mb-[20px] xl:mb-[30px] xl:ml-5  2xl:h-[355px] 2xl:w-[355px]"
                    >
                      <a
                        href="https://dev.uwp.digital/en/services/branding"
                        aria-label="service branding"
                        class="absolute left-[50%] top-[50%] mx-[50px] ml-0 w-[116%] translate-x-[-50%] translate-y-[-50%] transition-all ease-out hover:skew-y-2 hover:scale-105"
                      >
                        <picture>
                          <source
                            media="(max-width:819px)"
                            type="image/png"
                            srcSet="
                                /images/services/Image-Branding-d-01-438x210.png,
                                /images/services/Image-Branding-d-01-438x210@2x.png 2x
                              "
                          />

                          <img
                            class="object-content h-auto w-full"
                            srcSet="
                                /images/services/Image-Branding-d-01-438x210.png,
                                /images/services/Image-Branding-d-01-438x210@2x.png 2x
                              "
                            src="/images/services/Image-Branding-d-01-438x210.png"
                            alt="Picture Branding"
                            loading="lazy"
                          />
                        </picture>
                      </a>
                    </div>

                    {/* btn */}
                    <MainBtn class="lg:hidden " transparent={true}>
                      read more
                    </MainBtn>
                  </>
                )}
              </div>
              {/* <!-- END: branding__01 --> */}

              {/* <!-- BEGIN: Web development__02 --> */}

              <div class=" group/card pointer-events-none pt-[20px] lg:grid lg:grid-flow-row lg:auto-rows-max lg:py-[30px] xl:py-0">
                <button
                  id="card-02"
                  onClick$={() =>
                    (cardVisible_02.value = !cardVisible_02.value)
                  }
                  class=" is-active lg:border__bottom  group pointer-events-none relative w-full lg:pointer-events-auto xl:border-b-0"
                >
                  <h3 class="border__bottom  text__hover-red xl:translate-underline__hover-line__white pointer-events-auto mb-0 pb-[17px] pr-[50px] text-left text-[19px] font-bold uppercase sm:text-[24px] lg:border-b-0 lg:pb-[27px] lg:normal-case xl:pb-[40px] 2xl:text-[42px] 2xl:leading-[50px]">
                    Web development varumarkesutveckling
                  </h3>

                  <div class="absolute right-[0px] top-[calc(50%-17px)] mt-[-14px] rounded-full p-[13.5px] transition-all ease-in group-hover/card:bg-main lg:right-[10px] lg:top-0 lg:mt-[-16px] lg:p-[23px] xl:right-[10px] xl:top-[-6px] xl:p-[26px] 2xl:top-[-8px] 2xl:p-8">
                    <svg
                      class="h-[11px] w-[11px] fill-black transition-all ease-in group-hover/card:fill-white dark:fill-white lg:h-[16px] lg:w-[16px] xl:h-[22px] xl:w-[22px]"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.8545 3.6H2.20003V0H22V19.8H18.4V6.14559L3.47283 21.0728L0.927246 18.5272L15.8545 3.6Z"
                      ></path>
                    </svg>
                  </div>
                </button>

                {/* {cardVisible_02.value &&  (*/}
                {cardVisible_02.value && (
                  <>
                    {/* lg:block   xl:flex xl:flex-col xl:justify-center */}
                    {/* <div class=" "> */}
                    <p
                      class="pointer-events-none mb-[19px]  pb-10  pt-5 text-base font-medium leading-[1.5] text-dark   dark:text-white 
                    
                       lg:pt-[31px]  lg:pr-[30px]
                    xl:border__top    xl:max-w-[530px]   xl:pr-[50px]     xl:pt-[40px]"
                    >
                      Websites are the business card of your company in the
                      digital world. What can we do for you? Make your own
                      website, build a website on WordPress and other
                      constructors, make web analytics, create and integrate
                      payment systems for e-commerce projects, and make a web
                      design.
                    </p>
                    {/* </div>
                     */}

                    <div
                      class="pointer-events-auto relative mx-auto mb-[39px] h-[216px] w-[216px] rounded-full bg-[#E0E0E0] dark:bg-[#474747] 
              lg:row-start-1   lg:mx-0 lg:mb-[20px] xl:mb-[30px] xl:ml-5  2xl:h-[355px] 2xl:w-[355px]"
                    >
                      <a
                        href="https://dev.uwp.digital/en/services/web-development"
                        aria-label="service web-development"
                        class="absolute left-[50%] top-[50%] mx-[50px] ml-0 w-[116%] translate-x-[-50%] translate-y-[-50%] transition-all ease-out hover:skew-y-2 hover:scale-105"
                      >
                        <picture>
                          <source
                            media="(max-width:819px)"
                            type="image/png"
                            srcSet="
                                /images/services/Image-Web-development-d-03-467x328.png,
                                /images/services/Image-Web-development-d-03-467x328@2x.png 2x
                              "
                          />

                          <img
                            class="object-content h-auto w-full"
                            srcSet="
                                /images/services/Image-Web-development-d-03-467x328.png,
                                /images/services/Image-Web-development-d-03-467x328@2x.png 2x
                              "
                            src="/images/services/Image-Web-development-d-03-467x328.png"
                            alt="Picture  Web development"
                            loading="lazy"
                          />
                        </picture>
                      </a>
                    </div>

                    <MainBtn class="lg:hidden " transparent={true}>
                      read more
                    </MainBtn>
                  </>
                )}
              </div>
              {/* <!-- END: Web development__02 --> */}

              {/* <!-- BEGIN: SEO__03 --> */}
              {/* title  href="#https://dev.uwp.digital/en"
                  aria-label="service seo"*/}
              <div class=" group/card pointer-events-none pt-[19px] lg:grid lg:grid-flow-row lg:auto-rows-max lg:pb-[30px] lg:pt-[30px] xl:pb-[30px] xl:pt-[61px]">
                {/* block */}
                <button
                  id="card-03"
                  onClick$={() =>
                    (cardVisible_02.value = !cardVisible_02.value)
                  }
                  class="is-active  lg:border__bottom group pointer-events-none relative w-full  lg:pointer-events-auto xl:border-b-0"
                >
                  <h3 class="border__bottom text__hover-red xl:translate-underline__hover-line__white pointer-events-auto mb-0 pb-[17px] pr-[50px] text-left text-[19px] font-bold uppercase sm:text-[24px] lg:border-b-0 lg:pb-[27px] xl:pb-[40px] 2xl:text-[42px] 2xl:leading-[50px]">
                    SEO
                  </h3>

                  <div class="absolute right-[0px] top-[calc(50%-17px)] mt-[-14px] rounded-full p-[13.5px] transition-all ease-in group-hover/card:bg-main lg:right-[10px] lg:top-0 lg:mt-[-16px] lg:p-[23px] xl:right-[10px] xl:top-[-6px] xl:p-[26px] 2xl:top-[-8px] 2xl:p-8">
                    <svg
                      class="h-[11px] w-[11px] fill-black transition-all ease-in group-hover/card:fill-white dark:fill-white lg:h-[16px] lg:w-[16px] xl:h-[22px] xl:w-[22px]"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.8545 3.6H2.20003V0H22V19.8H18.4V6.14559L3.47283 21.0728L0.927246 18.5272L15.8545 3.6Z"
                      ></path>
                    </svg>
                  </div>
                </button>

                {/* <!-- paragraph-03 --> */}
                {cardVisible_02.value && (
                  <>
                    {/* xl:flex xl:flex-col xl:justify-center */}
                    {/* <div class="    "> */}
                      <p class="pointer-events-none mb-[19px] pb-10 pt-5 text-base font-medium leading-[1.5] text-dark dark:text-white
                       lg:pt-[31px] lg:pr-[30px]
                        xl:border__top  xl:pr-[50px]  xl:max-w-[530px] xl:pt-[40px]">
                        There are millions of websites, but not all of them make
                        it to the top of Google searches. UWP.Digital knows the
                        secrets of search engine optimization and is ready to
                        show them to you. We offer technical SEO analysis,
                        keyword analysis, writing SEO texts, keyword
                        optimization, and link promotion. Internal and external
                        SEO optimization of your website in the complex. Become
                        visible not only to the Google system but also to online
                        customers.
                      </p>
                    {/* </div> */}

                    {/* pictures-mobile-desktop-03 */}
                    <div
                      class="pointer-events-auto relative mx-auto mb-[39px] h-[216px] w-[216px] rounded-full bg-[#E0E0E0] dark:bg-[#474747] 
               lg:row-start-1   lg:mx-0 lg:mb-[20px] xl:mb-[30px] xl:ml-5  2xl:h-[355px] 2xl:w-[355px] "
                    >
                      <a
                        href="https://dev.uwp.digital/en"
                        aria-label="service seo"
                        class="absolute left-[50%] top-[50%] mx-[50px] ml-0 w-[116%] translate-x-[-50%] translate-y-[-50%] transition-all ease-out hover:skew-y-2 hover:scale-105"
                      >
                        <picture>
                          <source
                            media="(max-width:819px)"
                            type="image/png"
                            srcSet="
                                /images/services/Image-SEO-d-05-482x276.png,
                                /images/services/Image-SEO-d-05-482x276@2x.png 2x
                              "
                          />

                          <img
                            class="object-content h-auto w-full"
                            srcSet="
                                /images/services/Image-SEO-d-05-482x276.png,
                                /images/services/Image-SEO-d-05-482x276@2x.png 2x
                              "
                            src="/images/services/Image-SEO-d-05-482x276.png"
                            alt="Picture  SEO"
                            loading="lazy"
                          />
                        </picture>
                      </a>
                    </div>

                    {/* btn */}
                    <MainBtn class="lg:hidden " transparent={true}>
                      read more
                    </MainBtn>
                  </>
                )}
              </div>

              {/* <!-- END: SEO__03 --> */}

              {/* <!-- BEGIN: Mobile Promotion__04 --> */}
              {/* title */}
              <div class=" group/card pointer-events-none pt-[19px] lg:grid lg:grid-flow-row lg:auto-rows-max lg:py-[30px] xl:pt-[16px]">
                {/* block    href="#https://dev.uwp.digital/en/services/mobile-marketing"
                  aria-label="service mobile-marketing"*/}
                <button
                  id="card-04"
                  onClick$={() =>
                    (cardVisible_02.value = !cardVisible_02.value)
                  }
                  class="is-active  lg:border__bottom group pointer-events-none relative w-full  lg:pointer-events-auto xl:border-b-0"
                >
                  <h3 class="border__bottom  text__hover-red xl:translate-underline__hover-line__white pointer-events-auto mb-0 pb-[17px] pr-[50px] text-left text-[19px] font-bold uppercase sm:text-[24px] lg:border-b-0 lg:pb-[27px] lg:capitalize xl:pb-[40px] xl:pt-[12px] 2xl:text-[42px] 2xl:leading-[150%]">
                    Mobile Promotion
                  </h3>
                  <div class="absolute right-[0px] top-[calc(50%-17px)] mt-[-14px] rounded-full p-[13.5px] transition-all ease-in group-hover/card:bg-main lg:right-[10px] lg:top-0 lg:mt-[-16px] lg:p-[23px] xl:right-[10px] xl:top-[-6px] xl:p-[26px] 2xl:top-[-8px] 2xl:p-8">
                    <svg
                      class="h-[11px] w-[11px] fill-black transition-all ease-in group-hover/card:fill-white dark:fill-white lg:h-[16px] lg:w-[16px] xl:h-[22px] xl:w-[22px]"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.8545 3.6H2.20003V0H22V19.8H18.4V6.14559L3.47283 21.0728L0.927246 18.5272L15.8545 3.6Z"
                      ></path>
                    </svg>
                  </div>
                </button>

                {/* <!-- paragraph-04 --> */}
                {cardVisible_02.value && (
                  <>
                    {/* xl:flex xl:flex-col xl:justify-center */}
                    {/* <div class=" "> */}
                    <p
                      class="xl:border__top pointer-events-none mb-[19px] pb-10  pt-5 text-base font-medium leading-[1.5] text-dark
                   dark:text-white lg:pr-[30px]
                   lg:pt-[31px] xl:max-w-[530px] xl:pr-[50px]     xl:pt-[40px]"
                    >
                      Mobile promotion is a separate marketing instrument that
                      can increase your sales. UWP.Digital offers you mobile
                      video advertising, mobile media advertising, and promotion
                      of applications to the top of the App Store and Google
                      Play. We know how to attract users' attention to your
                      product, finding them even while watching YouTube.
                    </p>
                    {/* </div> */}

                    {/* pictures-mobile-desktop-04 */}
                    <div
                      class="pointer-events-auto relative mx-auto mb-[39px] h-[216px] w-[216px] rounded-full bg-[#E0E0E0] dark:bg-[#474747] 
                  lg:row-start-1    lg:mx-0 lg:mb-[20px] xl:mb-[30px] xl:ml-5  2xl:h-[355px] 2xl:w-[355px]"
                    >
                      <a
                        href="https://dev.uwp.digital/en/services/mobile-marketing"
                        aria-label="service mobile-marketing"
                        class="absolute left-[50%] top-[50%] mx-[50px] ml-0 w-[116%] translate-x-[-50%] translate-y-[-50%] transition-all ease-out hover:skew-y-2 hover:scale-105"
                      >
                        <picture>
                          <source
                            media="(max-width:819px)"
                            type="image/png"
                            srcSet="
                                /images/services/Image-Mobile-Promotion-d-07-415x327.png,
                                /images/services/Image-Mobile-Promotion-d-07-415x327@2x.png 2x
                              "
                          />

                          <img
                            class="object-content h-auto w-full"
                            srcSet="
                                /images/services/Image-Mobile-Promotion-d-07-415x327.png,
                                /images/services/Image-Mobile-Promotion-d-07-415x327@2x.png 2x
                              "
                            src="/images/services/Image-Mobile-Promotion-d-07-415x327.png"
                            alt="Picture  Mobile Promotion"
                            loading="lazy"
                          />
                        </picture>
                      </a>
                    </div>

                    {/* btn */}
                    <MainBtn class="lg:hidden " transparent={true}>
                      read more
                    </MainBtn>
                  </>
                )}
              </div>
              {/* <!-- END: Mobile Promotion__04 --> */}

              {/* <!-- BEGIN: PPC__05 --> */}
              <div class=" group/card pointer-events-none pt-[19px] lg:grid lg:grid-flow-row lg:auto-rows-max lg:pb-0 lg:pt-[30px]">
                <button
                  id="card-05"
                  onClick$={() =>
                    (cardVisible_02.value = !cardVisible_02.value)
                  }
                  class="is-active  lg:border__bottom group pointer-events-none relative block w-full lg:pointer-events-auto xl:border-b-0"
                >
                  <h3 class="border__bottom text__hover-red xl:translate-underline__hover-line__white pointer-events-auto mb-0 pb-[17px] pr-[50px] text-left text-[19px] font-bold uppercase sm:text-[24px] lg:border-b-0 lg:pb-[27px] xl:pb-[40px] 2xl:text-[42px] 2xl:leading-[50px]">
                    PPC varumarkesutveckling
                  </h3>

                  <div class="absolute right-[0px] top-[calc(50%-17px)] mt-[-14px] rounded-full p-[13.5px] transition-all ease-in group-hover/card:bg-main lg:right-[10px] lg:top-0 lg:mt-[-16px] lg:p-[23px] xl:right-[10px] xl:top-[-6px] xl:p-[26px] 2xl:top-[-8px] 2xl:p-8">
                    <svg
                      class="h-[11px] w-[11px] fill-black transition-all ease-in group-hover/card:fill-white dark:fill-white lg:h-[16px] lg:w-[16px] xl:h-[22px] xl:w-[22px]"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.8545 3.6H2.20003V0H22V19.8H18.4V6.14559L3.47283 21.0728L0.927246 18.5272L15.8545 3.6Z"
                      ></path>
                    </svg>
                  </div>
                </button>

                {/* <!-- paragraph-05 --> */}
                {cardVisible_02.value && (
                  <>
                    {/* xl:flex xl:flex-col xl:justify-center */}
                    {/* <div class=""> */}
                    <p
                      class="xl:border__top pointer-events-none mb-[19px] pb-10 pt-5 text-base font-medium leading-[1.5] text-dark 
                  dark:text-white lg:pb-0  lg:pr-[30px] 
                  lg:pt-[31px] xl:max-w-[530px] xl:pb-[28px]  xl:pr-[50px]    xl:pt-[40px]"
                    >
                      PPC marketing attracts only targeted users who see the
                      ads, become interested in the product, click on the link
                      and go to the landing page. We know how to save
                      advertising budget on irrelevant traffic and attract the
                      maximum number of leads. We create and set up AdWords
                      advertising for different niches, and banner ad, optimize
                      the budget, increase conversion and attract only
                      high-quality leads.
                    </p>
                    {/* </div> */}

                    {/* pictures-mobile-desktop-05 */}
                    <div
                      class="pointer-events-auto relative mx-auto mb-[39px] h-[216px] w-[216px] rounded-full bg-[#E0E0E0] dark:bg-[#474747] 
                lg:row-start-1    lg:mx-0 lg:mb-[20px]
                 xl:mb-[30px] xl:ml-5  2xl:h-[355px] 2xl:w-[355px]  "
                    >
                      <a
                        href="https://dev.uwp.digital/en"
                        aria-label="service ppc"
                        class="absolute left-[50%] top-[50%] mx-[50px] ml-0 w-[116%] translate-x-[-50%] translate-y-[-50%] transition-all ease-out hover:skew-y-2 hover:scale-105"
                      >
                        <picture>
                          <source
                            media="(max-width:819px)"
                            type="image/png"
                            srcSet="
                                /images/services/Image-PPC-d-09-507x342.png,
                                /images/services/Image-PPC-d-09-507x342@2x.png 2x
                              "
                          />

                          <img
                            class="object-content h-auto w-full"
                            srcSet="
                                /images/services/Image-PPC-d-09-507x342.png,
                                /images/services/Image-PPC-d-09-507x342@2x.png 2x
                              "
                            src="/images/services/Image-PPC-d-09-507x342.png"
                            alt="Picture  PPC"
                            loading="lazy"
                          />
                        </picture>
                      </a>
                    </div>

                    {/* btn */}
                    <MainBtn class="lg:hidden " transparent={true}>
                      read more
                    </MainBtn>
                  </>
                )}
              </div>
              {/* <!-- END: PPC__05 --> */}
            </div>

            {/* wrapper-cards-services col-02.2 */}
            <div class="lg:basis-1/2 ">
              {/* <!-- BEGIN: Digital Marketing__06 --> */}
              {/* title */}
              <div class=" group/card lg:border__left pointer-events-none pt-[19px] lg:mt-[71px] lg:grid lg:grid-flow-row lg:auto-rows-max lg:pt-[42px] xl:pt-[170px]">
                {/* href="https://dev.uwp.digital/en/services/digital-marketing"
                  aria-label="service digital-marketing" */}

                <button
                  id="card-06"
                  onClick$={() =>
                    (cardVisible_02.value = !cardVisible_02.value)
                  }
                  class=" is-active lg:border__bottom group pointer-events-none relative block w-full lg:pointer-events-auto"
                >
                  <h3 class=" border__bottom text__hover-red xl:translate-underline__hover-line__white pointer-events-auto mb-0 pb-[17px] pr-[50px] text-left text-[19px] font-bold uppercase sm:text-[24px] lg:border-b-0 lg:pb-[27px] lg:pl-[29px] lg:capitalize xl:pb-[40px] xl:pl-[50px] 2xl:text-[42px] 2xl:leading-[50px]">
                    Digital Marketing
                  </h3>

                  <div class="absolute right-[0px] top-[calc(50%-17px)] mt-[-14px] rounded-full p-[13.5px] transition-all ease-in group-hover/card:bg-main lg:top-0 lg:mt-[-16px] lg:p-[23px] xl:top-[-6px] xl:p-[26px] 2xl:top-[-8px] 2xl:p-8">
                    <svg
                      class="h-[11px] w-[11px] fill-black transition-all ease-in group-hover/card:fill-white dark:fill-white lg:h-[16px] lg:w-[16px] xl:h-[22px] xl:w-[22px]"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.8545 3.6H2.20003V0H22V19.8H18.4V6.14559L3.47283 21.0728L0.927246 18.5272L15.8545 3.6Z"
                      ></path>
                    </svg>
                  </div>
                </button>

                {/* <!-- paragraph-06 --> */}
                {cardVisible_02.value && (
                  <>
                    {/* xl:flex xl:flex-col xl:justify-center */}
                    {/* <div class="     "> */}
                    <p
                      class="pointer-events-none mb-[19px] pb-10 pt-5 text-base font-medium leading-[1.5] text-dark dark:text-white 
                  lg:mb-0 lg:pl-[29px] lg:pt-[31px]
                   xl:pl-[50px] xl:pt-[40px] "
                    >
                      Digital marketing is a complete immersion of your business
                      in the online space: from developing the most productive
                      digital strategy to creating influential creatives for
                      Facebook ads, ads on Instagram, LinkedIn ads, and
                      advertisement on Google. Digital marketing includes
                      marketing analysis, developing digital strategies,
                      copywriting, rewriting, and creating different types of
                      advertising: on social networks, contextual or banner ads.
                    </p>
                    {/* </div> */}

                    {/* pictures-mobile-desktop-06 */}
                    <div
                      class="pointer-events-auto relative mx-auto mb-[39px] h-[216px] w-[216px] rounded-full bg-[#E0E0E0] dark:bg-[#474747] 
                  lg:row-start-1  lg:mx-0  lg:mb-[20px] lg:ml-[45px] xl:mb-[30px] xl:ml-[75px]  2xl:h-[355px] 2xl:w-[355px] "
                    >
                      <a
                        href="https://dev.uwp.digital/en/services/digital-marketing"
                        aria-label="service digital-marketing"
                        class="absolute left-[50%] top-[50%] mx-[50px] ml-0 w-[116%] translate-x-[-50%] translate-y-[-50%] transition-all ease-out hover:skew-y-2 hover:scale-105"
                      >
                        <picture>
                          <source
                            media="(max-width:819px)"
                            type="image/png"
                            srcSet="
                                /images/services/Image-Digital-Marketing-d-02-493x315.png,
                                /images/services/Image-Digital-Marketing-d-02-493x315@2x.png 2x
                              "
                          />

                          <img
                            class="object-content h-auto w-full"
                            srcSet="
                                /images/services/Image-Digital-Marketing-d-02-493x315.png,
                                /images/services/Image-Digital-Marketing-d-02-493x315@2x.png 2x
                              "
                            src="/images/services/Image-Digital-Marketing-d-02-493x315.png"
                            alt="Picture  Digital Marketing"
                            loading="lazy"
                          />
                        </picture>
                      </a>
                    </div>

                    {/* btn */}
                    <MainBtn class="lg:hidden " transparent={true}>
                      read more
                    </MainBtn>
                  </>
                )}
              </div>
              {/* <!-- END: Digital Marketing__06 --> */}

              {/* <!-- BEGIN: Video motion__07 --> */}
              {/* title */}
              <div class=" group/card lg:border__left pointer-events-none pt-[19px] lg:grid lg:grid-flow-row lg:auto-rows-max lg:py-[30px] xl:pt-[24px]">
                {/* href="#https://dev.uwp.digital/en"
                  aria-label="service marketing" */}

                <button
                  id="card-07"
                  onClick$={() =>
                    (cardVisible_02.value = !cardVisible_02.value)
                  }
                  class="is-active  lg:border__bottom group pointer-events-none relative block w-full lg:pointer-events-auto"
                >
                  <h3 class="border__bottom  text__hover-red xl:translate-underline__hover-line__white pointer-events-auto mb-0 pb-[17px] pr-[50px] text-left text-[19px] font-bold uppercase sm:text-[24px] lg:border-b-0 lg:pb-[27px] lg:pl-[29px] lg:normal-case xl:pb-[40px] xl:pl-[50px] 2xl:text-[42px] 2xl:leading-[50px]">
                    Video motion
                  </h3>

                  <div class="absolute right-[0px] top-[calc(50%-17px)] mt-[-14px] rounded-full p-[13.5px] transition-all ease-in group-hover/card:bg-main lg:top-0 lg:mt-[-16px] lg:p-[23px] xl:top-[-6px] xl:p-[26px] 2xl:top-[-8px] 2xl:p-8">
                    <svg
                      class="h-[11px] w-[11px] fill-black transition-all ease-in group-hover/card:fill-white dark:fill-white lg:h-[16px] lg:w-[16px] xl:h-[22px] xl:w-[22px]"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.8545 3.6H2.20003V0H22V19.8H18.4V6.14559L3.47283 21.0728L0.927246 18.5272L15.8545 3.6Z"
                      ></path>
                    </svg>
                  </div>
                </button>

                {/* <!-- paragraph-07 --> */}
                {cardVisible_02.value && (
                  <>
                    {/* xl:flex xl:flex-col xl:justify-center */}
                    {/* <div class="  "> */}
                    <p
                      class=" pointer-events-none mb-[19px] pb-10 pt-5 text-base font-medium leading-[1.5] text-dark dark:text-white
                   lg:pl-[29px] lg:pt-[31px]  
                 xl:max-w-[555px]   xl:pl-[50px] xl:pt-[40px] "
                    >
                      34% higher conversion rate for marketing campaigns with
                      video ads. Tempting? UWP.Digital turns an idea into a
                      finished product about your company. We create video
                      presentations, promos, commercials, motion videos, and
                      even youtube produced videos. It's easier to become
                      memorable with powerful effects.
                    </p>
                    {/* </div> */}

                    {/* pictures-mobile-desktop-07 */}
                    <div
                      class="pointer-events-auto relative mx-auto mb-[39px] h-[216px] w-[216px] rounded-full bg-[#E0E0E0] dark:bg-[#474747] 
                 lg:row-start-1  lg:mx-0  lg:mb-[20px] lg:ml-[45px] xl:mb-[30px] xl:ml-[75px]  2xl:h-[355px] 2xl:w-[355px] "
                    >
                      <a
                        href="https://dev.uwp.digital/en"
                        aria-label="service marketing"
                        class="absolute left-[50%] top-[50%] mx-[50px] ml-0 w-[116%] translate-x-[-50%] translate-y-[-50%] transition-all ease-out hover:skew-y-2 hover:scale-105"
                      >
                        <picture>
                          <source
                            media="(max-width:819px)"
                            type="image/png"
                            srcSet="
                                /images/services/Image-Video-motion-d-04-489x300.png,
                                /images/services/Image-Video-motion-d-04-489x300@2x.png 2x
                              "
                          />

                          <img
                            class="object-content h-auto w-full"
                            srcSet="
                                /images/services/Image-Video-motion-d-04-489x300.png,
                                /images/services/Image-Video-motion-d-04-489x300@2x.png 2x
                              "
                            src="/images/services/Image-Video-motion-d-04-489x300.png"
                            alt="Picture Video motion"
                            loading="lazy"
                          />
                        </picture>
                      </a>
                    </div>

                    {/* btn */}
                    <MainBtn class="lg:hidden " transparent={true}>
                      read more
                    </MainBtn>
                  </>
                )}
              </div>
              {/* <!-- END: Video motion__07 --> */}

              {/* <!-- BEGIN: SMM__08 --> */}
              {/* title */}
              <div class=" group/card lg:border__left pointer-events-none pt-[19px] lg:grid lg:grid-flow-row lg:auto-rows-max lg:py-[30px]">
                {/*  href="#https://dev.uwp.digital/en"
                  aria-label="service smm" */}

                <button
                  id="card-08"
                  onClick$={() =>
                    (cardVisible_02.value = !cardVisible_02.value)
                  }
                  class="is-active  lg:border__bottom group pointer-events-none relative block w-full lg:pointer-events-auto"
                >
                  <h3 class="border__bottom  text__hover-red xl:translate-underline__hover-line__white pointer-events-auto mb-0 pb-[17px] pr-[50px] text-left text-[19px] font-bold uppercase sm:text-[24px] lg:border-b-0 lg:pb-[27px] lg:pl-[29px] xl:pb-[40px] xl:pl-[50px] 2xl:text-[42px] 2xl:leading-[50px]">
                    SMM
                  </h3>

                  <div class="absolute right-[0px] top-[calc(50%-17px)] mt-[-14px] rounded-full p-[13.5px] transition-all ease-in group-hover/card:bg-main lg:top-0 lg:mt-[-16px] lg:p-[23px] xl:top-[-6px] xl:p-[26px] 2xl:top-[-8px] 2xl:p-8">
                    <svg
                      class="h-[11px] w-[11px] fill-black transition-all ease-in group-hover/card:fill-white dark:fill-white lg:h-[16px] lg:w-[16px] xl:h-[22px] xl:w-[22px]"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.8545 3.6H2.20003V0H22V19.8H18.4V6.14559L3.47283 21.0728L0.927246 18.5272L15.8545 3.6Z"
                      ></path>
                    </svg>
                  </div>
                </button>

                {cardVisible_02.value && (
                  <>
                    {/* xl:flex xl:flex-col xl:justify-center */}
                    {/* <div class="    "> */}
                    <p
                      class="pointer-events-none mb-[19px] pb-10 pt-5 text-base font-medium leading-[1.5] text-dark dark:text-white
                   lg:pl-[29px]  lg:pt-[31px]
                    xl:max-w-[555px] xl:pl-[50px] xl:pt-[40px]"
                    >
                      Open a new sales channel for your business with the help
                      of SMM promotion. UWP.Digital provides a full range of
                      services in social networks: developing Social Media
                      Marketing strategy, creating and maintaining social
                      networks from scratch, developing a unified design and USP
                      for your social platforms, launching targeted advertising,
                      advertising on LinkedIn, and attracting traffic from
                      social networks to your website.
                    </p>
                    {/* </div> */}

                    {/* pictures-mobile-desktop-08 */}
                    <div
                      class="pointer-events-auto relative mx-auto mb-[39px] h-[216px] w-[216px] rounded-full bg-[#E0E0E0] dark:bg-[#474747] 
               lg:row-start-1  lg:mx-0  lg:mb-[20px] lg:ml-[45px]
                xl:mb-[30px] xl:ml-[75px] 2xl:h-[355px] 2xl:w-[355px] "
                    >
                      <a
                        href="https://dev.uwp.digital/en"
                        aria-label="service smm"
                        class="absolute left-[50%] top-[50%] mx-[50px] ml-0 w-[116%] translate-x-[-50%] translate-y-[-50%] transition-all ease-out hover:skew-y-2 hover:scale-105"
                      >
                        <picture>
                          <source
                            media="(max-width:819px)"
                            type="image/png"
                            srcSet="
                                /images/services/Image-SMM-d-06-409x315.png,
                                /images/services/Image-SMM-d-06-409x315@2x.png 2x
                              "
                          />

                          <img
                            class="object-content h-auto w-full"
                            srcSet="
                                /images/services/Image-SMM-d-06-409x315.png,
                                /images/services/Image-SMM-d-06-409x315@2x.png 2x
                              "
                            src="/images/services/Image-SMM-d-06-409x315.png"
                            alt="Picture SMM"
                            loading="lazy"
                          />
                        </picture>
                      </a>
                    </div>

                    {/* btn */}
                    <MainBtn class="lg:hidden " transparent={true}>
                      read more
                    </MainBtn>
                  </>
                )}
              </div>
              {/* <!-- END: SMM__08 --> */}

              {/* <!-- BEGIN: TikTok__09 --> */}
              {/* title */}
              <div class=" group/card lg:border__left pointer-events-none pt-[19px] lg:grid lg:grid-flow-row lg:auto-rows-max lg:pb-[513px] lg:pt-[30px] xl:pt-[69px]">
                {/*  href="#https://dev.uwp.digital/en"
                  aria-label="service tiktok" */}

                <button
                  id="card-09"
                  onClick$={() =>
                    (cardVisible_02.value = !cardVisible_02.value)
                  }
                  class="is-active  lg:border__bottom group pointer-events-none relative block w-full lg:pointer-events-auto"
                >
                  <h3 class="border__bottom  text__hover-red xl:translate-underline__hover-line__white pointer-events-auto mb-0 pb-[17px] pr-[50px] text-left text-[19px] font-bold uppercase sm:text-[24px] lg:border-b-0 lg:pb-[27px] lg:pl-[29px] lg:capitalize xl:pb-[40px] xl:pl-[50px] xl:pt-[8px] 2xl:text-[42px] 2xl:leading-[50px]">
                    TikTok
                  </h3>

                  <div class="absolute right-[0px] top-[calc(50%-17px)] mt-[-14px] rounded-full p-[13.5px] transition-all ease-in group-hover/card:bg-main lg:top-0 lg:mt-[-16px] lg:p-[23px] xl:top-[-6px] xl:p-[26px] 2xl:top-[-8px] 2xl:p-8">
                    <svg
                      class="h-[11px] w-[11px] fill-black transition-all ease-in group-hover/card:fill-white dark:fill-white lg:h-[16px] lg:w-[16px] xl:h-[22px] xl:w-[22px]"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.8545 3.6H2.20003V0H22V19.8H18.4V6.14559L3.47283 21.0728L0.927246 18.5272L15.8545 3.6Z"
                      ></path>
                    </svg>
                  </div>
                </button>

                {/* <!-- paragraph-09 --> */}
                {cardVisible_02.value && (
                  <>
                    {/* xl:flex xl:flex-col xl:justify-center */}
                    {/* <div class="  "> */}
                    <p
                      class="pointer-events-none mb-[19px]  pb-10 pt-5 text-base font-medium leading-[1.5] text-dark dark:text-white 
                  lg:pl-[29px] lg:pt-[31px]
                   xl:max-w-[555px] xl:pl-[50px] xl:pt-[40px] "
                    >
                      TikTok is a fairly new platform with a young audience. Can
                      a site with light content be used to promote a business?
                      Yes! UWP.Digital offers you promotion through ads and
                      video posting on TikTok. We know how to draw the attention
                      of a young audience to your product. Working with us, you
                      are not hiring an adsmanager, but an entire advertising
                      agency that works for your success.
                    </p>
                    {/* </div> */}

                    {/* pictures-mobile-desktop-09 */}
                    <div
                      class="pointer-events-auto relative mx-auto mb-[39px] h-[216px] w-[216px] rounded-full bg-[#E0E0E0] dark:bg-[#474747] 
               lg:row-start-1  lg:mx-0  lg:mb-[20px] lg:ml-[45px] xl:mb-[30px] xl:ml-[75px]  2xl:h-[355px] 2xl:w-[355px]  "
                    >
                      <a
                        href="https://dev.uwp.digital/en"
                        aria-label="service tiktok"
                        class="absolute left-[50%] top-[50%] mx-[50px] ml-0 w-[116%] translate-x-[-50%] translate-y-[-50%] transition-all ease-out hover:skew-y-2 hover:scale-105"
                      >
                        <picture>
                          <source
                            media="(max-width:819px)"
                            type="image/png"
                            srcSet="
                                /images/services/Image-TikTok-d-08-385x375.png,
                                /images/services/Image-TikTok-d-08-385x375@2x.png 2x
                              "
                          />

                          <img
                            class="object-content h-auto w-full"
                            srcSet="
                                /images/services/Image-TikTok-d-08-385x375.png,
                                /images/services/Image-TikTok-d-08-385x375@2x.png 2x
                              "
                            src="/images/services/Image-TikTok-d-08-385x375.png"
                            alt="Picture TikTok"
                            loading="lazy"
                          />
                        </picture>
                      </a>
                    </div>

                    {/* btn */}
                    <MainBtn class="lg:hidden " transparent={true}>
                      read more
                    </MainBtn>
                  </>
                )}
              </div>
              {/* <!-- END: TikTok__09 --> */}
            </div>
          </div>

          {/* <!-- btn-order-a-consultation --> */}
          <div class="xl:mt-0 xl:basis-[25%] xl:pr-[40px] 2xl:pr-[60px]">
            <p class="  hidden xl:flex xl:pb-[33px] xl:pt-[27px] 2xl:pb-[51px] 2xl:pt-[50px]">
              Whether you need to create a website, develop a UX UI design,
              conduct SEO optimization, develop a marketing strategy for your
              business, set up Google ads, and Facebook ads, or get more
              followers on Instagram - welcome to UWP Digital.
            </p>

            {/* <a
              href="#"
              class=" link-oside btn hidden lg:mt-[59px] lg:flex xl:sticky xl:top-[100px] xl:mt-0"
            >
              Order a consultation
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.1083 4.37452L12.1083 14.094L14.5 14.094L14.5 -9.53674e-07L1.34559 -3.78677e-07L1.34559 2.56255L10.4171 2.56255L0.500002 13.188L2.19118 15L12.1083 4.37452Z"
                  fill="white"
                ></path>
              </svg>
            </a> */}
            <MainBtn class="mt-[20px] lg:mt-[59px]">
              Order a consultation
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.1083 4.37452L12.1083 14.094L14.5 14.094L14.5 -9.53674e-07L1.34559 -3.78677e-07L1.34559 2.56255L10.4171 2.56255L0.500002 13.188L2.19118 15L12.1083 4.37452Z"
                  fill="white"
                ></path>
              </svg>
            </MainBtn>
          </div>
        </div>
        {/* <!-- END: wrapper-services-columns-3 --> */}
      </div>
    </section>
  );
});
