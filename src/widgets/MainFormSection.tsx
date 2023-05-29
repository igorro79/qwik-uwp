import { component$ } from "@builder.io/qwik";
import ContactForm from "~/feature/ContactForm";

export default component$(() => {
  return (
    <section class="form red-gradient-form rounded-b-[30px] bg-dark pb-[50px] pt-8 lg:rounded-b-[40px] lg:pb-[49px] lg:pt-[49px] xl:rounded-b-[50px] xl:pb-[58px] xl:pt-[41px] 2xl:pb-[58px] 2xl:pt-[90px]">
      <div class="container sm:max-w-full lg:px-[30px] 3xl:max-w-[1920px] 3xl:px-[135px]">
        <div id="mainFormWrapper" class="sticky">
          <div>
            <p class="mb-[26px] text-xs font-bold leading-4 text-middleGrey lg:mb-[17px] lg:leading-[140%] xl:hidden">
              GET A DETAILED AND COMPREHENSIVE COMMERCIAL PROPOSAL
            </p>
          </div>

          <div>
            <h2 class="sticy xl:border__bottom m-0 pb-[62px] text-4xl font-bold uppercase leading-[43px] text-white lg:pb-[44px] lg:pt-[2px] lg:text-4xl lg:tracking-[1px] xl:pb-[33px] xl:text-[40px] xl:leading-[59px] xl:tracking-[0px] 2xl:pb-[50px] 2xl:text-[64px] 2xl:leading-[64px] 2xl:tracking-[0px]">
              Let's promote your business
            </h2>
          </div>

          <div class="xl:flex">
            <div class="mb-[26px] hidden lg:mb-[17px] xl:mr-5 xl:block xl:pt-[29px] 2xl:mr-[100px] 2xl:block 2xl:pt-[61px]">
              <p class="text-xs font-bold leading-4 text-middleGrey xl:max-w-[420px] xl:text-[12px] xl:leading-[23px] xl:tracking-[1px] 2xl:max-w-[300px] 2xl:text-base 2xl:leading-[24px]">
                GET A DETAILED AND COMPREHENSIVE COMMERCIAL PROPOSAL
              </p>
            </div>
<ContactForm />
            {/* <form
              id="mainForm"
              class="flex flex-col xl:mr-[26px] xl:basis-[829px] xl:pt-[28px] 2xl:mr-[70px] 2xl:basis-[754px] 2xl:pt-[65px]"
            >
              <div class="z-10 flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-[20px] xl:gap-x-[20px] 2xl:gap-x-[32px]">
                <div class="formControl mb-[15px]">
                  <input
                    id="username_02"
                    name="username_02"
                    type="text"
                    class="_req border__rounded form-control m-0 block w-[100%] rounded-[70px] bg-transparent bg-clip-padding pb-[11px] pl-[30px] pr-[30px] pt-[28px] text-sm font-medium leading-[18px] tracking-[1px] text-middleGrey transition ease-in-out focus:border-white focus:text-white focus:shadow-none focus:outline-none focus:outline-0"
                    placeholder="Your name?*"
                  />
                  <label
                    for="username_02"
                    class="pl-[24px] text-sm font-medium leading-[18px] tracking-[1px] text-middleGrey"
                  >
                    Your name?*
                  </label>
                  <p class="_error popup_username_02 ml-[25px] mt-3 hidden text-sm font-medium text-main"></p>
                </div>

                <div class="formControl mb-[15px]">
                  <input
                    id="email_02"
                    name="email"
                    type="text"
                    class="_req border__rounded form-control m-0 block w-[100%] rounded-[70px] bg-transparent bg-clip-padding pb-[11px] pl-[30px] pr-[30px] pt-[28px] text-sm font-medium leading-[18px] tracking-[1px] text-middleGrey transition ease-in-out focus:border-white focus:text-white focus:shadow-none focus:outline-none focus:outline-0"
                    placeholder="Your e-mail?*"
                    title="Please provide valid email address  valid@email.com"
                  />
                  <label
                    for="email_02"
                    class="pl-[24px] text-sm font-medium leading-[18px] tracking-[1px] text-middleGrey"
                  >
                    Your e-mail?*
                  </label>
                  <p class="_error popup_email_02 ml-[25px] mt-3 hidden text-sm font-medium text-main"></p>
                </div>

                <div class="formControl mb-[15px]">
                  <input
                    id="phone_02"
                    name="phone"
                    title="111 111 1111"
                    type="tel"
                    class="_req border__rounded form-control m-0 block w-[100%] rounded-[70px] bg-transparent bg-clip-padding pb-[11px] pl-[30px] pr-[30px] pt-[28px] text-sm font-medium leading-[18px] tracking-[1px] text-middleGrey transition ease-in-out focus:border-white focus:text-white focus:shadow-none focus:outline-none focus:outline-0"
                    placeholder="Phone number*"
                  />
                  <label
                    for="phone_02"
                    class="pl-[24px] text-sm font-medium leading-[18px] tracking-[1px] text-middleGrey"
                  >
                    Phone number*
                  </label>
                  <p class="_error popup_phone_02 ml-[25px] mt-3 hidden text-sm font-medium text-main"></p>
                </div>

                <div class="formControl mb-[15px]">
                  <input
                    id="company_02"
                    name="company"
                    type="text"
                    class="_req border__rounded form-control m-0 block w-[100%] rounded-[70px] bg-transparent bg-clip-padding pb-[11px] pl-[30px] pr-[30px] pt-[28px] text-sm font-medium leading-[18px] tracking-[1px] text-middleGrey transition ease-in-out focus:border-white focus:text-white focus:shadow-none focus:outline-none focus:outline-0"
                    placeholder="Company*"
                  />
                  <label
                    for="company_02"
                    class="pl-[24px] text-sm font-medium leading-[18px] tracking-[1px] text-middleGrey"
                  >
                    Company*
                  </label>
                  <p class="_error popup_company_02 ml-[25px] mt-3 hidden text-sm font-medium text-main"></p>
                </div>
              </div>

              <div class="formControl mb-[15px]">
                <input
                  id="message_02"
                  name="message"
                  type="text"
                  class="_req border__rounded form-control m-0 block w-[100%] rounded-[70px] bg-transparent bg-clip-padding pb-[11px] pl-[30px] pr-[30px] pt-[28px] text-sm font-medium leading-[18px] tracking-[1px] text-middleGrey transition ease-in-out focus:border-white focus:text-white focus:shadow-none focus:outline-none focus:outline-0"
                  placeholder="Tell us about your project"
                />
                <label
                  for="message_02"
                  class="pl-[24px] text-sm font-medium leading-[18px] tracking-[1px] text-middleGrey"
                >
                  Tell us about your project
                </label>
              </div>

              <div class="add__file group mb-6 flex w-[150px] flex-row items-center gap-[10px] lg:mb-[39px]">
                <label
                  class="label-file mb-0 flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-full bg-bgColorBtnForm transition-all group-hover:bg-main"
                  for="upload_02"
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
                  id="upload_02"
                  class="font-0 absolute w-0 cursor-pointer opacity-0"
                  type="file"
                />

                <p class="cursor-pointer text-sm font-medium leading-[18px] tracking-[1px] text-middleGrey transition-all group-hover:text-main">
                  Attach a file
                </p>
              </div>

              <div class="lg:flex lg:justify-between">
                <div class="mb-[27px] lg:mb-[18px] lg:max-w-[367px] lg:pt-[11px] xl:max-w-[290px] 2xl:max-w-[367px]">
                  <p class="text-xs font-medium leading-4 text-middleGrey">
                    By clicking the "Send" button, you consent to the processing
                    of personal data.
                    <a
                      class="pl-[10px] text-xs font-medium leading-4 text-mainTextBlue underline hover:text-linkActive active:text-linkActive"
                      href="#"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      More details
                    </a>
                  </p>
                </div>

                <div class="group mx-auto max-w-[357px] lg:mx-0">
                  <button
                    id="submit_02"
                    type="submit"
                    aria-label="Discuss the project"
                    class="btn__red mb-[58px] w-full transition-all duration-300 ease-out group-hover:border-white group-hover:bg-white group-hover:text-black group-active:text-main lg:mb-[55px] lg:w-auto"
                    value="Submit"
                  >
                    Discuss the project
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
                        d="M11.6083 4.87452L11.6083 14.594L14 14.594L14 0.499999L0.84559 0.5L0.84559 3.06255L9.91709 3.06255L1.82814e-06 13.688L1.69118 15.5L11.6083 4.87452Z"
                      ></path>
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
            </form> */}

            <div class="lg:border__top xl:border__left z-10 lg:pt-[29px] xl:mb-[39px] xl:border-t-0 xl:pl-[25px] xl:pt-[65px] 2xl:pl-[45px] 2xl:pr-[133px]">
              <a
                class="mb-5 block text-xs font-medium leading-6 text-white transition ease-in hover:text-main lg:mb-[24px] lg:text-base xl:mb-[37px] xl:max-w-[195px] 2xl:max-w-[282px]"
                href="https://www.google.com/maps/place/Önneköp+Per+Bings+väg,+Hörby/@55.7915365,13.8804572,17z/data=!3m1!4b1!4m6!3m5!1s0x46540b4437c38e67:0x7b18ebd38168a35a!8m2!3d55.7915365!4d13.8804572!16s%2Fg%2F1tf8rqbg"
                aria-label="our address"
              >
                Onnekop Per Bings vag 13B, 242 98 Horby, Sweden
              </a>
              <div class="lg:grid lg:grid-cols-2 xl:block">
                <div>
                  <a
                    class="mb-1 block text-xl font-semibold leading-[1.1] text-white transition ease-in hover:text-main lg:mb-[11px] lg:text-2xl lg:leading-[1.1] xl:mb-4 2xl:text-[32px] 2xl:leading-[1.1]"
                    href="mailto:info@uwp.digital"
                    aria-label="our email"
                  >
                    info@uwp.digital
                  </a>

                  <p class="mb-5 text-xs font-medium leading-6 tracking-[0.4px] text-middleGrey lg:text-base xl:mb-10 xl:text-base">
                    Shoot us a message
                  </p>
                </div>

                <div>
                  <a
                    class="mb-1 block whitespace-nowrap text-xl font-semibold leading-[1.1] text-white transition ease-in hover:text-main lg:mb-[11px] lg:text-2xl lg:leading-[1.1] xl:mb-4 xl:text-xl xl:leading-[1.1] 2xl:text-2xl 2xl:text-[32px] 2xl:leading-[1.1]"
                    href="tel:+323242344232"
                    aria-label="our phone"
                  >
                    +32 3242 34 42 32
                  </a>

                  <p class="text-xs font-medium leading-6 tracking-[0.4px] text-middleGrey lg:text-base xl:text-base">
                    Call us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
