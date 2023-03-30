import React from "react";

function index() {
  return (
    <>
      <div className="px-4 py-20 mx-auto container flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-center text-5xl font-bold uppercase xl:w-2/3 pr-16 lg:pr-0">
              <span className="text-yellow-500"> Find</span> us here
            </h2>
            <p className="text-xl  text-center text-gray-700 mt-6 font-semibold w-[850px]">
              We align leaders around a shared purpose and stratigic story that
              catalyzes their <br />
              business and brand to take actions
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center lg:flex-row gap-x-6 mt-10">
          <div className="lg:max-w-[828px] w-full relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d212645.32758412763!2d73.08610799999998!3d33.61611625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1648649256122!5m2!1sen!2s"
              width={800}
              height={496}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <svg
              className="absolute inset-x-0 inset-y-0 w-3/4 mx-auto my-auto cursor-pointer md:w-2/5"
              width={34}
              height={40}
              viewBox="0 0 34 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 39.5C18.122 39.5 22.508 36.296 26.003 32.321C30.662 27.026 33.5 21.116 33.5 15.5C33.5 6.611 26.195 0.5 17 0.5C7.805 0.5 0.5 6.611 0.5 15.5C0.5 21.14 3.338 27.05 7.997 32.339C11.489 36.305 15.875 39.5 17 39.5ZM17 19.1C17.7957 19.1 18.5587 18.7839 19.1213 18.2213C19.6839 17.6587 20 16.8956 20 16.1C20 15.3043 19.6839 14.5413 19.1213 13.9787C18.5587 13.4161 17.7957 13.1 17 13.1C16.2044 13.1 15.4413 13.4161 14.8787 13.9787C14.3161 14.5413 14 15.3043 14 16.1C14 16.8956 14.3161 17.6587 14.8787 18.2213C15.4413 18.7839 16.2044 19.1 17 19.1ZM17 25.7C14.4539 25.7 12.0121 24.6886 10.2118 22.8882C8.41143 21.0879 7.4 18.6461 7.4 16.1C7.4 13.5539 8.41143 11.1121 10.2118 9.31178C12.0121 7.51143 14.4539 6.5 17 6.5C19.5461 6.5 21.9879 7.51143 23.7882 9.31178C25.5886 11.1121 26.6 13.5539 26.6 16.1C26.6 18.6461 25.5886 21.0879 23.7882 22.8882C21.9879 24.6886 19.5461 25.7 17 25.7Z"
                fill="#1F2937"
              />
            </svg>
          </div>
          <div className="flex-col w-full mt-8 space-y-4 lg:space-y-8 md:space-y-8 lg:mt-0 md:mt-8 ">
            <div className="flex flex-col w-full lg:flex-row md:flex-row gap-x-6">
              <div className="lg:max-w-[302px] md:max-w-[336px] max-w-[343px] w-full lg:max-h-[232px] md:max-h-[216px] max-h-[216px] h-full bg-gray-100 lg:py-12 md:py-11 py-12 px-8 lg:mb-0 md:mb-0 mb-4">
                <svg
                  className="mx-auto mb-6 cursor-pointer"
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 14C17.1046 14 18 13.1046 18 12C18 10.8954 17.1046 10 16 10C14.8954 10 14 10.8954 14 12C14 13.1046 14.8954 14 16 14Z"
                    fill="#4B5563"
                  />
                  <path
                    d="M16 2C10.4862 2 6 6.29063 6 11.5625C6 14.0731 7.14437 17.4119 9.40125 21.4862C11.2137 24.7575 13.3106 27.7156 14.4012 29.1875C14.5855 29.439 14.8265 29.6435 15.1046 29.7845C15.3827 29.9255 15.6901 29.999 16.0019 29.999C16.3137 29.999 16.6211 29.9255 16.8992 29.7845C17.1772 29.6435 17.4182 29.439 17.6025 29.1875C18.6913 27.7156 20.79 24.7575 22.6025 21.4862C24.8556 17.4131 26 14.0744 26 11.5625C26 6.29063 21.5138 2 16 2ZM16 16C15.2089 16 14.4355 15.7654 13.7777 15.3259C13.1199 14.8864 12.6072 14.2616 12.3045 13.5307C12.0017 12.7998 11.9225 11.9956 12.0769 11.2196C12.2312 10.4437 12.6122 9.73098 13.1716 9.17157C13.731 8.61216 14.4437 8.2312 15.2196 8.07686C15.9956 7.92252 16.7998 8.00173 17.5307 8.30448C18.2616 8.60723 18.8864 9.11992 19.3259 9.77772C19.7654 10.4355 20 11.2089 20 12C19.9988 13.0605 19.577 14.0773 18.8271 14.8271C18.0773 15.577 17.0605 15.9988 16 16Z"
                    fill="#4B5563"
                  />
                </svg>
                <p className="mb-4 text-base font-semibold leading-none text-center text-gray-800">
                  Address
                </p>
                <p className="text-base leading-normal text-center text-gray-600">
                  Luxe Modestoi 99, California Ave 3rd St, CA 5663 1237{" "}
                </p>
              </div>
              <div className="lg:max-w-[302px] md:max-w-[336px] max-w-[343px] w-full lg:max-h-[232px] md:max-h-[216px] max-h-[216px] h-full  bg-gray-100 lg:py-[51px] md:py-11 py-12 px-8 ">
                <svg
                  className="mx-auto mb-6 cursor-pointer"
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.4382 27.9999C21.2182 27.9999 19.5044 27.5587 16.9382 26.1249C13.8176 24.3749 11.4038 22.7593 8.30007 19.6637C5.30757 16.673 3.85132 14.7368 1.8132 11.028C-0.489302 6.84053 -0.0968016 4.64553 0.341948 3.70741C0.864448 2.58616 1.6357 1.91553 2.63257 1.24991C3.19879 0.878931 3.79799 0.560919 4.42257 0.299908C4.48507 0.273033 4.5432 0.247408 4.59507 0.224283C4.90445 0.0849084 5.3732 -0.125717 5.96695 0.0992834C6.3632 0.248033 6.71695 0.552408 7.2707 1.09928C8.40632 2.21928 9.9582 4.71366 10.5307 5.93866C10.9151 6.76428 11.1694 7.30928 11.1701 7.92053C11.1701 8.63616 10.8101 9.18803 10.3732 9.78366C10.2913 9.89553 10.2101 10.0024 10.1313 10.1062C9.6557 10.7312 9.55132 10.9118 9.62007 11.2343C9.75945 11.8824 10.7988 13.8118 12.5069 15.5162C14.2151 17.2205 16.0888 18.1943 16.7394 18.333C17.0757 18.4049 17.2601 18.2962 17.9051 17.8037C17.9976 17.733 18.0926 17.6599 18.1919 17.5868C18.8582 17.0912 19.3844 16.7405 20.0832 16.7405H20.0869C20.6951 16.7405 21.2157 17.0043 22.0782 17.4393C23.2032 18.0068 25.7726 19.5387 26.8994 20.6755C27.4476 21.228 27.7532 21.5805 27.9026 21.9762C28.1276 22.5718 27.9157 23.0387 27.7776 23.3512C27.7544 23.403 27.7288 23.4599 27.7019 23.523C27.4389 24.1465 27.119 24.7444 26.7463 25.3093C26.0819 26.303 25.4088 27.0724 24.2851 27.5955C23.708 27.8685 23.0765 28.0067 22.4382 27.9999Z"
                    fill="#4B5563"
                  />
                </svg>
                <p className="mb-4 text-base font-semibold leading-none text-center text-gray-800">
                  Phone
                </p>
                <p className="mb-4 text-base leading-normal leading-4 text-center text-gray-600">
                  903-846-1749{" "}
                </p>
                <p className="text-base leading-normal leading-4 text-center text-gray-600">
                  832-750-5520
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full lg:flex-row md:flex-row gap-x-6">
              <div className="lg:max-w-[302px] md:max-w-[336px] max-w-[343px] w-full lg:max-h-[232px] md:max-h-[216px] max-h-[216px] h-full bg-gray-100 lg:py-12 md:py-11 py-12 bg-gray-100 py-8 px-8 lg:mb-0 md:mb-0 mb-4">
                <svg
                  className="mx-auto mb-6 cursor-pointer"
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.5 5H5.5C4.57205 5.00099 3.68238 5.37006 3.02622 6.02622C2.37006 6.68238 2.00099 7.57205 2 8.5V23.5C2.00099 24.428 2.37006 25.3176 3.02622 25.9738C3.68238 26.6299 4.57205 26.999 5.5 27H26.5C27.428 26.999 28.3176 26.6299 28.9738 25.9738C29.6299 25.3176 29.999 24.428 30 23.5V8.5C29.999 7.57205 29.6299 6.68238 28.9738 6.02622C28.3176 5.37006 27.428 5.00099 26.5 5ZM25.6138 10.7894L16.6138 17.7894C16.4382 17.9258 16.2223 17.9999 16 17.9999C15.7777 17.9999 15.5618 17.9258 15.3862 17.7894L6.38625 10.7894C6.28051 10.7095 6.19169 10.6094 6.12496 10.495C6.05823 10.3805 6.01491 10.2539 5.99753 10.1225C5.98015 9.99118 5.98905 9.85767 6.02371 9.72978C6.05837 9.60189 6.1181 9.48216 6.19944 9.37755C6.28077 9.27294 6.38208 9.18554 6.49749 9.12043C6.61289 9.05532 6.74008 9.01379 6.87168 8.99825C7.00327 8.98272 7.13664 8.9935 7.26403 9.02996C7.39142 9.06642 7.5103 9.12783 7.61375 9.21062L16 15.7331L24.3862 9.21062C24.596 9.05226 24.8596 8.98281 25.1201 9.01728C25.3806 9.05175 25.617 9.18738 25.7783 9.39483C25.9396 9.60228 26.0128 9.86488 25.982 10.1259C25.9512 10.3868 25.8189 10.6252 25.6138 10.7894Z"
                    fill="#4B5563"
                  />
                </svg>
                <p className="mb-4 text-base font-semibold leading-none text-center text-gray-800">
                  Email
                </p>
                <p className="mb-4 text-base leading-normal leading-4 text-center text-gray-600">
                  luxeStore@gmail.com{" "}
                </p>
                <p className="text-base leading-normal leading-4 text-center text-gray-600">
                  luxe83@yahoo.com
                </p>
              </div>
              <div className="lg:max-w-[302px] md:max-w-[336px] max-w-[343px] w-full lg:max-h-[232px] md:max-h-[216px] max-h-[216px] h-full bg-gray-100 lg:py-[52px] md:py-11 py-8  bg-gray-100 px-8 ">
                <div className="flex gap-x-4 ">
                  <svg
                    className="mx-auto mb-6 cursor-pointer"
                    width={25}
                    height={24}
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22.7676 12.0635C22.7676 6.26504 18.01 1.56348 12.1426 1.56348C6.27511 1.56348 1.51758 6.26504 1.51758 12.0635C1.51758 17.3041 5.40234 21.648 10.4824 22.4364V15.0996H7.78396V12.0635H10.4824V9.75019C10.4824 7.1191 12.0691 5.66457 14.4957 5.66457C15.6583 5.66457 16.8745 5.86988 16.8745 5.86988V8.4541H15.534C14.2149 8.4541 13.8023 9.26316 13.8023 10.0947V12.0635H16.7488L16.2783 15.0996H13.8027V22.4374C18.8828 21.6494 22.7676 17.3055 22.7676 12.0635Z"
                      fill="#4B5563"
                    />
                  </svg>
                  <svg
                    className="mx-auto mb-6 cursor-pointer"
                    width={25}
                    height={24}
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_27_433)">
                      <path
                        d="M24.0979 5.13282C23.2439 5.49955 22.3403 5.74116 21.4156 5.85001C22.3873 5.28769 23.1181 4.39434 23.4709 3.33751C22.5521 3.86841 21.5487 4.24092 20.5035 4.43907C20.0633 3.98322 19.534 3.62059 18.9476 3.3732C18.3613 3.12581 17.7301 2.99884 17.0926 3.00001C14.5112 3.00001 12.4223 5.03438 12.4223 7.5422C12.4205 7.89102 12.4609 8.23881 12.5428 8.57813C10.6918 8.49238 8.8793 8.02575 7.22125 7.2081C5.56321 6.39044 4.09613 5.23977 2.91387 3.8297C2.4991 4.52069 2.27975 5.30909 2.27874 6.11251C2.27874 7.68751 3.11024 9.0797 4.36579 9.89532C3.62191 9.87787 2.89328 9.68331 2.24174 9.32813V9.38438C2.24174 11.5875 3.85446 13.4203 5.98895 13.8375C5.58756 13.9432 5.17394 13.9968 4.75854 13.9969C4.46378 13.9974 4.16969 13.9691 3.88055 13.9125C4.47394 15.7172 6.20098 17.0297 8.24676 17.0672C6.58442 18.3333 4.54349 19.0175 2.44475 19.0125C2.07222 19.012 1.70004 18.99 1.33008 18.9469C3.46512 20.2942 5.94695 21.0068 8.48013 21C17.0826 21 21.7823 14.0766 21.7823 8.07188C21.7823 7.87501 21.777 7.67813 21.7676 7.48595C22.6797 6.84472 23.4689 6.04787 24.0979 5.13282Z"
                        fill="#4B5563"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_27_433">
                        <rect
                          width="24.2857"
                          height={24}
                          fill="white"
                          transform="translate(0.571289)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    className="mx-auto mb-6 cursor-pointer"
                    width={25}
                    height={24}
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_27_437)">
                      <path
                        d="M24.2682 6.97453C24.2682 4.86516 22.6982 3.16828 20.7582 3.16828C18.1304 3.04687 15.4504 3 12.7116 3H11.8579C9.12571 3 6.441 3.04687 3.81321 3.16875C1.87794 3.16875 0.307906 4.875 0.307906 6.98437C0.189323 8.65266 0.139044 10.3214 0.14189 11.9902C0.137147 13.6589 0.190904 15.3292 0.303162 17.0011C0.303162 19.1105 1.8732 20.8214 3.80846 20.8214C6.56907 20.948 9.40082 21.0042 12.28 20.9995C15.1639 21.0089 17.9878 20.9495 20.7515 20.8214C22.6916 20.8214 24.2616 19.1105 24.2616 17.0011C24.3754 15.3277 24.4276 13.6589 24.4229 11.9855C24.4336 10.3167 24.3821 8.64641 24.2682 6.97453ZM9.96053 16.5886V7.37766L16.8383 11.9808L9.96053 16.5886Z"
                        fill="#4B5563"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_27_437">
                        <rect
                          width="24.2857"
                          height={24}
                          fill="white"
                          transform="translate(0.142578)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    className="mx-auto mb-6 cursor-pointer"
                    width={25}
                    height={24}
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.8594 1.5C6.99191 1.5 2.23438 6.20156 2.23438 12C2.23438 16.2984 4.85268 19.9922 8.59514 21.6188C8.56669 20.8875 8.5904 20.0062 8.78013 19.2094C8.9841 18.3562 10.1462 13.4859 10.1462 13.4859C10.1462 13.4859 9.80469 12.8156 9.80469 11.8266C9.80469 10.2703 10.7154 9.10781 11.8538 9.10781C12.8214 9.10781 13.2863 9.825 13.2863 10.6828C13.2863 11.6437 12.6649 13.0781 12.3471 14.4094C12.0815 15.525 12.9116 16.4297 14.0262 16.4297C16.0374 16.4297 17.394 13.875 17.394 10.8469C17.394 8.54531 15.8239 6.825 12.9732 6.825C9.75251 6.825 7.74135 9.20156 7.74135 11.8547C7.74135 12.7687 8.01646 13.4156 8.44336 13.9125C8.63783 14.1422 8.66629 14.2359 8.59514 14.4984C8.54297 14.6906 8.42913 15.1547 8.37695 15.3422C8.3058 15.6094 8.08761 15.7031 7.8457 15.6047C6.36105 15.0047 5.66853 13.4016 5.66853 11.5922C5.66853 8.61094 8.21568 5.03438 13.2626 5.03438C17.3181 5.03438 19.9886 7.93594 19.9886 11.0484C19.9886 15.1687 17.6691 18.2438 14.2539 18.2438C13.106 18.2438 12.0293 17.6297 11.6593 16.9359C11.6593 16.9359 11.0427 19.3547 10.9099 19.8234C10.6869 20.6344 10.2458 21.4406 9.84263 22.0734C10.8206 22.3586 11.8349 22.5038 12.8546 22.5047C18.7221 22.5047 23.4796 17.8031 23.4796 12.0047C23.4796 6.20625 18.7268 1.5 12.8594 1.5Z"
                      fill="#4B5563"
                    />
                  </svg>
                </div>
                <p className="mb-4 text-base font-semibold leading-none text-center text-gray-800">
                  Follow Us
                </p>
                <p className="text-base leading-normal text-center text-gray-600 ">
                  And become a part of <br /> our community{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
