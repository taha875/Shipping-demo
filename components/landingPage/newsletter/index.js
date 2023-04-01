import React from "react";

function index() {
  return (
    <>
      <div className="relative flex justify-center items-center h-[400px] mt-20">
        <img
          className="w-full h-80 md:h-full object-cover "
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/newsletter_12_bg.png"
          alt="background"
        />
        <div className="absolute flex flex-col justify-center items-center px-4 md:px-6">
          <h1 className="text-xl md:text-2xl xl:text-4xl font-extrabold leading-5 md:leading-6 xl:leading-9 text-gray-200">
            Lightning fast
          </h1>
          <p className="mt-4 md:mt-6  w-96 text-base leading-normal text-center text-gray-200">
            Subscribe to our newsletter to get the latest news and updates.
          </p>
          <div className="mt-6 md:mt-12 flex md:flex-row flex-col w-[700px]  justify-center items-center md:rounded md:h-12 xl:h-14">
            <input
              className="md:rounded-tl rounded md:rounded-none md:rounded-bl focus:outline-none w-full bg-zinc-800 text-gray-300 placeholder-gray-300 h-10 md:h-full px-4 xl:px-6"
              placeholder="Your email address"
              type="text"
              name
              id
            />
            <button className="mt-4 md:mt-0 md:rounded-tr rounded md:rounded-none md:rounded-br h-10  md:h-full w-full md:w-40 text-base font-medium leading-4 text-white flex justify-center items-center space-x-3 bg-yellow-500 hover:bg-yellow-500 focus:bg-yellow-500">
              <p>Subscribe</p>
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/newletter_12.svg"
                alt="arrow"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
