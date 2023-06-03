//    document.documentElement.classList.add{value}
import { component$, useVisibleTask$, $ } from "@builder.io/qwik";
import { isBrowser } from "@builder.io/qwik/build";
import { useLocalStorage } from "~/hooks/useLocalStorage";
import { useContext } from "@builder.io/qwik";
import { IsOpenedContext } from "~/root";

import Logo from "~/components/logo/logo";
import ThemeBtn from "~/components/theme-btn/theme-btn";
import ContactBtn from "~/components/header-contact-btn/header-contact-btn";
import BurgerBtn from "~/components/burger-btn/burger-btn";
import { Link } from "@builder.io/qwik-city";

interface HeaderProps {
  class: string;
}

export default component$((props: HeaderProps) => {
  // default theme is 'light'
  const [currentTheme, changeTheme] = useLocalStorage("theme", "light");

  const isOpened = useContext(IsOpenedContext);

  // set theme as it is in localstorage
  useVisibleTask$(({ track }) => {
    track(currentTheme);
    if (isBrowser) {
      currentTheme.value === "dark"
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
    }
  });

  // switch theme in localstorage
  const switchTheme = $(() =>
    currentTheme.value !== "dark" ? changeTheme("dark") : changeTheme("light")
  );

  const toggleSubmenu = $(() => (isOpened.submenu = !isOpened.submenu));

  return (
    <header
      // id="mainNav"
      class={`fixed left-0 right-0 top-0 z-30 min-h-[var(--header-h)] bg-dark text-white md:min-h-[var(--header-h-lg)] lg:min-h-[var(--header-h-xl)] ${props.class}`}
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
              <ThemeBtn
                switch={switchTheme}
                currentTheme={currentTheme.value}
              />

              {/* <!--  END: thema-d --> */}
            </div>
          </div>

          {/* <!-- BEGIN: nav-header --> */}

          <nav class="hidden w-[450px] xl:ml-auto xl:mr-auto xl:block xl:w-[573px] 2xl:ml-0 2xl:mr-0 2xl:w-[568px]">
            <ul
              id="nav"
              class="text-base uppercase text-lightGrey transition-all xl:flex xl:justify-between"
            >
              <li class="">
                <Link
                  href="/cases"
                  class="translate-underline__hover-line__dark _nav-item-activ"
                  aria-label="cases page"
                >
                  Cases
                </Link>
              </li>
              {/* <!-- Services --> */}
              <li class="translate-underline__hover-line__dark group/item relative xl:w-[103px]">
                <Link
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
                </Link>

                {/* <!--  BEGIN: popup-services-01 hidden --> */}

                <div class="invisible absolute left-0 top-[20px] z-10 flex justify-center pt-[34px] opacity-0 transition-all group-hover/item:visible group-hover/item:opacity-100">
                  {/* <!-- dropdown__wrapper --> */}
                  {/* <div class="dropdown__wrapper flex min-w-max cursor-default gap-[106px] rounded-[10px] bg-light px-6 py-[30px] text-dark shadow-2xl"> */}
                  <div class="rounded-[10px] bg-light px-6 py-[30px] text-dark shadow-2xl">
                    {/* <!-- dropdown__list --> */}
                    <ul class="grid grid-flow-col grid-rows-5 gap-[15px_100px] whitespace-nowrap">
                      {/* <!-- dropdown__item-01 --> */}
                      <li>
                        <a
                          class="translate-underline__hover-line__dark flex max-w-fit"
                          href="#"
                          aria-label="smm"
                        >
                          <p class="text-base font-medium">all services</p>
                          <span class="pl-[10px] pt-[6px]">
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
                          class="translate-underline__hover-line__dark flex max-w-fit"
                          href="#"
                          aria-label="smm"
                        >
                          <p class="text-base font-medium">mobile promotion</p>
                          <span class="pl-[10px] pt-[6px]">
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
                          class="translate-underline__hover-line__dark flex max-w-fit"
                          href="#"
                          aria-label="smm"
                        >
                          <p class="text-base font-medium">digital marketing</p>
                          <span class="pl-[10px] pt-[6px]">
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
                          class="translate-underline__hover-line__dark flex max-w-fit"
                          href="#"
                          aria-label="smm"
                        >
                          <p class="text-base font-medium">seo</p>
                          <span class="pl-[10px] pt-[6px]">
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
                          class="translate-underline__hover-line__dark flex max-w-fit"
                          href="#"
                          aria-label="smm"
                        >
                          <p class="text-base font-medium">web design</p>
                          <span class="pl-[10px] pt-[6px]">
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

                      {/* <!-- dropdown__item 06 --> */}
                      <li>
                        <a
                          class="_nav-item-activ translate-underline__hover-line__dark flex max-w-fit"
                          href="#"
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
                          class="translate-underline__hover-line__dark flex max-w-fit"
                          href="#"
                          aria-label="smm"
                        >
                          <p class="text-base font-medium">SMM</p>
                          <span class="pl-[10px] pt-[6px]">
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
                          class="translate-underline__hover-line__dark flex max-w-fit"
                          href="#"
                          aria-label="smm"
                        >
                          <p class="text-base font-medium">tiktok</p>
                          <span class="pl-[10px] pt-[6px]">
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
                          class="translate-underline__hover-line__dark flex max-w-fit"
                          href="#"
                          aria-label="smm"
                        >
                          <p class="text-base font-medium">video motion</p>
                          <span class="pl-[10px] pt-[6px]">
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
                          class="translate-underline__hover-line__dark flex max-w-fit"
                          href="#"
                          aria-label="smm"
                        >
                          <p class="text-base font-medium">branding</p>
                          <span class="pl-[10px] pt-[6px]">
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

                {/* <!--  END: popup-services --> */}
              </li>
              {/* <!-- menu-About us --> */}
              <li>
                <Link
                  href="/about"
                  class="translate-underline__hover-line__dark"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  class="translate-underline__hover-line__dark"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  class="translate-underline__hover-line__dark"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          {/* <!-- END: nav-header --> */}

          <div class="flex xl:items-center">
            <ContactBtn />
            <BurgerBtn />

            {/* <!--  BEGIN: buttons-languages-desktop --> */}
            <div class="hidden  xl:block ">
              <div class="group/item flex items-center pl-[22px] xl:relative xl:pl-[37px] 2xl:pl-[22px]">
                {/* <!--  BEGIN: button-en --> */}
                <span class=" gap-2.5 rounded-lg p-2.5 transition-all ease-in hover:text-main dark:hover:bg-none lg:flex">
                  <svg
                    class="h-[23.11px] w-[32px]"
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

                <div class="invisible  z-10 opacity-0 transition-all group-hover/item:visible  group-hover/item:opacity-100   ">
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
                              class="h-[23.11px] w-[32px]"
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
                              class="h-[23.11px] w-[32px]"
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
                              class="h-[23.11px] w-[32px]"
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
                              class="h-[23.11px] w-[32px]"
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
          </div>
        </div>
      </div>

      <div
        id="menu"
        class={`absolute left-0 right-0 top-[76px] z-30 h-[calc(100vh-76px)] overflow-hidden transition-all lg:top-0 lg:h-[100vh] xl:hidden ${
          !isOpened.menu && "invisible opacity-0"
        }`}
      >
        {/* <!--  BEGIN: backdrop-block-menu-tadlet-01  --> */}
        <div class="relative h-full lg:flex">
          <div
            id="backdrop_01"
            class="bg-main/70 backdrop-blur-xl lg:h-full lg:w-full"
          ></div>

          <div
            id="dynamicMenu"
            class={`red-gradient-menu custom__scrollbar absolute right-0 top-0 z-20 flex h-full w-full translate-x-full flex-col justify-between overflow-y-auto bg-dark px-5 pb-20 pt-[33px] transition-all lg:w-[56.7%] lg:px-[32px] lg:pb-[50px] lg:pt-[22px] ${
              isOpened.menu && "!translate-x-0"
            }`}
          >
            {/* <!-- wrapper-services-socials-03 --> */}

            <div
              class={`dynamicMenuContainer z-10 ${
                isOpened.submenu && "min-h-[650px] lg:min-h-[770px]"
              }`}
            >
              {/* <!--  BEGIN: menu-tablet --> */}

              <div class="hidden lg:mb-[66px] lg:block">
                <div class="menu-tablet flex items-center justify-between">
                  {/* <!--  BEGIN: logo-menu-tablet --> */}

                  <Logo />
                  {/* <!-- wrapper-buttons --> */}
                  <div class="flex items-center">
                    <ContactBtn />

                    {/* <!--  BEGIN: close-menu-button --> */}

                    <BurgerBtn />
                  </div>
                </div>
              </div>

              {/* <!--  BEGIN: buttons-languages --> */}

              <div class="flex gap-[38px] border-b-[1px] border-b-middleGrey pb-[28px]">
                {/* <!--  BEGIN: button-sv --> */}
                <div class="group">
                  <button
                    type="button"
                    aria-label="Swedish"
                    class="flex items-center gap-2.5 rounded-lg p-2.5 transition-all ease-in hover:bg-grey lg:flex"
                  >
                    <svg
                      width="34"
                      height="25"
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
                    <span class="uppercase text-white transition-all ease-in group-hover:text-main">
                      sv
                    </span>
                  </button>
                </div>

                {/* <!--  BEGIN: button-en --> */}
                <div class="group hidden">
                  <button
                    type="button"
                    aria-label="english"
                    class="btn-language z-20 flex items-center gap-2.5 rounded-lg p-2.5 transition-all ease-in hover:bg-grey lg:flex"
                  >
                    <svg width="34" height="25" viewBox="0 0 34 25" fill="none">
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
                    <span class="btn__language-desc uppercase text-white transition-all ease-in group-hover:text-main">
                      en
                    </span>
                  </button>
                </div>
              </div>

              {/* <!-- wrapper-services-02 --> */}
              <div class="relative">
                {/* <!--  BEGIN: services-menu --> */}

                <ul
                  id="servicesMenu"
                  class={`mb-[100px] mt-[30px] gap-[30px] text-xl font-medium uppercase leading-[24px] text-white transition-all ${
                    isOpened.submenu && "-translate-x-full"
                  }`}
                >
                  <li class="mb-[30px]">
                    <a
                      href="#cases.html"
                      class="_nav-item-activ translate-underline__hover-line__dark hover-text__grey"
                    >
                      Cases Studies
                    </a>
                  </li>
                  <li class="mb-[30px]">
                    <div>
                      <button
                        onClick$={toggleSubmenu}
                        type="button"
                        class="translate-underline__hover-line__dark hover-text__grey flex w-[120px] items-center pr-8"
                      >
                        SERVICE
                        <span class="transition-arrov">
                          <svg
                            class="ml-5 stroke-current transition-all"
                            width="9"
                            height="18"
                            viewBox="0 0 9 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 16.6201L8 9.12012L0.999999 1.62012"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </li>
                  <li class="mb-[30px]">
                    <a
                      href="#aboutUs"
                      class="translate-underline__hover-line__dark hover-text__grey"
                    >
                      ABOUT US
                    </a>
                  </li>
                  <li class="mb-[30px]">
                    <a
                      href="#blog"
                      class="translate-underline__hover-line__dark hover-text__grey"
                    >
                      BLOG
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      class="translate-underline__hover-line__dark hover-text__grey"
                    >
                      CONTACT
                    </a>
                  </li>
                </ul>

                {/* <!--  BEGIN: services-modal --> */}

                <ul
                  id="servicesModal"
                  class={`text-mainTextLight absolute top-0 mb-[37px] ml-[7px] mt-[21px] h-full  bg-transparent text-base font-medium uppercase text-white transition-all
                  ${!isOpened.submenu && "translate-x-[100vw]"}`}
                >
                  <li id="backMenuServices">
                    <button
                      class="translate-underline__hover-line__dark group mb-[30px] flex w-[52px] items-center gap-[10px] text-xs text-main"
                      onClick$={toggleSubmenu}
                      aria-label="back to menu"
                    >
                      <span class="transition-arrov__back">
                        <svg
                          width="7"
                          height="12"
                          viewBox="0 0 7 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 0.5L1 6L6 11.5"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      Back
                    </button>
                  </li>
                  <li class="mb-[17px]">
                    <a
                      class="translate-underline__hover-line__dark hover-text__grey"
                      href="#all_services"
                      aria-label="All Services"
                    >
                      All Services
                    </a>
                  </li>
                  <li class="mb-[17px]">
                    <a
                      class="translate-underline__hover-line__dark hover-text__grey"
                      href="#branding"
                      aria-label="BRANDING"
                    >
                      BRANDING
                    </a>
                  </li>
                  <li class="mb-[17px]">
                    <a
                      class="translate-underline__hover-line__dark hover-text__grey"
                      href="#web_design"
                      aria-label="WEB design"
                    >
                      WEB design
                    </a>
                  </li>
                  <li class="mb-[17px]">
                    <a
                      class="translate-underline__hover-line__dark hover-text__grey"
                      href="#seo"
                      aria-label="seo"
                    >
                      SEO
                    </a>
                  </li>
                  <li class="mb-[17px]">
                    <a
                      class="translate-underline__hover-line__dark hover-text__grey"
                      href="#digital_marketing"
                      aria-label="DIGITAL MARKETING"
                    >
                      DIGITAL MARKETING
                    </a>
                  </li>
                  <li class="mb-[17px]">
                    <a
                      class="translate-underline__hover-line__dark hover-text__grey"
                      href="#mobile_promotion"
                      aria-label="MOBILE PROMOTION"
                    >
                      MOBILE PROMOTION
                    </a>
                  </li>
                  <li class="mb-[17px]">
                    <a
                      class="translate-underline__hover-line__dark hover-text__grey"
                      href="#smm"
                      aria-label="smm"
                    >
                      SMM
                    </a>
                  </li>
                  <li class="mb-[17px]">
                    <a
                      class="_nav-item-activ translate-underline__hover-line__dark hover-text__grey"
                      href="#ppc"
                      aria-label="ppc"
                    >
                      PPC
                    </a>
                  </li>
                  <li class="mb-[17px]">
                    <a
                      class="translate-underline__hover-line__dark hover-text__grey"
                      href="#tiktok"
                      aria-label="tiktok"
                    >
                      TIKTOK
                    </a>
                  </li>
                  <li>
                    <a
                      class="translate-underline__hover-line__dark hover-text__grey"
                      href="#video_motion"
                      aria-label="VIDEO MOTION"
                    >
                      VIDEO MOTION
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!--  BEGIN: socials-menu --> */}
            <div>
              <ul class="flex flex-wrap items-center justify-center gap-2 sm:gap-5">
                {/* <!-- instagramm --> */}
                <li>
                  <a
                    href="https://www.instagram.com/uwp.digital/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="instagram"
                    class="social__link-menu"
                  >
                    <span class="icon-menu">
                      <svg
                        class="h-[29px] w-[29px] fill-white lg:h-[30px] lg:w-[30px] xl:h-[40px] xl:w-[40px]"
                        width="32"
                        height="33"
                        viewBox="0 0 32 33"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.9995 9.9624C12.5984 9.9624 9.8418 12.719 9.8418 16.1201C9.8418 19.5213 12.5984 22.2778 15.9995 22.2778C19.4007 22.2778 22.1572 19.5213 22.1572 16.1201C22.1572 12.719 19.4007 9.9624 15.9995 9.9624ZM15.9995 20.1247C13.7915 20.1247 11.9949 18.3281 11.9949 16.1201C11.9949 13.9121 13.7915 12.1155 15.9995 12.1155C18.2075 12.1155 20.0041 13.9121 20.0041 16.1201C20.0041 18.3281 18.2075 20.1247 15.9995 20.1247Z"
                        />
                        <path d="M23.8448 9.71588C23.8448 10.5112 23.2002 11.1559 22.4048 11.1559C21.6096 11.1559 20.9648 10.5112 20.9648 9.71588C20.9648 8.92059 21.6096 8.27588 22.4048 8.27588C23.2002 8.27588 23.8448 8.92059 23.8448 9.71588Z" />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16 4.12012C12.736 4.12012 12.3383 4.13384 11.0491 4.18869C9.77372 4.25726 8.896 4.44926 8.14172 4.75097C7.34628 5.05269 6.688 5.46412 6.016 6.13612C5.344 6.80812 4.93257 7.4664 4.63085 8.26184C4.32915 9.01612 4.13715 9.89384 4.06857 11.1693C4.01372 12.4584 4 12.8561 4 16.1201C4 19.3841 4.01372 19.7819 4.06857 21.0709C4.12343 22.3464 4.32915 23.2241 4.63085 23.9784C4.93257 24.7739 5.344 25.4321 6.016 26.1041C6.688 26.7761 7.34628 27.1876 8.14172 27.4893C8.90972 27.7909 9.77372 27.9829 11.0491 28.0516C12.3246 28.1064 12.736 28.1201 16 28.1201C19.264 28.1201 19.6617 28.1064 20.9508 28.0516C22.2263 27.9967 23.104 27.7909 23.8583 27.4893C24.6537 27.1876 25.312 26.7761 25.984 26.1041C26.656 25.4321 27.0675 24.7739 27.3692 23.9784C27.6708 23.2104 27.8628 22.3464 27.9315 21.0709C27.9863 19.7956 28 19.3841 28 16.1201C28 12.8561 27.9863 12.4584 27.9315 11.1693C27.8765 9.89384 27.6708 9.01612 27.3692 8.26184C27.0675 7.4664 26.656 6.80812 25.984 6.13612C25.312 5.46412 24.6537 5.05269 23.8583 4.75097C23.0903 4.44926 22.2263 4.25726 20.9508 4.18869C19.6617 4.13384 19.264 4.12012 16 4.12012ZM16 6.28697C19.2092 6.28697 19.5795 6.30069 20.8548 6.35554C22.0205 6.4104 22.6652 6.6024 23.0765 6.76697C23.6388 6.9864 24.0365 7.24697 24.4617 7.6584C24.8868 8.08354 25.1475 8.48126 25.3532 9.04354C25.5177 9.46869 25.7097 10.0995 25.7645 11.2653C25.8195 12.527 25.8332 12.911 25.8332 16.1201C25.8332 19.3293 25.8195 19.6996 25.7645 20.9749C25.7097 22.1407 25.5177 22.7853 25.3532 23.1967C25.1337 23.7589 24.8732 24.1567 24.4617 24.5819C24.0365 25.0069 23.6388 25.2676 23.0765 25.4733C22.6515 25.6379 22.0205 25.8299 20.8548 25.8847C19.5932 25.9396 19.2092 25.9533 16 25.9533C12.7909 25.9533 12.4206 25.9396 11.1451 25.8847C9.97943 25.8299 9.33485 25.6379 8.92343 25.4733C8.36115 25.2539 7.96343 24.9933 7.53828 24.5819C7.11315 24.1567 6.85257 23.7589 6.64685 23.1967C6.48228 22.7716 6.29028 22.1407 6.23543 20.9749C6.18057 19.7133 6.16685 19.3293 6.16685 16.1201C6.16685 12.911 6.18057 12.5407 6.23543 11.2653C6.29028 10.0995 6.48228 9.45497 6.64685 9.04354C6.86628 8.48126 7.12685 8.08354 7.53828 7.6584C7.96343 7.23326 8.36115 6.97269 8.92343 6.76697C9.34857 6.6024 9.97943 6.4104 11.1451 6.35554C12.4206 6.30069 12.7909 6.28697 16 6.28697Z"
                        />
                      </svg>
                    </span>
                  </a>
                </li>
                {/* <!-- facebook --> */}
                <li>
                  <a
                    href="https://www.facebook.com/uwp.digital/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="facebook"
                    class="social__link-menu"
                  >
                    <span class="icon-menu">
                      <svg
                        class="h-[20px] w-[20px] fill-white lg:h-[22px] lg:w-[23px] xl:h-[30px] xl:w-[30px]"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2996_269)">
                          <path d="M9.05727 24.1201V12.8586H6V8.80394H9.05727V5.34072C9.05727 2.61929 10.8632 0.120117 15.0245 0.120117C16.7093 0.120117 17.9551 0.277437 17.9551 0.277437L17.857 4.06382C17.857 4.06382 16.5864 4.05177 15.1999 4.05177C13.6993 4.05177 13.4589 4.72533 13.4589 5.84328V8.80394H17.9763L17.7797 12.8586H13.4589V24.1201H9.05727Z" />
                        </g>
                        <defs>
                          <clipPath>
                            <rect
                              width="24"
                              height="24"
                              transform="translate(0 0.120117)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </a>
                </li>
                {/* <!--  linkedin --> */}

                <li>
                  <a
                    href="https://www.linkedin.com/in/uwpdigital/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="linkedin"
                    class="social__link-menu"
                  >
                    <span class="icon-menu">
                      <svg
                        class="h-[32px] w-[31px] fill-white lg:h-[30px] lg:w-[30px] xl:h-[40px] xl:w-[40px]"
                        width="32"
                        height="33"
                        viewBox="0 0 32 33"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6.32919 9.25896C7.86366 9.25896 9.1076 8.01503 9.1076 6.48056C9.1076 4.94608 7.86366 3.70215 6.32919 3.70215C4.79472 3.70215 3.55078 4.94608 3.55078 6.48056C3.55078 8.01503 4.79472 9.25896 6.32919 9.25896Z" />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.731 26.779V11.3644H16.3253V13.4723H16.39C17.0288 12.2621 18.5907 10.9834 20.9208 10.9834C25.7741 10.9834 26.6681 14.1745 26.6681 18.3269V26.7802H21.8796V19.2831C21.8796 17.4964 21.8491 15.1967 19.3893 15.1967C16.8955 15.1967 16.517 17.1447 16.517 19.1561V26.779H11.731ZM8.72529 11.3644H3.93164V26.779H8.72529V11.3644Z"
                        />
                      </svg>
                    </span>
                  </a>
                </li>
                {/* <!--  upwork --> */}

                <li>
                  <a
                    href="https://www.upwork.com/freelancers/~01eecb3b0a9708eb78"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="upwork"
                    class="social__link-menu"
                  >
                    <span class="icon-menu">
                      <svg
                        class="h-[27px] w-[26px] fill-white lg:h-[30px] lg:w-[30px] xl:h-[40px] xl:w-[40px]"
                        viewBox="0 0 32 33"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2996_274)">
                          <path d="M24.7435 7.63717C21.3135 7.65367 18.7065 9.92217 17.7305 13.5372C16.093 11.0172 14.8155 8.13467 14.083 5.70117L10.473 5.71817L10.523 15.2872C10.5251 15.7377 10.4385 16.1842 10.2681 16.6012C10.0977 17.0182 9.84676 17.3976 9.52972 17.7177C9.21268 18.0377 8.8357 18.2922 8.42031 18.4666C8.00492 18.6409 7.55925 18.7318 7.10875 18.7339C6.19892 18.7382 5.32465 18.3809 4.67826 17.7406C4.3582 17.4236 4.10372 17.0466 3.92935 16.6312C3.75498 16.2158 3.66413 15.7702 3.662 15.3197L3.612 5.75067L0 5.76817L0.05 15.3377C0.064 19.3087 3.237 22.4552 7.12 22.4352C11.003 22.4152 14.1475 19.2422 14.13 15.2702L14.1225 13.6452C14.8505 15.0852 15.7605 16.6152 16.7605 17.9652L14.553 28.5372L18.253 28.5202L19.843 20.8392C21.291 21.7357 22.918 22.2692 24.813 22.2602C28.785 22.2427 32.02 18.9787 32 14.8252C31.982 10.8522 28.716 7.61867 24.744 7.63667L24.7435 7.63717ZM24.795 18.5602C23.351 18.5667 21.904 17.9422 20.726 16.9537L21.08 15.5037V15.4127C21.344 13.8757 22.143 11.2547 24.851 11.2427C25.8079 11.2409 26.7266 11.6179 27.4065 12.2913C28.0863 12.9647 28.4721 13.8798 28.4795 14.8367C28.398 16.9132 26.691 18.5467 24.7945 18.5552L24.795 18.5602Z" />
                        </g>
                        <defs>
                          <clipPath>
                            <rect
                              width="32"
                              height="32"
                              transform="translate(0 0.120117)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </a>
                </li>

                {/* <!-- youtube --> */}

                <li>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="youtube"
                    class="social__link-menu"
                  >
                    <span class="icon-menu">
                      <svg
                        class="h-[20px] w-[27px] fill-white lg:h-[30px] lg:w-[30px] xl:h-[40px] xl:w-[40px]"
                        viewBox="0 0 27 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13.962 0.751709H14.1061C15.4365 0.756646 22.178 0.806021 23.9957 1.30305C24.5452 1.45474 25.0459 1.75042 25.4478 2.16052C25.8497 2.57063 26.1388 3.08081 26.286 3.64008C26.4495 4.26549 26.5644 5.09332 26.6421 5.94749L26.6583 6.11865L26.6939 6.54656L26.7068 6.71772C26.8121 8.22198 26.825 9.63078 26.8266 9.93855V10.062C26.825 10.3813 26.8104 11.8855 26.6939 13.4523L26.6809 13.6251L26.6664 13.7963C26.5854 14.7377 26.4657 15.6725 26.286 16.3604C26.1392 16.9199 25.8503 17.4304 25.4484 17.8405C25.0464 18.2507 24.5454 18.5462 23.9957 18.6975C22.1181 19.211 14.9817 19.2472 13.9928 19.2488H13.7629C13.2628 19.2488 11.1942 19.2389 9.02527 19.1632L8.75011 19.1534L8.60929 19.1468L8.33251 19.1353L8.05573 19.1237C6.25909 19.0431 4.54823 18.9131 3.75997 18.6958C3.21044 18.5447 2.70961 18.2495 2.30765 17.8396C1.90568 17.4297 1.6167 16.9196 1.46966 16.3604C1.28999 15.6741 1.17022 14.7377 1.08929 13.7963L1.07634 13.6235L1.06339 13.4523C0.983507 12.3371 0.939242 11.2196 0.930664 10.1015L0.930664 9.89905C0.933901 9.5452 0.94685 8.32237 1.03425 6.97282L1.04558 6.8033L1.05044 6.71772L1.06339 6.54656L1.099 6.11865L1.11518 5.94749C1.19288 5.09332 1.3078 4.26384 1.47128 3.64008C1.61807 3.08059 1.90694 2.57017 2.30892 2.15999C2.7109 1.74981 3.21187 1.45429 3.76159 1.30305C4.54985 1.0891 6.26071 0.957433 8.05735 0.875144L8.33251 0.863623L8.61091 0.853749L8.75011 0.848811L9.02689 0.837291C10.5673 0.786887 12.1084 0.758906 13.6496 0.753355H13.962V0.751709ZM11.2897 6.03472V13.9642L18.0182 10.0011L11.2897 6.03472Z" />
                      </svg>
                    </span>
                  </a>
                </li>
                {/* <!-- TODO added twitter --> */}
                <li>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="youtube"
                    class="social__link-menu"
                  >
                    <span class="icon-menu">
                      <svg
                        class="h-[27px] w-[26px] fill-white lg:h-[30px] lg:w-[30px] xl:h-[40px] xl:w-[40px]"
                        fill="currentColor"
                        viewBox="0 0 24 19"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M24 2.23529C23.1166 2.62647 22.1644 2.88353 21.1778 3.00647C22.1874 2.41412 22.9675 1.47529 23.3346 0.346471C22.3824 0.905294 21.327 1.29647 20.2141 1.52C19.3078 0.558824 18.0344 0 16.5889 0C13.8929 0 11.6902 2.14588 11.6902 4.79471C11.6902 5.17471 11.7361 5.54353 11.8164 5.89C7.73232 5.68882 4.0956 3.77765 1.67495 0.882941C1.25048 1.58706 1.00956 2.41412 1.00956 3.28588C1.00956 4.95118 1.86998 6.42647 3.20077 7.26471C2.38623 7.26471 1.62906 7.04118 0.963671 6.70588V6.73941C0.963671 9.06412 2.66157 11.0088 4.91013 11.4447C4.18822 11.6372 3.43032 11.664 2.69599 11.5229C3.00758 12.4757 3.61782 13.3094 4.44094 13.9068C5.26405 14.5042 6.25864 14.8353 7.2849 14.8535C5.54527 16.1952 3.38891 16.9204 1.17017 16.91C0.780115 16.91 0.390057 16.8876 0 16.8429C2.17973 18.2065 4.77247 19 7.54876 19C16.5889 19 21.5564 11.6906 21.5564 5.35353C21.5564 5.14118 21.5564 4.94 21.5449 4.72765C22.5086 4.05706 23.3346 3.20765 24 2.23529Z" />
                      </svg>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});
