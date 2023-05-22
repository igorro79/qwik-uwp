import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    // Grey
    <section class="  bg-light pb-[67px] pt-[77px] text-dark dark:bg-dark dark:text-white lg:pb-[79px] lg:pt-[47px] xl:pb-[29px] xl:pt-[50px] 2xl:pb-[97px] 2xl:pt-[105px]">
      <div class="container sm:max-w-full lg:px-[30px] 3xl:max-w-[1920px] 3xl:px-[135px]">
        {/* xl:gap-[32px] 2xl:gap-[43px] lg:gap-[28px] lg:border-t lg:border-lightDarkGrey*/}
        <div class="lg:border__top lg:flex  ">
          {/* text-black dark:text-white tracking-[-0.5px] xl:gap-[70px] xl:w-[284px] 2xl:w-[365px] lg:w-[220px] lg:mb-[-2px]*/}
          {/* to-animate */}
          <h2
            class=" border__bottom pb-[26px]  text-xl font-bold uppercase leading-[1.4]   
               lg:basis-[33%] lg:border-b-0 lg:pb-0 lg:pr-[14px] lg:pt-[27px]   lg:text-base 
              xl:basis-[25%]   xl:pr-[22px] xl:pt-[19px]  xl:text-[22px] xl:leading-[1.17] 
                2xl:pr-[100px] 2xl:pt-[50px]  2xl:text-2xl 2xl:leading-[1.3]"
          >
            Limitless is your new rule in business development
          </h2>

          <p
            class="  lg:border__left  pt-[29px] text-xl font-medium
             leading-[1.3]   lg:basis-[67%]  lg:pb-[12px] lg:pl-[56px] lg:pt-[27px] lg:text-base lg:leading-[1.4] 
               xl:basis-[75%]   xl:pl-[100px] xl:pt-[19px] xl:text-2xl  
                  2xl:pl-[150px] 2xl:pt-[50px]   "
          >
            The digital world offers limitless possibilities for turning an idea
            into a successful business. We are a digital marketing agency that
            opens these opportunities to you. With the help of marketing tools
            and smart technologies, UWP.Digital connects customers with their
            favorite brands.
          </p>
        </div>
      </div>
    </section>
  );
});
