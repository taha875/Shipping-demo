import React from "react";

function index() {
  return (
    <>
      <div className="w-full flex justify-center items-center relative py-32">
        <img
          src="https://images.unsplash.com/photo-1591968743883-decc954ccce8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
          className="absolute w-full h-full inset-0 object-center object-cover"
          alt="background linear blur"
        />
        <div className="flex flex-col lg:flex-row items-center mx-auto container relative z-10">
          <div className="flex flex-col items-center text-gray-800 w-1/4">
            <h1 className="text-6xl font-semibold">756</h1>
            <h2 className="text-lg font-semibold pt-5">Orders Completed</h2>
          </div>
          <div className="pt-10 lg:pt-0 flex flex-col items-center text-gray-800 w-1/4">
            <h1 className="text-6xl font-semibold">654</h1>
            <h2 className="text-lg font-semibold pt-5">Satisfied Customers</h2>
          </div>
          <div className="pt-10 lg:pt-0 flex flex-col items-center text-gray-800 w-1/4">
            <h1 className="text-6xl font-semibold">900</h1>
            <h2 className="text-lg font-semibold pt-5">Projects</h2>
          </div>
          <div className="pt-10 lg:pt-0 flex flex-col items-center text-gray-800 w-1/4">
            <h1 className="text-6xl font-semibold">356</h1>
            <h2 className="text-lg font-semibold pt-5">Missions</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
