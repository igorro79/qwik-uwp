import { component$, useSignal } from "@builder.io/qwik";

interface TagInputProps {
  class?: string;
  label?: string;
  name?: string;
}
export default component$((props: TagInputProps) => {
  const isChecked = useSignal(false);

  return (
    // class="h-[29px] lg:h-[38px]"
    <div>
      <label
        onClick$={() => {
          isChecked.value = !isChecked.value;
          console.log(isChecked.value);
        }}
        class={`block cursor-pointer whitespace-nowrap rounded-full border
         border-middleGrey px-[14px] py-[10px] text-xs font-medium uppercase leading-[1.3]
         text-white transition-all hover:border-white
          ${isChecked.value && "border-white bg-white text-black"}
           lg:text-[14px] lg:leading-[1.3] ${props.class}`}
      >
        {props.label}
      </label>
      <input
        class="peer sr-only"
        type="checkbox"
        name={props.name}
        value="category"
        checked={isChecked.value}
      />
    </div>
  );
});
