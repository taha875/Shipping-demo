import React, { useState } from "react";
import { useRouter } from "next/router";
const header = () => {
  let Router = useRouter();
  const nav = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/aboutUs",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Contact Us",
      link: "/contactUs",
    },
  ];

  return (
    // <div className="mx-auto container ">
    //   <nav className="relative px-6 xl:px-0">
    //     <div className="lg:flex justify-between w-full py-12 hidden">
    //       <div className="flex items-center">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width={120}
    //           height={50}
    //           viewBox="0 0 120 50"
    //           fill="none"
    //         >
    //           <path
    //             d="M30.2314 4.05859H27.7971C26.9195 4.05859 26.2082 4.76997 26.2082 5.6475V14.4959C26.2082 15.3734 26.9195 16.0848 27.7971 16.0848H30.2314C31.109 16.0848 31.8203 15.3734 31.8203 14.4959V5.6475C31.8203 4.76997 31.109 4.05859 30.2314 4.05859Z"
    //             fill="#805AD5"
    //           />
    //           <path
    //             d="M21.129 49.1975V40.8149H31.4477L22.4978 49.7651C22.3856 49.8774 22.2427 49.9538 22.0871 49.9846C21.9315 50.0155 21.7702 49.9997 21.6236 49.9389C21.4771 49.8781 21.3519 49.7751 21.2638 49.6431C21.1758 49.5113 21.1289 49.3561 21.129 49.1975Z"
    //             fill="#805AD5"
    //           />
    //           <path
    //             d="M32.0006 40.2939H21.129V41.2987H30.9436L32.0006 40.2939Z"
    //             fill="#324293"
    //           />
    //           <path
    //             d="M34.2356 15.4751L19.3858 0.623951C18.9842 0.224336 18.4407 0 17.8742 0C17.3076 0 16.7641 0.224336 16.3625 0.623951L1.51304 15.4751C0.606883 16.4829 0.0729477 17.7705 0 19.1238V21.7397C8.11281 27.7757 17.9591 31.028 28.0709 31.0117C30.6425 31.0122 33.2099 30.8032 35.7477 30.3867V19.1238C35.6739 17.7709 35.1406 16.4836 34.2356 15.4751Z"
    //             fill="#805AD5"
    //           />
    //           <path
    //             d="M28.0714 33.417C17.9596 33.433 8.11335 30.1807 0.000488281 24.145V38.2758C0.00232333 38.8423 0.228147 39.385 0.628665 39.7854C1.02918 40.186 1.57187 40.4118 2.13828 40.4136H33.6106C34.1769 40.4118 34.7195 40.1858 35.1202 39.7854C35.5206 39.3847 35.7463 38.8421 35.7482 38.2758V32.792C33.2104 33.2084 30.643 33.4175 28.0714 33.417Z"
    //             fill="#805AD5"
    //           />
    //         </svg>
    //         <p className="text-4xl font-bold text-color-purple tracking-[-0.1rem] -ml-20">
    //           XD EXPRESS
    //         </p>
    //       </div>
    //       <div className="lg:w-2/3 xl:w-1/2">
    //         <ul className="font-normal text-lg flex justify-end gap-x-6 items-center text-color-gray-light">
    //           <li className="text-color-purple cursor-pointer">
    //             <a href="#">Home</a>
    //           </li>
    //           <li className="cursor-pointer">
    //             <a href="#">Shipping</a>
    //           </li>
    //           <li className="cursor-pointer">
    //             <a href="#">Claims</a>
    //           </li>
    //           <li className="cursor-pointer">
    //             <a href="#">Request A Quote</a>
    //           </li>
    //           <div>
    //             <LanguageSelector
    //               languages={["English", "French", "Chinese"]}
    //               defaultLanguage="English"
    //               onSelect={(language) => console.log(`Selected ${language}`)}
    //             />
    //           </div>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>

    //   <nav className="lg:hidden py-4 relative px-6 xl:px-0">
    //     <div className="flex py-2 justify-between items-center">
    //       <div>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width={120}
    //           height={50}
    //           viewBox="0 0 120 50"
    //           fill="none"
    //         >
    //           <path
    //             d="M30.2314 4.05859H27.7971C26.9195 4.05859 26.2082 4.76997 26.2082 5.6475V14.4959C26.2082 15.3734 26.9195 16.0848 27.7971 16.0848H30.2314C31.109 16.0848 31.8203 15.3734 31.8203 14.4959V5.6475C31.8203 4.76997 31.109 4.05859 30.2314 4.05859Z"
    //             fill="#805AD5"
    //           />
    //           <path
    //             d="M21.129 49.1975V40.8149H31.4477L22.4978 49.7651C22.3856 49.8774 22.2427 49.9538 22.0871 49.9846C21.9315 50.0155 21.7702 49.9997 21.6236 49.9389C21.4771 49.8781 21.3519 49.7751 21.2638 49.6431C21.1758 49.5113 21.1289 49.3561 21.129 49.1975Z"
    //             fill="#805AD5"
    //           />
    //           <path
    //             d="M32.0006 40.2939H21.129V41.2987H30.9436L32.0006 40.2939Z"
    //             fill="#324293"
    //           />
    //           <path
    //             d="M34.2356 15.4751L19.3858 0.623951C18.9842 0.224336 18.4407 0 17.8742 0C17.3076 0 16.7641 0.224336 16.3625 0.623951L1.51304 15.4751C0.606883 16.4829 0.0729477 17.7705 0 19.1238V21.7397C8.11281 27.7757 17.9591 31.028 28.0709 31.0117C30.6425 31.0122 33.2099 30.8032 35.7477 30.3867V19.1238C35.6739 17.7709 35.1406 16.4836 34.2356 15.4751Z"
    //             fill="#805AD5"
    //           />
    //           <path
    //             d="M28.0714 33.417C17.9596 33.433 8.11335 30.1807 0.000488281 24.145V38.2758C0.00232333 38.8423 0.228147 39.385 0.628665 39.7854C1.02918 40.186 1.57187 40.4118 2.13828 40.4136H33.6106C34.1769 40.4118 34.7195 40.1858 35.1202 39.7854C35.5206 39.3847 35.7463 38.8421 35.7482 38.2758V32.792C33.2104 33.2084 30.643 33.4175 28.0714 33.417Z"
    //             fill="#805AD5"
    //           />
    //         </svg>
    //       </div>
    //       <div className=" flex items-center">
    //         {nav && (
    //           <ul
    //             id="list"
    //             className=" py-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-20 md:px-4 md:mt-20 z-20"
    //           >
    //             <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
    //               <a href="#">
    //                 <span className="ml-2 font-bold">Home</span>
    //               </a>
    //             </li>
    //             <li
    //               className=" flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center"
    //               onclick="dropdownHandler(this)"
    //             >
    //               <a href="#">
    //                 <span className="ml-2 font-bold">Shipping</span>
    //               </a>
    //             </li>
    //             <li className=" cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
    //               <a href="#">
    //                 <span className="ml-2 font-bold">Claims</span>
    //               </a>
    //             </li>

    //             <li
    //               className=" flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center"
    //               onclick="dropdownHandler(this)"
    //             >
    //               <a href="#">
    //                 <span className="ml-2 font-bold">Request A Quote</span>
    //               </a>
    //             </li>
    //           </ul>
    //         )}
    //         <div className="xl:hidden" onClick={() => setNav(!nav)}>
    //           <div>
    //             {nav ? (
    //               <svg
    //                 aria-label="Close"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width={24}
    //                 height={24}
    //                 viewBox="0 0 24 24"
    //                 strokeWidth="1.5"
    //                 stroke="currentColor"
    //                 fill="none"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //               >
    //                 <path stroke="none" d="M0 0h24v24H0z" />
    //                 <line x1={18} y1={6} x2={6} y2={18} />
    //                 <line x1={6} y1={6} x2={18} y2={18} />
    //               </svg>
    //             ) : (
    //               <svg
    //                 id="open"
    //                 aria-haspopup="true"
    //                 aria-label="Main Menu"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 className="show-m-menu icon icon-tabler icon-tabler-menu"
    //                 width={28}
    //                 height={28}
    //                 viewBox="0 0 24 24"
    //                 strokeWidth="1.5"
    //                 stroke="currentColor"
    //                 fill="none"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //               >
    //                 <path stroke="none" d="M0 0h24v24H0z" />
    //                 <line x1={4} y1={8} x2={20} y2={8} />
    //                 <line x1={4} y1={16} x2={20} y2={16} />
    //               </svg>
    //             )}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    <div>
      <div className="bg-gray-900 w-full">
        <div className="mx-auto px-4 container py-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center">
              <p className="text-gray-100 text-sm font-medium">Phone No :</p>
              <p className="text-gray-100 text-base pl-3  cursor-pointer hover:text-yellow-500">
                000000000
              </p>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-700 mx-6"></div>
            <div className="flex items-center">
              <p className="text-gray-100 text-sm font-medium">Email :</p>
              <p
                onClick={() => {
                  window.location.href = "mailto:taha";
                }}
                className="text-gray-100 text-base pl-3  cursor-pointer hover:text-yellow-500"
              >
                example@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              <p className="text-gray-100 text-sm font-medium  cursor-pointer hover:text-yellow-500">
                Shipment Tracking
              </p>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-700 mx-6"></div>
            <div className="flex items-center">
              <p className="text-gray-100 text-sm font-medium  cursor-pointer hover:text-yellow-500">
                Login
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800">
        <div className=" mx-auto container w-full py-6 px-4 flex items-center justify-between">
          <h1
            onClick={() => Router.push("/")}
            className="text-yellow-500 cursor-pointer font-bold text-4xl"
          >
            XDEXPRESS
          </h1>
          <div className="flex items-center">
            <ul className="flex items-center justify-center">
              {nav.map((nav, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => Router.push(nav.link)}
                    className={`${
                      Router.pathname === nav.link
                        ? "text-yellow-500"
                        : "text-gray-100"
                    }  text-sm font-medium pl-6 cursor-pointer hover:text-yellow-500`}
                  >
                    {nav.name}
                  </li>
                );
              })}
            </ul>
            <button
              onClick={() => Router.push("/calculatePrice")}
              className="ml-6 hover:bg-yellow-400 px-4 py-2 text-base bg-yellow-500 text-gray-900 font-medium rounded-md"
            >
              Get A Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
