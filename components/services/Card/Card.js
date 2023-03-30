import React from "react";

function Card({ heading, description, image, onClick, reverse }) {
  return (
    <>
      <div
        class={`flex justify-between  w-full items-center mt-20 ${
          reverse && `flex-row-reverse`
        } `}
      >
        <div class="lg:w-[406px] flex flex-col justify-start md:space-y-4 space-y-4 text-left">
          <h3 class=" lg:text-5xl font-bold text-gray-900 lg:text-left text-center">
            {heading}
          </h3>
          <p class="md:text-lg  text-gray-800 lg:text-left text-center md:px-0 px-[24px]">
            {description}
          </p>
          <button
            onClick={onClick}
            className="mt-6 w-24 hover:bg-yellow-400 px-4 py-2 text-base bg-yellow-500 text-gray-900 font-medium rounded-md"
          >
            View
          </button>
        </div>
        <div class="flex lg:justify-between justify-center items-center md:mt-12 mt-6 h-[350px]  w-1/2">
          <img src={image} className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

export default Card;
