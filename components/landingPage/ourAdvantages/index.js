import React from "react";

function index() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-center text-5xl font-bold uppercase">
        <span className="text-yellow-500"> Our</span> Advantages
      </h2>
      <p className="text-xl text-center text-gray-700 mt-6 font-semibold w-[850px]">
        Our company stands out by prioritizing your experience of using our
        logistic services, ensuring you enjoy every aspect of the process.
      </p>
      <div
        role="list"
        aria-label="features"
        className="w-full mx-auto container flex flex-wrap mt-11 gap-y-10 sm:mt-10 lg:mt-16 items-center justify-between"
      >
        <div role="listitem" className="flex items-center space-x-4 sm:w-64">
          <div
            className="p-3.5 bg-gray-100 text-yellow-500 rounded-full"
            role="img"
            aria-label="alarm"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.59891 6.90375C9.73031 6.77373 9.83333 6.61789 9.9015 6.44607C9.96967 6.27425 10.0015 6.09016 9.99498 5.90543C9.98846 5.72069 9.94374 5.53931 9.86363 5.37272C9.78352 5.20613 9.66977 5.05794 9.52954 4.9375C8.82385 4.33523 7.92729 4.00301 6.99954 4L6.79516 4.00562H6.76516C4.64954 4.13437 2.99954 5.97187 3.00391 8.1875C3.00391 9.375 3.50391 10.0037 3.89891 10.5069C4.00976 10.6475 4.14871 10.7635 4.3069 10.8475C4.46509 10.9314 4.63905 10.9814 4.81766 10.9944C4.83391 10.9944 4.86141 10.9975 4.94266 10.9975C5.10333 10.9973 5.26229 10.9645 5.40997 10.9013C5.55766 10.838 5.69102 10.7455 5.80204 10.6294L9.59891 6.90375ZM25.2364 4.00688L25.032 4.00063H24.9995C24.0709 4.00304 23.1734 4.3353 22.467 4.93813C22.327 5.05856 22.2134 5.20667 22.1334 5.37315C22.0534 5.53963 22.0088 5.72086 22.0023 5.90544C21.9958 6.09002 22.0275 6.27395 22.0956 6.44566C22.1636 6.61736 22.2665 6.77312 22.3977 6.90312L26.1958 10.6313C26.307 10.7478 26.4408 10.8406 26.5889 10.904C26.7371 10.9674 26.8965 11 27.0577 11C27.1377 11 27.1652 11 27.1827 10.9969C27.3612 10.9839 27.535 10.9338 27.6931 10.8499C27.8512 10.7659 27.99 10.65 28.1008 10.5094C28.4983 10.0062 28.9933 9.37937 28.9958 8.19C28.9995 5.97187 27.3495 4.13438 25.2364 4.00688Z"
                fill="currentColor"
              />
              <path
                d="M16.0061 6C9.94361 6 5.00611 10.9344 5.00611 17C5.00397 19.5717 5.90692 22.0622 7.55674 24.035L5.29924 26.2931C5.20417 26.3855 5.12842 26.4958 5.07638 26.6178C5.02434 26.7397 4.99706 26.8707 4.99612 27.0033C4.99518 27.1358 5.0206 27.2672 5.07091 27.3898C5.12121 27.5125 5.19539 27.6239 5.28914 27.7176C5.38289 27.8113 5.49434 27.8854 5.61699 27.9357C5.73965 27.9859 5.87107 28.0113 6.00362 28.0103C6.13617 28.0093 6.2672 27.982 6.38908 27.9299C6.51097 27.8778 6.62129 27.802 6.71361 27.7069L8.97111 25.4494C10.945 27.0973 13.4347 28.0001 16.0061 28.0001C18.5775 28.0001 21.0673 27.0973 23.0411 25.4494L25.2992 27.7069C25.3916 27.802 25.5019 27.8778 25.6238 27.9299C25.7457 27.982 25.8767 28.0093 26.0092 28.0103C26.1418 28.0113 26.2732 27.9859 26.3959 27.9357C26.5185 27.8854 26.63 27.8113 26.7237 27.7176C26.8175 27.6239 26.8916 27.5125 26.9419 27.3898C26.9923 27.2672 27.0177 27.1358 27.0167 27.0033C27.0158 26.8707 26.9885 26.7397 26.9365 26.6178C26.8844 26.4958 26.8087 26.3855 26.7136 26.2931L24.4555 24.035C26.1056 22.0624 27.0086 19.5718 27.0061 17C27.0061 10.9375 22.0717 6 16.0061 6ZM17.0061 17C17.0061 17.2652 16.9008 17.5196 16.7132 17.7071C16.5257 17.8946 16.2713 18 16.0061 18H11.0061C10.7409 18 10.4865 17.8946 10.299 17.7071C10.1115 17.5196 10.0061 17.2652 10.0061 17C10.0061 16.7348 10.1115 16.4804 10.299 16.2929C10.4865 16.1054 10.7409 16 11.0061 16H15.0061V10C15.0061 9.73478 15.1115 9.48043 15.299 9.29289C15.4865 9.10536 15.7409 9 16.0061 9C16.2713 9 16.5257 9.10536 16.7132 9.29289C16.9008 9.48043 17.0061 9.73478 17.0061 10V17Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Time Prompt</h2>
            <p className="sm:w-44 text-base leading-normal text-gray-600 ">
              Always deliver on time
            </p>
          </div>
        </div>
        <div role="listitem" className="flex items-center space-x-4 sm:w-64">
          <div
            className="p-3.5 bg-gray-100 text-yellow-500 rounded-full"
            role="img"
            aria-label="creative ideas"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 29H14C13.7348 29 13.4805 29.1053 13.2929 29.2929C13.1054 29.4804 13 29.7347 13 30C13 30.2652 13.1054 30.5195 13.2929 30.7071C13.4805 30.8946 13.7348 31 14 31H18C18.2652 31 18.5196 30.8946 18.7071 30.7071C18.8947 30.5195 19 30.2652 19 30C19 29.7347 18.8947 29.4804 18.7071 29.2929C18.5196 29.1053 18.2652 29 18 29ZM19 26H13C12.7348 26 12.4805 26.1053 12.2929 26.2929C12.1054 26.4804 12 26.7347 12 27C12 27.2652 12.1054 27.5195 12.2929 27.7071C12.4805 27.8946 12.7348 28 13 28H19C19.2652 28 19.5196 27.8946 19.7071 27.7071C19.8947 27.5195 20 27.2652 20 27C20 26.7347 19.8947 26.4804 19.7071 26.2929C19.5196 26.1053 19.2652 26 19 26ZM23.0888 3.91809C21.2094 2.03622 18.6919 0.999967 16 0.999967C14.6859 0.996835 13.3842 1.25335 12.1695 1.75479C10.9548 2.25623 9.85119 2.9927 8.92198 3.92191C7.99277 4.85113 7.25629 5.95476 6.75485 7.16943C6.25342 8.3841 5.9969 9.68587 6.00003 11C6.00003 13.9137 7.1169 16.6393 9.06253 18.4775L9.33503 18.7331C10.4607 19.7856 12 21.2275 12 22.5V24C12 24.2652 12.1054 24.5195 12.2929 24.7071C12.4805 24.8946 12.7348 25 13 25H14.5C14.6326 25 14.7598 24.9473 14.8536 24.8535C14.9474 24.7598 15 24.6326 15 24.5V17.1762C15.0001 17.0751 14.9694 16.9764 14.9122 16.893C14.855 16.8097 14.7738 16.7456 14.6794 16.7093C14.102 16.4738 13.5534 16.1728 13.0444 15.8125C12.93 15.7394 12.8317 15.6439 12.7554 15.5316C12.6792 15.4194 12.6266 15.2927 12.6008 15.1595C12.575 15.0263 12.5767 14.8892 12.6056 14.7566C12.6345 14.624 12.6901 14.4987 12.769 14.3882C12.8479 14.2778 12.9485 14.1846 13.0645 14.1143C13.1806 14.044 13.3098 13.9981 13.4442 13.9793C13.5786 13.9605 13.7154 13.9693 13.8463 14.0051C13.9772 14.0408 14.0995 14.1029 14.2057 14.1875C14.6682 14.515 15.5588 15 16 15C16.4413 15 17.3319 14.5137 17.7957 14.1875C18.0116 14.0517 18.2712 14.0036 18.5215 14.053C18.7717 14.1023 18.9936 14.2455 19.1418 14.4531C19.29 14.6607 19.3532 14.917 19.3186 15.1697C19.284 15.4224 19.1542 15.6524 18.9557 15.8125C18.4466 16.1722 17.898 16.4725 17.3207 16.7075C17.2263 16.7437 17.1451 16.8078 17.0879 16.8911C17.0306 16.9745 17 17.0732 17 17.1743V24.5C17 24.6326 17.0527 24.7598 17.1465 24.8535C17.2402 24.9473 17.3674 25 17.5 25H19C19.2652 25 19.5196 24.8946 19.7071 24.7071C19.8947 24.5195 20 24.2652 20 24V22.5C20 21.2575 21.5225 19.8168 22.6344 18.7643L22.9413 18.4731C24.9425 16.5625 26 13.9756 26 11C26.0067 9.68575 25.7528 8.38324 25.2531 7.1677C24.7534 5.95216 24.0178 4.84769 23.0888 3.91809Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Best Logistics
            </h2>
            <p className="sm:w-44 text-base leading-normal text-gray-600 ">
              We provide the best logistic
            </p>
          </div>
        </div>
        <div role="listitem" className="flex items-center space-x-4 sm:w-64">
          <div
            className="p-3.5 bg-gray-100 text-yellow-500 rounded-full"
            role="img"
            aria-label="user friendly"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.7904 4.03625C19.5741 2.72313 17.8754 2 16.0004 2C14.1154 2 12.411 2.71875 11.2004 4.02375C9.97661 5.34312 9.38036 7.13625 9.52036 9.0725C9.79786 12.8925 12.7047 16 16.0004 16C19.296 16 22.1979 12.8931 22.4797 9.07375C22.6216 7.155 22.0216 5.36563 20.7904 4.03625ZM27.0004 30H5.00036C4.7124 30.0037 4.42722 29.9433 4.16558 29.8229C3.90395 29.7026 3.67242 29.5254 3.48786 29.3044C3.08161 28.8188 2.91786 28.1556 3.03911 27.485C3.56661 24.5588 5.21286 22.1006 7.80036 20.375C10.0991 18.8431 13.011 18 16.0004 18C18.9897 18 21.9016 18.8438 24.2004 20.375C26.7879 22.1 28.4341 24.5581 28.9616 27.4844C29.0829 28.155 28.9191 28.8181 28.5129 29.3037C28.3284 29.5249 28.0969 29.7022 27.8352 29.8226C27.5736 29.9431 27.2884 30.0037 27.0004 30Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              24-Hour Support
            </h2>
            <p className="sm:w-44 text-base leading-normal text-gray-600 ">
              Always available to help you
            </p>
          </div>
        </div>
        <div role="listitem" className="flex items-center space-x-4 sm:w-64">
          <div
            className="p-3.5 bg-gray-100 text-yellow-500 rounded-full"
            role="img"
            aria-label="achievments"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-truck"
              width={32}
              height={32}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx={7} cy={17} r={2} />
              <circle cx={17} cy={17} r={2} />
              <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Cargo Tracking
            </h2>
            <p className="sm:w-44 text-base leading-normal text-gray-600 ">
              Track order wherever whenever
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;