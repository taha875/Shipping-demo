import React from "react";
import Icons from "../reusableUI/Icons/Icons";
const index = () => {
  const data = [
    {
      id: 1,
      title: "Air Freight",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisc adipisc adipisc",
      icon: "airplane",
    },
    {
      id: 2,
      title: "Ocean Freight",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisc adipisc adipisc",
      icon: "ship",
    },
    {
      id: 3,
      title: "Ground Shipping",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisc adipisc adipisc",
      icon: "truck",
    },
    {
      id: 4,
      title: "International Shipping",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisc adipisc adipisc",
      icon: "international",
    },
  ];
  return (
    <>
      <div className="bg-gray-light px-4 xl:px-0 py-16 ">
        <div className="mx-auto container">
          <div className="mb-4 lg:mb-20">
            <h1 className="text-center text-2xl lg:text-5xl text-gray-light font-bold text-color-gray tracking-1px">
              Choose your way of Shipping
            </h1>
            <h2 className="text-base lg:text-lg text-center text-color-gray-light mt-5 tracking-wider">
              Keep your Life Simple, Safe and easy
            </h2>
          </div>
          <div className="flex flex-wrap justify-center">
            {data.map((item) => {
              return (
                <div
                  id={item.id}
                  className="max-w-lg m-4 bg-white rounded-3xl shadow-md py-6 px-5"
                >
                  <div className="pt-5">
                    <div
                      className={`w-14 h-14 text-color-purple rounded-full mb-4`}
                    >
                      <Icons icon={item.icon} />
                    </div>
                    <h1 className="text-xl lg:text-2xl font-semibold tracking-wider text-color-gray">
                      {item.title}
                    </h1>
                    <p className="mt-4 tracking-wider leading-7 text-base  text-color-gray-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
