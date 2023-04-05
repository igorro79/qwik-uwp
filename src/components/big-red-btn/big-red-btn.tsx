import { Slot, component$ } from "@builder.io/qwik";
interface BigBtnProps {
  class?: string;
}
export default component$((props: BigBtnProps) => {
  return (
    <button
      type="button"
      aria-label="discuss the project"
      id="btnDiscuss"
      class={`relative z-[1] flex h-[133px] w-[133px] flex-col items-center justify-center
     gap-3 rounded-full text-center text-sm font-bold uppercase text-light
     transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full 
     before:w-full before:rounded-full before:bg-main before:transition-all
       before:content-[''] lg:h-[142px] lg:w-[142px] xl:h-[145px] xl:w-[145px] xl:px-2
        xl:text-base xl:hover:before:scale-[0.8]  1xl:h-[158px]
      1xl:w-[158px] 2xl:h-[177px] 2xl:w-[177px] ${props.class} `}
    >
      <Slot />
    </button>
  );
});
