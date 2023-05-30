import { Slot, component$ } from "@builder.io/qwik";

interface BtnProps {
  class?: string;
}

export default component$((props: BtnProps) => {
  return (
    <a
      href="#"
      class={`after:content-['']; relative  m-auto flex   
         w-full items-center justify-center gap-[10px] overflow-hidden rounded-full 
         bg-main py-[16px] text-base  font-bold uppercase
        text-white transition-all  
        
        after:absolute after:left-0 after:top-full after:h-full after:w-full
        after:rounded-[70px] after:bg-[#DC2D45] after:transition-all after:ease-in hover:scale-105
 
<<<<<<< HEAD
        hover:text-white hover:after:top-0
        hover:after:-z-10 sm:max-w-[357px] ${props.class}`}
=======
        hover:after:top-0 hover:after:-z-10
        sm:max-w-[357px] xl:sticky xl:top-[100px] xl:mt-0 ${
          props.transparent
            ? "w-[320px] border-[2px] border-main bg-transparent text-dark dark:text-white  pointer-events-auto "
            : "text-white"
        } ${props.class}`}
>>>>>>> 33d19ea01e9b9d7821a54bc1a4bc8dfd4eb27f56
    >
      <Slot />
    </a>
  );
});
