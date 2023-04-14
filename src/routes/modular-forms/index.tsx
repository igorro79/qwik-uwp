import { routeLoader$, z } from "@builder.io/qwik-city";
import type { InitialValues } from "@modular-forms/qwik";

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
type LoginForm = z.infer<typeof formSchema>;

export const useDynamicForm = routeLoader$<InitialValues<LoginForm>>(() => ({
  username: "",
  email: "",
  phone: "",
  company: "",
  about: "",
}));
