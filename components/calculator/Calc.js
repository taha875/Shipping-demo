import React, { useState } from "react";
import Input from "../reusableUI/Input/Input";

function Calc() {
  const [dimensions, setDimensions] = useState(["", "", ""]);
  const [weight, setWeight] = useState(1);
  return (
    <>
      <form className="w-full">
        <div className="flex flex-col w-full mb-4">
          <label htmlFor="weight" className="text-white text-base font-medium">
            Enter package weight
          </label>
          <div className="flex items-center gap-x-16">
            <Input
              type={"number"}
              placeholder={"Actual Weight"}
              id={"weight"}
              name={"weight"}
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
              }}
            />
          </div>
        </div>
        <div className=" mb-4">
          <label
            htmlFor="dimensions"
            className=" text-white text-base font-medium capitalize"
          >
            Enter dimensions TO GET SHIPPING WEIGHT: (L x W x H):
          </label>
          <div className="flex items-center gap-x-16">
            <Input
              type={"number"}
              placeholder={"Lenght"}
              id={"length"}
              name={"length"}
              value={dimensions[0]}
              onChange={(e) => handleDimensionsChange(e, 0)}
            />
            <Input
              type={"number"}
              placeholder={"Width"}
              id={"width"}
              name={"width"}
              value={dimensions[1]}
              onChange={(e) => handleDimensionsChange(e, 1)}
            />
            <Input
              type={"number"}
              placeholder={"Height"}
              id={"height"}
              name={"height"}
              value={dimensions[2]}
              onChange={(e) => handleDimensionsChange(e, 2)}
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default Calc;
