import React from "react";

function index() {
  const good = [
    {
      title: "Palletized Goods",
    },
    {
      title: "Fragile Goods",
    },
    {
      title: "Any Parcel Shipment",
    },
    {
      title: " Boxed Goods Non-Palletized",
    },
    {
      title: "Any Non-Perishable Boxed Goods",
    },
    {
      title: "Appliances & Electronics",
    },
    {
      title: "Medical Freight",
    },
    {
      title: " Agricultural Products",
    },
    {
      title: "Cars and Equipment",
    },
    {
      title: "Anything Legal",
    },
  ];
  return (
    <div>
      <div className="">
        <h2 className="text-center text-5xl font-bold uppercase">
          We can
          <span className="text-yellow-500"> Ship</span> anything
        </h2>
        <p className="text-xl text-center text-gray-700 mt-6 font-semibold">
          We assist in the transportation of goods for various industries,
          including:
        </p>
      </div>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8 mt-10">
        {good.map((item, i) => {
          return (
            <div
              key={i}
              className="text-gray-700 cursor-pointer hover:text-yellow-500 hover:bg-gray-100 rounded-md flex flex-col items-center py-4 gap-y-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-checkbox"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="9 11 12 14 20 6" />
                <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
              </svg>
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default index;
