import { component$ } from "@builder.io/qwik";
import MainBtn from "~/components/main-btn/main-btn";

export default component$(() => {
  return (
    <section class="discuss bg-dark pb-[80px] pt-[62px] lg:pb-[80px] lg:pt-[65px] xl:pb-[41px] xl:pt-[47px] 2xl:pb-[41px] 2xl:pt-[110px]">
      <div class="container sm:max-w-full lg:px-[30px] 3xl:max-w-[1920px] 3xl:px-[135px]">
        <h2 class="mb-[33px] text-4xl font-bold uppercase leading-[1.2] text-light lg:mb-[39px] lg:text-[45px] xl:mb-[15px] xl:text-[49px] xl:leading-[96px] xl:tracking-[0.7px] 2xl:mb-[50px] 2xl:text-[90px] 2xl:leading-[108px]">
          Let's discuss the project
        </h2>
        {/* <!-- BEGIN: wrapper-discuss-desctop-3-col --> */}
        {/*xl:border__top   xl:border-t-[1px] xl:border-middleGrey  xl:justify-between*/}
        <div class="border__top  xl:flex  xl:flex-row-reverse">
          {/* <!-- BEGIN:   wrapper-discuss-tablet-2-col --> */}

          <div
            id="default-carousel"
            class="relative xl:basis-[75%]"
            data-carousel="slide"
          >
            {/* <!-- Additional required wrapper --> */}

            {/* <!-- Carousel wrapper --> */}
            <div class="relative h-[570px] overflow-hidden rounded-lg lg:h-[504px] xl:h-[480px] 2xl:h-[720px]">
              {/*  block-01  */}
              <div
                class="hidden bg-dark duration-700  ease-in-out"
                data-carousel-item
              >
                <div
                  class="grid grid-cols-[50%_1fr]  pb-[76px]
                        lg:grid-cols-[40%_1fr]  lg:grid-rows-[auto_80%]  lg:pb-[88px]
                            xl:lg:grid-cols-[41%_1fr] xl:pl-[50px]
                            2xl:pl-[152px]"
                >
                  {/* <!-- wrap-img-01 --> */}
                  <div class=" relative mb-9 mt-[34px] flex lg:row-span-2  lg:mb-0 lg:mt-10  xl:mt-[50px] ">
                    <picture>
                      <source
                        media="(max-width:819px)"
                        type="image/jpg"
                        srcSet="
                                            /images/team/foto-m-02-151x180.jpg    1x,
                                            /images/team/foto-m-02-302x360@2x.jpg 2x
                                            "
                      />
                      <source
                        media="(min-width:820px) and (max-width:1279px)"
                        type="image/jpg"
                        srcSet="
                                            /images/team/foto-t-02-240x352.jpg    1x,
                                            /images/team/foto-t-02-480x704@2x.jpg 2x
                                            "
                      />

                      <source
                        media="(min-width:1280px)"
                        type="image/jpg"
                        srcSet="
                                            /images/team/foto-t-02-240x352.jpg    1x,
                                            /images/team/foto-t-02-480x704@2x.jpg 2x
                                            "
                      />

                      <img
                        class="h-auto w-full border-dark xl:max-w-[390px] 2xl:w-[390px]"
                        srcSet="
                                            /images/team/foto-m-02-151x180.jpg    1x,
                                            /images/team/foto-m-02-302x360@2x.jpg 2x
                                            "
                        src="/images/team/foto-m-02-151x180.jpg"
                        alt="Man"
                        loading="lazy"
                      />
                    </picture>

                   

                    <button
                      class="swiper-next-slide group absolute bottom-0 left-0 flex h-[39px] w-[39px] translate-y-1/2 items-center justify-center
                       rounded-full border-0 bg-light p-0 text-center text-white hover:text-main 
                        lg:bottom-[50px]  lg:left-0 lg:h-[58px] lg:w-[58px] lg:rounded-full 
                        xl:bottom-[36px] 
                        2xl:bottom-[0px]     2xl:h-[72px] 2xl:w-[72px]"
                      type="button"
                      aria-label="button"
                      data-carousel-prev
                    >
                      <svg
                        class="rounded-full"
                        viewBox="0 0 39 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          class="fill-light"
                          x="0.5"
                          y="0.5"
                          width="38"
                          height="38"
                          rx="19"
                        />

                        <path
                          class="fill-dark"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M24.5112 18.3739L18.4704 12.3331L20.0631 10.7405L28.8227 19.5L20.0631 28.2596L18.4704 26.667L24.5112 20.6262H11.3035L11.3035 18.3739H24.5112Z"
                        />

                        <rect
                          class="h-[38px] w-[38px] transition-all ease-out"
                          x="0.5"
                          y="0.5"
                          stroke="currentColor"
                          width="38"
                          height="38"
                          rx="19"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* copywriter */}
                  <div class="ml-[9px] mt-[43px] lg:ml-0 lg:flex lg:gap-7 xl:gap-[29px] ">
                    <svg
                      class="h-[36px] w-[36px] rounded-full lg:h-[64px] lg:w-[64px]"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="36" height="36" rx="18" fill="#F8F8F8" />
                      <g clip-path="url(#clip0_2259_43482)">
                        <path
                          d="M19.1552 17.4055V11.1113H25V20.5311C25 22.468 24.3008 23.9204 22.9019 24.8887H20.0546C20.7039 24.3508 21.2035 23.7321 21.5533 23.0327C21.9529 22.3333 22.1527 21.4994 22.1527 20.5311V17.4055H19.1552ZM11 11.1113V17.4055H13.9973V20.5311C13.9973 21.4994 13.7976 22.3333 13.398 23.0327C13.0482 23.7321 12.5487 24.3508 11.8992 24.8887H14.7467C16.1454 23.9204 16.8447 22.4678 16.8447 20.5311V11.1113H11Z"
                          fill="#171717"
                        />
                      </g>
                      <defs>
                        <clipPath>
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="translate(11 11)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <div class="mb-0">
                      <h3
                        class="my-[10px] text-xl font-medium leading-5 text-light lg:text-2xl lg:leading-[1.1]
                        xl:mt-0 xl:text-[32px]"
                      >
                        Daniella
                      </h3>

                      <p class="text-xs font-medium leading-4 tracking-[0.14px] text-middleGrey lg:tracking-[1.14px] xl:text-base">
                        Copywriter
                      </p>
                    </div>
                  </div>

                  {/* block-text and nuber */}
                  <div class="col-start-1 col-end-3 lg:col-start-2 lg:mt-[26px] xl:mt-[15px]">
                    {/* text */}
                    <div class="  lg:grow 2xl:grid 2xl:gap-[115px]">
                      <p
                        class="mb-[99px] text-base font-medium leading-[1.39] text-light 
                      lg:mb-[95px] lg:max-w-[456px] 2xl:max-w-[637px] 2xl:text-2xl "
                      >
                        We are a digital marketing agency that opens these
                        opportunities to you. With the help of marketing tools
                        and smart technologies, UWP connects customers with
                        their favorite brands.
                      </p>
                      {/* <!-- hidden-mobile lg:w-[456px]--> */}
                      <p class="hidden text-base font-medium leading-5 text-light lg:mb-[26px] lg:block">
                        Працює з John Deere, STVOL, Anabel Arto, Є-Гроші, Kimito
                      </p>
                    </div>

                    {/* number */}
                    <div class="flex gap-[35px] lg:gap-[60px]">
                      <div class="flex items-center gap-2">
                        <div class="text-[28px] font-bold leading-[1.2] tracking-[2.56px] text-[#FF304D] xl:text-[38px] 2xl:text-[64px]">
                          6+
                        </div>

                        <div class="text-[10px] font-medium leading-[1.2] text-light xl:text-base">
                          years in the <br />
                          company
                        </div>
                      </div>
                      <div class="flex items-center gap-2">
                        <div class="text-[28px] font-bold leading-[1.2] tracking-[2.56px] text-[#FF304D] xl:text-[38px] 2xl:text-[64px]">
                          3000+
                        </div>

                        <div class="text-[10px] font-medium leading-[1.2] text-light xl:text-base">
                          successful <br />
                          projects
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* block-02 */}
              <div
                class="hidden bg-dark duration-700 ease-in-out"
                data-carousel-item
              >
                <div
                  class="grid grid-cols-[50%_1fr]  pb-[76px]
                    lg:grid-cols-[40%_1fr]  lg:grid-rows-[auto_80%]  lg:pb-[88px]
                      xl:lg:grid-cols-[41%_1fr] xl:pl-[50px]
                     2xl:pl-[152px]"
                >
                  {/* <!-- wrap-img-01 --> */}
                  <div class=" relative mb-9 mt-[34px] flex lg:row-span-2  lg:mb-0 lg:mt-10  xl:mt-[50px] ">
                    <picture>
                      <source
                        media="(max-width:819px)"
                        type="image/jpg"
                        srcSet="
                                        /images/team/foto-m-02-151x180.jpg    1x,
                                        /images/team/foto-m-02-302x360@2x.jpg 2x
                                        "
                      />
                      <source
                        media="(min-width:820px) and (max-width:1279px)"
                        type="image/jpg"
                        srcSet="
                                        /images/team/foto-t-02-240x352.jpg    1x,
                                        /images/team/foto-t-02-480x704@2x.jpg 2x
                                        "
                      />

                      <source
                        media="(min-width:1280px)"
                        type="image/jpg"
                        srcSet="
                                        /images/team/foto-t-02-240x352.jpg    1x,
                                        /images/team/foto-t-02-480x704@2x.jpg 2x
                                        "
                      />

                      <img
                        class="h-auto w-full border-dark xl:max-w-[390px] 2xl:w-[390px]"
                        srcSet="
                                        /images/team/foto-m-02-151x180.jpg    1x,
                                        /images/team/foto-m-02-302x360@2x.jpg 2x
                                        "
                        src="/images/team/foto-m-02-151x180.jpg"
                        alt="Man"
                        loading="lazy"
                      />
                    </picture>

                    <button
                      class="swiper-next-slide group absolute bottom-0 left-0 flex h-[39px] w-[39px] translate-y-1/2 items-center justify-center
                       rounded-full border-0 bg-light p-0 text-center text-white hover:text-main 
                                lg:bottom-[50px]  lg:left-0 lg:h-[58px] lg:w-[58px] 
                               xl:bottom-[36px] 
                               2xl:bottom-[0px]     2xl:h-[72px] 2xl:w-[72px]"
                      type="button"
                      aria-label="button"
                      data-carousel-prev
                    >
                      <svg
                        class="rounded-full"
                        viewBox="0 0 39 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          class="fill-light"
                          x="0.5"
                          y="0.5"
                          width="38"
                          height="38"
                          rx="19"
                        />

                        <path
                          class="fill-dark"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M24.5112 18.3739L18.4704 12.3331L20.0631 10.7405L28.8227 19.5L20.0631 28.2596L18.4704 26.667L24.5112 20.6262H11.3035L11.3035 18.3739H24.5112Z"
                        />

                        <rect
                          class="h-[38px] w-[38px] transition-all ease-out"
                          x="0.5"
                          y="0.5"
                          stroke="currentColor"
                          width="38"
                          height="38"
                          rx="19"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* copywriter */}
                  <div class="ml-[9px] mt-[43px] lg:ml-0 lg:flex lg:gap-7 xl:gap-[29px] ">
                    <svg
                      class="h-[36px] w-[36px] rounded-full lg:h-[64px] lg:w-[64px]"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="36" height="36" rx="18" fill="#F8F8F8" />
                      <g clip-path="url(#clip0_2259_43482)">
                        <path
                          d="M19.1552 17.4055V11.1113H25V20.5311C25 22.468 24.3008 23.9204 22.9019 24.8887H20.0546C20.7039 24.3508 21.2035 23.7321 21.5533 23.0327C21.9529 22.3333 22.1527 21.4994 22.1527 20.5311V17.4055H19.1552ZM11 11.1113V17.4055H13.9973V20.5311C13.9973 21.4994 13.7976 22.3333 13.398 23.0327C13.0482 23.7321 12.5487 24.3508 11.8992 24.8887H14.7467C16.1454 23.9204 16.8447 22.4678 16.8447 20.5311V11.1113H11Z"
                          fill="#171717"
                        />
                      </g>
                      <defs>
                        <clipPath>
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="translate(11 11)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <div class="mb-0">
                      <h3
                        class="my-[10px] text-xl font-medium leading-5 text-light lg:text-2xl lg:leading-[1.1]
                    xl:mt-0 xl:text-[32px]"
                      >
                        Daniella
                      </h3>

                      <p class="text-xs font-medium leading-4 tracking-[0.14px] text-middleGrey lg:tracking-[1.14px] xl:text-base">
                        Copywriter
                      </p>
                    </div>
                  </div>

                  {/* block-text and nuber */}
                  <div class="col-start-1 col-end-3 lg:col-start-2 lg:mt-[26px] xl:mt-[15px]">
                    {/* text */}
                    <div class="  lg:grow 2xl:grid 2xl:gap-[115px]">
                      <p
                        class="mb-[99px] text-base font-medium leading-[139%] text-light
                        lg:mb-[95px] lg:max-w-[456px] 2xl:max-w-[637px] 2xl:text-2xl 2xl:leading-[34px]"
                      >
                        We are a digital marketing agency that opens these
                        opportunities to you. With the help of marketing tools
                        and smart technologies, UWP connects customers with
                        their favorite brands.
                      </p>
                      {/* <!-- hidden-mobile lg:w-[456px]--> */}
                      <p class="hidden text-base font-medium leading-5 text-light lg:mb-[26px] lg:block">
                        Працює з John Deere, STVOL, Anabel Arto, Є-Гроші, Kimito
                      </p>
                    </div>

                    {/* number */}
                    <div class="flex gap-[35px] lg:gap-[60px]">
                      <div class="flex items-center gap-2">
                        <div class="text-[28px] font-bold leading-[1.2] tracking-[2.56px] text-[#FF304D] xl:text-[38px] 2xl:text-[64px]">
                          6+
                        </div>

                        <div class="text-[10px] font-medium leading-[1.2] text-light xl:text-base">
                          years in the <br />
                          company
                        </div>
                      </div>
                      <div class="flex items-center gap-2">
                        <div class="text-[28px] font-bold leading-[1.2] tracking-[2.56px] text-[#FF304D] xl:text-[38px] 2xl:text-[64px]">
                          3000+
                        </div>

                        <div class="text-[10px] font-medium leading-[1.2] text-light xl:text-base">
                          successful <br />
                          projects
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* block-3 */}
              <div
                class="hidden bg-dark duration-700 ease-in-out"
                data-carousel-item
              >
                <div
                  class="grid grid-cols-[50%_1fr]  pb-[76px]
                    lg:grid-cols-[40%_1fr]  lg:grid-rows-[auto_80%]  lg:pb-[88px]
                      xl:lg:grid-cols-[41%_1fr] xl:pl-[50px]
                     2xl:pl-[152px]"
                >
                  {/* <!-- wrap-img-01 --> */}
                  <div class=" relative mb-9 mt-[34px] flex lg:row-span-2  lg:mb-0 lg:mt-10  xl:mt-[50px] ">
                    <picture>
                      <source
                        media="(max-width:819px)"
                        type="image/jpg"
                        srcSet="
                                        /images/team/foto-m-02-151x180.jpg    1x,
                                        /images/team/foto-m-02-302x360@2x.jpg 2x
                                        "
                      />
                      <source
                        media="(min-width:820px) and (max-width:1279px)"
                        type="image/jpg"
                        srcSet="
                                        /images/team/foto-t-02-240x352.jpg    1x,
                                        /images/team/foto-t-02-480x704@2x.jpg 2x
                                        "
                      />

                      <source
                        media="(min-width:1280px)"
                        type="image/jpg"
                        srcSet="
                                        /images/team/foto-t-02-240x352.jpg    1x,
                                        /images/team/foto-t-02-480x704@2x.jpg 2x
                                        "
                      />

                      <img
                        class="h-auto w-full border-dark xl:max-w-[390px] 2xl:w-[390px]"
                        srcSet="
                                        /images/team/foto-m-02-151x180.jpg    1x,
                                        /images/team/foto-m-02-302x360@2x.jpg 2x
                                        "
                        src="/images/team/foto-m-02-151x180.jpg"
                        alt="Man"
                        loading="lazy"
                      />
                    </picture>

                    <button
                      type="button"
                      aria-label="button"
                      data-carousel-prev
                      class="swiper-next-slide group absolute bottom-0 left-0 flex h-[39px] w-[39px] translate-y-1/2 items-center justify-center
                       rounded-full border-0 bg-light p-0 text-center text-white hover:text-main 
                                lg:bottom-[50px]  lg:left-0 lg:h-[58px] lg:w-[58px] 
                               xl:bottom-[36px] 
                               2xl:bottom-[0px]     2xl:h-[72px] 2xl:w-[72px]"
                    >
                      <svg
                        class="rounded-full"
                        viewBox="0 0 39 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          class="fill-light"
                          x="0.5"
                          y="0.5"
                          width="38"
                          height="38"
                          rx="19"
                        />

                        <path
                          class="fill-dark"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M24.5112 18.3739L18.4704 12.3331L20.0631 10.7405L28.8227 19.5L20.0631 28.2596L18.4704 26.667L24.5112 20.6262H11.3035L11.3035 18.3739H24.5112Z"
                        />

                        <rect
                          class="h-[38px] w-[38px] transition-all ease-out"
                          x="0.5"
                          y="0.5"
                          stroke="currentColor"
                          width="38"
                          height="38"
                          rx="19"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* copywriter */}
                  <div class="ml-[9px] mt-[43px] lg:ml-0 lg:flex lg:gap-7 xl:gap-[29px] ">
                    <svg
                      class="h-[36px] w-[36px] rounded-full lg:h-[64px] lg:w-[64px]"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="36" height="36" rx="18" fill="#F8F8F8" />
                      <g clip-path="url(#clip0_2259_43482)">
                        <path
                          d="M19.1552 17.4055V11.1113H25V20.5311C25 22.468 24.3008 23.9204 22.9019 24.8887H20.0546C20.7039 24.3508 21.2035 23.7321 21.5533 23.0327C21.9529 22.3333 22.1527 21.4994 22.1527 20.5311V17.4055H19.1552ZM11 11.1113V17.4055H13.9973V20.5311C13.9973 21.4994 13.7976 22.3333 13.398 23.0327C13.0482 23.7321 12.5487 24.3508 11.8992 24.8887H14.7467C16.1454 23.9204 16.8447 22.4678 16.8447 20.5311V11.1113H11Z"
                          fill="#171717"
                        />
                      </g>
                      <defs>
                        <clipPath>
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="translate(11 11)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <div class="mb-0">
                      <h3
                        class="my-[10px] text-xl font-medium leading-5 text-light lg:text-2xl lg:leading-[1.1]
                    xl:mt-0 xl:text-[32px]"
                      >
                        Daniella
                      </h3>

                      <p class="text-xs font-medium leading-4 tracking-[0.14px] text-middleGrey lg:tracking-[1.14px] xl:text-base">
                        Copywriter
                      </p>
                    </div>
                  </div>

                  {/* block-text and nuber */}
                  <div class="col-start-1 col-end-3 lg:col-start-2 lg:mt-[26px] xl:mt-[15px]">
                    {/* text */}
                    <div class="  lg:grow 2xl:grid 2xl:gap-[115px]">
                      <p
                        class="mb-[99px] text-base font-medium leading-[139%] text-light
                        lg:mb-[95px] lg:max-w-[456px] 2xl:max-w-[637px] 2xl:text-2xl 2xl:leading-[34px]"
                      >
                        We are a digital marketing agency that opens these
                        opportunities to you. With the help of marketing tools
                        and smart technologies, UWP connects customers with
                        their favorite brands.
                      </p>
                      {/* <!-- hidden-mobile lg:w-[456px]--> */}
                      <p class="hidden text-base font-medium leading-5 text-light lg:mb-[26px] lg:block">
                        Працює з John Deere, STVOL, Anabel Arto, Є-Гроші, Kimito
                      </p>
                    </div>

                    {/* number */}
                    <div class="flex gap-[35px] lg:gap-[60px]">
                      <div class="flex items-center gap-2">
                        <div class="text-[28px] font-bold leading-[1.2] tracking-[2.56px] text-[#FF304D] xl:text-[38px] 2xl:text-[64px]">
                          6+
                        </div>

                        <div class="text-[10px] font-medium leading-[1.2] text-light xl:text-base">
                          years in the <br />
                          company
                        </div>
                      </div>
                      <div class="flex items-center gap-2">
                        <div class="text-[28px] font-bold leading-[1.2] tracking-[2.56px] text-[#FF304D] xl:text-[38px] 2xl:text-[64px]">
                          3000+
                        </div>

                        <div class="text-[10px] font-medium leading-[1.2] text-light xl:text-base">
                          successful <br />
                          projects
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Slider indicators --> */}
            <div
              class="-xl:translate-x-[20%] absolute bottom-[28px] left-1/2 z-30 flex -translate-x-[50%]
             space-x-[10px]
              lg:bottom-[40px] xl:bottom-[20px] xl:space-x-[20px]
              2xl:bottom-[78px]"
            >
              <button
                type="button"
                class="h-[7px] w-[7px] rounded-full bg-main  lg:h-[9px] lg:w-[9px] xl:h-3 xl:w-3"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                class="h-[7px] w-[7px] rounded-full bg-main lg:h-[9px] lg:w-[9px] xl:h-3 xl:w-3"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
              <button
                type="button"
                class="h-[7px] w-[7px] rounded-full bg-main lg:h-[9px] lg:w-[9px] xl:h-3 xl:w-3"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
            </div>
            {/* <!-- Slider controls --> */}
            {/* <button
              type="button"
              class="bg-main group absolute left-0 top-0 z-30 flex h-[500px] cursor-pointer items-center justify-center px-4 focus:outline-none"
              data-carousel-prev
            >
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
                <svg
                  class="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                <span class="hidden">Previous</span>
              </span>
            </button> */}

            {/* <button
              type="button"
              class="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
              data-carousel-next
            >
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
                <svg
                  class="h-5 w-5  text-white dark:text-gray-800 sm:h-6 sm:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                <span class="hidden">Next</span>
              </span>
            </button> */}
            {/* <!-- If we need pagination --> */}
            {/* <div class="swiper-pagination"></div> */}
          </div>

          {/* <!-- END:   wrapper-discuss-tablet-2-col --> */}

          {/* <!-- BEGIN: wrapper-discuss-desktop-1/3 --> */}
          {/* border-t-[1px] border-middleGrey  xl:max-w-[317px] 2xl:max-w-[407px]*/}
          <div
            class=" border__top xl:border__right w-full 
    pt-[32px]   xl:basis-[25%]    xl:border-t-0 xl:pr-[28px] xl:pt-[50px]
           2xl:pr-[50px]"
          >
            <p class="] pb-[30px] text-base font-medium leading-[22px] tracking-[0.4px] text-light lg:mt-0 lg:pb-10 xl:mt-0 xl:pb-[34px] 2xl:mt-0 2xl:pb-[53px]">
              Marketing is often viewed as simply creating beautiful
              advertising. We want to change this impression and turn it 180°.
              If you need an SEO agency, an AdWords agency, a personal web
              programmer, or an entire digital media agency - welcome to
              UWP.Digital.
            </p>

            {/* <!-- btn-order-a-consultation-02--> */}
            {/* <a
              href="#"
              class="link-oside btn lg:mt-[0px] lg:flex xl:sticky xl:top-[100px]"
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
          {/* <!-- END: wrapper-discuss-desktop-1/3 --> */}
        </div>
        {/* <!-- END: wrapper-discuss-desctop-3-col --> */}
      </div>
    </section>
  );
});
