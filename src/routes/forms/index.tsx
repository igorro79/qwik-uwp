import { component$ } from "@builder.io/qwik";
import { routeLoader$, z } from "@builder.io/qwik-city";
import {
  email,
  type InitialValues,
  minLength,
  required,
  useForm,
} from "@modular-forms/qwik";
import { TextInput } from "~/components/form/TextInput";

const formSchema = z.object({
  username: z.string().nonempty(),
  email: z.string().email("This is not a valid email.").nonempty(),
  phone: z.string().min(8, { message: "This field min length 8." }), // phone length
  company: z.string().nonempty(),
  about: z.string(),
  //   file: z.custom<File>(),
});

// Note: you can also use z.input
// since Zod supports data transformation.
export type DynamicForm = z.infer<typeof formSchema>;

export const useDynamicFormLoader = routeLoader$<InitialValues<DynamicForm>>(
  () => ({
    username: "",
    email: "",
    phone: "",
    company: "",
    about: "",
  })
);

export default component$(() => {
  // Use login form
  const [dynamicForm, { Form, Field }] = useForm<DynamicForm>({
    loader: useDynamicFormLoader(),
  });

  return (
    <Form
      class="space-y-12 md:space-y-14 lg:space-y-16"
      onSubmit$={(values) => {
        console.log(values);
      }}
    >
      <div class="space-y-8 md:space-y-10 lg:space-y-12">
        <Field
          name="username"
          validate={[
            required("Please enter your name."),
            minLength(2, "You password must have 2 characters or more."),
          ]}
        >
          {(field, props) => (
            <TextInput
              {...props}
              value={field.value}
              error={field.error}
              type="text"
              label="Username"
              required
              
            />
          )}
        </Field>
        <Field
          name="email"
          validate={[
            required("Please enter your email."),
            email("The email address is badly formatted."),
          ]}
        >
          {(field, props) => (
            <TextInput
              {...props}
              value={field.value}
              error={field.error}
              type="email"
              label="Email"
              // placeholder="email"
              required
             
            />
          )}
        </Field>

        <input type="submit" />
      </div>
    </Form>
  );
});
