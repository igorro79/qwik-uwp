import { Slot, component$ } from "@builder.io/qwik";

interface BtnProps {
  transparent?: boolean;
}

export default component$((props: BtnProps) => {
  return (
    <a
      href="#"
      class={`m-auto flex  w-full relative 
         items-center justify-center gap-[10px] rounded-full bg-main py-[16px] 
         text-base font-bold uppercase text-white hover:text-white transition-all
        sm:max-w-[357px] overflow-hidden lg:mt-[21px] lg:flex xl:sticky xl:top-[100px] xl:mt-0
        
        after:absolute after:left-0 after:top-full after:h-full after:w-full
 after:rounded-[70px] after:bg-[#DC2D45] after:transition-all after:ease-in after:content-[''];
  hover:after:top-0 hover:after:-z-10
 hover:scale-105 ${
   props.transparent && "border-[2px] border-main bg-transparent text-dark"
 }`}
    >
      <Slot />
    </a>
  );
});
