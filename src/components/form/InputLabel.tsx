import { component$ } from "@builder.io/qwik";

type InputLabelProps = {
  name: string;
  label?: string;
  required?: boolean;
  margin?: "none";
  inputValue: any;
  //   inputField: any;
};

/**
 * Input label for a form field.
 */
export const InputLabel = component$(
  ({
    name,
    label,
    required,
    margin,
    inputValue,
  }: // inputField,
  InputLabelProps) => (
    <>
      {label && (
        <label
          class={`inline-block font-medium peer-focus:text-orange-300 md:text-lg lg:text-xl
            ${!margin && "mb-4 lg:mb-5"} ${inputValue && "text-green-500"} `}
          for={name}
        >
          {label} {required && <span class="ml-1">*</span>}
        </label>
      )}
    </>
  )
);
