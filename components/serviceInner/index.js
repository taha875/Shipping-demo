import React from "react";
import Router from "next/router";

function index() {
  return (
    <>
      <div
        class={`flex flex-col justify-between  w-full items-center mt-20  mx-auto container max-w-[1024px]`}
      >
        <div class=" flex flex-col justify-start md:space-y-4 space-y-4 text-left">
          <h3 class=" lg:text-5xl font-bold text-gray-900 lg:text-left text-center">
            Sea Freight
          </h3>
          <p class="md:text-lg  text-gray-800 lg:text-left text-center md:px-0 px-[24px]">
            Sea freight is the most cost-effective way to ship large volumes of
            goods over long distances. We offer a full range of sea freight
            services, including FCL, LCL, break bulk, project cargo, and heavy
            lift. We also offer a range of value-added services, including
            warehousing, customs clearance, and door-to-door delivery.
          </p>
          <img
            src="https://images.unsplash.com/photo-1524522173746-f628baad3644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1231&q=80"
            className="w-full h-full"
          />
          <br />
          <p class="md:text-lg  text-gray-800 lg:text-left text-center md:px-0 px-[24px]">
            Sea freight is the most cost-effective way to ship large volumes of
            goods over long distances. We offer a full range of sea freight
            services, including FCL, LCL, break bulk, project cargo, and heavy
            lift. We also offer a range of value-added services, including
            warehousing, customs clearance, and door-to-door delivery.
          </p>
          <br />
          <p class="md:text-lg  text-gray-800 lg:text-left text-center md:px-0 px-[24px]">
            Sea freight is the most cost-effective way to ship large volumes of
            goods over long distances. We offer a full range of sea freight
            services, including FCL, LCL, break bulk, project cargo, and heavy
            lift. We also offer a range of value-added services, including
            warehousing, customs clearance, and door-to-door delivery.
          </p>
          <br />
          <p class="md:text-lg  text-gray-800 lg:text-left text-center md:px-0 px-[24px]">
            Sea freight is the most cost-effective way to ship large volumes of
            goods over long distances. We offer a full range of sea freight
            services, including FCL, LCL, break bulk, project cargo, and heavy
            lift. We also offer a range of value-added services, including
            warehousing, customs clearance, and door-to-door delivery.
          </p>
        </div>
        <h3 class=" lg:text-3xl  font-bold text-gray-900 lg:text-left text-center mt-20">
          Want To Get A Quote?
        </h3>
        <button
          onClick={() => Router.push("/calculatePrice")}
          className="mt-6 mb-20 hover:bg-yellow-400 px-4 py-2 text-base bg-yellow-500 text-gray-900 font-medium rounded-md"
        >
          Get A Quote
        </button>
      </div>
    </>
  );
}

export default index;
