import { component$ } from "@builder.io/qwik";

/**
 * Spinner provide a visual cue that an action is being processed.
 */
export const Spinner = component$(() => (
  <div
    class="h-4 w-4 animate-spin rounded-full border-r-2 border-t-2 border-r-transparent border-t-current md:h-[22px] md:w-[22px] md:border-r-[2.5px] md:border-t-[2.5px] lg:h-6 lg:w-6"
    aria-label="Loading"
  />
));
