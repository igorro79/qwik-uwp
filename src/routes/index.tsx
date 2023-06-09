import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import VideoSection from "~/widgets/video-section";
import MainFormSection from "~/widgets/MainFormSection";
import HeroSection from "~/widgets/hero-section";
import MainBtn from "~/components/main-btn/main-btn";


import Agency from "~/widgets/agency";
import OurCase from "~/widgets/our-case";

import ServicesSection from "~/widgets/services-section";


export default component$(() => {
  return (
    <>
      <HeroSection />

      <VideoSection />
      <Agency />
      <OurCase />
      <ServicesSection/>

      <div class="container  flex flex-col gap-5">
     
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
        <MainFormSection />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "UWP Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
