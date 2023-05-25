import { component$} from "@builder.io/qwik";
// import { QwikPicture } from 'qwik';
// import HeroImage from '../../../public/hero/outdoors.jpg';
import MainBtn from "~/components/main-btn/main-btn";
// import { Image } from 'qwik-image';
// import { Image, ImageTransformerProps, useImageProvider } from 'qwik-image';
// import { Image } from '@unpic/qwik';

// import { providers, selectedProvider } from '../../providers';
//   const myLoader = ({ src, width, quality }) => {
//   return `https://example.com/${src}?w=${width}&q=${quality || 75}`
// }

//   const myLoader = ({ src, width, quality }) => {
//   return `${src}?w=${width}&q=${quality || 75}`
// }


export default component$(() => {

  // const imageTransformer$ = $(
	// 	({ src, width, height }: ImageTransformerProps): string => {
  //     // Here you can set your favourite image loaders service
	// 		return `https://cdn.builder.io/api/v1/${src}?height=${height}&width=${width}}&format=webp&fit=fill`;
	// 	}
  // );
  

  //   // Global Provider (required)
	// useImageProvider({
  //   // You can set this prop to overwrite default values [3840, 1920, 1280, 960, 640]
  //   resolutions: [640],
	// 	imageTransformer$,
  // });
  


  return (

   
    <section class=" bg-light pb-[82px]  text-dark dark:bg-dark dark:text-white lg:pb-[90px] xl:pb-[172px] xl:pt-10">
      <div class="container sm:max-w-full lg:px-[30px] 3xl:max-w-[1920px] 3xl:px-[135px]">
        <h2
          class="   mb-[29px] text-4xl font-bold uppercase 
   lg:mb-[29px] lg:text-[45px] lg:leading-[50px] 
    xl:mb-[25px] xl:border-b-0 xl:text-[50px] 
    2xl:mb-[71px] 2xl:border-b-0 2xl:text-[90px]"
        >
          Our achievements
        </h2>
        <p
          class=" border__top border__bottom   pb-[20px] pt-[30px] text-base
         font-medium leading-[22px]  
      lg:pb-[38px]   lg:pt-[31px]
        xl:hidden"
        >
          Whether you need to create a website, develop a UX UI design, conduct
          SEO optimization, develop a marketing strategy for your business, set
          up Google ads, and Facebook ads, or get more followers on Instagram -
          welcome to UWP Digital.
        </p>
        {/* <!--  wrapper-desktop-3-col --> */}
        {/* wrapper_01 xl:gap-[29px] 2xl:gap-[44px] xl:justify-between*/}

        <div class=" xl:border__top xl:flex xl:flex-row-reverse  ">
          {/* <!-- wrapper-cards-2-col --> */}

          <div class="xl:basis-[75%]">
            {/* <!-- BEGIN: card-01 --> */}
            {/* <!-- group/card group/scale --> */}
            <div class="cards flex flex-col pb-[30px] pt-[30px] lg:flex-row-reverse lg:pt-[25px] xl:py-0">
              {/* <!-- wrapper-img-01 --> */}
              <a
                href="#"
                class="group/card group/scale w-full lg:flex lg:basis-1/2 lg:flex-col xl:basis-[48%]"
                aria-label="cases card"
              >
                <div class=" relative mb-[29px] overflow-hidden lg:mb-0 xl:my-[50px] xl:ml-[50px]">
                  {/* <!-- gradient-img --> */}

                  <div class="absolute left-0 top-0 z-[1] h-full w-[80%] bg-gradient-to-r from-[rgba(0,0,0,0.64)]"></div>

                  {/* <!-- img-01 --> */}
                  <picture class="group/card">
                        <source
                          media="(max-width:819px)"
                          type="image/jpg"
                          srcSet="
                            /images/content/main-content-mobile-01-320x250.jpg    1x,
                            /images/content/main-content-mobile-01-320x250@2x.jpg 2x
                          "
                        />
                        <source
                          media="(min-width:820px) and (max-width:1279px)"
                          type="image/jpg"
                          srcSet="
                            /images/content/main-content-548x493-01.jpg    1x,
                            /images/content/main-content-548x493-01@2x.jpg 2x
                          "
                        />

                        <source
                          media="(min-width:1280px)"
                          type="image/jpg"
                          srcSet="
                            /images/content/main-content-548x493-01.jpg    1x,
                            /images/content/main-content-548x493-01@2x.jpg 2x
                          "
                        />

                        <img
                          class="duration-250 inset-0 h-auto w-full object-cover transition ease-out group-hover/scale:scale-105 group-hover/scale:ease-in"
                          srcSet="
                            /images/content/main-content-mobile-01-320x250.jpg    1x,
                            /images/content/main-content-mobile-01-320x250@2x.jpg 2x
                          "
                          src="/images/content/main-content-mobile-01-320x250.jpg"
                          alt="Cube in hands"
                          loading="lazy"
                        />
                  </picture>
                  
                  {/* <HeroImage/> */}
                  {/* <Image
                  loader={myLoader}
                  src="me.png"
                  alt="Picture of the author"
                  width={500}
                    height={500}
                  /> */}
                  
                  {/* <img
                    class="duration-250 inset-0 h-auto w-full object-cover transition ease-out group-hover/scale:scale-105 group-hover/scale:ease-in"
                    src="/images/content/main-content-548x493-01.jpg"
                    alt="Cube in hands"
                    loading="lazy"
                  /> */}

                  {/* <Image
      loader={myLoader}
      src="/images/content/main-content-548x493-01.jpg"
      alt="Picture of the author"
      width={500}
      height={500}
                  /> */}
                  
                  {/* <Image
                  
                  src="https://cdn.shopify.com/static/sample-images/bath_grande_crop_center.jpeg"
      layout="constrained"
      width={800}
      height={600}
                    alt="A lovely bath"
                  /> */}

                  {/* <Image
                    layout='constrained'
                    objectFit='fill'
                    width={400}
                    height={500}
                    alt='Tropical paradise'
                    placeholder='#e6e6e6'
                    src={
                      'image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fe5113e1c02db40e5bac75146fa46386f'
                    }
                  /> */}
                  

                  {/* <Image
                  layout="fixed"
                  objectFit="cover"
                  width="300"
                  height="300"
                  src={...}
                  alt={...}
                  placeholder={...}
                /> */}

                  {/* <Image
                    width={400}
                    height={400}
                    style={{ border: '2px solid red' }}
                    placeholder="#e6e6e6"
                    layout="constrained"
                    src="/images/content/main-content-548x493-01.jpg"
                  /> */}
                  {/* <!-- text-above-image --> */}
                  <div class="img-desc group/scale">
                    <div class="img-desc__wrap">
                      <div class="wrap-text">
                        <p class="img-desc_big">7X</p>
                        <div class="wrap-text__inner">
                          <p class="img-desc_small">cost of attracting</p>
                          <p class="img-desc_small">a customer</p>
                        </div>
                      </div>
                    </div>

                    <div class="wrap-text__gap">
                      <p class="img-desc_small">CR</p>
                      <p class="img-desc_big">30%</p>
                    </div>
                    <p class="img-desc_small">audience</p>
                  </div>
                  {/* <!--  --> */}
                </div>
              </a>

              {/* <!-- wrapper-text-01 --> */}

              <div class="cards-text__left xl:border__left xl:border__right lg:flex lg:basis-1/2 lg:flex-col lg:justify-between xl:basis-[52%] xl:p-[50px]">
                <div>
                  {/* <!-- btn-card-01 --> */}
                  <a
                    href="#"
                    aria-label="cases card"
                    class="cards__link  group/text group"
                  >
                    <h3 class="cards__title transition ease-in group-hover/text:text-main">
                      Gambling vs. Marketing: when advertising boosts betting
                      revenue
                    </h3>

                    {/* <!-- svg --> */}
                    <div class="cards__btn right-[23px] top-[32px] mt-[-7px] rounded-full p-[13.5px] transition-all ease-in group-hover/text:bg-main lg:mt-[-16px] lg:p-[23px] xl:relative xl:right-[-32px] xl:top-[-6px] xl:p-[26px] 2xl:top-[-8px] 2xl:p-8">
                      <svg
                        class="h-[11px] w-[11px] fill-black transition-all ease-in group-hover/text:fill-white dark:fill-white lg:h-[16px] lg:w-[16px] xl:h-[22px] xl:w-[22px]"
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
                  {/* <!-- btn-card-01 --> */}

                  <div class="cards__text ">
                    <p>Establishing a Next-Level Geosocial</p>
                    <p>Networking App Establishing a Next-Level</p>
                    <p>Geosocial Networking AppEstablishing a</p>
                    <p>Next-Level Geosocial Networking App</p>
                  </div>
                </div>

                <div>
                  <p class="cards__desc ">marketing strategy, design</p>
                </div>
              </div>
            </div>
            {/* <!-- END: card-01 --> */}

            {/* <!-- BEGIN: card-02 --> */}
            <div class="cards border__top flex flex-col pb-[30px] pt-[30px] lg:flex-row lg:pt-[25px] xl:py-0">
              {/* <!-- wrapper-img-02 --> */}
              <a
                href="#"
                class="group/card group/scale xl:border__left xl:border__right w-full lg:basis-1/2 xl:basis-[52%]"
                aria-label="cases card"
              >
                <div class=" relative mb-[29px] overflow-hidden lg:mb-0 xl:m-[50px]">
                  {/* <!-- gradient --> */}

                  <div class="absolute left-0 top-0 z-[1] h-full w-[80%] bg-gradient-to-r from-[rgba(0,0,0,0.64)]"></div>

                  {/* <!-- img-02 --> */}
                  <picture>
                        <source
                          media="(max-width:819px)"
                          type="image/jpg"
                          srcSet="
                            /images/content/main-content-mobile-01-320x250.jpg    1x,
                            /images/content/main-content-mobile-01-320x250@2x.jpg 2x
                          "
                        />
                        <source
                          media="(min-width:820px) and (max-width:1279px)"
                          type="image/jpg"
                          srcSet="
                            /images/content/main-content-548x493-02.jpg,
                            /images/content/main-content-548x493-02@2x.jpg 2x
                          "
                        />

                        <source
                          media="(min-width:1280px)"
                          type="image/jpg"
                          srcSet="
                            /images/content/main-content-548x493-02.jpg,
                            /images/content/main-content-548x493-02@2x.jpg 2x
                          "
                        />

                        <img
                          class="duration-250 inset-0 h-auto w-full object-cover transition ease-out group-hover/scale:scale-105 group-hover/scale:ease-in"
                          srcSet="
                            /images/content/main-content-mobile-01-320x250.jpg    1x,
                            /images/content/main-content-mobile-01-320x250@2x.jpg 2x
                          "
                          src="/images/content/main-content-mobile-01-320x250.jpg"
                          alt="Cube in hands"
                          loading="lazy"
                        />
                      </picture>

                  {/* <img
                    class="duration-250 inset-0 h-auto w-full object-cover transition ease-out group-hover/scale:scale-105 group-hover/scale:ease-in"
                    src="/images/content/main-content-548x493-02.jpg"
                    alt="Cube in hands"
                    loading="lazy"
                  /> */}

                  {/* <!-- text-img --> */}
                  <div class="img-desc group/scale">
                    <div class="img-desc__wrap">
                      <div class="wrap-text">
                        <p class="img-desc_big">7X</p>
                        <div class="wrap-text__inner">
                          <p class="img-desc_small">cost of attracting</p>
                          <p class="img-desc_small">a customer</p>
                        </div>
                      </div>
                    </div>

                    <div class="wrap-text__gap">
                      <p class="img-desc_small">CR</p>
                      <p class="img-desc_big">30%</p>
                    </div>
                    <p class="img-desc_small">audience</p>
                  </div>
                </div>
              </a>

              {/* <!-- wrapper-text-02 --> */}
              <div class="cards-text__right lg:flex lg:basis-1/2 lg:flex-col lg:justify-between xl:basis-[48%] xl:py-[50px] xl:pl-[50px]">
                <div>
                  {/* <!-- btn-card-02 --> */}
                  <a
                    href="#"
                    class="cards__link group/text  group xl:gap-[16px]"
                  >
                    <h3 class="cards__title transition ease-in group-hover/text:text-main">
                      INGRAD: Advertising campaign for mobile games
                    </h3>

                    {/* <!-- svg --> */}
                    <div class="cards__btn right-[23px] top-[32px] mt-[-7px] rounded-full p-[13.5px] transition-all ease-in group-hover/text:bg-main lg:mt-[-16px] lg:p-[23px] xl:relative xl:right-[-2px] xl:top-[-6px] xl:p-[26px] 2xl:right-[-32px] 2xl:p-8">
                      <svg
                        class="h-[11px] w-[11px] fill-black transition-all ease-in group-hover/text:fill-white dark:fill-white lg:h-[16px] lg:w-[16px] xl:h-[22px] xl:w-[22px]"
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
                  {/* <!-- btn-card-02 --> */}

                  <div class="cards__text ">
                    <p>Establishing a Next-Level Geosocial</p>
                    <p>Networking App Establishing a Next-Level</p>
                    <p>Geosocial Networking AppEstablishing a</p>
                    <p>Next-Level Geosocial Networking App</p>
                  </div>
                </div>

                <div>
                  <p class="cards__desc ">marketing strategy, design</p>
                </div>
              </div>
            </div>
            {/* <!-- END: card-02 --> */}

            {/* <!-- BEGIN: card-03 --> */}
            <div class="cards border__top flex flex-col pb-[30px] pt-[30px] lg:flex-row-reverse lg:pt-[25px] xl:py-0">
              {/* <!-- wrapper-img-03 --> */}
              <a
                href="#"
                aria-label="cases card"
                class="group/card group/scale w-full lg:flex lg:basis-1/2 lg:flex-col xl:basis-[48%]"
              >
                <div class=" relative mb-[29px] overflow-hidden lg:mb-0 xl:my-[50px] xl:ml-[50px]">
                  {/* <!-- gradient-img --> */}

                  <div class="absolute left-0 top-0 z-[1] h-full w-[80%] bg-gradient-to-r from-[rgba(0,0,0,0.64)]"></div>

                  {/* <!-- img-03 --> */}
                  <picture class="group/card">
                        <source
                          media="(max-width:819px)"
                          type="image/jpg"
                          srcSet="
                            /images/content/main-content-mobile-01-320x250.jpg    1x,
                            /images/content/main-content-mobile-01-320x250@2x.jpg 2x
                          "
                        />
                        <source
                          media="(min-width:820px) and (max-width:1279px)"
                          type="image/jpg"
                          srcSet="
                            /images/content/main-content-548x493-03.jpg,
                            /images/content/main-content-548x493-03@2x.jpg 2x
                          "
                        />

                        <source
                          media="(min-width:1280px)"
                          type="image/jpg"
                          srcSet="
                            /images/content/main-content-548x493-03.jpg,
                            /images/content/main-content-548x493-03@2x.jpg 2x
                          "
                        />

                        <img
                          class="duration-250 inset-0 h-auto w-full object-cover transition ease-out group-hover/scale:scale-105 group-hover/scale:ease-in"
                          srcSet="
                            /images/content/main-content-mobile-01-320x250.jpg    1x,
                            /images/content/main-content-mobile-01-320x250@2x.jpg 2x
                          "
                          src="/images/content/main-content-mobile-01-320x250.jpg"
                          alt="Cube in hands"
                          loading="lazy"
                        />
                      </picture>

                  {/* <img
                    class="duration-250 inset-0 h-auto w-full object-cover transition ease-out group-hover/scale:scale-105 group-hover/scale:ease-in"
                    src="/images/content/main-content-548x493-03.jpg"
                    alt="Cube in hands"
                    loading="lazy"
                  /> */}

                  {/* <!-- text-above-image --> */}
                  <div class="img-desc group/scale">
                    <div class="img-desc__wrap">
                      <div class="wrap-text">
                        <p class="img-desc_big">7X</p>
                        <div class="wrap-text__inner">
                          <p class="img-desc_small">cost of attracting</p>
                          <p class="img-desc_small">a customer</p>
                        </div>
                      </div>
                    </div>

                    <div class="wrap-text__gap">
                      <p class="img-desc_small">CR</p>
                      <p class="img-desc_big">30%</p>
                    </div>
                    <p class="img-desc_small">audience</p>
                  </div>
                  {/* <!--  --> */}
                </div>
              </a>

              {/* <!-- wrapper-text-03 --> */}

              <div class="cards-text__left xl:border__left xl:border__right lg:flex lg:basis-1/2 lg:flex-col lg:justify-between xl:basis-[52%] xl:p-[50px]">
                <div>
                  {/* <!-- btn-card-03 --> */}
                  <a
                    aria-label="cases card"
                    href="#"
                    class="cards__link  group/text group"
                  >
                    <h3 class="cards__title transition ease-in group-hover/text:text-main">
                      Gambling vs. Marketing: when advertising boosts betting
                      revenue
                    </h3>

                    <div class="cards__btn 2xl:top-[-8px]: right-[23px] top-[32px] mt-[-7px] rounded-full p-[13.5px] transition-all ease-in group-hover/text:bg-main lg:mt-[-16px] lg:p-[23px] xl:relative xl:right-[-32px] xl:top-[-6px] xl:p-[26px] 2xl:p-8">
                      <svg
                        class="h-[11px] w-[11px] fill-black transition-all ease-in group-hover/text:fill-white dark:fill-white lg:h-[16px] lg:w-[16px] xl:h-[22px] xl:w-[22px]"
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
                  {/* <!-- btn-card-03 --> */}

                  <div class="cards__text ">
                    <p>Establishing a Next-Level Geosocial</p>
                    <p>Networking App Establishing a Next-Level</p>
                    <p>Geosocial Networking AppEstablishing a</p>
                    <p>Next-Level Geosocial Networking App</p>
                  </div>
                </div>

                <div>
                  <p class="cards__desc ">marketing strategy, design</p>
                </div>
              </div>
            </div>
            {/* <!-- END: card-03 --> */}

            {/* <!-- BEGIN: card-04 --> */}
            <div class="cards border__top border__top flex flex-col pb-[30px] pt-[30px] lg:flex-row lg:pt-[25px] xl:py-0">
              {/* <!-- wrapper-img-04 --> */}
              <a
                href="#"
                aria-label="cases card"
                class="group/card group/scale xl:border__left xl:border__right w-full lg:basis-1/2 xl:basis-[52%]"
              >
                <div class=" relative mb-[29px] overflow-hidden lg:mb-0 xl:m-[50px]">
                  {/* <!-- gradient --> */}

                  <div class="absolute left-0 top-0 z-[1] h-full w-[80%] bg-gradient-to-r from-[rgba(0,0,0,0.64)]"></div>

                  {/* <!-- img --> */}
                  <picture>
                        <source
                          media="(max-width:819px)"
                          type="image/jpg"
                          srcSet="
                            /images/content/main-content-mobile-01-320x250.jpg    1x,
                            /images/content/main-content-mobile-01-320x250@2x.jpg 2x
                          "
                        />
                        <source
                          media="(min-width:820px) and (max-width:1279px)"
                          type="image/jpg"
                          srcSet="
                            /images/content/main-content-548x493-04.jpg,
                            /images/content/main-content-548x493-04@2x.jpg 2x
                          "
                        />

                        <source
                          media="(min-width:1280px)"
                          type="image/jpg"
                          srcSet="
                            /images/content/main-content-548x493-04.jpg,
                            /images/content/main-content-548x493-04@2x.jpg 2x
                          "
                        />

                        <img
                          class="duration-250 inset-0 h-auto w-full object-cover transition ease-out group-hover/scale:scale-105 group-hover/scale:ease-in"
                          srcSet="
                            /images/content/main-content-mobile-01-320x250.jpg    1x,
                            /images/content/main-content-mobile-01-320x250@2x.jpg 2x
                          "
                          src="/images/content/main-content-mobile-01-320x250.jpg"
                          alt="Cube in hands"
                          loading="lazy"
                        />
                      </picture>

                  {/* <img
                    class="duration-250 inset-0 h-auto w-full object-cover transition ease-out group-hover/scale:scale-105 group-hover/scale:ease-in"
                    src="/images/content/main-content-548x493-04.jpg"
                    alt="Cube in hands"
                    loading="lazy"
                  /> */}

                  {/* <!-- text-img --> */}
                  <div class="img-desc group/scale">
                    <div class="img-desc__wrap">
                      <div class="wrap-text">
                        <p class="img-desc_big">7X</p>
                        <div class="wrap-text__inner">
                          <p class="img-desc_small">cost of attracting</p>
                          <p class="img-desc_small">a customer</p>
                        </div>
                      </div>
                    </div>

                    <div class="wrap-text__gap">
                      <p class="img-desc_small">CR</p>
                      <p class="img-desc_big">30%</p>
                    </div>
                    <p class="img-desc_small">audience</p>
                  </div>
                </div>
              </a>

              {/* <!-- wrapper-text-04 --> */}

              <div class="cards-text__right lg:flex lg:basis-1/2 lg:flex-col lg:justify-between xl:basis-[48%] xl:py-[50px] xl:pl-[50px]">
                <div>
                  {/* <!-- btn-card-04 --> */}
                  <a
                    href="#"
                    aria-label="cases card"
                    class="cards__link  group/text group xl:gap-[5px]"
                  >
                    <h3 class="cards__title transition ease-in group-hover/text:text-main">
                      BEATYSTORY: easy sales with minimum effort
                    </h3>

                    {/* <!-- svg-04 --> */}
                    <div class="cards__btn right-[23px] top-[32px] mt-[-7px] rounded-full p-[13.5px] transition-all ease-in group-hover/text:bg-main lg:mt-[-16px] lg:p-[23px] xl:relative xl:right-[-2px] xl:top-[-6px] xl:p-[26px] 2xl:right-[-32px] 2xl:p-8">
                      <svg
                        class="h-[11px] w-[11px] fill-black transition-all ease-in group-hover/text:fill-white dark:fill-white lg:h-[16px] lg:w-[16px] xl:h-[22px] xl:w-[22px]"
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
                  {/* <!-- btn-card-04 --> */}

                  <div class="cards__text ">
                    <p>Establishing a Next-Level Geosocial</p>
                    <p>Networking App Establishing a Next-Level</p>
                    <p>Geosocial Networking AppEstablishing a</p>
                    <p>Next-Level Geosocial Networking App</p>
                  </div>
                </div>

                <div>
                  <p class="cards__desc ">marketing strategy, design</p>
                </div>
              </div>
            </div>
            {/* <!-- END: card-04 --> */}

            {/* <!-- BEGIN: card-05 --> */}
            <div class="cards border__top flex flex-col pb-[30px] pt-[30px] lg:flex-row-reverse lg:pt-[25px] xl:py-0">
              {/* <!-- wrapper-img-05 --> */}
              <a
                href="#"
                aria-label="cases card"
                class="group/card group/scale w-full lg:flex lg:basis-1/2 lg:flex-col xl:basis-[48%]"
              >
                <div class=" relative mb-[29px] overflow-hidden lg:mb-0 xl:my-[50px] xl:ml-[50px]">
                  {/* <!-- gradient-img --> */}

                  <div class="absolute left-0 top-0 z-[1] h-full w-[80%] bg-gradient-to-r from-[rgba(0,0,0,0.64)]"></div>

                  {/* <!-- img-05 --> */}
                  <picture class="group/card">
                        <source
                          media="(max-width:819px)"
                          type="image/jpg"
                          srcSet="
                            /images/content/main-content-mobile-01-320x250.jpg    1x,
                            /images/content/main-content-mobile-01-320x250@2x.jpg 2x
                          "
                        />
                        <source
                          media="(min-width:820px) and (max-width:1279px)"
                          type="image/jpg"
                          srcSet="
                            /images/content/main-content-548x493-05.jpg,
                            /images/content/main-content-548x493-05@2x.jpg 2x
                          "
                        />

                        <source
                          media="(min-width:1280px)"
                          type="image/jpg"
                          srcSet="
                            /images/content/main-content-548x493-05.jpg,
                            /images/content/main-content-548x493-05@2x.jpg 2x
                          "
                        />

                        <img
                          class="duration-250 inset-0 h-auto w-full object-cover transition ease-out group-hover/scale:scale-105 group-hover/scale:ease-in"
                          srcSet="
                            /images/content/main-content-mobile-01-320x250.jpg    1x,
                            /images/content/main-content-mobile-01-320x250@2x.jpg 2x
                          "
                          src="/images/content/main-content-mobile-01-320x250.jpg"
                          alt="Cube in hands"
                          loading="lazy"
                        />
                      </picture>
                  {/* <img
                    class="duration-250 inset-0 h-auto w-full object-cover transition ease-out group-hover/scale:scale-105 group-hover/scale:ease-in"
                    src="/images/content/main-content-548x493-05.jpg"
                    alt="Cube in hands"
                    loading="lazy"
                  /> */}

                  {/* <!-- text-above-image --> */}
                  <div class="img-desc group/scale">
                    <div class="img-desc__wrap">
                      <div class="wrap-text">
                        <p class="img-desc_big">7X</p>
                        <div class="wrap-text__inner">
                          <p class="img-desc_small">cost of attracting</p>
                          <p class="img-desc_small">a customer</p>
                        </div>
                      </div>
                    </div>

                    <div class="wrap-text__gap">
                      <p class="img-desc_small">CR</p>
                      <p class="img-desc_big">30%</p>
                    </div>
                    <p class="img-desc_small">audience</p>
                  </div>
                  {/* <!--  --> */}
                </div>
              </a>

              {/* <!-- wrapper-text-05 --> */}

              <div class="cards-text__left xl:border__left xl:border__right lg:flex lg:basis-1/2 lg:flex-col lg:justify-between xl:basis-[52%] xl:p-[50px]">
                <div>
                  {/* <!-- btn-card-05 --> */}
                  <a
                    href="#"
                    aria-label="cases card"
                    class="cards__link group/text  group"
                  >
                    <h3 class="cards__title transition ease-in group-hover/text:text-main">
                      HR agency: full range of marketing services to get
                      international
                    </h3>

                    {/* <!-- svg --> */}

                    <div class="cards__btn right-[23px] top-[32px] mt-[-7px] rounded-full p-[13.5px] transition-all ease-in group-hover/text:bg-main lg:mt-[-16px] lg:p-[23px] xl:relative xl:right-[-32px] xl:top-[-6px] xl:p-[26px] 2xl:top-[-8px] 2xl:p-8">
                      <svg
                        class="h-[11px] w-[11px] fill-black transition-all ease-in group-hover/text:fill-white dark:fill-white lg:h-[16px] lg:w-[16px] xl:h-[22px] xl:w-[22px]"
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
                  {/* <!-- btn-card-05 --> */}

                  <div class="cards__text ">
                    <p>Establishing a Next-Level Geosocial</p>
                    <p>Networking App Establishing a Next-Level</p>
                    <p>Geosocial Networking AppEstablishing a</p>
                    <p>Next-Level Geosocial Networking App</p>
                  </div>
                </div>

                <div>
                  <p class="cards__desc ">marketing strategy, design</p>
                </div>
              </div>
            </div>
            {/* <!-- END: card-05 --> */}

            {/* <!-- BEGIN: card-06 --> */}
            <div class="cards border__top flex flex-col pb-[30px] pt-[30px] lg:flex-row lg:pt-[25px] xl:py-0">
              {/* <!-- wrapper-img-06 --> */}
              <a
                href="#"
                aria-label="cases card"
                class="group/card group/scale xl:border__left xl:border__right w-full lg:basis-1/2 xl:basis-[52%]"
              >
                <div class=" relative mb-[29px] overflow-hidden lg:mb-0 xl:m-[50px]">
                  {/* <!-- gradient --> */}

                  <div class="absolute left-0 top-0 z-[1] h-full w-[80%] bg-gradient-to-r from-[rgba(0,0,0,0.64)]"></div>

                  {/* <!-- img-06 --> */}
                  <picture>
                        <source
                          media="(max-width:819px)"
                          type="image/jpg"
                          srcSet="
                            /images/content/main-content-mobile-01-320x250.jpg    1x,
                            /images/content/main-content-mobile-01-320x250@2x.jpg 2x
                          "
                        />
                        <source
                          media="(min-width:820px) and (max-width:1279px)"
                          type="image/jpg"
                          srcSet="
                            /images/content/main-content-548x493-01.jpg,
                            /images/content/main-content-548x493-01@2x.jpg 2x
                          "
                        />

                        <source
                          media="(min-width:1280px)"
                          type="image/jpg"
                          srcSet="
                            /images/content/main-content-548x493-01.jpg,
                            /images/content/main-content-548x493-01@2x.jpg 2x
                          "
                        />

                        <img
                          class="duration-250 inset-0 h-auto w-full object-cover transition ease-out group-hover/scale:scale-105 group-hover/scale:ease-in"
                          srcSet="
                            /images/content/main-content-mobile-01-320x250.jpg    1x,
                            /images/content/main-content-mobile-01-320x250@2x.jpg 2x
                          "
                          src="/images/content/main-content-mobile-01-320x250.jpg"
                          alt="Cube in hands"
                          loading="lazy"
                        />
                      </picture>
                  {/* <img
                    class="duration-250 inset-0 h-auto w-full object-cover transition ease-out group-hover/scale:scale-105 group-hover/scale:ease-in"
                    src="/images/content/main-content-548x493-01.jpg"
                    alt="Cube in hands"
                    loading="lazy"
                  /> */}

                  {/* <!-- text-img --> */}
                  <div class="img-desc group/scale">
                    <div class="img-desc__wrap">
                      <div class="wrap-text">
                        <p class="img-desc_big">7X</p>
                        <div class="wrap-text__inner">
                          <p class="img-desc_small">cost of attracting</p>
                          <p class="img-desc_small">a customer</p>
                        </div>
                      </div>
                    </div>

                    <div class="wrap-text__gap">
                      <p class="img-desc_small">CR</p>
                      <p class="img-desc_big">30%</p>
                    </div>
                    <p class="img-desc_small">audience</p>
                  </div>
                </div>
              </a>

              {/* <!-- wrapper-text-06 --> */}

              <div class="cards-text__right lg:flex lg:basis-1/2 lg:flex-col lg:justify-between xl:basis-[48%] xl:py-[50px] xl:pl-[50px]">
                <div>
                  {/* <!-- btn-card-06 --> */}
                  <a
                    href="#"
                    aria-label="cases card"
                    class="cards__link  group/text group"
                  >
                    <h3 class="cards__title transition ease-in group-hover/text:text-main">
                      HR agency: full range of marketing services to get
                      international
                    </h3>

                    <div class="cards__btn right-[23px] top-[32px] mt-[-7px] rounded-full p-[13.5px] transition-all ease-in group-hover/text:bg-main lg:mt-[-16px] lg:p-[23px] xl:relative xl:right-[-2px] xl:top-[-6px] xl:p-[26px] 2xl:right-[-32px] 2xl:p-8">
                      <svg
                        class="h-[11px] w-[11px] fill-black transition-all ease-in group-hover/text:fill-white dark:fill-white lg:h-[16px] lg:w-[16px] xl:h-[22px] xl:w-[22px]"
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
                  {/* <!-- btn-card-06 --> */}

                  <div class="cards__text ">
                    <p>Establishing a Next-Level Geosocial</p>
                    <p>Networking App Establishing a Next-Level</p>
                    <p>Geosocial Networking AppEstablishing a</p>
                    <p>Next-Level Geosocial Networking App</p>
                  </div>
                </div>

                <div>
                  <p class="cards__desc ">marketing strategy, design</p>
                </div>
              </div>
            </div>
            {/* <!-- END: card-06 --> */}
          </div>
          {/* <!-- END: wrapper-cards --> */}

          {/* <!-- btn__wrap-01 --> */}
          {/* xl:max-w-[287px] 2xl:max-w-[362px] */}
          <div class="mt-[20px] lg:mt-0 xl:mt-0 xl:basis-[25%] xl:pr-[40px] 2xl:pr-[60px]">
            <p class="achievements__subtitle  hidden xl:flex xl:pb-[53px] xl:pt-[31px]  2xl:pb-[39px] 2xl:pt-[50px] ">
              Whether you need to create a website, develop a UX UI design,
              conduct SEO optimization, develop a marketing strategy for your
              business, set up Google ads, and Facebook ads, or get more
              followers on Instagram - welcome to UWP Digital.
            </p>
            {/* <!-- btn --> */}
            <MainBtn>
              All Cases
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.1083 4.37452L12.1083 14.094L14.5 14.094L14.5 -9.53674e-07L1.34559 -3.78677e-07L1.34559 2.56255L10.4171 2.56255L0.500002 13.188L2.19118 15L12.1083 4.37452Z"
                  fill="white"
                ></path>
              </svg>
            </MainBtn>

            {/* <a
              href="#"
              class="  btn link-oside overflow-hidden lg:mt-[21px] lg:flex xl:sticky xl:top-[100px] xl:mt-0"
            >
              All Cases
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.1083 4.37452L12.1083 14.094L14.5 14.094L14.5 -9.53674e-07L1.34559 -3.78677e-07L1.34559 2.56255L10.4171 2.56255L0.500002 13.188L2.19118 15L12.1083 4.37452Z"
                  fill="white"
                ></path>
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
});
