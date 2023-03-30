import React from "react";

function header({ heading, ptag, headingLine2 }) {
  return (
    <div className="w-full h-[250px] relative">
      <img
        src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        className="w-full h-full object-cover object-center"
      />
      <div className=" bg-yellow-500 flex flex-col items-center justify-center bg-opacity-70 absolute w-full h-full top-0">
        <h1 className="text-[70px] uppercase font-black text-center text-gray-800 leading-[80px]">
          {heading} <br />
          {headingLine2}
        </h1>
      </div>
    </div>
  );
}

export default header;
