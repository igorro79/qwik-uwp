import { component$ } from "@builder.io/qwik";
import { useContext } from "@builder.io/qwik";
import { IsOpenedContext } from "~/root";

export default component$(() => {
  const isOpened = useContext(IsOpenedContext);

  return (
    <button
      type="button"
      aria-label="open menu"
      onClick$={() => {
        isOpened.menu = !isOpened.menu;
        // if (isOpened.submenu) {
        //   isOpened.submenu = false;
        // }
        console.log(isOpened);
      }}
      class="group relative ml-[33px] flex items-center bg-transparent text-white transition-all lg:ml-[37px] xl:hidden"
    >
      <span class=" relative h-[28px] w-[31px]">
        <span
          class={`absolute left-0 top-0 h-[3px] w-[31px] bg-current transition-all before:absolute
          before:top-3 before:block before:h-[3px] before:w-[31px] before:bg-current before:transition-all before:content-[''] 
          after:absolute after:top-[25px] after:block after:h-[3px] after:w-[31px] after:bg-current after:transition-all after:content-['']
          group-hover:text-lightDarkGrey ${
            isOpened.menu &&
            "!bg-transparent before:top-0 before:rotate-45 before:bg-lightGrey  before:transition-all after:!top-0 after:translate-y-3 after:rotate-[-45deg] after:bg-lightGrey after:transition-all"
          }`}
        ></span>
      </span>
    </button>
  );
});
