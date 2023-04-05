import React, { useState } from "react";
import Calculator from "./Calculator";

function index() {
  const [loader, setLoader] = useState(false);

  return (
    <div className="mx-auto container px-4 xl:px-0 my-10">
      <div className="xl:flex items-center lg:mt-12">
        <div className="mt-6 lg:mt-0">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={188}
              height={3}
              viewBox="0 0 188 3"
              fill="none"
            >
              <line
                x1="9.1809e-05"
                y1="1.5"
                x2="187.922"
                y2="1.50003"
                stroke="#eab308"
                strokeWidth={3}
              />
            </svg>
            <svg
              className="ml-3"
              xmlns="http://www.w3.org/2000/svg"
              width={12}
              height={20}
              viewBox="0 0 12 20"
              fill="none"
            >
              <path
                d="M10.7149 5.75045C10.5258 5.21393 10.1805 4.74627 9.72339 4.40767C9.26627 4.06906 8.71828 3.875 8.14994 3.85046L4.34998 3.85046C3.59412 3.85046 2.86921 4.15073 2.33474 4.6852C1.80026 5.21968 1.5 5.94458 1.5 6.70044C1.5 7.4563 1.80026 8.1812 2.33474 8.71568C2.86921 9.25015 3.59412 9.55042 4.34998 9.55042L8.14994 9.55042C8.9058 9.55042 9.63071 9.85068 10.1652 10.3852C10.6997 10.9196 10.9999 11.6445 10.9999 12.4004C10.9999 13.1563 10.6997 13.8812 10.1652 14.4156C9.63071 14.9501 8.9058 15.2504 8.14994 15.2504L4.34998 15.2504C3.78164 15.2258 3.23365 15.0318 2.77653 14.6932C2.31942 14.3546 1.97409 13.8869 1.785 13.3504"
                fill="white"
              />
              <path
                d="M10.7149 5.75045C10.5258 5.21393 10.1805 4.74627 9.72339 4.40767C9.26627 4.06906 8.71828 3.875 8.14994 3.85046L4.34998 3.85046C3.59412 3.85046 2.86921 4.15073 2.33474 4.6852C1.80026 5.21968 1.5 5.94458 1.5 6.70044C1.5 7.4563 1.80026 8.1812 2.33474 8.71568C2.86921 9.25015 3.59412 9.55042 4.34998 9.55042L8.14994 9.55042C8.9058 9.55042 9.63071 9.85068 10.1652 10.3852C10.6997 10.9196 10.9999 11.6445 10.9999 12.4004C10.9999 13.1563 10.6997 13.8812 10.1652 14.4156C9.63071 14.9501 8.9058 15.2504 8.14994 15.2504L4.34998 15.2504C3.78164 15.2258 3.23365 15.0318 2.77653 14.6932C2.31942 14.3546 1.97409 13.8869 1.785 13.3504"
                stroke="#eab308"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.24986 1.00049L6.24986 3.85046L6.24986 1.00049ZM6.24986 15.2504L6.24986 18.1003L6.24986 15.2504Z"
                fill="white"
              />
              <path
                d="M6.24986 15.2504L6.24986 18.1003M6.24986 1.00049L6.24986 3.85046L6.24986 1.00049Z"
                stroke="#eab308"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h1 className="pr-2 mt-8 text-color-gray uppercase text-2xl lg:text-5xl font-bold tracking-1px lg:w-10/12 leading-9">
            <span className="text-yellow-500"> Honest Pricing</span> No Hidden
            Fees
          </h1>
          <p className="w-10/12 lg:w-7/12 leading-8 text-color-gray-light mt-5 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus in
            lectus tortor tempus, at volutpat, porta nec amet.
          </p>
        </div>
        <div className="lg:flex items-center">
          <div className="px-11 flex items-center justify-center flex-col bg-yellow-600 h-[525px] w-[659px] rounded-3xl mt-6 lg:mt-0 lg:ml-8 flex-shrink-0">
            {loader ? null : (
              <h1 className="text-xl lg:text-4xl text-center font-medium text-white pb-6">
                Enter Your Details
              </h1>
            )}

            <Calculator loader={loader} setLoader={setLoader} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
