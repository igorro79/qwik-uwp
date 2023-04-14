import { component$, useStore } from "@builder.io/qwik";
import { useContext } from "@builder.io/qwik";
import { IsOpenedContext } from "~/root";

import CategoryCheckbox from "~/components/tag-input";

import categories from "~/data/categories.json";
// list of categories should be loadded from DB on SSR (or remain static ??? languages)

export default component$(() => {
  const credentials = useStore({
    username: "",
    email: "",
    phone: "",
    company: "",
    about: "",
  });

  const isOpened = useContext(IsOpenedContext);
  return (
    <div
      id="formMenu"
      class={`custom__scrollbar absolute right-0 top-0 z-40 h-full w-full overflow-y-auto 
      ${!isOpened.form && "invisible opacity-0"}`}
    >
      {/* <!-- backdrop-block   --> */}
      <div class="wrapper-form-tablet absolute right-0 top-0 w-full">
        <div
          id="backdrop_02"
          class="absolute left-0 right-0 top-0 bg-main/70 backdrop-blur-xl xl:h-full xl:min-h-screen xl:w-full"
        >
          <div class="h-full w-full"></div>
        </div>

        {/* <!-- wrapper-form --> */}
        <div
          id="dynamicFormWrapper"
          class={`relative right-0 ml-auto h-full min-h-screen w-full translate-x-full bg-dark pb-[38px] pl-[20px] pr-[20px] pt-[31px] transition-all lg:px-[30px] lg:pb-[312px] lg:pt-[24px] xl:w-[56.7%] xl:flex-auto xl:pl-[30px] xl:pr-[60px] xl:pt-[44px] 2xl:pl-[140px] 2xl:pr-[60px] 2xl:pt-[44px]      ${
            isOpened.form && "!translate-x-0"
          }`}
        >
          {/* <!-- BEGIN:  btn-form-menu --> */}

          <button
            // id="btnFormMenu"
            onClick$={() => (isOpened.form = false)}
            aria-label="close form"
            class="border__rounded group right-5 ml-auto flex rounded-full pb-[8px] pl-[15px] pr-[15px] pt-[8px] hover:bg-white lg:px-[28px] xl:right-[60px]"
            type="button"
          >
            <svg
              class="fill-white group-hover:fill-black"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.84766 0.814453L23.1853 21.1521L21.1516 23.1859L0.813887 2.84822L2.84766 0.814453Z" />
              <path d="M0.813965 21.1523L21.1517 0.814654L23.1854 2.84842L2.84773 23.1861L0.813965 21.1523Z" />
            </svg>
          </button>

          <h2 class="z-10 mb-[30px] mt-[20px] text-4xl font-bold uppercase leading-[43px] text-white lg:mb-[24px] lg:mt-[32px] lg:leading-[39px] xl:text-[36px] xl:leading-[70px] 2xl:text-[64px]">
            Låt oss diskutera projektet
          </h2>

          <h3 class="mb-[38px] text-sm font-medium leading-[15px] tracking-[1px] text-middleGrey">
            Get a detailed and clear commercial proposal
          </h3>

          <p class="mb-[21px] text-xs font-bold leading-[13px] tracking-[1px] text-middleGrey">
            I am interested in
          </p>

          <form id="dynamicForm" class="pb-20 2xl:mr-[78px]">
            <div class="mb-6 flex flex-wrap gap-[11px_11px] lg:mb-[46px]">
              {categories.map((item, i) => (
                <CategoryCheckbox key={i} name={item.name} label={item.label} />
              ))}
            </div>

            <div class="flex flex-col ">
              <div class="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-4">
                {/* <!-- name --> */}
                <div class="formControl group relative mb-[15px] ">
                  <input
                    id="username"
                    name="username"
                    // onInput$={(credentials.username = e.target.value)}
                    autoComplete="off"
                    type="text"
                    class="form-control m-0 block  w-full rounded-full border-[1px] border-middleGrey bg-transparent  bg-clip-padding px-[30px] py-5 text-sm font-medium leading-[1.3] tracking-[1px] text-middleGrey transition ease-in-out hover:border-white focus:border-white focus:text-white focus:shadow-none focus:outline-none focus:outline-0"
                    // placeholder="Your name?*"
                  />
                  <label
                    for="username"
                    class={`group-focus-within:active-label absolute left-10 top-5 bg-dark px-1  text-sm font-medium leading-[1.3] tracking-[1px] text-middleGrey`}
                  >
                    Your name?*
                  </label>
                  <p class="_error popup_username ml-[25px] mt-3 hidden  text-sm font-medium text-main"></p>
                </div>

                {/* <!-- email --> */}
                <div class="formControl mb-[15px]">
                  <input
                    id="email"
                    name="email"
                    autoComplete="off"
                    type="text"
                    class="form-control m-0 block w-full rounded-full border-[1px] border-middleGrey bg-transparent  bg-clip-padding pb-[11px] pl-[30px] pr-[30px] pt-[28px] text-sm font-medium leading-[18px] tracking-[1px] text-middleGrey transition ease-in-out hover:border-white focus:border-white focus:text-white focus:shadow-none focus:outline-none focus:outline-0"
                    placeholder="Your e-mail?*"
                    title="Please provide valid email address valid@email.com"
                  />
                  <label
                    for="email"
                    class="pl-[24px] text-sm font-medium leading-[18px] tracking-[1px] text-middleGrey"
                  >
                    Your e-mail?*
                  </label>
                  <p class="_error popup_email ml-[25px] mt-3 hidden text-sm font-medium text-main"></p>
                </div>

                {/* <!-- end-email --> */}

                {/* <!-- phone --> */}

                <div class="formControl mb-[15px]">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="off"
                    title="111 111 1111"
                    class="form-control m-0 block     w-full rounded-full border-[1px] border-middleGrey bg-transparent  bg-clip-padding pb-[11px] pl-[30px] pr-[30px] pt-[28px] text-sm font-medium leading-[18px] tracking-[1px] text-middleGrey transition ease-in-out hover:border-white focus:border-white focus:text-white focus:shadow-none focus:outline-none focus:outline-0"
                    placeholder="Phone number*"
                  />
                  <label
                    for="phone"
                    class="pl-[24px] text-sm font-medium leading-[18px] tracking-[1px] text-middleGrey"
                  >
                    Phone number*
                  </label>
                  <p class="_error popup_phone ml-[25px] mt-3 hidden text-sm font-medium text-main"></p>
                </div>
                {/* <!-- phone --> */}

                {/* <!-- company --> */}
                <div class="formControl mb-[15px]">
                  <input
                    id="company"
                    autoComplete="off"
                    name="company"
                    type="text"
                    class="form-control m-0 block w-full rounded-full border-[1px] border-middleGrey bg-transparent  bg-clip-padding pb-[11px] pl-[30px] pr-[30px] pt-[28px] text-sm font-medium leading-[18px] tracking-[1px] text-middleGrey transition ease-in-out hover:border-white focus:border-white focus:text-white focus:shadow-none focus:outline-none focus:outline-0"
                    placeholder="Company*"
                  />
                  <label
                    for="company"
                    class="pl-[24px] text-sm font-medium leading-[18px] tracking-[1px] text-middleGrey"
                  >
                    Company*
                  </label>
                  <p class="_error popup_company ml-[25px] mt-3 hidden text-sm font-medium text-main"></p>
                </div>
                {/* <!-- company --> */}

                {/* <!-- end-company --> */}
              </div>

              {/* <!-- message --> */}
              <div class="formControl mb-[15px]">
                <input
                  id="message"
                  name="message"
                  type="text"
                  class="form-control m-0 block   w-full rounded-full border-[1px] border-middleGrey bg-transparent  bg-clip-padding pb-[11px] pl-[30px] pr-[30px] pt-[28px] text-sm font-medium leading-[18px] tracking-[1px] text-middleGrey transition ease-in-out hover:border-white focus:border-white focus:text-white focus:shadow-none focus:outline-none focus:outline-0"
                  placeholder="Tell us about your project"
                />
                <label
                  for="message"
                  class="pl-[24px] text-sm font-medium leading-[18px] tracking-[1px] text-middleGrey"
                >
                  Tell us about your project
                </label>
              </div>
              {/* <!-- message --> */}

              <div class="add__file group flex w-[150px] flex-row items-center gap-[10px]">
                <label
                  class="label-file flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-full bg-bgColorBtnForm transition-all group-hover:bg-main"
                  for="upload"
                >
                  <span>
                    <svg
                      width="15"
                      height="20"
                      viewBox="0 0 15 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.90685 19.4677C6.66628 20.6956 9.9129 19.4486 11.1387 16.69L14.5426 9.04868C14.5648 8.99888 14.5651 8.94289 14.5456 8.8921C14.5261 8.8413 14.4884 8.79994 14.4386 8.77778L13.3576 8.29677C13.3083 8.27494 13.2523 8.27355 13.2019 8.29289C13.1516 8.31224 13.1109 8.35075 13.0888 8.40001L9.68496 16.0413C9.26261 16.9904 8.49512 17.7175 7.52579 18.0898C6.55647 18.4621 5.49958 18.4358 4.5526 18.0126C3.60349 17.5903 2.87641 16.8228 2.50492 15.8555C2.13261 14.8862 2.15979 13.8315 2.58214 12.8823L6.05039 5.09244L6.61222 3.8299C7.13755 2.64937 8.52382 2.11693 9.70434 2.64226C10.2756 2.89645 10.7126 3.35763 10.9369 3.94177C11.1613 4.5259 11.1454 5.16104 10.8912 5.73226L7.45029 13.4607C7.36214 13.6548 7.20597 13.8046 7.00702 13.8811L7.00491 13.8819C6.80596 13.9583 6.59176 13.9507 6.39842 13.8647C6.20215 13.7773 6.05443 13.6203 5.97801 13.4214C5.90242 13.2246 5.90919 13.0082 5.99522 12.8149L8.8086 6.50057C8.83076 6.45077 8.83111 6.39478 8.8116 6.34398C8.79209 6.29319 8.75435 6.25183 8.70455 6.22967L7.62363 5.74866C7.57428 5.72683 7.51829 5.72543 7.46792 5.74478C7.41754 5.76413 7.37688 5.80264 7.35484 5.85189L4.54439 12.1675C4.28499 12.7505 4.2689 13.3978 4.49732 13.9925C4.72574 14.5873 5.17397 15.0587 5.75398 15.3168C6.95793 15.8526 8.3709 15.3074 8.90747 14.1056L9.24037 13.3536L12.3462 6.37801C12.5577 5.90643 12.6735 5.39756 12.6869 4.88089C12.7002 4.36422 12.6109 3.85005 12.424 3.36819C12.0476 2.38827 11.3109 1.61476 10.353 1.1885C9.36078 0.74871 8.28371 0.751956 7.34401 1.11288C6.40431 1.47381 5.60199 2.19241 5.16139 3.18252L1.12919 12.2358C0.536893 13.5708 0.496976 15.0603 1.02129 16.4254C1.5443 17.7934 2.57107 18.8732 3.90685 19.4677Z"
                        fill="#F8F8F8"
                      ></path>
                    </svg>
                  </span>
                </label>

                <input
                  id="upload"
                  class="font-0 absolute w-0 cursor-pointer opacity-0"
                  type="file"
                />

                <p class="cursor-pointer text-sm font-medium leading-[18px] tracking-[1px] text-middleGrey transition-all group-hover:text-main">
                  Bifoga en fil
                </p>
              </div>

              <div class="lg:flex lg:justify-between">
                <div class="lg:w-[367px]">
                  <p class="py-[24px] text-xs font-medium leading-4 text-middleGrey lg:pb-0">
                    Genom att klicka på knappen "Skicka" samtycker du till
                    behandling av personuppgifter.
                    <a
                      class="pl-[10px] text-xs font-medium leading-4 text-mainTextBlue underline hover:text-linkActive active:text-linkActive"
                      href="#"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="read-more"
                    >
                      Fler detaljer
                    </a>
                  </p>
                </div>

                <div class="group">
                  <button
                    id="submit"
                    type="submit"
                    aria-label="submit"
                    class="btn__red w-full transition-all group-hover:border-white group-hover:bg-white group-hover:text-black group-active:text-main lg:w-auto"
                    value="Submit"
                  >
                    Skicka
                    <svg
                      class="fill-white transition-all group-hover:fill-black group-active:fill-main"
                      width="14"
                      height="16"
                      viewBox="0 0 14 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d=" M11.6083 4.87452L11.6083 14.594L14 14.594L14 0.499999L0.84559 0.5L0.84559 3.06255L9.91709 3.06255L1.82814e-06 13.688L1.69118 15.5L11.6083 4.87452Z"
                      />
                    </svg>
                    <svg
                      width="24"
                      class="hidden fill-white transition-all group-hover:fill-black group-active:fill-main"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                        opacity=".25"
                      />
                      <path
                        d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
                        class="spinner_ajPY"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});
