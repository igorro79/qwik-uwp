import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="discuss bg-dark pb-[80px] pt-[62px] lg:pb-[80px] lg:pt-[65px] xl:pb-[41px] xl:pt-[47px] 2xl:pb-[41px] 2xl:pt-[110px]">
      <div class="container sm:max-w-full lg:px-[30px] 3xl:max-w-[1920px] 3xl:px-[135px]">
        <h2 class="mb-[33px] text-4xl font-bold uppercase leading-[120%] text-light lg:mb-[39px] lg:text-[45px] xl:mb-[15px] xl:text-[49px] xl:leading-[96px] xl:tracking-[0.7px] 2xl:mb-[50px] 2xl:text-[90px] 2xl:leading-[108px]">
          Let's discuss the project
        </h2>
        {/* <!-- BEGIN: wrapper-discuss-desctop-3-col --> */}

        <div class="xl:flex xl:flex-row-reverse xl:justify-between xl:border-t-[1px] xl:border-middleGrey">
          {/* <!-- BEGIN:   wrapper-discuss-tablet-2-col --> */}

          <div class="mySwiper swiper">
            {/* <!-- Additional required wrapper --> */}
            <div class="swiper-wrapper">
              {/* <!-- Slides --> */}
              <div class="swiper-slide">
                {/* <!-- BEGIN: block-01- --> */}
                <div class="relative float-left w-full">
                  {/* <!-- BEGIN: Daniella-01 --> */}
                  <div class="border-t-[1px] border-middleGrey pb-[76px] lg:flex lg:pb-[88px] xl:gap-[40px] xl:border-t-0 xl:pl-[50px] 2xl:gap-[63px] 2xl:pl-[152px]">
                    {/* <!-- wrap-img-01 --> */}
                   
                    <div class="relative mb-9 mt-[34px] flex lg:mb-0 lg:mt-10 lg:basis-[320px] xl:mt-[50px]">
                      {/* <!-- picture-01 --> */}
                      <div class="relative h-fit">
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

                        {/* <!-- BEGIN: btn next-01 --> */}

                        {/* <!-- svg --> */}
                        <button
                          type="button"
                          aria-label="button"
                          class="swiper-next-slide group absolute bottom-0 left-0 flex h-[39px] w-[39px] translate-y-1/2 items-center justify-center rounded-full border-0 bg-light p-0 text-center text-white hover:text-main lg:left-0 lg:h-[58px] lg:w-[58px] lg:rounded-full xl:h-[72px] xl:w-[72px]"
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
                        {/* <!-- END: btn next-01 --> */}
                      </div>
                      {/* <!-- picture-01 --> */}

                      {/* <!-- Daniella-mobile-01 --> */}
                      <div class="ml-5 mt-2 lg:hidden">
                      
                        <svg
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

                        <h3 class="my-[10px] text-xl font-medium leading-5 text-light lg:text-2xl lg:leading-[110%]">
                          Daniella
                        </h3>

                        <p class="text-xs font-medium leading-4 tracking-[0.14px] text-middleGrey">
                          Copywriter
                        </p>
                      </div>
                    </div>

                    {/* <!-- Daniella- discuss-tablet-01 --> */}
                    <div class="lg:mt-10 lg:flex lg:flex-col">
                      {/* <!-- Daniella-tablet-01 --> */}
                      <div class="hidden lg:mb-[30px] lg:block">
                        <div class="items-end lg:flex lg:gap-7 xl:gap-[29px]">
                          
                          <svg
                            class="h-[36px] w-[36px] rounded-full lg:h-[64px] lg:w-[64px]"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                           
                            <rect
                              class="h-[36px] w-[36px]"
                              fill="#F8F8F8"
                              width="36"
                              height="36"
                              rx="18"
                            />
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

                          {/* <!-- text-01 --> */}
                          <div class="mb-0">
                            <h3 class="my-[10px] text-xl font-medium leading-5 text-light lg:text-2xl lg:leading-[110%] xl:text-[32px] xl:leading-[35px]">
                              Daniella
                            </h3>

                            <p class="text-xs font-medium leading-4 tracking-[0.14px] text-middleGrey lg:tracking-[1.14px] xl:text-base xl:leading-[19px]">
                              Copywriter
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* <!-- 01 --> */}
                      <div class="lg:grow 2xl:grid 2xl:gap-[115px]">
                        <p class="mb-[99px] text-base font-medium leading-[139%] text-light lg:mb-[53px] lg:max-w-[456px] 2xl:max-w-[637px] 2xl:text-2xl 2xl:leading-[34px]">
                          We are a digital marketing agency that opens these
                          opportunities to you. With the help of marketing tools
                          and smart technologies, UWP connects customers with
                          their favorite brands.
                        </p>
                        {/* <!-- hidden-mobile lg:w-[456px]--> */}
                        <p class="hidden text-base font-medium leading-5 text-light lg:mb-[26px] lg:block">
                          Працює з John Deere, STVOL, Anabel Arto, Є-Гроші,
                          Kimito
                        </p>
                      </div>

                      {/* <!-- text-block-discuss-01 --> */}
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
                      {/* <!-- text-block-discuss-01 --> */}
                    </div>
                  </div>
                  {/* <!-- END: Daniella-01 --> */}
                </div>
                {/* <!-- END: block-01 --> */}
              </div>
              <div class="swiper-slide">
                <div class="relative float-left w-full">
                  {/* <!-- BEGIN: Daniella-02 --> */}
                 
                  <div class="border-t-[1px] border-middleGrey pb-[76px] lg:flex lg:pb-[88px] xl:gap-[40px] xl:border-t-0 xl:pl-[50px] 2xl:gap-[63px] 2xl:pl-[152px]">
                    {/* <!-- wrap-img-02 --> */}

                    <div class="mb-9 mt-[34px] flex lg:mb-0 lg:mt-10 lg:basis-[320px] xl:mt-[50px]">
                      {/* <!-- picture-02 --> */}
                      <div class="relative h-fit">
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

                        {/* <!-- BEGIN: btn next-02 --> */}

                        {/* <!-- carousel-control-next --> */}
                        <button
                          type="button"
                          aria-label="button"
                          class="swiper-next-slide group absolute bottom-0 left-0 flex h-[39px] w-[39px] translate-y-1/2 items-center justify-center rounded-full border-0 bg-light p-0 text-center text-light hover:text-main lg:left-0 lg:h-[58px] lg:w-[58px] lg:rounded-full xl:h-[72px] xl:w-[72px]"
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
                              class="fill-dark transition-all ease-out"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M24.5112 18.3739L18.4704 12.3331L20.0631 10.7405L28.8227 19.5L20.0631 28.2596L18.4704 26.667L24.5112 20.6262H11.3035L11.3035 18.3739H24.5112Z"
                            />

                            <rect
                              class="h-[38px] w-[38px]"
                              x="0.5"
                              y="0.5"
                              stroke="currentColor"
                              width="38"
                              height="38"
                              rx="19"
                            />
                          </svg>
                        </button>
                        {/* <!-- END: btn next-02 --> */}
                      </div>

                      {/* <!-- block-02 --> */}
                      {/* <!-- Daniella-mobile --> */}
                      <div class="ml-5 mt-2 lg:hidden">
                       
                        <svg
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

                        <h3 class="my-[10px] text-xl font-medium leading-5 text-light lg:text-2xl lg:leading-[110%]">
                          Daniella
                        </h3>

                        <p class="text-xs font-medium leading-4 tracking-[0.14px] text-middleGrey">
                          Copywriter
                        </p>
                      </div>
                    </div>

                    {/* <!-- Daniella- discuss-tablet-02 --> */}
                    <div class="lg:mt-10 lg:flex lg:flex-col">
                      {/* <!-- Daniella-tablet-02 --> */}
                      <div class="hidden lg:mb-[30px] lg:block">
                        <div class="items-end lg:flex lg:gap-7 xl:gap-[29px]">
                         
                          <svg
                            class="h-[36px] w-[36px] rounded-full lg:h-[64px] lg:w-[64px]"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {/* <!--  --> */}
                            <rect
                              class="h-[36px] w-[36px]"
                              fill="#F8F8F8"
                              width="36"
                              height="36"
                              rx="18"
                            />
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

                          {/* <!-- text-02 --> */}
                          <div class="mb-0">
                            <h3 class="my-[10px] text-xl font-medium leading-5 text-light lg:text-2xl lg:leading-[110%] xl:text-[32px] xl:leading-[35px]">
                              Daniella
                            </h3>

                            <p class="text-xs font-medium leading-4 tracking-[0.14px] text-middleGrey lg:tracking-[1.14px] xl:text-base xl:leading-[19px]">
                              Copywriter
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* <!-- 02 --> */}
                      <div class="lg:grow 2xl:grid 2xl:gap-[115px]">
                        <p class="mb-[99px] text-base font-medium leading-[139%] text-light lg:mb-[53px] lg:max-w-[456px] 2xl:max-w-[637px] 2xl:text-2xl 2xl:leading-[34px]">
                          The digital world offers limitless possibilities for
                          transforming an idea into a successful business. We
                          are a digital marketing agency that opens these
                          opportunities to you. With the help of marketing tools
                          and smart technologies, UWP connects customers with
                          their favorite brands.
                        </p>
                        {/* <!-- hidden-mobile lg:w-[456px]--> */}
                        <p class="hidden text-base font-medium leading-5 text-light lg:mb-[26px] lg:block">
                          Працює з John Deere, STVOL, Anabel Arto, Є-Гроші,
                          Kimito
                        </p>
                      </div>
                      {/* <!-- text-block-discuss-02 --> */}
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
                          <div class="text-[28px] font-bold leading-[14px] tracking-[2.56px] text-[#FF304D] xl:text-[38px] 2xl:text-[64px]">
                            3000+
                          </div>

                          <div class="text-[10px] font-medium leading-[1.2] text-light xl:text-base">
                            successful <br />
                            projects
                          </div>
                        </div>
                      </div>
                      {/* <!-- text-block-discuss-02 --> */}
                    </div>
                  </div>
                  {/* <!-- END: Daniella-02 --> */}
                </div>
              </div>
              <div class="swiper-slide">
                <div class="relative float-left w-full">
                  {/* <!-- BEGIN: Daniella-03 --> */}

                  <div class="border-t-[1px] border-middleGrey pb-[76px] lg:flex lg:pb-[88px] xl:gap-[40px] xl:border-t-0 xl:pl-[50px] 2xl:gap-[63px] 2xl:pl-[152px]">
                    {/* <!-- wrap-img-03 --> */}
                    <div class="mb-9 mt-[34px] flex lg:mb-0 lg:mt-10 lg:basis-[320px] xl:mt-[50px]">
                      {/* <!-- picture-03 --> */}
                      <div class="relative h-fit">
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
                        {/* <!-- END: img-03 --> */}

                        {/* <!-- BEGIN: btn next-03 --> */}
                        {/* <!-- carousel-control-next --> */}

                        <button
                          class="swiper-next-slide group absolute bottom-0 left-0 flex h-[39px] w-[39px] translate-y-1/2 items-center justify-center rounded-full border-0 bg-light p-0 text-center text-white hover:text-main lg:left-0 lg:h-[58px] lg:w-[58px] lg:rounded-full xl:h-[72px] xl:w-[72px]"
                          type="button"
                          aria-label="button"
                        >
                          {/* <!--  h-[39px] w-[39px] --> */}
                          <svg
                            class="rounded-full"
                            viewBox="0 0 39 39"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {/* <!-- class="h-[38px] w-[38px]" --> */}
                            <rect
                              class="fill-light"
                              x="0.5"
                              y="0.5"
                              fill="currentColor"
                              width="38"
                              height="38"
                              rx="19"
                            />
                            {/* <!--  fill="#171717" --> */}
                            <path
                              class="fill-dark"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M24.5112 18.3739L18.4704 12.3331L20.0631 10.7405L28.8227 19.5L20.0631 28.2596L18.4704 26.667L24.5112 20.6262H11.3035L11.3035 18.3739H24.5112Z"
                            />
                            {/* <!--  --> */}
                            <rect
                              class="h-[38px] w-[38px]"
                              x="0.5"
                              y="0.5"
                              stroke="currentColor"
                              width="38"
                              height="38"
                              rx="19"
                            />
                          </svg>
                        </button>
                        {/* <!-- END: btn next-03 --> */}
                      </div>

                      {/* <!-- block-03 --> */}
                      {/* <!-- Daniella-mobile-03 --> */}
                      <div class="ml-5 mt-2 lg:hidden">
                        {/* <!-- svg-03 --> */}
                        <svg
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

                        <h3 class="my-[10px] text-xl font-medium leading-5 text-light">
                          Daniella
                        </h3>

                        <p class="text-xs font-medium leading-4 tracking-[0.14px] text-middleGrey">
                          Copywriter
                        </p>
                      </div>
                    </div>

                    {/* <!-- Daniella- discuss-tablet-03 --> */}
                    <div class="lg:mt-10 lg:flex lg:flex-col">
                      {/* <!-- Daniella-tablet-03 --> */}
                      <div class="hidden lg:mb-[30px] lg:block">
                        <div class="items-end lg:flex lg:gap-7 xl:gap-[29px]">
                          {/* <!-- svg-03 --> */}
                          <svg
                            class="h-[36px] w-[36px] rounded-full lg:h-[64px] lg:w-[64px]"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {/* <!--  --> */}
                            <rect
                              class="h-[36px] w-[36px]"
                              fill="#F8F8F8"
                              width="36"
                              height="36"
                              rx="18"
                            />
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

                          {/* <!-- text-03 --> */}
                          <div class="mb-0">
                            <h3 class="my-[10px] text-xl font-medium leading-5 text-light lg:text-2xl lg:leading-[110%] xl:text-[32px] xl:leading-[35px]">
                              Daniella
                            </h3>

                            <p class="text-xs font-medium leading-4 tracking-[0.14px] text-middleGrey lg:tracking-[1.14px] xl:text-base xl:leading-[19px]">
                              Copywriter
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* <!-- 03 --> */}
                      <div class="lg:grow 2xl:grid 2xl:gap-[115px]">
                        <p class="mb-[99px] text-base font-medium leading-[139%] text-light lg:mb-[53px] lg:max-w-[456px] 2xl:max-w-[637px] 2xl:text-2xl 2xl:leading-[34px]">
                          The digital world offers limitless possibilities for
                          transforming an idea into a successful business. We
                          are a digital marketing agency that opens these
                          opportunities to you. With the help
                        </p>
                        {/* <!-- hidden-mobile lg:w-[456px]--> */}
                        <p class="hidden text-base font-medium leading-5 text-light lg:mb-[26px] lg:block">
                          Працює з John Deere, STVOL, Anabel Arto, Є-Гроші,
                          Kimito
                        </p>
                      </div>

                      {/* <!-- text-block-discuss-03 --> */}
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
                      {/* <!-- text-block-discuss-03 --> */}
                    </div>
                  </div>
                  {/* <!-- END: Daniella-03 --> */}
                </div>
              </div>
            </div>
            {/* <!-- If we need pagination --> */}
            <div class="swiper-pagination"></div>
          </div>

          {/* <!-- END:   wrapper-discuss-tablet-2-col --> */}

          {/* <!-- BEGIN: wrapper-discuss-desktop-1/3 --> */}

          <div class="xl:border__right w-full border-t-[1px] border-middleGrey pt-[32px] xl:max-w-[317px] xl:border-t-0 xl:pr-[28px] xl:pt-[50px] 2xl:max-w-[407px] 2xl:pr-[50px]">
            <p class="] pb-[30px] text-base font-medium leading-[22px] tracking-[0.4px] text-light lg:mt-0 lg:pb-10 xl:mt-0 xl:pb-[34px] 2xl:mt-0 2xl:pb-[53px]">
              Marketing is often viewed as simply creating beautiful
              advertising. We want to change this impression and turn it 180°.
              If you need an SEO agency, an AdWords agency, a personal web
              programmer, or an entire digital media agency - welcome to
              UWP.Digital.
            </p>
            {/* <!-- btn --> */}
            {/* <!-- btn-order-a-consultation-02--> */}
            <a
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
            </a>
            {/* <!--  --> */}
          </div>
          {/* <!-- END: wrapper-discuss-desktop-1/3 --> */}
        </div>
        {/* <!-- END: wrapper-discuss-desctop-3-col --> */}
      </div>
    </section>
  );
});
