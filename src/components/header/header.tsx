//    document.documentElement.classList.add{value}
import { component$, useVisibleTask$, $ } from "@builder.io/qwik";
import { useLocalStorage } from "~/hooks/useLocalStorage";

import Logo from "~/components/logo/logo";
import ThemeBtn from "~/components/theme-btn/theme-btn";
import ContactBtn from "~/components/header-contact-btn/header-contact-btn";

export default component$(() => {
  const [currentTheme, changeTheme] = useLocalStorage("theme", "light");
  useVisibleTask$(() => {
    console.log(currentTheme);
  });

  const switchTheme = $(() =>
    currentTheme.value !== "dark" ? changeTheme("dark") : changeTheme("light")
  );
  return (
    <header
      id="mainNav"
      class="header min-h-[var(--header-h)] bg-dark text-white md:min-h-[var(--header-h-lg)] lg:min-h-[var(--header-h-xl)]"
    >
      {/* <!-- container --> */}
      <div
        id="header-container"
        class="container mx-auto flex min-h-[var(--header-h)] sm:max-w-full md:min-h-[var(--header-h-lg)] lg:min-h-[var(--header-h-xl)] lg:px-[30px] 3xl:max-w-[1920px] 3xl:px-[135px]"
      >
        {/* <!--  BEGIN: wrap-header --> */}
        <div class="flex grow items-center justify-between">
          {/* <!-- wrap logo and btn dark --> */}

          <div class="lg:block">
            <div
              id="logoOpacity"
              class="flex items-center gap-[40px] lg:gap-[51px] xl:gap-[38px] 2xl:gap-[51px]"
            >
              <Logo />

              {/* <!--  BEGIN: thema-d --> */}
              <ThemeBtn switch={switchTheme} class={"mx-auto"} />

              {/* <!--  END: thema-d --> */}
            </div>
          </div>

          {/* <!-- BEGIN: nav-header --> */}

          <nav class="hidden w-[450px] xl:ml-auto xl:mr-auto xl:block xl:w-[573px] 2xl:ml-0 2xl:mr-0 2xl:w-[568px]">
            <ul
              id="nav"
              class="text-base uppercase text-lightGrey transition-all xl:flex xl:justify-between"
            >
              <li class=" ">
                <a
                  href="/cases"
                  class="translate-underline__hover-line__dark _nav-item-activ"
                  aria-label="cases page"
                >
                  Cases
                </a>
              </li>
              {/* <!-- Services --> */}
              <li class="translate-underline__hover-line__dark group/item relative xl:w-[103px]">
                <a
                  href="/services"
                  aria-label="services page"
                  class="flex items-center gap-[10px] transition-all hover:text-lightDarkGrey active:text-main"
                >
                  Services
                  <span class="">
                    <svg
                      class="stroke-current transition-all"
                      width="12"
                      height="6"
                      viewBox="0 0 12 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.833008 0.5L5.83301 5.5L10.833 0.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>{" "}
                  </span>
                </a>

                {/* <!--  BEGIN: popup-services-01 hidden --> */}

                <div class="invisible z-10 opacity-0 transition-all group-hover/item:visible group-hover/item:opacity-100">
                  <div class="absolute left-0 top-[20px] flex justify-center pt-[34px]">
                    {/* <!-- dropdown__wrapper --> */}
                    <div class="dropdown__wrapper flex min-w-max cursor-default gap-[106px] rounded-[10px] bg-light px-6 py-[30px] text-dark shadow-2xl">
                      {/* <!-- dropdown__list --> */}
                      <ul class="flex flex-col gap-[10px]">
                        {/* <!-- dropdown__item-01 --> */}
                        <li>
                          <a
                            class="dropdown__link translate-underline__hover-line__dark flex max-w-fit transition-all hover:text-lightDarkGrey active:text-main"
                            href="https://dev.uwp.digital/en"
                            aria-label="smm"
                          >
                            <p class="text-base font-medium">all services</p>
                            <span class="pt-[6px] pl-[10px]">
                              <svg
                                fill="currentColor"
                                width="11"
                                height="11"
                                viewBox="0 0 11 11"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M7.79202 1.8792H0.664396V0H11V10.3356H9.1208V3.208L1.3288 11L0 9.67122L7.79202 1.8792Z"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </li>
                        {/* <!-- 02 --> */}
                        <li>
                          <a
                            class="dropdown__link translate-underline__hover-line__dark flex max-w-fit transition-all hover:text-lightDarkGrey active:text-main"
                            href="https://dev.uwp.digital/en"
                            aria-label="smm"
                          >
                            <p class="text-base font-medium">
                              mobile promotion
                            </p>
                            <span class="pt-[6px] pl-[10px]">
                              <svg
                                fill="currentColor"
                                width="11"
                                height="11"
                                viewBox="0 0 11 11"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M7.79202 1.8792H0.664396V0H11V10.3356H9.1208V3.208L1.3288 11L0 9.67122L7.79202 1.8792Z"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </li>
                        {/* <!-- 03 --> */}
                        <li>
                          <a
                            class="dropdown__link translate-underline__hover-line__dark flex max-w-fit transition-all hover:text-lightDarkGrey active:text-main"
                            href="https://dev.uwp.digital/en"
                            aria-label="smm"
                          >
                            <p class="text-base font-medium">
                              digital marketing
                            </p>
                            <span class="pt-[6px] pl-[10px]">
                              <svg
                                fill="currentColor"
                                width="11"
                                height="11"
                                viewBox="0 0 11 11"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M7.79202 1.8792H0.664396V0H11V10.3356H9.1208V3.208L1.3288 11L0 9.67122L7.79202 1.8792Z"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </li>
                        {/* <!-- 04 --> */}
                        <li>
                          <a
                            class="dropdown__link translate-underline__hover-line__dark flex max-w-fit transition-all hover:text-lightDarkGrey active:text-main"
                            href="https://dev.uwp.digital/en"
                            aria-label="smm"
                          >
                            <p class="text-base font-medium">seo</p>
                            <span class="pt-[6px] pl-[10px]">
                              <svg
                                fill="currentColor"
                                width="11"
                                height="11"
                                viewBox="0 0 11 11"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M7.79202 1.8792H0.664396V0H11V10.3356H9.1208V3.208L1.3288 11L0 9.67122L7.79202 1.8792Z"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </li>
                        {/* <!-- 05 --> */}
                        <li>
                          <a
                            class="dropdown__link translate-underline__hover-line__dark flex max-w-fit transition-all hover:text-lightDarkGrey active:text-main"
                            href="https://dev.uwp.digital/en"
                            aria-label="smm"
                          >
                            <p class="text-base font-medium">web design</p>
                            <span class="pt-[6px] pl-[10px]">
                              <svg
                                fill="currentColor"
                                width="11"
                                height="11"
                                viewBox="0 0 11 11"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M7.79202 1.8792H0.664396V0H11V10.3356H9.1208V3.208L1.3288 11L0 9.67122L7.79202 1.8792Z"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </li>
                      </ul>
                      {/* <!-- dropdown__list --> */}

                      <ul class="flex flex-col gap-[10px]">
                        {/* <!-- dropdown__item 06 --> */}
                        <li>
                          <a
                            class="dropdown__link _nav-item-activ translate-underline__hover-line__dark flex max-w-fit transition-all hover:text-lightDarkGrey active:text-main"
                            href="https://dev.uwp.digital/en"
                            aria-label="ppc"
                          >
                            <p class="text-base font-medium">PPC</p>
                            <span class="p-2 pl-[10px]">
                              {/* <!-- fill-dark  --> */}
                              <svg
                                fill="currentColor"
                                width="11"
                                height="11"
                                viewBox="0 0 11 11"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M7.79202 1.8792H0.664396V0H11V10.3356H9.1208V3.208L1.3288 11L0 9.67122L7.79202 1.8792Z"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </li>
                        {/* <!-- 07 --> */}
                        <li>
                          <a
                            class="dropdown__link translate-underline__hover-line__dark flex max-w-fit transition-all hover:text-lightDarkGrey active:text-main"
                            href="https://dev.uwp.digital/en"
                            aria-label="smm"
                          >
                            <p class="text-base font-medium">SMM</p>
                            <span class="pt-[6px] pl-[10px]">
                              <svg
                                fill="currentColor"
                                width="11"
                                height="11"
                                viewBox="0 0 11 11"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M7.79202 1.8792H0.664396V0H11V10.3356H9.1208V3.208L1.3288 11L0 9.67122L7.79202 1.8792Z"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </li>
                        {/* <!-- 08 --> */}
                        <li>
                          <a
                            class="dropdown__link translate-underline__hover-line__dark flex max-w-fit transition-all hover:text-lightDarkGrey active:text-main"
                            href="https://dev.uwp.digital/en"
                            aria-label="smm"
                          >
                            <p class="text-base font-medium">tiktok</p>
                            <span class="pt-[6px] pl-[10px]">
                              <svg
                                fill="currentColor"
                                width="11"
                                height="11"
                                viewBox="0 0 11 11"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M7.79202 1.8792H0.664396V0H11V10.3356H9.1208V3.208L1.3288 11L0 9.67122L7.79202 1.8792Z"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </li>
                        {/* <!-- 09 --> */}
                        <li>
                          <a
                            class="dropdown__link translate-underline__hover-line__dark flex max-w-fit transition-all hover:text-lightDarkGrey active:text-main"
                            href="https://dev.uwp.digital/en"
                            aria-label="smm"
                          >
                            <p class="text-base font-medium">video motion</p>
                            <span class="pt-[6px] pl-[10px]">
                              <svg
                                fill="currentColor"
                                width="11"
                                height="11"
                                viewBox="0 0 11 11"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M7.79202 1.8792H0.664396V0H11V10.3356H9.1208V3.208L1.3288 11L0 9.67122L7.79202 1.8792Z"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </li>
                        {/* <!-- 10 --> */}
                        <li>
                          <a
                            class="dropdown__link translate-underline__hover-line__dark flex max-w-fit transition-all hover:text-lightDarkGrey active:text-main"
                            href="https://dev.uwp.digital/en"
                            aria-label="smm"
                          >
                            <p class="text-base font-medium">branding</p>
                            <span class="pt-[6px] pl-[10px]">
                              <svg
                                fill="currentColor"
                                width="11"
                                height="11"
                                viewBox="0 0 11 11"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M7.79202 1.8792H0.664396V0H11V10.3356H9.1208V3.208L1.3288 11L0 9.67122L7.79202 1.8792Z"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!--  END: popup-services --> */}
              </li>
              {/* <!-- menu-About us --> */}
              <li>
                <a href="/about" class="translate-underline__hover-line__dark">
                  About us
                </a>
              </li>
              <li>
                <a href="/blog" class="translate-underline__hover-line__dark">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  class="translate-underline__hover-line__dark"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          {/* <!-- END: nav-header --> */}

          <div class="flex xl:items-center">
            <ContactBtn class={"mx-auto"} />

            {/* <!--  BEGIN: buttons-languages-desktop --> */}
            <div class="hidden  xl:block ">
              <div class="flex items-center pl-[22px] group/item xl:relative xl:pl-[37px] 2xl:pl-[22px]">
                {/* <!--  BEGIN: button-en --> */}
                <span class="  gap-2.5 rounded-lg p-2.5 transition-all ease-in hover:text-main dark:hover:bg-none lg:flex">
                  <svg
                    class="w-[32px] h-[23.11px]"
                    width="33"
                    height="24"
                    viewBox="0 0 34 25"
                    fill="none"
                  >
                    <path
                      d="M0 3.46471C0 1.82734 1.3293 0.5 2.96907 0.5H30.6804C32.3202 0.5 33.6495 1.82734 33.6495 3.46471V21.5353C33.6495 23.1727 32.3202 24.5 30.6804 24.5H2.96907C1.3293 24.5 0 23.1727 0 21.5353V3.46471Z"
                      fill="#0A17A7"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 8.45598H7.99954L0.025137 3.07717C0.177812 1.90943 1.01103 0.95531 2.11432 0.624697L12.7935 7.82787V0.5H20.7971V7.82824L31.4944 0.612801C32.6064 0.92866 33.4524 1.87553 33.6194 3.04111L25.5915 8.45598H33.6029V16.4596H25.5905L33.6294 21.8819C33.4929 23.0522 32.6739 24.0145 31.5803 24.3614L20.7971 17.088V24.5H12.7935V17.0884L2.02979 24.3486C0.944621 23.9875 0.138033 23.0179 0.0160304 21.8452L8.00057 16.4596H0V8.45598Z"
                      fill="white"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 14.9H14.4212V24.5H19.2283V14.9H33.6495V10.1H19.2283V0.5H14.4212V10.1H0V14.9Z"
                      fill="#E6273E"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.82938 23.5927C0.676051 23.4339 0.540311 23.258 0.425293 23.0681L10.4953 16.39C10.6473 16.2892 10.8523 16.3307 10.9531 16.4827C11.0539 16.6347 11.0124 16.8397 10.8604 16.9405L0.82938 23.5927Z"
                      fill="#FF304D"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.936291 1.30225L10.3684 7.68922C10.519 7.79121 10.5589 7.99656 10.4574 8.14789C10.3559 8.29922 10.1515 8.33922 10.0009 8.23724L0.505371 1.80736C0.629895 1.62322 0.77459 1.45379 0.936291 1.30225Z"
                      fill="#FF304D"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M33.1724 23.1475C33.0519 23.3328 32.9113 23.5039 32.7537 23.6575L23.0315 17.1809C22.8799 17.0799 22.8399 16.8766 22.9421 16.7268C23.0442 16.577 23.2499 16.5374 23.4015 16.6384L33.1724 23.1475Z"
                      fill="#FF304D"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M33.1524 1.823L23.3953 8.23992C23.2435 8.33973 23.0395 8.29765 22.9397 8.14593C22.8398 7.9942 22.8819 7.79028 23.0337 7.69047L32.7257 1.31641C32.886 1.46861 33.0293 1.63852 33.1524 1.823Z"
                      fill="#FF304D"
                    ></path>
                  </svg>
                  <span class="btn__language-desc uppercase transition-all ease-in">
                    en
                  </span>
                </span>

                {/* <!--  BEGIN: popup-icons-languages hidden -->  */}

                <div class=" z-10  transition-all group-hover/item:visible group-hover/item:opacity-100 opacity-0  invisible   ">
                  <div class="absolute left-[37px] top-[32px] flex justify-center pt-[13px] 2xl:left-[23px]">
                    {/* <!-- dropdown__wrapper --> */}
                    <div
                      class="language-wrapper  dropdown__wrapper flex min-w-max cursor-default gap-[106px] rounded-[5px] bg-[#343434] 
                         py-[4px]  shadow-2xl"
                    >
                      {/* <!-- dropdown__list --> */}
                      <ul class="language-list  flex flex-col gap-[2px] text-lightGrey ">
                        {/* <!--  BEGIN: button-dn --> */}
                        <li class="group  ">
                          <a
                            href="#"
                            class="language-item  flex items-center gap-[5.5px] rounded-[5px] p-2.5 transition-all ease-in hover:bg-[#4E4E4E]  lg:flex"
                          >
                            <svg
                              class="w-[32px] h-[23.11px]"
                              width="33"
                              height="24"
                              viewBox="0 0 33 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M28.9449 0H13.8338V9.77778H32.5005V3.55556C32.5005 2.61256 32.1259 1.70819 31.4591 1.0414C30.7923 0.374602 29.8879 0 28.9449 0ZM13.8338 23.1111H28.9449C30.9085 23.1111 32.5005 21.5191 32.5005 19.1111V13.3333H13.8338V23.1111ZM0.500488 13.3333V19.1111C0.500488 21.5191 2.09249 23.1111 4.05604 23.1111H10.2783V13.3333H0.500488ZM10.2783 0H4.05604C3.11305 0 2.20868 0.374602 1.54189 1.0414C0.87509 1.70819 0.500488 2.61256 0.500488 3.55556L0.500488 9.77778H10.2783V0Z"
                                fill="#C60C30"
                              />
                              <path
                                d="M13.8338 0H10.2783V9.77778H0.500488V13.3333H10.2783V23.1111H13.8338V13.3333H32.5005V9.77778H13.8338V0Z"
                                fill="#EEEEEE"
                              />
                            </svg>

                            <span class="btn__language-desc uppercase  transition-all ease-in group-hover:text-main">
                              dn
                            </span>
                          </a>
                        </li>

                        {/* <!--  BEGIN: button-nd --> */}
                        <li class="group ">
                          <a
                            href="#"
                            class="language-item  z-20 flex items-center gap-[5.5px] rounded-[5px] p-2.5 transition-all ease-in hover:bg-[#4E4E4E]  lg:flex"
                          >
                            <svg
                              class="w-[32px] h-[23.11px]"
                              width="33"
                              height="24"
                              viewBox="0 0 33 23"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="0.500488"
                                y="0.452881"
                                width="32"
                                height="22"
                                rx="2.85"
                                fill="#EC1C24"
                              />
                              <path
                                d="M9.50049 0.452881H15.0005V22.4529H9.50049V0.452881Z"
                                fill="#E6E7E8"
                              />
                              <path
                                d="M0.500488 8.95288H32.5005V13.9529H0.500488V8.95288Z"
                                fill="#E6E7E8"
                              />
                              <path
                                d="M10.5005 0.452881H14.0005V22.4529H10.5005V0.452881Z"
                                fill="#2B3990"
                              />
                              <path
                                d="M0.500488 9.95288H32.5005V12.9529H0.500488V9.95288Z"
                                fill="#2B3990"
                              />
                            </svg>

                            <span class="btn__language-desc uppercase  transition-all ease-in group-hover:text-main">
                              nd
                            </span>
                          </a>
                        </li>

                        {/* <!--  BEGIN: button-gr --> */}
                        <li class="group ">
                          <a
                            href="#"
                            class="language-item   z-20 flex items-center gap-[5.5px] rounded-[5px] p-2.5 transition-all ease-in hover:bg-[#4E4E4E]  lg:flex"
                          >
                            <svg
                              class="w-[32px] h-[23.11px]"
                              width="33"
                              height="24"
                              viewBox="0 0 33 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.500488 20.2562C0.500488 21.1947 0.87509 22.0947 1.54189 22.7583C2.20868 23.4219 3.11305 23.7947 4.05604 23.7947H28.9449C29.8879 23.7947 30.7923 23.4219 31.4591 22.7583C32.1259 22.0947 32.5005 21.1947 32.5005 20.2562V16.7178H0.500488V20.2562Z"
                                fill="#FFCD05"
                              />
                              <path
                                d="M0.500488 8.75635H32.5005V16.7179H0.500488V8.75635Z"
                                fill="#ED1F24"
                              />
                              <path
                                d="M28.9449 0.794678H4.05604C3.11305 0.794678 2.20868 1.16748 1.54189 1.83107C0.87509 2.49466 0.500488 3.39468 0.500488 4.33314L0.500488 8.75622H32.5005V4.33314C32.5005 3.39468 32.1259 2.49466 31.4591 1.83107C30.7923 1.16748 29.8879 0.794678 28.9449 0.794678Z"
                                fill="#141414"
                              />
                            </svg>

                            <span class="btn__language-desc uppercase  transition-all ease-in group-hover:text-main">
                              gr
                            </span>
                          </a>
                        </li>

                        {/* <!--  BEGIN: button-sv --> */}

                        <li class="group">
                          <a
                            href="#"
                            class="language-item  flex items-center gap-[5.5px] rounded-[5px] p-2.5 transition-all ease-in hover:bg-[#4E4E4E]  lg:flex"
                          >
                            <svg
                              class="w-[32px] h-[23.11px]"
                              width="33"
                              height="24"
                              viewBox="0 0 34 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                y="0.120117"
                                width="34"
                                height="23.9202"
                                rx="3"
                                fill="#0B5089"
                              />
                              <rect
                                x="7.23438"
                                y="0.120117"
                                width="4.34043"
                                height="23.9202"
                                fill="#FFC100"
                              />
                              <rect
                                y="14.7153"
                                width="5.27056"
                                height="34"
                                transform="rotate(-90 0 14.7153)"
                                fill="#FFC100"
                              />
                            </svg>
                            <span class="btn__language-desc uppercase transition-all ease-in group-hover:text-main">
                              sv
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!--  END: popup-icons-languages --> */}
              </div>
            </div>
            {/* <!--  END: buttons-languages-desktop --> */}

            {/* <!--  BEGIN: button-burger --> */}

            <button
              type="button"
              aria-label="button burger"
              class="burger ml-[33px] items-center lg:ml-[37px] xl:hidden"
            >
              <span class="burger__box">
                <span class="burger__inner"></span>
              </span>
            </button>
            {/* <!--  END: button-burger --> */}
          </div>
        </div>
      </div>
    </header>
  );
});
