import React from "react";

function index() {
  return (
    <>
      <div className="xl:mx-auto xl:container px-4">
        <h2 className="text-center text-5xl font-bold uppercase">
          Meet Our<span className="text-yellow-500"> team</span>
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-16 xl:gap-6 gap-4">
          <div className="w-full">
            <img
              src="https://i.ibb.co/Vm2T6Gj/team-1.png"
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt="woman smiling"
            />
            <div className="bg-white shadow-md rounded-md py-4 text-center">
              <p className="text-base font-medium leading-6 text-gray-600">
                Samantha Jane
              </p>
              <p className="text-base leading-6 mt-2 text-gray-800">Designer</p>
            </div>
          </div>
          <div className="bg-yellow-500 rounded-md w-full flex flex-col items-center justify-center md:py-0 py-12">
            <h3 className="text-2xl font-semibold leading-6 text-center text-gray-700">
              About Team
            </h3>
            <p className="lg:w-80 lg:px-0 px-4 text-base leading-6 text-center text-gray-700 mt-6">
              Teamwork is the collaborative effort of a team to achieve a common
              goal or to complete task in the most effective way. This concept
              is seen in the greater framework of a team in which indipendent
              indiviuals who work together towards common goal basic requirement
              for effective team and company
            </p>
          </div>
          <div className="w-full">
            <img
              src="https://i.ibb.co/85Y7MG9/team-2.png"
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt="woman in black dress"
            />
            <div className="bg-white shadow-md rounded-md py-4 text-center">
              <p className="text-base font-medium leading-6 text-gray-600">
                Marilyn Rhodes
              </p>
              <p className="text-base leading-6 mt-2 text-gray-800">Designer</p>
            </div>
          </div>
          <div className="w-full">
            <img
              src="https://i.ibb.co/wKq8ZCW/team-3.png"
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt="woman smiling"
            />
            <div className="bg-white shadow-md rounded-md py-4 text-center">
              <p className="text-base font-medium leading-6 text-gray-600">
                Marry Smith
              </p>
              <p className="text-base leading-6 mt-2 text-gray-800">Writer</p>
            </div>
          </div>
          <div className="w-full">
            <img
              src="https://i.ibb.co/TKzGPFx/team-4.png"
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt="woman smiling"
            />
            <div className="bg-white shadow-md rounded-md py-4 text-center">
              <p className="text-base font-medium leading-6 text-gray-600">
                John Renolds
              </p>
              <p className="text-base leading-6 mt-2 text-gray-800">
                Developer
              </p>
            </div>
          </div>
          <div className="w-full">
            <img
              src="https://i.ibb.co/Lng30RF/team-5.png"
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt="woman smiling"
            />
            <div className="bg-white shadow-md rounded-md py-4 text-center">
              <p className="text-base font-medium leading-6 text-gray-600">
                Annie Jackie
              </p>
              <p className="text-base leading-6 mt-2 text-gray-800">Designer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
