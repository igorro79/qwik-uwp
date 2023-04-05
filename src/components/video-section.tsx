import { component$, useSignal } from "@builder.io/qwik";

import BigRedBtn from "~/components/big-red-btn/big-red-btn";

export default component$(() => {
  const muteState = useSignal(true);

  return (
    <section class="video aspect-h-9 relative bg-dark">
      <BigRedBtn
        class={
          "!absolute right-[5.5%] top-[-66px] z-[1] lg:right-[11.3%] lg:top-[-92px] xl:right-[18%] xl:top-[-71px] 2xl:right-[23.4%] 2xl:top-[-90px]"
        }
      >
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
      <button
        id="mute-btn"
        type="button"
        onClick$={() => (muteState.value = !muteState.value)}
        aria-label="mute"
        class="absolute bottom-10 left-10 z-[1] h-20 w-20"
      >
        {muteState.value ? (
          <svg width="80px" height="80px" viewBox="0 0 512 512">
            <title>sound-mute</title>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g fill="#ffffff" transform="translate(42.666667, 85.333333)">
                <path d="M360.708267,171.937493 L420.291627,231.520853 L390.125013,261.687467 L330.541653,202.104107 L270.958293,261.687467 L240.79168,231.520853 L300.37504,171.937493 L240.79168,112.354133 L270.958293,82.18752 L330.541653,141.77088 L390.125013,82.18752 L420.291627,112.354133 L360.708267,171.937493 Z M191.749973,1.42108547e-14 L80.8957867,87.2292267 L7.10542736e-15,87.2292267 L7.10542736e-15,257.895893 L81.0208,257.895893 L191.749973,343.35424 L191.749973,1.42108547e-14 L191.749973,1.42108547e-14 Z M42.6666667,129.895893 L95.6874667,129.895893 L149.083307,87.8749867 L149.083307,256.520747 L95.5624533,215.229227 L42.6666667,215.229227 L42.6666667,129.895893 Z"></path>
              </g>
            </g>
          </svg>
        ) : (
          <svg
            width="80px"
            height="80px"
            viewBox="0 0 512 512"
            class="absolute left-0 top-0 "
          >
            <title>sound-on</title>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g fill="#ffffff" transform="translate(42.666667, 85.333333)">
                <path d="M276.914133,274.101547 L243.589973,247.442773 C283.38304,204.875093 283.38432,138.998827 243.588693,96.4311467 L276.912853,69.77216 C329.118507,127.992107 329.118507,215.880107 276.914133,274.101547 Z M191.749973,1.42108547e-14 L80.8957867,87.2292267 L7.10542736e-15,87.2292267 L7.10542736e-15,257.895893 L81.0208,257.895893 L191.749973,343.35424 L191.749973,1.42108547e-14 L191.749973,1.42108547e-14 Z M42.6666667,129.895893 L95.6874667,129.895893 L149.083307,87.8749867 L149.083307,256.520747 L95.5624533,215.229227 L42.6666667,215.229227 L42.6666667,129.895893 Z"></path>
              </g>
            </g>
          </svg>
        )}
      </button>
      <video
        id="main-video"
        autoPlay
        muted={muteState.value}
        loop
        class="h-auto w-full object-cover"
      >
        <source src="./1.mp4" type="video/mp4" />
      </video>
    </section>
  );
});
