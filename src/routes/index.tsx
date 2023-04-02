import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Counter from "~/components/starter/counter/counter";
import Hero from "~/components/starter/hero/hero";
import BigRedBtn from "~/components/big-red-btn/big-red-btn";
import MainBtn from "~/components/main-btn/main-btn";

export default component$(() => {
  return (
    <>
      <Hero />

      <div class="section bright">
        <div class="container  flex flex-col gap-5">
          <BigRedBtn>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              enable-background="new 0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M15.8545 4.0082H2.20003V0.408203H22V20.2082H18.4V6.55379L3.47283 21.481L0.927246 18.9354L15.8545 4.0082Z"
              />
            </svg>
            discuss the project
          </BigRedBtn>
          <MainBtn transparent={true}>read more</MainBtn>
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
        </div>
      </div>

      <div class="section">
        <div class="container center">
          <h3>
            You can <b>count</b> on me
          </h3>
          <Counter />
        </div>
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
