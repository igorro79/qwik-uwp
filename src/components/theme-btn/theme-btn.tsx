import { component$ } from "@builder.io/qwik";
import type { PropFunction } from "@builder.io/qwik";
interface BtnProps {
  class?: string;
  switch: PropFunction<() => void>;
  currentTheme: string;
}

export default component$((props: BtnProps) => {
  return (
    <button
      id="mode"
      type="button"
      aria-label="switch theme"
      class={`h-fit group ${props.class}`}
      onClick$={props.switch}
    >
      {props.currentTheme !== "dark" ? (
        <svg
          id="darkBtn"
          class="m-1 stroke-current transition-all group-hover:stroke-red-500"
          width="24"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path d="M9.14195 0.596191L9.14196 0.596188C9.67383 0.419053 9.93477 0.530154 9.99125 0.580176C10.0065 0.593701 10.0162 0.606276 10.0156 0.645062C10.0149 0.696961 9.99146 0.810553 9.87103 0.981583L9.87102 0.98159C8.43626 3.01927 7.87097 4.67504 7.87281 6.91965C7.87936 14.8933 16.9493 19.2952 23.298 14.4325L22.994 14.0356L23.298 14.4325C23.5445 14.2437 23.7304 14.1613 23.8487 14.1354C23.9061 14.1228 23.9361 14.1251 23.9488 14.1279C23.9582 14.1408 23.985 14.1868 23.9958 14.3021C24.0104 14.4584 23.989 14.6944 23.8958 15.0136C21.0793 24.654 8.35599 26.5776 2.88111 18.2059C0.173575 14.0658 0.420134 8.21366 3.41788 4.59012C5.06619 2.59771 6.84274 1.36188 9.14195 0.596191ZM23.9564 14.1307C23.9563 14.1309 23.9546 14.1304 23.9519 14.1287C23.9552 14.1296 23.9566 14.1305 23.9564 14.1307Z" />
        </svg>
      ) : (
        <svg
          id="lightBtn"
          class=" stroke-current transition-all group-hover:stroke-red-500"
          width="32"
          height="31"
          viewBox="0 0 32 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M23.6578 22.2829C22.9106 22.5467 22.5067 23.4289 22.7739 24.2134C22.9083 24.6082 24.7582 26.5092 25.2417 26.7495M23.6578 22.2829L23.8241 22.7544M23.6578 22.2829C24.0037 22.1609 24.3475 22.161 24.7091 22.2835C25.1049 22.4176 27.0111 24.2624 27.252 24.7446C27.887 26.0156 26.5161 27.3828 25.2417 26.7495M23.6578 22.2829L23.8242 22.7544C23.8242 22.7544 23.8241 22.7544 23.8241 22.7544M23.8241 22.7544C23.3579 22.9191 23.0655 23.4993 23.2435 24.0413M23.8241 22.7544C24.0599 22.6712 24.2885 22.669 24.5487 22.7571C24.5418 22.7547 24.5381 22.7533 24.538 22.7535C24.5377 22.7542 24.5663 22.7686 24.6327 22.8157C24.7083 22.8694 24.805 22.9451 24.9186 23.0402C25.1449 23.2297 25.4187 23.4793 25.6909 23.7428C25.963 24.0061 26.2279 24.2778 26.4372 24.5101C26.542 24.6265 26.6298 24.7295 26.6964 24.8145C26.7296 24.8568 26.7556 24.8922 26.775 24.9206C26.7846 24.9347 26.7918 24.946 26.797 24.9546L26.8028 24.9645C26.8041 24.9668 26.8047 24.9679 26.8047 24.9681M23.2435 24.0413C23.2435 24.0413 23.2435 24.0413 23.2435 24.0413C23.2433 24.0414 23.2448 24.0452 23.2472 24.0523L23.2472 24.0522C23.246 24.0486 23.2447 24.0449 23.2435 24.0413ZM23.2435 24.0413C23.2444 24.0413 23.2589 24.0699 23.3057 24.1355C23.3595 24.2108 23.4354 24.3072 23.5308 24.4205C23.7207 24.6462 23.971 24.9192 24.2352 25.1907C24.4993 25.462 24.7717 25.7262 25.0047 25.935C25.1213 26.0395 25.2247 26.1271 25.3098 26.1935C25.3523 26.2266 25.3879 26.2526 25.4164 26.272C25.4305 26.2815 25.4418 26.2887 25.4505 26.294L25.4605 26.2998L25.4633 26.3013C25.4639 26.3016 25.4642 26.3018 25.4642 26.3018M25.4642 26.3018C25.4642 26.3018 25.4642 26.3018 25.4642 26.3018L25.2417 26.7495M25.4642 26.3018C26.3135 26.7238 27.223 25.8052 26.8047 24.9681M25.4642 26.3018L25.2417 26.7495M26.8047 24.9681L27.2406 24.7503L26.8048 24.9681L26.8047 24.9681ZM15.1221 4.24476C15.2855 4.66513 15.4841 4.85527 15.6438 4.90956C15.9531 5.01464 16.1682 5.03144 16.3138 5.00688C16.4428 4.98512 16.5428 4.92759 16.6342 4.80969C16.7357 4.67869 16.8353 4.45971 16.9069 4.10967C16.9779 3.76288 17.0156 3.31728 17.0156 2.76049C17.0156 1.62222 16.8477 0.998116 16.624 0.7117C16.5292 0.590367 16.4261 0.531597 16.2967 0.509786C16.1517 0.485339 15.9385 0.502551 15.6341 0.609982L15.1221 4.24476ZM15.1221 4.24476C14.9651 3.84082 14.8781 3.31304 14.8765 2.76613M15.1221 4.24476L14.8765 2.76613M14.8765 2.76613C14.8749 2.21927 14.9588 1.69018 15.1136 1.28385M14.8765 2.76613L15.1136 1.28385M15.1136 1.28385C15.2747 0.861146 15.4729 0.666904 15.634 0.609993L15.1136 1.28385ZM5.17348 5.27138C5.06832 5.5471 5.07408 5.84745 5.19302 6.0855C5.60276 6.90547 6.32498 7.58348 7.03706 7.94711C7.39225 8.12848 7.7194 8.21856 7.98237 8.22645C8.24052 8.23419 8.40679 8.16427 8.51256 8.05879C8.66825 7.90351 8.74368 7.64536 8.65341 7.23861C8.56325 6.83236 8.3193 6.35964 7.96794 5.91993C7.61806 5.48207 7.18866 5.11088 6.76396 4.88823C6.3331 4.66234 5.96997 4.61927 5.70025 4.71452L5.17348 5.27138ZM5.17348 5.27138C5.27889 4.99499 5.47562 4.79389 5.70022 4.71453L5.17348 5.27138ZM1.00005 15.5296C1.00379 15.9532 1.23063 16.3302 1.63924 16.4691C1.63919 16.469 1.63933 16.4691 1.63967 16.4692C1.64441 16.4703 1.68745 16.4808 1.78971 16.493C1.88829 16.5048 2.01517 16.5152 2.16438 16.5237C2.46213 16.5407 2.8301 16.5492 3.20145 16.5489C3.5728 16.5485 3.94093 16.5393 4.239 16.5217C4.38836 16.5129 4.51548 16.5023 4.61433 16.4903C4.66371 16.4844 4.70256 16.4785 4.73153 16.4731C4.75728 16.4683 4.76794 16.4652 4.76795 16.4652C4.76796 16.4653 4.76742 16.4654 4.7664 16.4658L4.92726 16.9392L4.76638 16.4658C5.17926 16.3255 5.40321 15.9478 5.40321 15.5268C5.40321 15.1059 5.1793 14.7282 4.76649 14.5878C4.76702 14.588 4.76639 14.5879 4.76445 14.5875C4.75467 14.5854 4.71164 14.5761 4.61895 14.5653C4.51946 14.5538 4.3908 14.5436 4.23926 14.5352C3.93693 14.5185 3.56223 14.5099 3.18479 14.51C2.80732 14.51 2.43363 14.5187 2.13328 14.5355C1.9827 14.544 1.85543 14.5542 1.75764 14.5657C1.67588 14.5752 1.63525 14.5836 1.62281 14.5861L1.00005 15.5296ZM1.00005 15.5296C0.996302 15.1062 1.216 14.729 1.61975 14.5864L1.00005 15.5296ZM11.2295 10.0649L11.2296 10.0649C12.3398 9.10628 13.3588 8.64377 15.1789 8.31075C18.7626 7.65513 21.528 9.88374 22.6301 12.878C23.7328 15.874 23.1156 19.5015 20.0222 21.5582C16.3145 24.0232 12.4463 22.6328 10.3134 19.8435C8.18088 17.0546 7.8625 12.9719 11.2295 10.0649ZM30.3585 16.469L30.3585 16.4691C30.3592 16.4688 30.3586 16.469 30.3565 16.4694C30.3466 16.4715 30.3043 16.4807 30.2138 16.4913C30.1158 16.5027 29.9891 16.513 29.8398 16.5214C29.5421 16.5384 29.173 16.5474 28.8014 16.5479C28.4297 16.5485 28.0619 16.5405 27.7663 16.5245C27.6182 16.5164 27.4931 16.5066 27.3971 16.4954C27.3188 16.4864 27.2794 16.4785 27.2667 16.476C27.2623 16.4751 27.2612 16.4749 27.2628 16.4755C26.3593 16.1568 26.3545 14.9068 27.2464 14.5795C27.2443 14.5803 27.2431 14.5808 27.2432 14.5809C27.2434 14.5815 27.2779 14.573 27.3691 14.5626C27.4644 14.5518 27.5898 14.5421 27.7391 14.5341C28.0369 14.5183 28.4098 14.5103 28.7869 14.5104C29.1639 14.5106 29.5387 14.519 29.8403 14.5352C29.9914 14.5433 30.1195 14.5532 30.218 14.5642C30.3017 14.5736 30.3431 14.5818 30.3554 14.5842C30.3596 14.585 30.3605 14.5852 30.3585 14.5845C31.2138 14.8752 31.2138 16.1784 30.3585 16.469ZM15.6535 30.4454L15.4926 30.9188L15.6535 30.4454C15.4871 30.3889 15.2866 30.1962 15.1232 29.7788C14.9656 29.3764 14.879 28.8506 14.8788 28.3045C14.8786 27.7587 14.9648 27.229 15.1229 26.8196C15.2868 26.3954 15.4906 26.189 15.6649 26.1243C16.1477 25.9451 16.7625 26.2268 16.952 26.7624C16.951 26.7595 16.9511 26.7603 16.9522 26.7654C16.9547 26.7781 16.9625 26.8172 16.9715 26.8947C16.9827 26.9903 16.9925 27.115 17.0006 27.2627C17.0167 27.5573 17.0247 27.9241 17.0241 28.2947C17.0236 28.6653 17.0146 29.0332 16.9976 29.3301C16.9891 29.4789 16.9788 29.6052 16.9673 29.7028C16.9544 29.8125 16.9437 29.8508 16.9453 29.8464L16.9452 29.8464C16.7786 30.3343 16.1925 30.6286 15.6535 30.4454ZM23.2435 7.01229C23.2442 7.01261 23.2586 6.98412 23.3057 6.91812C23.3595 6.84277 23.4354 6.74636 23.5308 6.63309C23.7207 6.40738 23.971 6.13439 24.2352 5.86288C24.4993 5.59154 24.7717 5.32735 25.0047 5.11859C25.1213 5.01405 25.2247 4.92653 25.3098 4.8601C25.3523 4.82695 25.3879 4.80098 25.4164 4.78164C25.4305 4.77206 25.4418 4.76485 25.4505 4.75962L25.4605 4.75378L25.4633 4.7523C25.4639 4.75196 25.4642 4.75181 25.4642 4.75181C26.3135 4.32981 27.223 5.24836 26.8047 6.0855C26.8046 6.0857 26.8041 6.08686 26.8028 6.08905L26.797 6.09899C26.7918 6.10762 26.7846 6.11889 26.775 6.13295C26.7556 6.16137 26.7296 6.19676 26.6964 6.23913C26.6298 6.32406 26.542 6.42709 26.4372 6.54346C26.2279 6.77583 25.963 7.04748 25.6909 7.3108C25.4187 7.5743 25.1449 7.82393 24.9186 8.01339C24.805 8.10847 24.7083 8.18424 24.6327 8.23789C24.5663 8.28502 24.5377 8.29942 24.538 8.30008C23.7069 8.57323 22.9722 7.83424 23.2435 7.01229ZM5.19302 24.9681L5.19305 24.968C5.19372 24.9668 5.20076 24.9539 5.2193 24.9269C5.23798 24.8998 5.26343 24.8654 5.29628 24.8238C5.36208 24.7404 5.44932 24.6383 5.55381 24.5223C5.76241 24.2908 6.02724 24.018 6.29889 23.7529C6.5707 23.4876 6.84389 23.2352 7.06864 23.0435C7.18145 22.9473 7.27724 22.8706 7.35169 22.8162C7.41252 22.7718 7.44024 22.7566 7.44235 22.7547C8.27858 22.4716 9.02559 23.2188 8.75425 24.0413C8.75359 24.041 8.73918 24.0695 8.69208 24.1355C8.63831 24.2108 8.56235 24.3072 8.46702 24.4205C8.27706 24.6462 8.02675 24.9192 7.76255 25.1907C7.49852 25.462 7.22612 25.7262 6.99312 25.935C6.87643 26.0395 6.77311 26.1271 6.68793 26.1935C6.64543 26.2266 6.60992 26.2526 6.58139 26.272C6.56727 26.2815 6.55595 26.2887 6.54726 26.294L6.53723 26.2998L6.53449 26.3013L6.53403 26.3015L6.53358 26.3018C5.6843 26.7238 4.77475 25.8052 5.19302 24.9681Z" />
        </svg>
      )}
    </button>
  );
});
