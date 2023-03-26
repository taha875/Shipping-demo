import React from "react";
const index = () => {
  const [form, setForm] = React.useState();
  const [quote, setQuote] = React.useState();
  const updateForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuote(2);
    console.log(form);
  };

  return (
    <>
      <div className="mx-auto container px-4 xl:px-0 my-14">
        <h1 className="text-xl lg:text-4xl tracking-1px text-center text-color-gray">
          Get A rate
        </h1>
        <h2 className="text-base tracking-wider text-center pt-3 text-color-gray-light">
          Check email within a day
        </h2>
        <div className="xl:flex items-center lg:mt-12">
          <div className="mt-6 lg:mt-0">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={188}
                height={3}
                viewBox="0 0 188 3"
                fill="none"
              >
                <line
                  x1="9.1809e-05"
                  y1="1.5"
                  x2="187.922"
                  y2="1.50003"
                  stroke="#805AD5"
                  strokeWidth={3}
                />
              </svg>
              <svg
                className="ml-3"
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={20}
                viewBox="0 0 12 20"
                fill="none"
              >
                <path
                  d="M10.7149 5.75045C10.5258 5.21393 10.1805 4.74627 9.72339 4.40767C9.26627 4.06906 8.71828 3.875 8.14994 3.85046L4.34998 3.85046C3.59412 3.85046 2.86921 4.15073 2.33474 4.6852C1.80026 5.21968 1.5 5.94458 1.5 6.70044C1.5 7.4563 1.80026 8.1812 2.33474 8.71568C2.86921 9.25015 3.59412 9.55042 4.34998 9.55042L8.14994 9.55042C8.9058 9.55042 9.63071 9.85068 10.1652 10.3852C10.6997 10.9196 10.9999 11.6445 10.9999 12.4004C10.9999 13.1563 10.6997 13.8812 10.1652 14.4156C9.63071 14.9501 8.9058 15.2504 8.14994 15.2504L4.34998 15.2504C3.78164 15.2258 3.23365 15.0318 2.77653 14.6932C2.31942 14.3546 1.97409 13.8869 1.785 13.3504"
                  fill="white"
                />
                <path
                  d="M10.7149 5.75045C10.5258 5.21393 10.1805 4.74627 9.72339 4.40767C9.26627 4.06906 8.71828 3.875 8.14994 3.85046L4.34998 3.85046C3.59412 3.85046 2.86921 4.15073 2.33474 4.6852C1.80026 5.21968 1.5 5.94458 1.5 6.70044C1.5 7.4563 1.80026 8.1812 2.33474 8.71568C2.86921 9.25015 3.59412 9.55042 4.34998 9.55042L8.14994 9.55042C8.9058 9.55042 9.63071 9.85068 10.1652 10.3852C10.6997 10.9196 10.9999 11.6445 10.9999 12.4004C10.9999 13.1563 10.6997 13.8812 10.1652 14.4156C9.63071 14.9501 8.9058 15.2504 8.14994 15.2504L4.34998 15.2504C3.78164 15.2258 3.23365 15.0318 2.77653 14.6932C2.31942 14.3546 1.97409 13.8869 1.785 13.3504"
                  stroke="#805AD5"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.24986 1.00049L6.24986 3.85046L6.24986 1.00049ZM6.24986 15.2504L6.24986 18.1003L6.24986 15.2504Z"
                  fill="white"
                />
                <path
                  d="M6.24986 15.2504L6.24986 18.1003M6.24986 1.00049L6.24986 3.85046L6.24986 1.00049Z"
                  stroke="#805AD5"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 className="pr-2 mt-8 text-color-gray text-2xl lg:text-5xl font-bold tracking-1px lg:w-10/12 leading-9">
              Honest Pricing, No Hidden Fees
            </h1>
            <p className="w-10/12 lg:w-7/12 leading-8 text-color-gray-light mt-5 mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus in
              lectus tortor tempus, at volutpat, porta nec amet.
            </p>
          </div>
          <div className="lg:flex items-center">
            <div className="px-11 py-12 bg-color-purple h-[648px] w-[659px] rounded-3xl mt-6 lg:mt-0 lg:ml-8 flex-shrink-0">
              {quote == 2 ? (
                <div className="h-full w-full items-center justify-center flex flex-col">
                  <h1 className="text-xl lg:text-4xl text-center font-medium text-white pb-6 tracking-wider">
                    Thank you for your request!
                  </h1>
                  <p className="text-white text-center text-lg">
                    We will get back to you shortly with your request.
                  </p>
                </div>
              ) : (
                <>
                  {" "}
                  {quote == 1 ? (
                    <>
                      <h1 className="text-xl lg:text-4xl font-medium text-white pb-6 tracking-wider">
                        Enter Package Details
                      </h1>
                      <div className="mt-">
                        <div className=" relative">
                          <label className="text-white text-lg">
                            Address you want to send to
                            <input
                              className="w-full mt-2 bg-transparent text-white border-b-2 pb-1 text-base placeholder:text-gray-400"
                              placeholder="Address..."
                              type="text"
                              name="packageAddress"
                              key={"packageAddress"}
                              onChange={(e) => {
                                updateForm(e);
                              }}
                            />
                          </label>
                        </div>
                        <div className=" relative mt-8">
                          <label className="text-white text-lg">
                            Package Details
                            <input
                              className="w-full mt-2 bg-transparent text-white border-b-2 pb-1 text-base placeholder:text-gray-400"
                              placeholder="Conatains laptops, phones, etc."
                              type="text"
                              name="packageDetails"
                              key={"packageDetails"}
                              onChange={(e) => {
                                updateForm(e);
                              }}
                            />
                          </label>
                        </div>
                        <div className=" relative mt-8">
                          <label className="text-white text-lg">
                            Fragile
                            <input
                              className="w-full mt-2 bg-transparent text-white border-b-2 pb-1 text-base placeholder:text-gray-400"
                              placeholder="Yes/No"
                              type="address"
                              name="fragile"
                              key={"fragile"}
                              onChange={(e) => {
                                updateForm(e);
                              }}
                            />
                          </label>
                        </div>
                        <div className=" relative mt-8 flex gap-4">
                          <label className="text-white text-lg">
                            Package Weight
                            <input
                              className="w-full mt-2 bg-transparent text-white border-b-2 pb-1 text-base placeholder:text-gray-400"
                              placeholder="Package Weight"
                              type="text"
                              name="weight"
                              key={"weight"}
                              onChange={(e) => {
                                updateForm(e);
                              }}
                            />
                          </label>
                          <label className="text-white text-lg">
                            Package Dimensions
                            <div className="flex items-center gap-4">
                              <input
                                className="w-full mt-2 bg-transparent text-white border-b-2 pb-1 text-base placeholder:text-gray-400"
                                placeholder="Width"
                                type="text"
                                name="width"
                                key={"width"}
                                onChange={(e) => {
                                  updateForm(e);
                                }}
                              />
                              <input
                                className="w-full mt-2 bg-transparent text-white border-b-2 pb-1 text-base placeholder:text-gray-400"
                                placeholder="Height"
                                type="text"
                                name="height"
                                key={"height"}
                                onChange={(e) => {
                                  updateForm(e);
                                }}
                              />
                              <input
                                className="w-full mt-2 bg-transparent text-white border-b-2 pb-1 text-base placeholder:text-gray-400"
                                placeholder="Length"
                                type="text"
                                name="length"
                                key={"length"}
                                onChange={(e) => {
                                  updateForm(e);
                                }}
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="mt-16 flex justify-start">
                        <button
                          onClick={(e) => {
                            handleSubmit(e);
                          }}
                          className="py-4 px-3 text-center bg-white hover:bg-opacity-90 text-color-purple rounded-3xl focus:outline-none text-lg xl:text-2xl tracking-wider w-auto lg:w-full flex items-center justify-center"
                        >
                          Get A Quote
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <h1 className="text-xl lg:text-4xl font-medium text-white pb-6 tracking-wider">
                        Enter Your Details
                      </h1>
                      <div className="mt-">
                        <div className=" relative">
                          <label className="text-white text-lg">
                            Name
                            <input
                              className="w-full mt-2 bg-transparent text-white border-b-2 pb-1 text-base placeholder:text-gray-400"
                              placeholder="John Doe"
                              type="text"
                              name="name"
                              key={"name"}
                              onChange={(e) => {
                                updateForm(e);
                              }}
                            />
                          </label>
                        </div>
                        <div className=" relative mt-8">
                          <label className="text-white text-lg">
                            Email
                            <input
                              className="w-full mt-2 bg-transparent text-white border-b-2 pb-1 text-base placeholder:text-gray-400"
                              placeholder="example@gmail.com"
                              type="text"
                              name="email"
                              key={"email"}
                              onChange={(e) => {
                                updateForm(e);
                              }}
                            />
                          </label>
                        </div>
                        <div className=" relative mt-8">
                          <label className="text-white text-lg">
                            Address
                            <input
                              className="w-full mt-2 bg-transparent text-white border-b-2 pb-1 text-base placeholder:text-gray-400"
                              placeholder="Address..."
                              type="address"
                              name="address"
                              key={"address"}
                              onChange={(e) => {
                                updateForm(e);
                              }}
                            />
                          </label>
                        </div>
                        <div className=" relative mt-8 flex gap-4">
                          <label className="text-white text-lg">
                            Number
                            <input
                              className="w-full mt-2 bg-transparent text-white border-b-2 pb-1 text-base placeholder:text-gray-400"
                              placeholder="000-000-000"
                              type="text"
                              name="number"
                              key={"number"}
                              onChange={(e) => {
                                updateForm(e);
                              }}
                            />
                          </label>
                          <label className="text-white text-lg">
                            Postal Code
                            <input
                              className="w-full mt-2 bg-transparent text-white border-b-2 pb-1 text-base placeholder:text-gray-400"
                              placeholder="****"
                              type="text"
                              name="postalCode"
                              key={"postalCode"}
                              onChange={(e) => {
                                updateForm(e);
                              }}
                            />
                          </label>
                        </div>
                      </div>
                      <div className="mt-16 flex justify-start">
                        <button
                          onClick={(e) => {
                            setQuote(1);
                          }}
                          className="py-4 px-3 text-center bg-white hover:bg-opacity-90 text-color-purple rounded-3xl focus:outline-none text-lg xl:text-2xl tracking-wider w-auto lg:w-full flex items-center justify-center"
                        >
                          Continue
                        </button>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
