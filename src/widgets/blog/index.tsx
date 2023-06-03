import { component$,  useVisibleTask$  } from "@builder.io/qwik";
// import Swiper from "swiper";
// import "swiper/css";

export default component$(() => {

     useVisibleTask$(() => {
         const swiper = new Swiper(".swiper", {
          
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
       
      //   modules: [Navigation, Pagination],

    //   nested: true,
    //   speed: 1000,
    //   //   spaceBetween: 100,
    //   //   // Optional parameters
    //   //   direction: "vertical",
    //   loop: true,
    //   autoplay: {
    //       delay: 2000,
    //       disableOnInteraction: false,
    //   },
    //   // If we need pagination

    //   effect: "fade",
    //   fadeEffect: {
    //     crossFade: true,
    //   },

    //   // Navigation arrows
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    //   pagination: {
    //     el: ".swiper .swiper-pagination",
    //     type: "bullets",
    //     clickable: true,
    //       },
         
          keyboard: {
          enabled: true,
      }

    //   // And if we need scrollbar
    //   scrollbar: {
    //     el: ".swiper-scrollbar",
    //     draggable: true,
    //   },

         
    
    });
       console.log(swiper);
  });
    return (
        <section
          class="blog bg-dark pt-[2px] pb-[80px] text-white lg:pb-[101px] xl:pb-[170px]"
        >
    
          {/* <!-- 2xl:max-w-[1710px] --> */}

       
          <div
            class="container sm:max-w-full lg:px-[30px] 3xl:max-w-[1920px] 3xl:px-[135px]"
          >
            {/* <!--  --> */}
            <div class="mb-8 lg:mb-[43px] xl:mb-[58px]">
              <div class="relative">
                <h2
                  class="text-4xl font-bold uppercase leading-[43px] lg:text-[45px] lg:leading-[54px] xl:mb-[18px] xl:text-[48px] xl:leading-[108px] 2xl:mb-[58px] 2xl:text-[90px] 2xl:leading-[108px]"
                >
                  Our blog
                </h2>

                <a
                  href="#"
                  aria-label="read our blog"
                  class="group absolute top-[2px] right-0 m-0 lg:flex lg:items-center lg:gap-[13px] xl:pt-[33px]"
                >
                  <p
                    class="hidden text-base font-bold lg:block lg:text-[24px] lg:leading-[1.4] xl:text-2xl"
                  >
                    Read all
                  </p>
                  {/* <!-- svg --> */}

                  <div class="rounded-full transition-all group-hover:bg-main">
                    <svg
                      width="38"
                      height="39"
                      viewBox="0 0 38 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="fill-current group-hover:fill-white"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22.6208 17.208L22.6208 24.3356L24.5 24.3356L24.5 14L14.1644 14L14.1644 15.8792L21.292 15.8792L13.5 23.6712L14.8288 25L22.6208 17.208Z"
                      ></path>

                      <rect
                        class="stroke-middleGrey transition-all group-hover:stroke-main"
                        x="0.5"
                        y="1"
                        width="37"
                        height="37"
                        rx="18.5"
                      ></rect>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* <!-- wrapper-cards-blog --> */}
            <div>
              <div class="swiper blogSwiper">
                {/* <!-- Additional required wrapper --> */}
                <div class="swiper-wrapper m-0  " slides-per-view="3"  css-mode="true">
                  {/* <!-- Slides --> */}
                  {/* <!-- card-blog-01 --> */}
                  <div class="swiper-slide">
                    <div class="card-blog w-min">
                      <div
                        class="aspect-w-16 aspect-h-11 w-[270px] overflow-hidden lg:w-[530px] lg:rounded-none xl:mb-[0px]"
                      >
                       

                        <picture>
                          <source
                            media="(min-width: 820px)"
                            type="image/jpg"
                            srcSet="
                              /images/blog/Rectangle-22-530x350.jpg,
                              /images/blog/Rectangle-22-530x350@2x.jpg 2x
                            "
                          />
                          <source
                            type="image/jpg"
                            srcSet="
                              /images/blog/Rectangle-22-305x213.jpg,
                              /images/blog/Rectangle-22-305x213@2x.jpg 2x
                            "
                          />

                          <img
                            class="duration-250 w-full object-cover transition ease-out hover:scale-105 hover:ease-in"
                            src="/images/blog/Rectangle-22-530x350.jpg"
                            alt="Business card"
                            loading="lazy"
                          />
                        </picture>

                       
                      </div>

                      <div
                        class="flex flex-row items-center justify-between pt-[23px] xl:gap-[17px] xl:pt-[11px]"
                      >
                        <a
                          href="#"
                          aria-label="business"
                          class="rounded-[60px] bg-darkGrey py-2 px-4 text-[10px] font-medium uppercase leading-[1.2] lg:text-[14px] lg:leading-[1.2] xl:px-[19px] xl:text-sm xl:leading-[1.2]"
                        >
                          digital marknadsforing
                        </a>

                        <p
                          class="text-[10px] font-medium leading-[1.2] text-middleGrey lg:text-sm lg:leading-[1.2]"
                        >
                          24.08.2022
                        </p>
                      </div>
                     
                      <h4
                        class="mt-4 text-lg font-bold leading-[22px] tracking-tight xl:mt-4 xl:text-2xl xl:leading-[29px]"
                      >
                        How to increase traffic to an online store
                      </h4>
                    </div>
                  </div>

                  {/* <!-- card-blog-02 --> */}
                  <div class="swiper-slide">
                    <div class="card-blog w-min">
                      <div
                        class="aspect-w-16 aspect-h-11 w-[270px] overflow-hidden lg:w-[530px] lg:rounded-none xl:mb-[0px]"
                      >
                       

                        <picture>
                          <source
                            media="(min-width:820px)"
                            srcSet="
                              /images/blog/Rectangle-23-530x350.jpg,
                              /images/blog/Rectangle-23-530x350@2x.jpg 2x
                            "
                          />
                          <source
                            type="image/jpg"
                            srcSet="
                              /images/blog/Rectangle-23-305x220.jpg,
                              /images/blog/Rectangle-23-305x220@2x.jpg 2x
                            "
                          />
                          {/* <!--w-full lg:h-[350px] xl:h-[493px]--> */}
                          <img
                            class="duration-250 w-full object-cover transition ease-out hover:scale-105 hover:ease-in"
                            src="/images/blog/Rectangle-23-530x350.jpg,
"
                            alt="Business card"
                            loading="lazy"
                          />
                        </picture>
                      </div>

                      <div
                        class="flex flex-row items-center justify-between pt-[23px] xl:gap-[17px] xl:pt-[11px]"
                      >
                        <a
                          href="#"
                          aria-label="business"
                          class="rounded-[60px] bg-darkGrey py-2 px-4 text-[10px] font-medium uppercase leading-[1.2] lg:text-[14px] lg:leading-[1.2] xl:px-[19px] xl:text-sm xl:leading-[1.2]"
                        >
                          Business
                        </a>

                        <p
                          class="text-[10px] font-medium leading-[1.2] text-middleGrey lg:text-sm lg:leading-[1.2]"
                        >
                          24.08.2022
                        </p>
                      </div>

                      <h4
                        class="mt-4 text-lg font-bold leading-[22px] tracking-tight xl:mt-4 xl:text-2xl xl:leading-[29px]"
                      >
                        How to increase traffic to an online store
                      </h4>
                    </div>
                  </div>

                  {/* <!-- card-blog-03 --> */}
                  <div class="swiper-slide">
                    <div class="card-blog w-min">
                      <div
                        class="aspect-w-16 aspect-h-11 w-[270px] overflow-hidden lg:aspect-h-11 lg:w-[530px] lg:rounded-none xl:aspect-h-11 xl:mb-[0px]"
                      >
                       
                        <picture>
                          <source
                            media="(min-width:820px)"
                            type="image/jpg"
                            srcSet="
                              /images/blog/Rectangle-24-530x350.jpg,
                              /images/blog/Rectangle-24-530x350@2x.jpg 2x
                            "
                          />
                          <source
                            type="image/jpg"
                            srcSet="
                              /images/blog/Rectangle-24-305x220.jpg,
                              /images/blog/Rectangle-24-305x220@2x.jpg 2x
                            "
                          />
                          <img
                            class="duration-250 w-full object-cover transition ease-out hover:scale-105 hover:ease-in"
                            src="/images/blog/Rectangle-24-530x350.jpg,"
                            alt="Business card"
                            loading="lazy"
                          />
                        </picture>
                      </div>

                      <div
                        class="flex flex-row items-center justify-between pt-[23px] xl:gap-[17px] xl:pt-[11px]"
                      >
                        <a
                          href="#"
                          aria-label="business"
                          class="rounded-[60px] bg-darkGrey py-2 px-4 text-[10px] font-medium uppercase leading-[1.2] lg:text-[14px] lg:leading-[1.2] xl:px-[19px] xl:text-sm xl:leading-[1.2]"
                        >
                          Business
                        </a>

                        <p
                          class="text-[10px] font-medium leading-[1.2] text-middleGrey lg:text-sm lg:leading-[1.2]"
                        >
                          24.08.2022
                        </p>
                      </div>
                      
                      <h4
                        class="mt-4 text-lg font-bold leading-[22px] tracking-tight xl:mt-4 xl:text-2xl xl:leading-[29px]"
                      >
                        How to increase traffic to an online store
                      </h4>
                    </div>
                  </div>

                            
                </div>
              </div>

        
            </div>
          </div>
        </section>
    )
})