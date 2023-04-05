import type { PropFunction } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
interface CookieProps {
  click: PropFunction<() => void>;
}

export default component$((props: CookieProps) => {
  return (
    <div
      class="fixed bottom-10 right-[3vw] z-50 grid w-[300px] grid-cols-[1fr_auto] items-center rounded-[20px] border-[1px] border-middleGrey bg-dark py-5 px-5 text-sm text-white lg:right-[7vw] lg:w-fit lg:rounded-[60px] lg:py-[17px] lg:pr-[17px] lg:pl-[38px] lg:text-base"
      id="cookies"
    >
      <p class="col-start-1 col-end-3 mb-[15px] uppercase lg:col-start-auto lg:col-end-auto lg:mb-1 lg:max-w-[490px]">
        THIS WEBSITE USES COOKIES.
      </p>
      <a href="" class="font-bold uppercase transition-all hover:text-main">
        Learn more
      </a>
      <button
        onClick$={props.click}
        id="acceptBtn"
        type="button"
        aria-label="accept"
        class="rounded-[50px] bg-grey py-[10px] px-[30px] uppercase text-white transition-all hover:bg-white hover:text-dark lg:col-start-2 lg:row-start-1 lg:row-end-3 lg:ml-10 lg:py-4 lg:px-10"
      >
        accept
      </button>
    </div>
  );
});
