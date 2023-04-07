import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="hero red-gradient-hero flex bg-dark pb-[66px] pt-[46px] lg:pb-[88px] lg:pt-[44px] xl:pb-[92px] xl:pt-[36px] 1xl:pb-[92px] 1xl:pt-[74px] 2xl:py-[115px] 3xl:py-[115px]">
      <div class="container z-10 flex flex-col text-center sm:max-w-full lg:px-[30px]">
        <h1 class="mb-5 text-4xl font-bold uppercase leading-[120%] text-white lg:mb-[23px] lg:text-6xl lg:leading-[110%] xl:mb-[18px] xl:text-[66.5px] xl:leading-[69px] 1xl:mb-[22px] 1xl:text-[87px] 1xl:leading-[100%] 2xl:mb-[35px] 2xl:text-[90px] 2xl:leading-[99%] 3xl:mb-[50px] 3xl:text-[120px] 3xl:leading-[99%]">
          Your reliable digital
          <br />
          marketing partner
        </h1>

        <p class="mx-auto text-base font-normal leading-[130%] text-white lg:px-[170px] xl:text-[20px] 1xl:max-w-[70%] 2xl:ml-[-72px] 2xl:max-w-[988px] 2xl:text-2xl">
          We are a full-service digital marketing agency focused on your
          success. We do not sell ideas. We sell a solution for your business
          needs.
        </p>
      </div>
    </section>
  );
});
