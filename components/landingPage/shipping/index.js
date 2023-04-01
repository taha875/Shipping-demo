import React from "react";

function index() {
  const data = [
    {
      title: "Sea Freight",
      image:
        "https://themes.zozothemes.com/tranzlogistics/wp-content/uploads/sites/14/2017/05/ship.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      title: "Road Transport",
      image:
        "https://themes.zozothemes.com/tranzlogistics/wp-content/uploads/sites/14/2017/05/truck.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      title: "Air Freight",
      image:
        "https://themes.zozothemes.com/tranzlogistics/wp-content/uploads/sites/14/2017/05/airplane.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      title: "International Freight",
      image:
        "https://themes.zozothemes.com/tranzlogistics/wp-content/uploads/sites/14/2017/05/airplane.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
  ];
  return (
    <div className="mx-auto container px-4  ">
      <h2 className="text-center text-5xl font-bold">
        <span className="text-yellow-500">SHIPPING</span> ANYWHERE AROUND THE
        GLOBE
      </h2>
      <p className="text-xl text-center text-gray-700 mt-6 font-semibold">
        XDExpress simplifies freight transportation with seamless booking,
        communication, and payment systems. <br />
        Transport your freight faster, cheaper, and safer while staying focused
        on your business.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-between">
        {data.map((item, i) => {
          return (
            <div
              key={i}
              className="w-64 group flex flex-col items-center cursor-pointer justify-center"
            >
              <img src={item.image} />
              <h3 className="text-lg group-hover:text-yellow-500 font-medium py-3">
                {item.title}
              </h3>
              <p className="text-center">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default index;
