import { component$ } from "@builder.io/qwik";
import { useContext } from "@builder.io/qwik";
import { IsOpenedContext } from "~/root";

interface BtnProps {
  class?: string;
}

export default component$((props: BtnProps) => {
  const isOpened = useContext(IsOpenedContext);

  return (
    <button
      // id="btnContact"
      type="button"
      onClick$={() => {
        isOpened.form = true;
      }}
      aria-label="open form"
      class={`group relative flex w-max items-center  gap-5 
      rounded-full border border-main bg-main p-[12px] uppercase transition-all
       hover:border-dark hover:bg-white active:border-main lg:pr-[25px]
        xl:pr-[20px] 2xl:pr-[25px] ${props.class}`}
    >
      <span
        class="hidden pl-[13px] text-base font-medium leading-[21px] text-white transition-all 
       group-hover:text-dark group-active:text-main lg:block xl:pl-[7px] 2xl:pl-[13px]"
      >
        LET’S talk
      </span>

      <svg class="h-[15px] w-[16px]">
        <path
          class="fill-white transition-all  group-hover:fill-dark group-active:fill-main"
          d="M1.43416 9.93883L0.522806 13.5585C0.491368 13.6908 0.492445 13.8279 0.525961 13.9598C0.559476 14.0917 0.624582 14.215 0.716523 14.3208C0.808464 14.4265 0.924918 14.5121 1.05738 14.5711C1.18983 14.6302 1.33495 14.6612 1.48213 14.662C1.5507 14.6684 1.6198 14.6684 1.68838 14.662L5.64557 13.8233L13.2434 6.8577L9.00319 2.96436L1.43416 9.93883Z"
        />
        <path
          class="fill-white transition-all  group-hover:fill-dark group-active:fill-main"
          d="M15.632 3.37039L12.802 0.765995C12.616 0.595635 12.3642 0.5 12.1017 0.5C11.8393 0.5 11.5875 0.595635 11.4014 0.765995L9.82812 2.21386L14.0635 6.11162L15.6368 4.66375C15.7289 4.57859 15.8018 4.47756 15.8514 4.36644C15.901 4.25532 15.9263 4.13628 15.9258 4.01615C15.9254 3.89602 15.8992 3.77715 15.8488 3.66634C15.7984 3.55554 15.7247 3.45496 15.632 3.37039V3.37039Z"
        />
      </svg>
    </button>
  );
});
