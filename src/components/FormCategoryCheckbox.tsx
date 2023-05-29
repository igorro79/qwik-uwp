import {
  type PropFunction,
  component$,
  type QwikChangeEvent,
  type QwikFocusEvent,
} from "@builder.io/qwik";

interface FormCheckboxProps {
  ref: PropFunction<(element: Element) => void>;
  onInput$: PropFunction<(event: Event, element: HTMLInputElement) => void>;
  onChange$: PropFunction<
    (
      event: QwikChangeEvent<HTMLInputElement>,
      element: HTMLInputElement
    ) => void
  >;
  onBlur$: PropFunction<
    (event: QwikFocusEvent<HTMLInputElement>, element: HTMLInputElement) => void
  >;
  required?: boolean;
  class?: string;
  label: string;
  error?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  field?: any;
}
export default component$(
  ({
    class: className,
    error,
    label,
    // field,
    checked,
    ...props
  }: FormCheckboxProps) => {
    const { name } = props;

    return (
      <div>
        <label
          class={`block cursor-pointer whitespace-nowrap rounded-full border
          px-[14px] py-[10px] text-xs font-medium uppercase leading-[1.3]
         transition-all hover:border-white
          ${
            checked
              ? "border-white bg-white text-black"
              : "border-middleGrey text-white"
          }
           lg:text-[14px] lg:leading-[1.3] ${className}`}
        >
          {label}
          <input
            {...props}
            id={name}
            class="sr-only"
            type="checkbox"
            aria-invalid={!!error}
            aria-errormessage={`${name}-error`}
          />
        </label>
      </div>
    );
  }
);
