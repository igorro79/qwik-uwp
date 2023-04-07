import { Slot, component$ } from "@builder.io/qwik";

interface TagInputProps {
  class?: string;
  label?: string;
  value?:string;
  name?:string;
}
export default component$((props: TagInputProps) => {
  return (
    <div class="h-[29px] lg:h-[38px]">
      
      <label
        class={`relative cursor-pointer overflow-hidden whitespace-nowrap rounded-full
         border-px border-middleGrey py-[10px] px-[14px] text-xs font-medium
         text-white transition-all hover:border-white
          peer-checked:border-white peer-checked:bg-white peer-checked:text-black
           lg:text-[14px] lg:leading-[1.3] ${props.class}`
  }
       
      ><input
        class="peer sr-only"
        type="checkbox"
  
        name={props.name}  
              value={props.value}
      />
        {props.label}
      </label>
    </div>
  );
});
