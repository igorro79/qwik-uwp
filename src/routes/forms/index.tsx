import { component$ } from "@builder.io/qwik";

import { email, minLength, required, useForm } from "@modular-forms/qwik";
import { TextInput } from "~/components/form/TextInput";
import { type ContactForm, useContactFormLoader } from "~/routes/layout";
export default component$(() => {
  const [, { Form, Field }] = useForm<ContactForm>({
    loader: useContactFormLoader(),
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
