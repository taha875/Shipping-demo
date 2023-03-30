import React from "react";

function contactUs() {
  return (
    <div className="flex flex-col items-center justify-center mb-10 w-full ">
      <h2 className="text-center text-5xl font-bold uppercase xl:w-2/3 pr-16 lg:pr-0">
        <span className="text-yellow-500"> Get in</span> TOUCH WITH US
      </h2>
      <p className="text-xl  text-center text-gray-700 mt-6 font-semibold w-[850px]">
        Send Us an Email Lets get in touch
      </p>

      <div className="mt-10 w-full mx-auto container px-24">
        <div className="flex items-center gap-4">
          <input
            className="w-full h-12 bg-gray-900 text-gray-100 focus:outline-yellow-500 px-4"
            placeholder="Name"
          />
          <input
            className="w-full h-12 bg-gray-900 text-gray-100 focus:outline-yellow-500 px-4"
            placeholder="Email"
          />
        </div>
        <textarea
          className="w-full h-32 mt-2 bg-gray-900 text-gray-100 focus:outline-yellow-500 p-4 resize-none"
          placeholder="Message"
        />
        <button className="w-full mt-6 hover:bg-yellow-400 px-4 py-2 text-base bg-yellow-500 text-gray-900 font-medium rounded-md">
          Send A Message
        </button>
      </div>
    </div>
  );
}

export default contactUs;
