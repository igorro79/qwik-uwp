import { component$ } from "@builder.io/qwik";
import MainBtn from "~/components/main-btn/main-btn";

export default component$(() => {
  return (
    <section
      id="services"
      class=" bg-light pb-[44px] pt-[24px] dark:bg-dark dark:text-white lg:pb-[111px] lg:pt-[2px] xl:pb-[182px] xl:pt-[31px]"
    >
      <div class="container sm:max-w-full lg:px-[30px] 3xl:max-w-[1920px] 3xl:px-[135px]">
        <h2 class=" mb-[29px] text-4xl font-bold uppercase lg:mb-[39px] lg:text-[45px] lg:leading-[54px] xl:mb-[26px] xl:text-[50px] 2xl:mb-[73px] 2xl:text-[90px]">
          Our Services
        </h2>
        <p class=" border__top pt-[31px] text-base font-medium leading-[137%] lg:mb-0 lg:pt-[40px] lg:leading-[140%] xl:hidden">
          Our advantage is not in one-time contact with the customer, but in
          complex interaction with him. It allows for attracting attention and
          forming a trusting relationship between the company and customers for
          a long time.
        </p>
        {/* <!-- BEGIN: wrapper-services-columns-3 --> */}       
        <div class="xl:border__top xl:flex xl:flex-row-reverse ">
          {/* <!-- wrapper-services-columns-2 --> */}          
          <div id="servicesCardsWrp" class="lg:flex-col-2 lg:flex  xl:basis-[75%]">
            {/* <!-- wrapper-cards-services --> */}

            <div class="xl:border__left lg:basis-1/2 xl:pl-[50px] xl:basis-1/3">
              {/* <!-- BEGIN: branding__01 --> */}

              <div class="title t_active group/card pointer-events-none pb-[18px] pt-[38px] lg:pb-[30px] lg:pt-[30px] xl:mt-[68px] xl:pb-[64px] xl:pt-0">
                {/* <!-- wrapper-img-t-d-01 --> */}
                {/* <!-- gradient --> */}
                <a
                  href="https://dev.uwp.digital/en/services/branding"
                  aria-label="service branding"
                  class=" lg:pointer-events-auto"
                >
                  {/* <!-- href="https://dev.uwp.digital/en/services/branding" --> */}
                  <div class="relative hidden lg:mb-[20px] lg:block lg:h-[216px] lg:w-[216px] lg:rounded-full lg:bg-[#E0E0E0] dark:lg:bg-[#474747] xl:mb-[30px] xl:ml-5 2xl:h-[355px] 2xl:w-[355px]">
                    <div class="absolute mx-[50px] mb-[40px] hidden transition-all ease-out hover:skew-y-2 hover:scale-105 lg:left-[50%] lg:top-[50%] lg:mx-0 lg:ml-0 lg:block lg:w-[116%] lg:translate-x-[-50%] lg:translate-y-[-50%] xl:mb-0">
                      {/* <!-- 01-t-d --> */}
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
                     
                      {/* <!-- 01 --> */}
                    </div>
                  </div>
                </a>

                {/* <!-- group --> */}

                <a
                  href="#https://dev.uwp.digital/en/services/branding"
                  aria-label="service card"
                  class=" lg:border__bottom pointer-events-none relative block lg:pointer-events-auto xl:border-b-0"
                >
                  {/* <!-- Branding --> */}
                  <h3 class="border__bottom text__hover-red xl:translate-underline__hover-line__white pointer-events-auto mb-0 pb-[17px] pr-[50px] text-[19px] font-bold uppercase sm:text-[24px] lg:border-b-0 lg:pb-[27px] lg:capitalize xl:pb-[40px] 2xl:text-[42px] 2xl:leading-[50px]">
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

                  
                </a>

                {/* <!-- services-cards-btn-01 --> */}
                <div class="content c_active xl:border__top pointer-events-none lg:block lg:pr-[30px] xl:flex xl:flex-col xl:justify-center xl:pr-[50px]">
                  <p class=" pb-10 pt-5 text-base font-medium leading-[22px] text-dark dark:text-white lg:pt-[32px] xl:pt-[40px] xl:leading-[150%]">
                    UWP Digital knows how to combine creativity and
                    effectiveness in one solution. We reveal the unique story of
                    your brand through graphic design, the tone of voice of your
                    brand, developing logos, corporate identity, and creating a
                    brand book for companies. The brand stories start with
                    UWP.Digital.
                  </p>

                  <div class="pointer-events-auto relative mx-auto mb-[39px] h-[216px] w-[216px] rounded-full bg-[#E0E0E0] dark:bg-[#474747] lg:hidden">
                    <a
                      href="https://dev.uwp.digital/en/services/branding"
                      aria-label="service branding"
                      class="absolute left-[50%] top-[50%] mx-[50px] ml-0 w-[116%] translate-x-[-50%] translate-y-[-50%] transition-all ease-out hover:skew-y-2 hover:scale-105"
                    >
                      {/* <!-- 01-m --> */}
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
                      
                      {/* <!-- 01 --> */}
                    </a>
                  </div>

                  {/* <!-- button --> */}
                  <a
                    href="https://dev.uwp.digital/en/services/branding"
                    class="btn__transparent link-oside__red pointer-events-auto mt-5 dark:text-white lg:hidden xl:mt-10"
                  >
                    Read more
                  </a>
                </div>

              </div>
              {/* <!-- END: branding__01 --> */}

              {/* <!-- BEGIN: Web development__02 --> */}
              <div class="title group/card pointer-events-none pt-[20px] lg:py-[30px] xl:py-0">
                <a
                  href="https://dev.uwp.digital/en/services/web-development"
                  aria-label="service web-development"
                  class=" lg:pointer-events-auto"
                >
                  {/* <!-- wrapper-img-02-t-d --> */}

                  <div class="relative hidden lg:mb-[20px] lg:ml-5 lg:block lg:h-[216px] lg:w-[216px] lg:rounded-full lg:bg-[#E0E0E0] dark:lg:bg-[#474747] xl:mb-[30px] xl:ml-[35px] 2xl:h-[355px] 2xl:w-[355px]">
                    <div class="absolute mx-[50px] mb-[40px] hidden transition-all ease-out hover:skew-y-2 hover:scale-105 lg:left-[50%] lg:top-[50%] lg:mx-0 lg:ml-0 lg:block lg:w-[124%] lg:translate-x-[-56%] lg:translate-y-[-46%]">
                      {/* <!-- 02 --> */}
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
                     
                      {/* <!-- 02 --> */}
                    </div>
                  </div>
                </a>

                {/* <!--   --> */}
                <a
                  href="#https://dev.uwp.digital/en/services/web-development"
                  aria-label="service web-development"
                  class=" lg:border__bottom group pointer-events-none relative block lg:pointer-events-auto xl:border-b-0"
                >
                  {/* <!-- DIGITAL MARKETING --> */}

                  
                  <h3 class="border__bottom text__hover-red xl:translate-underline__hover-line__white pointer-events-auto mb-0 pb-[17px] pr-[50px] text-[19px] font-bold uppercase sm:text-[24px] lg:border-b-0 lg:pb-[27px] lg:normal-case xl:pb-[40px] 2xl:text-[42px] 2xl:leading-[50px]">
                    Web development varumarkesutveckling
                  </h3>
                  {/* <!-- wrapper-svg-02  --> */}
                  {/* <!-- services-cards-btn-02 --> */}

                  {/* <!-- TEST: svg-02 --> */}
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
                  {/* <!-- TEST: svg-02 --> */}
                </a>

                {/* <!-- hidden-m-02 --> */}
                <div class="content xl:border__top pointer-events-none mb-[19px] hidden lg:block lg:pr-[30px] xl:flex xl:flex-col xl:justify-center xl:pr-[50px]">
                  <p class=" pb-10 pt-5 text-base font-medium leading-[22px] text-dark dark:text-white lg:pt-[31px] xl:max-w-[530px] xl:pt-[40px] xl:leading-[150%]">
                    Websites are the business card of your company in the
                    digital world. What can we do for you? Make your own
                    website, build a website on WordPress and other
                    constructors, make web analytics, create and integrate
                    payment systems for e-commerce projects, and make a web
                    design.
                  </p>

                  {/* <!-- img-ratio-03 --> */}

                  <div class="pointer-events-auto relative mx-auto mb-[39px] h-[216px] w-[216px] rounded-full bg-[#E0E0E0] dark:bg-[#474747] lg:hidden">
                    <a
                      href="https://dev.uwp.digital/en/services/web-development"
                      aria-label="service web-development"
                      class="absolute left-[50%] top-[50%] mx-[50px] ml-0 w-[116%] translate-x-[-50%] translate-y-[-50%] transition-all ease-out hover:skew-y-2 hover:scale-105"
                    >
                      {/* <!-- 02 --> */}
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
                      
                      {/* <!-- 02 --> */}
                    </a>
                  </div>

                  {/* <!-- button --> */}
                  <a
                    href="https://dev.uwp.digital/en/services/web-development"
                    class="btn__transparent link-oside__red pointer-events-auto mt-5 dark:text-white lg:hidden xl:mt-10"
                  >
                    Read more
                  </a>
                </div>
              </div>
              {/* <!-- END: Web development__02 --> */}

              {/* <!-- BEGIN: SEO__03 --> */}

              <div class="title group/card pointer-events-none pt-[19px] lg:pb-[30px] lg:pt-[30px] xl:pb-[30px] xl:pt-[61px]">
                <a
                  href="https://dev.uwp.digital/en"
                  aria-label="service seo"
                  class=" lg:pointer-events-auto"
                >
                  <div class="relative hidden lg:mb-[20px] lg:ml-5 lg:block lg:h-[216px] lg:w-[216px] lg:rounded-full lg:bg-[#E0E0E0] dark:lg:bg-[#474747] xl:mb-[30px] xl:ml-[45px] 2xl:h-[355px] 2xl:w-[355px]">
                    <div class="absolute mx-[50px] mb-[40px] hidden transition-all ease-out hover:skew-y-2 hover:scale-105 lg:left-[50%] lg:top-[50%] lg:mx-0 lg:ml-0 lg:block lg:w-[134%] lg:translate-x-[-50%] lg:translate-y-[-50%]">
                      {/* <!-- 03 --> */}
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
                      
                      {/* <!-- 03 --> */}
                    </div>
                  </div>
                </a>

                {/* <!--  --> */}
                <a
                  href="#https://dev.uwp.digital/en"
                  aria-label="service seo"
                  class=" lg:border__bottom group pointer-events-none relative block lg:pointer-events-auto xl:border-b-0"
                >
                  {/* <!-- DIGITAL MARKETING --> */}

                  <h3 class="border__bottom text__hover-red xl:translate-underline__hover-line__white pointer-events-auto mb-0 pb-[17px] pr-[50px] text-[19px] font-bold uppercase sm:text-[24px] lg:border-b-0 lg:pb-[27px] xl:pb-[40px] 2xl:text-[42px] 2xl:leading-[50px]">
                    SEO
                  </h3>
                  {/* <!-- wrapper-svg-03 --> */}
                  {/* <!-- services-cards-btn-03 --> */}

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
                  {/* <!-- TEST: svg-02 --> */}
                </a>

                {/* <!-- hidden-m-03 --> */}
                <div class="content xl:border__top pointer-events-none mb-[19px] hidden lg:block lg:pr-[30px] xl:flex xl:flex-col xl:justify-center xl:pr-[50px]">
                  <p class=" pb-10 pt-5 text-base font-medium leading-[22px] text-dark dark:text-white lg:pt-[31px] xl:max-w-[530px] xl:pt-[40px] xl:leading-[150%]">
                    There are millions of websites, but not all of them make it
                    to the top of Google searches. UWP.Digital knows the secrets
                    of search engine optimization and is ready to show them to
                    you. We offer technical SEO analysis, keyword analysis,
                    writing SEO texts, keyword optimization, and link promotion.
                    Internal and external SEO optimization of your website in
                    the complex. Become visible not only to the Google system
                    but also to online customers.
                  </p>

                  {/* <!-- img-ratio-03 --> */}

                  <div class="pointer-events-auto relative mx-auto mb-[39px] h-[216px] w-[216px] rounded-full bg-[#E0E0E0] dark:bg-[#474747] lg:hidden">
                    <a
                      href="https://dev.uwp.digital/en"
                      aria-label="service seo"
                      class="absolute left-[50%] top-[50%] mx-[50px] ml-0 w-[116%] translate-x-[-50%] translate-y-[-50%] transition-all ease-out hover:skew-y-2 hover:scale-105"
                    >
                      {/* <!-- 03 --> */}
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
                      
                      {/* <!-- 03 --> */}
                    </a>
                  </div>

                  {/* <!-- button --> */}
                  <a
                    href="https://dev.uwp.digital/en"
                    class="btn__transparent link-oside__red pointer-events-auto mt-5 dark:text-white lg:hidden xl:mt-10"
                  >
                    Read more
                  </a>
                </div>
              </div>
              {/* <!-- END: SEO__03 --> */}

              {/* <!-- BEGIN: Mobile Promotion__04 --> */}
              <div class="title group/card pointer-events-none pt-[19px] lg:py-[30px] xl:pt-[16px]">
                <a
                  href="https://dev.uwp.digital/en/services/mobile-marketing"
                  aria-label="service mobile-marketing"
                  class=" lg:pointer-events-auto"
                >
                  <div class="relative hidden lg:mb-[20px] lg:ml-5 lg:block lg:h-[216px] lg:w-[216px] lg:rounded-full lg:bg-[#E0E0E0] dark:lg:bg-[#474747] xl:mb-[30px] 2xl:h-[355px] 2xl:w-[355px]">
                    <div class="absolute mx-[50px] mb-[40px] hidden transition-all ease-out hover:skew-y-2 hover:scale-105 lg:left-[50%] lg:top-[50%] lg:mx-0 lg:ml-0 lg:block lg:w-[115%] lg:translate-x-[-46%] lg:translate-y-[-50%]">
                      {/* <!-- 04 --> */}
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
                      
                      {/* <!-- 04 --> */}
                    </div>
                  </div>
                </a>

                {/* <!--  --> */}
                <a
                  href="#https://dev.uwp.digital/en/services/mobile-marketing"
                  aria-label="service mobile-marketing"
                  class=" lg:border__bottom group pointer-events-none relative block lg:pointer-events-auto xl:border-b-0"
                >
                  {/* <!-- DIGITAL MARKETING --> */}

                  <h3 class="border__bottom text__hover-red xl:translate-underline__hover-line__white pointer-events-auto mb-0 pb-[17px] pr-[50px] text-[19px] font-bold uppercase sm:text-[24px] lg:border-b-0 lg:pb-[27px] lg:capitalize xl:pb-[40px] xl:pt-[12px] 2xl:text-[42px] 2xl:leading-[150%]">
                    Mobile Promotion
                  </h3>
                  {/* <!-- wrapper-svg-04 --> */}
                  {/* <!-- services-cards-btn-04 --> */}

                  {/* <!-- TEST: svg-02 --> */}

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
                  {/* <!-- TEST: svg-02 --> */}
                </a>

                {/* <!-- hidden-m-04 --> */}
                <div class="content xl:border__top pointer-events-none mb-[19px] hidden lg:block lg:pr-[30px] xl:flex xl:flex-col xl:justify-center xl:pr-[50px]">
                  <p class=" pb-10 pt-5 text-base font-medium leading-[22px] text-dark dark:text-white lg:pt-[31px] xl:max-w-[530px] xl:pt-[40px] xl:leading-[150%]">
                    Mobile promotion is a separate marketing instrument that can
                    increase your sales. UWP.Digital offers you mobile video
                    advertising, mobile media advertising, and promotion of
                    applications to the top of the App Store and Google Play. We
                    know how to attract users' attention to your product,
                    finding them even while watching YouTube.
                  </p>

                  {/* <!-- img-ratio-03 --> */}
                  {/* <!-- fon-gray-04-m --> */}
                  <div class="pointer-events-auto relative mx-auto mb-[39px] h-[216px] w-[216px] rounded-full bg-[#E0E0E0] dark:bg-[#474747] lg:hidden">
                    <a
                      href="https://dev.uwp.digital/en/services/mobile-marketing"
                      aria-label="service mobile-marketing"
                      class="absolute left-[50%] top-[50%] mx-[50px] ml-0 w-[116%] translate-x-[-50%] translate-y-[-50%] transition-all ease-out hover:skew-y-2 hover:scale-105"
                    >
                      {/* <!-- 04 --> */}
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
                      
                      {/* <!-- 04 --> */}
                    </a>
                  </div>

                  {/* <!-- button --> */}
                  <a
                    href="https://dev.uwp.digital/en/services/mobile-marketing"
                    class="btn__transparent link-oside__red pointer-events-auto mt-5 dark:text-white lg:hidden xl:mt-10"
                  >
                    Read more
                  </a>
                </div>
              </div>
              {/* <!-- END: Mobile Promotion__04 --> */}

              {/* <!-- BEGIN: PPC__05 --> */}

              <div class="title group/card pointer-events-none pt-[19px] lg:pb-0 lg:pt-[30px]">
                <a
                  href="https://dev.uwp.digital/en"
                  aria-label="service ppc"
                  class=" lg:pointer-events-auto"
                >
                  {/* <!-- wrapper-img-05-t-d --> */}

                  <div class="relative hidden lg:mb-[20px] lg:ml-[30px] lg:block lg:h-[216px] lg:w-[216px] lg:rounded-full lg:bg-[#E0E0E0] dark:lg:bg-[#474747] xl:mb-[30px] xl:ml-[55px] 2xl:h-[355px] 2xl:w-[355px]">
                    <div class="absolute mx-[50px] mb-[40px] hidden transition-all ease-out hover:skew-y-2 hover:scale-105 lg:left-[50%] lg:top-[50%] lg:mx-0 lg:ml-0 lg:block lg:w-[142%] lg:translate-x-[-52%] lg:translate-y-[-42%]">
                      {/* <!-- 05 --> */}
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
                     
                      {/* <!-- 05 --> */}
                    </div>
                  </div>
                </a>

                {/* <!--  --> */}
                <a
                  href="#https://dev.uwp.digital/en"
                  aria-label="service ppc"
                  class=" lg:border__bottom group pointer-events-none relative block lg:pointer-events-auto xl:border-b-0"
                >
                  {/* <!--  PPC --> */}

                  <h3 class="border__bottom text__hover-red xl:translate-underline__hover-line__white pointer-events-auto mb-0 pb-[17px] pr-[50px] text-[19px] font-bold uppercase sm:text-[24px] lg:border-b-0 lg:pb-[27px] xl:pb-[40px] 2xl:text-[42px] 2xl:leading-[50px]">
                    PPC varumarkesutveckling
                  </h3>
                  {/* <!-- wrapper-svg-05 --> */}
                  {/* <!-- services-cards-btn-05 --> */}

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
                  {/* <!-- TEST: svg-02 --> */}
                </a>

                <div class="content xl:border__top pointer-events-none mb-[19px] hidden lg:block lg:pr-[30px] xl:flex xl:flex-col xl:justify-center xl:pr-[50px]">
                  <p class=" pb-10 pt-5 text-base font-medium leading-[140%] text-dark dark:text-white lg:pb-0 lg:pt-[31px] xl:max-w-[530px] xl:pb-[28px] xl:pt-[40px] xl:leading-[150%]">
                    PPC marketing attracts only targeted users who see the ads,
                    become interested in the product, click on the link and go
                    to the landing page. We know how to save advertising budget
                    on irrelevant traffic and attract the maximum number of
                    leads. We create and set up AdWords advertising for
                    different niches, and banner ad, optimize the budget,
                    increase conversion and attract only high-quality leads.
                  </p>

                  <div class="pointer-events-auto relative mx-auto mb-[39px] h-[216px] w-[216px] rounded-full bg-[#E0E0E0] dark:bg-[#474747] lg:hidden">
                    <a
                      href="https://dev.uwp.digital/en"
                      aria-label="service ppc"
                      class="absolute left-[50%] top-[50%] mx-[50px] ml-0 w-[116%] translate-x-[-50%] translate-y-[-50%] transition-all ease-out hover:skew-y-2 hover:scale-105"
                    >
                      {/* <!-- 05 --> */}
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
                     
                      {/* <!-- 05 --> */}
                    </a>
                  </div>

                  {/* <!-- button --> */}
                  <a
                    href="https://dev.uwp.digital/en"
                    class="btn__transparent link-oside__red pointer-events-auto mt-5 dark:text-white lg:hidden xl:mt-10"
                  >
                    Read more
                  </a>
                </div>
              </div>
              {/* <!-- END: PPC__05 --> */}
            </div>




            

            <div class="lg:basis-1/2 xl:basis-2/3">
              {/* <!-- BEGIN: Digital Marketing__06 --> */}

              <div class="title group/card lg:border__left pointer-events-none pt-[19px] lg:mt-[71px] lg:pt-[42px] xl:pt-[170px]">
                <a
                  href="https://dev.uwp.digital/en/services/digital-marketing"
                  aria-label="service digital-marketing"
                  class=" lg:pointer-events-auto"
                >
                  {/* <!-- wrapper-img-06-t-d --> */}

                  <div class="relative hidden lg:mb-[20px] lg:ml-[45px] lg:block lg:h-[216px] lg:w-[216px] lg:rounded-full lg:bg-[#E0E0E0] dark:lg:bg-[#474747] xl:mb-[30px] xl:ml-[75px] 2xl:h-[355px] 2xl:w-[355px]">
                    <div class="absolute mx-[50px] mb-[40px] hidden transition-all ease-out hover:skew-y-2 hover:scale-105 lg:left-[50%] lg:top-[50%] lg:mx-0 lg:ml-0 lg:block lg:w-[139%] lg:translate-x-[-45%] lg:translate-y-[-50%]">
                      {/* <!-- 06 --> */}
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
                      
                      {/* <!-- 06 --> */}
                    </div>
                  </div>
                </a>

                {/* <!--   --> */}
                <a
                  href="https://dev.uwp.digital/en/services/digital-marketing"
                  aria-label="service digital-marketing"
                  class=" lg:border__bottom group pointer-events-none relative block lg:pointer-events-auto"
                >
                  {/* <!-- seo --> */}

                  <h3 class="border__bottom text__hover-red xl:translate-underline__hover-line__white pointer-events-auto mb-0 pb-[17px] pr-[50px] text-[19px] font-bold uppercase sm:text-[24px] lg:border-b-0 lg:pb-[27px] lg:pl-[29px] lg:capitalize xl:pb-[40px] xl:pl-[50px] 2xl:text-[42px] 2xl:leading-[50px]">
                    Digital Marketing
                  </h3>
                  {/* <!-- wrapper-svg-06 --> */}
                  {/* <!-- services-cards-btn-06 --> */}

                  {/* <!-- TEST: svg-02 --> */}

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
                  {/* <!-- TEST: svg-02 --> */}
                </a>

                {/* <!-- hidden-m-06 --> */}

                <div class="content pointer-events-none mb-[19px] hidden lg:mb-0 lg:block lg:pl-[29px] xl:flex xl:flex-col xl:justify-center xl:pl-[50px]">
                  <p class=" pb-10 pt-5 text-base font-medium leading-[22px] text-dark dark:text-white lg:pt-[31px] xl:pt-[40px] xl:leading-[150%]">
                    Digital marketing is a complete immersion of your business
                    in the online space: from developing the most productive
                    digital strategy to creating influential creatives for
                    Facebook ads, ads on Instagram, LinkedIn ads, and
                    advertisement on Google. Digital marketing includes
                    marketing analysis, developing digital strategies,
                    copywriting, rewriting, and creating different types of
                    advertising: on social networks, contextual or banner ads.
                  </p>

                  {/* <!-- img-ratio-02 --> */}

                  <div class="pointer-events-auto relative mx-auto mb-[39px] h-[216px] w-[216px] rounded-full bg-[#E0E0E0] dark:bg-[#474747] lg:hidden">
                    <a
                      href="https://dev.uwp.digital/en/services/digital-marketing"
                      aria-label="service digital-marketing"
                      class="absolute left-[50%] top-[50%] mx-[50px] ml-0 w-[116%] translate-x-[-50%] translate-y-[-50%] transition-all ease-out hover:skew-y-2 hover:scale-105"
                    >
                      {/* <!-- 06 --> */}
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
                     
                      {/* <!-- 06 --> */}
                    </a>
                  </div>

                  {/* <!-- button --> */}
                  <a
                    href="https://dev.uwp.digital/en/services/digital-marketing"
                    class="btn__transparent link-oside__red pointer-events-auto mt-5 dark:text-white lg:hidden xl:mt-10"
                  >
                    Read more
                  </a>
                </div>
              </div>
              {/* <!-- END: Digital Marketing__06 --> */}

              {/* <!-- BEGIN: Video motion__07 --> */}
              <div class="title group/card lg:border__left pointer-events-none pt-[19px] lg:py-[30px] xl:pt-[24px]">
                <a
                  href="https://dev.uwp.digital/en"
                  aria-label="service marketing"
                  class=" lg:pointer-events-auto"
                >
                  {/* <!-- wrapper-img-07-t-d --> */}

                  <div class="relative hidden lg:mb-[20px] lg:ml-[74px] lg:block lg:h-[216px] lg:w-[216px] lg:rounded-full lg:bg-[#E0E0E0] dark:lg:bg-[#474747] xl:mb-[30px] xl:ml-[120px] 2xl:h-[355px] 2xl:w-[355px]">
                    <div class="absolute mx-[50px] mb-[40px] hidden transition-all ease-out hover:skew-y-2 hover:scale-105 lg:left-[50%] lg:top-[50%] lg:mx-0 lg:ml-0 lg:block lg:w-[138%] lg:translate-x-[-54%] lg:translate-y-[-44%]">
                      {/* <!-- 07 --> */}
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
                     
                      {/* <!-- 07 --> */}
                    </div>
                  </div>
                </a>

                {/* <!--   --> */}
                <a
                  href="#https://dev.uwp.digital/en"
                  aria-label="service marketing"
                  class=" lg:border__bottom group pointer-events-none relative block lg:pointer-events-auto"
                >
                  {/* <!-- seo --> */}

                  <h3 class="border__bottom text__hover-red xl:translate-underline__hover-line__white pointer-events-auto mb-0 pb-[17px] pr-[50px] text-[19px] font-bold uppercase sm:text-[24px] lg:border-b-0 lg:pb-[27px] lg:pl-[29px] lg:normal-case xl:pb-[40px] xl:pl-[50px] 2xl:text-[42px] 2xl:leading-[50px]">
                    Video motion
                  </h3>

                  {/* <!-- TEST: svg-02 --> */}

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
                  {/* <!-- TEST: svg-02 --> */}

                  {/* <!-- wrapper-svg-07 --> */}
                  {/* <!-- services-cards-btn-07 --> */}
                </a>

                {/* <!-- hidden-m-07 --> */}

                <div class="content pointer-events-none mb-[19px] hidden lg:block lg:pl-[29px] xl:flex xl:flex-col xl:justify-center xl:pl-[50px]">
                  <p class=" pb-10 pt-5 text-base font-medium leading-[22px] text-dark dark:text-white lg:pt-[31px] xl:max-w-[555px] xl:pt-[40px] xl:leading-[150%]">
                    34% higher conversion rate for marketing campaigns with
                    video ads. Tempting? UWP.Digital turns an idea into a
                    finished product about your company. We create video
                    presentations, promos, commercials, motion videos, and even
                    youtube produced videos. It's easier to become memorable
                    with powerful effects.
                  </p>

                  {/* <!-- img-ratio-02 --> */}
                  {/* <!-- fon-gray-07-m --> */}
                  <div class="pointer-events-auto relative mx-auto mb-[39px] h-[216px] w-[216px] rounded-full bg-[#E0E0E0] dark:bg-[#474747] lg:hidden">
                    <a
                      href="https://dev.uwp.digital/en"
                      aria-label="service marketing"
                      class="absolute left-[50%] top-[50%] mx-[50px] ml-0 w-[116%] translate-x-[-50%] translate-y-[-50%] transition-all ease-out hover:skew-y-2 hover:scale-105"
                    >
                      {/* <!-- 07 --> */}
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
                      
                      {/* <!-- 07 --> */}
                    </a>
                  </div>

                  {/* <!-- button --> */}
                  <a
                    href="https://dev.uwp.digital/en"
                    class="btn__transparent link-oside__red pointer-events-auto mt-5 dark:text-white lg:hidden xl:mt-10"
                  >
                    Read more
                  </a>
                </div>
              </div>
              {/* <!-- END: Video motion__07 --> */}

              {/* <!-- BEGIN: SMM__08 --> */}
              <div class="title group/card lg:border__left pointer-events-none pt-[19px] lg:py-[30px]">
                <a
                  href="https://dev.uwp.digital/en"
                  aria-label="service smm"
                  class=" lg:pointer-events-auto"
                >
                  {/* <!-- wrapper-img-08-t-d --> */}

                  <div class="relative hidden lg:mb-[20px] lg:ml-[37px] lg:block lg:h-[216px] lg:w-[216px] lg:rounded-full lg:bg-[#E0E0E0] dark:lg:bg-[#474747] xl:mb-[30px] xl:ml-[70px] 2xl:h-[355px] 2xl:w-[355px]">
                    <div class="absolute mx-[50px] mb-[40px] hidden transition-all ease-out hover:skew-y-2 hover:scale-105 lg:left-[50%] lg:top-[50%] lg:mx-0 lg:ml-0 lg:block lg:w-[108%] lg:translate-x-[-55%] lg:translate-y-[-46%]">
                      {/* <!-- 08 --> */}
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
                     
                      {/* <!-- 08 --> */}
                    </div>
                  </div>
                </a>

                {/* <!--  --> */}
                <a
                  href="#https://dev.uwp.digital/en"
                  aria-label="service smm"
                  class=" lg:border__bottom group pointer-events-none relative block lg:pointer-events-auto"
                >
                  {/* <!-- seo --> */}

                  <h3 class="border__bottom text__hover-red xl:translate-underline__hover-line__white pointer-events-auto mb-0 pb-[17px] pr-[50px] text-[19px] font-bold uppercase sm:text-[24px] lg:border-b-0 lg:pb-[27px] lg:pl-[29px] xl:pb-[40px] xl:pl-[50px] 2xl:text-[42px] 2xl:leading-[50px]">
                    SMM
                  </h3>
                  {/* <!-- wrapper-svg-07 --> */}
                  {/* <!-- services-cards-btn-06 --> */}

                  {/* <!-- TEST: svg-02 --> */}

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
                  {/* <!-- TEST: svg-02 --> */}
                </a>

                {/* <!-- hidden --> */}

                <div class="content pointer-events-none mb-[19px] hidden lg:block lg:pl-[29px] xl:flex xl:flex-col xl:justify-center xl:pl-[50px]">
                  <p class=" pb-10 pt-5 text-base font-medium leading-[22px] text-dark dark:text-white lg:pt-[31px] xl:max-w-[555px] xl:pt-[40px] xl:leading-[150%]">
                    Open a new sales channel for your business with the help of
                    SMM promotion. UWP.Digital provides a full range of services
                    in social networks: developing Social Media Marketing
                    strategy, creating and maintaining social networks from
                    scratch, developing a unified design and USP for your social
                    platforms, launching targeted advertising, advertising on
                    LinkedIn, and attracting traffic from social networks to
                    your website.
                  </p>

                  {/* <!-- img-ratio-02 --> */}

                  {/* <!-- fon-gray-08-m --> */}
                  <div class="pointer-events-auto relative mx-auto mb-[39px] h-[216px] w-[216px] rounded-full bg-[#E0E0E0] dark:bg-[#474747] lg:hidden">
                    <a
                      href="https://dev.uwp.digital/en"
                      aria-label="service smm"
                      class="absolute left-[50%] top-[50%] mx-[50px] ml-0 w-[116%] translate-x-[-50%] translate-y-[-50%] transition-all ease-out hover:skew-y-2 hover:scale-105"
                    >
                      {/* <!-- 08 --> */}
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
                      
                      {/* <!-- 08 --> */}
                    </a>
                  </div>

                  {/* <!-- button --> */}
                  <a
                    href="https://dev.uwp.digital/en"
                    class="btn__transparent link-oside__red pointer-events-auto mt-5 dark:text-white lg:hidden xl:mt-10"
                  >
                    Read more
                  </a>
                </div>
              </div>
              {/* <!-- END: SMM__08 --> */}

              {/* <!-- BEGIN: TikTok__09 --> */}
              <div class="title group/card lg:border__left pointer-events-none pt-[19px] lg:pb-[513px] lg:pt-[30px] xl:pt-[69px]">
                <a
                  href="https://dev.uwp.digital/en"
                  aria-label="service tiktok"
                  class=" lg:pointer-events-auto"
                >
                  {/* <!-- wrapper-img-09-t-d --> */}

                  <div class="relative hidden lg:mb-[20px] lg:ml-[30px] lg:block lg:h-[216px] lg:w-[216px] lg:rounded-full lg:bg-[#E0E0E0] dark:lg:bg-[#474747] xl:mb-[50px] xl:ml-[30px] 2xl:h-[355px] 2xl:w-[355px]">
                    <div class="absolute mx-[50px] mb-[40px] hidden transition-all ease-out hover:skew-y-2 hover:scale-105 lg:left-[50%] lg:top-[50%] lg:mx-0 lg:ml-0 lg:block lg:w-full lg:translate-x-[-50%] lg:translate-y-[-50%]">
                      {/* <!-- 09 --> */}
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
                     
                      {/* <!-- 09 --> */}
                    </div>
                  </div>
                </a>

                {/* <!--   --> */}
                <a
                  href="#https://dev.uwp.digital/en"
                  aria-label="service tiktok"
                  class=" lg:border__bottom group pointer-events-none relative block lg:pointer-events-auto"
                >
                  {/* <!-- seo --> */}

                  <h3 class="border__bottom text__hover-red xl:translate-underline__hover-line__white pointer-events-auto mb-0 pb-[17px] pr-[50px] text-[19px] font-bold uppercase sm:text-[24px] lg:border-b-0 lg:pb-[27px] lg:pl-[29px] lg:capitalize xl:pb-[40px] xl:pl-[50px] xl:pt-[8px] 2xl:text-[42px] 2xl:leading-[50px]">
                    TikTok
                  </h3>
                  {/* <!-- wrapper-svg-09 --> */}
                  {/* <!-- services-cards-btn-09 --> */}

                  {/* <!-- TEST: svg-02 --> */}

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
                  {/* <!-- TEST: svg-02 --> */}
                </a>

                {/* <!-- hidden --> */}

                <div class="content pointer-events-none mb-[19px] hidden lg:block lg:pl-[29px] xl:flex xl:flex-col xl:justify-center xl:pl-[50px]">
                  <p class=" pb-10 pt-5 text-base font-medium leading-[22px] text-dark dark:text-white lg:pt-[31px] xl:max-w-[555px] xl:pt-[40px] xl:leading-[150%]">
                    TikTok is a fairly new platform with a young audience. Can a
                    site with light content be used to promote a business? Yes!
                    UWP.Digital offers you promotion through ads and video
                    posting on TikTok. We know how to draw the attention of a
                    young audience to your product. Working with us, you are not
                    hiring an adsmanager, but an entire advertising agency that
                    works for your success.
                  </p>

                  {/* <!-- img-ratio-02 --> */}

                  {/* <!-- fon-gray-09-m --> */}
                  <div class="pointer-events-auto relative mx-auto mb-[39px] h-[216px] w-[216px] rounded-full bg-[#E0E0E0] dark:bg-[#474747] lg:hidden">
                    <a
                      href="https://dev.uwp.digital/en"
                      aria-label="service tiktok"
                      class="absolute left-[50%] top-[50%] mx-[50px] ml-0 w-[116%] translate-x-[-50%] translate-y-[-50%] transition-all ease-out hover:skew-y-2 hover:scale-105"
                    >
                      {/* <!-- 09 --> */}
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
                     
                      {/* <!-- 09 --> */}
                    </a>
                  </div>

                  {/* <!-- button --> */}
                  <a
                    href="https://dev.uwp.digital/en"
                    class="btn__transparent link-oside__red pointer-events-auto mt-5 dark:text-white lg:hidden xl:mt-10"
                  >
                    Read more
                  </a>
                </div>
              </div>
              {/* <!-- END: TikTok__09 --> */}
            </div>
          </div>

          {/* <!-- btn-order-a-consultation --> */}
          {/* xl:max-w-[287px] 2xl:max-w-[357px] */}
          <div class="xl:mt-0 xl:basis-[25%] xl:pr-[40px] 2xl:pr-[60px]">
            <p class=" achievements__subtitle hidden xl:flex xl:pb-[33px] xl:pt-[27px] 2xl:pb-[51px] 2xl:pt-[50px]">
              Whether you need to create a website, develop a UX UI design,
              conduct SEO optimization, develop a marketing strategy for your
              business, set up Google ads, and Facebook ads, or get more
              followers on Instagram - welcome to UWP Digital.
            </p>

            {/* <!-- TEST: 02 --> */}

            {/* <!-- overflow-hidden  --> */}
            {/* <!-- TODO fix btn__services to btn 08.03.2023 --> */}

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
            <MainBtn>
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

            {/* <!-- TEST: 02 --> */}
          </div>
        </div>
        {/* <!-- END: wrapper-services-columns-3 --> */}
      </div>
    </section>
  );
});
