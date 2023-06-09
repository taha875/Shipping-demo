const footer = () => {
  return (
    <>
      <div className="bg-gray-900 px-4 lg:px-0 py-10 lg:py-32 ">
        <div className="w-full lg:flex justify-between mx-auto container">
          <div className="lg:w-1/2 justify-between lg:flex">
            <div className="flex flex-col mt-4 lg:mt-0">
              <ul>
                <li>
                  <p
                    href
                    className="text-lg text-gray-100 tracking-wide font-semibold"
                  >
                    Shipping
                  </p>
                </li>
                <li className="mt-6">
                  <a href className="text-base text-gray-100 tracking-wide">
                    How it works
                  </a>
                </li>

                <li className="mt-2">
                  <a href className="text-base text-gray-100 tracking-wide">
                    Features
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col mt-4 lg:mt-0">
              <ul>
                <li>
                  <p
                    href
                    className="text-lg text-gray-100 tracking-wide font-semibold"
                  >
                    About Us
                  </p>
                </li>
                <li className="mt-6">
                  <a href className="text-base text-gray-100 tracking-wide">
                    example@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col mt-4 lg:mt-0 lg:items-center">
              <ul>
                <li>
                  <p
                    href
                    className="text-lg text-gray-100 tracking-wide font-semibold"
                  >
                    Stay Connected
                  </p>
                </li>
                <div className="flex w-2/5 sm:w-1/4 lg:w-full justify-between lg:px-4 items-center mt-6">
                  <li className>
                    <a href>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={20}
                        viewBox="0 0 14 20"
                        fill="none"
                      >
                        <path
                          d="M1 7.96655L1 11.9474H4.14076L4.14076 18.914H8.32845L8.32845 11.9474H11.4692L12.5161 7.96655L8.32845 7.96655V5.97611C8.32845 5.71216 8.43875 5.45902 8.63508 5.27238C8.83142 5.08574 9.09771 4.98088 9.37537 4.98088H12.5161V1L9.37537 1C7.98706 1 6.65562 1.52427 5.67394 2.45747C4.69226 3.39067 4.14076 4.65636 4.14076 5.97611L4.14076 7.96655L1 7.96655Z"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className>
                    <a href className>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={23}
                        height={19}
                        viewBox="0 0 23 19"
                        fill="none"
                      >
                        <path
                          d="M21.6129 0.794089C20.5629 1.31175 19.5339 1.52199 18.4629 1.83998C17.2859 0.503564 15.5408 0.429612 13.8639 1.06137C12.1871 1.69313 11.0888 3.23767 11.1129 5.00935V6.0658C7.70566 6.15349 4.67116 4.59205 2.71291 1.83998C2.71291 1.83998 -1.67819 9.69261 6.91291 13.461C4.94731 14.7784 2.98696 15.6669 0.612915 15.5739C4.08631 17.4787 7.87157 18.1337 11.1486 17.1765C14.9076 16.0778 17.9967 13.2434 19.1822 8.99746C19.5358 7.70613 19.7114 6.37202 19.704 5.03259C19.7019 4.76953 21.2895 2.10409 21.6129 0.793033V0.794089Z"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href className>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M14.4274 1L5.28224 1C2.75687 1 0.709656 3.04721 0.709656 5.57258L0.709656 14.7177C0.709656 17.2431 2.75687 19.2903 5.28224 19.2903L14.4274 19.2903C16.9528 19.2903 19 17.2431 19 14.7177L19 5.57258C19 3.04721 16.9528 1 14.4274 1Z"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.85462 13.5748C11.7486 13.5748 13.2841 12.0393 13.2841 10.1453C13.2841 8.2513 11.7486 6.71589 9.85462 6.71589C7.9606 6.71589 6.42519 8.2513 6.42519 10.1453C6.42519 12.0393 7.9606 13.5748 9.85462 13.5748Z"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.9988 5.00117V5.00322"
                          stroke="#805AD5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end opacity-0">
            <div className="w-10/12 lg:w-1/2">
              <h1 className="text-lg text-gray-100 font-semibold tracking-wide mb-6 text-center lg:text-left">
                Subscribe to our Newsletter
              </h1>
              <div className="flex justify-center">
                <div className="overflow-hidden w-full bg-white rounded-2xl flex justify-center items-center relative">
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    id="email"
                    aria-label="email"
                    className="placeholder-gray-600 h-12 lg:h-16 pl-4 rounded-lg text-gray-100 text-xs sm:text-base bg-transparent focus:outline-none w-full"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 inset-y-0 h-full focus:outline-none transition duration-150 border-l border-gray-300 text-xs lg:text-base font-medium bg-gray-700 ease-in-out rounded text-gray-100 px-2 sm:px-6 py-2 lg:py-4"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-color-gray py-5">
        <h1 className="text-base text-color-gray-light text-center">
          ©2023 - XDEXPRESS. All right reserved
        </h1>
      </div>
    </>
  );
};

export default footer;
