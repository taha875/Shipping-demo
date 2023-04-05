import { useState } from "react";
import Input from "../reusableUI/Input/Input";

function calculateWeight(weight, dimensions, unit) {
  let estimatedWeight;
  console.log(weight, dimensions, unit);
  if (weight > 1) {
    estimatedWeight = weight;
  } else {
    const inchesToPound = 139;
    const cmToPound = 5000 * 2.2;
    const totalDimension = dimensions.reduce((acc, cur) => acc * cur, 1);
    if (unit === "inch") {
      estimatedWeight = totalDimension / inchesToPound;
      console.log(estimatedWeight);
    } else if (unit === "cm") {
      estimatedWeight = (totalDimension / cmToPound).toFixed(2);
    }
  }
  console.log(estimatedWeight);
  return estimatedWeight;
}

function calculatePrice(weight, pricePerPound, currency) {
  let price;
  if (currency === "kg") {
    price = (weight * 12.76).toFixed(2);
  } else if (currency === "lb") {
    price = (weight * 5.8).toFixed(2);
  }
  return price;
}

export default function Calculator({ loader, setLoader }) {
  const [weight, setWeight] = useState(1);
  const [unit, setUnit] = useState("lb");
  const [dimensions, setDimensions] = useState(["", "", ""]);
  const [dimensionUnit, setDimensionUnit] = useState("inch");
  const [currency, setCurrency] = useState("lb");
  const [result, setResult] = useState("");

  const isCalculateButtonActive =
    weight || dimensions.every((dimension) => dimension);

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const multiplyDimensions = () => {
    const product = dimensions.reduce((acc, val) => acc * Number(val), 1);
    if (dimensionUnit === "cm") {
      return ((product / 5000) * 2.2).toFixed(2);
    } else if (dimensionUnit === "inch") {
      return (product / 139).toFixed(2);
    }
    return product;
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const handleDimensionsChange = (e, index) => {
    const newDimensions = [...dimensions];
    newDimensions[index] = e.target.value;
    setDimensions(newDimensions);
  };

  const handleDimensionUnitChange = (e) => {
    setDimensionUnit(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const estimatedWeight = calculateWeight(weight, dimensions, dimensionUnit);
    let finalWeight = estimatedWeight;
    if (weight < 1) {
      finalWeight =
        parseFloat(estimatedWeight) > parseFloat(weight)
          ? parseFloat(estimatedWeight)
          : parseFloat(weight);
    }
    const price = calculatePrice(
      finalWeight,
      currency === "lb" ? 5.8 : 12.76,
      currency
    );
    setLoader(true);
    setResult(price);
  };
  const handleReset = () => {
    setWeight(1);
    setUnit("lb");
    setDimensions(["", "", ""]);
    setDimensionUnit("inch");
    setCurrency("lb");
    setResult("");
    setLoader(false);
  };

  return (
    <>
      {loader ? (
        <>
          {result && (
            <>
              <h2 className="text-2xl text-center font-medium text-white pb-2">
                Estimated Shipping Cost:
              </h2>
              <p className="text-4xl text-center font-bold text-white pb-4">{`${result} $`}</p>
              <button
                onClick={handleReset}
                className="w-24 hover:bg-yellow-400 px-4 py-4 text-base bg-yellow-500 text-white font-medium rounded-md"
              >
                Reset
              </button>
            </>
          )}
        </>
      ) : (
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col w-full mb-4">
            <label
              htmlFor="weight"
              className="text-white text-base font-medium"
            >
              Enter package weight
            </label>
            <div className="flex items-center gap-x-16">
              <Input
                type={"number"}
                placeholder={"Actual Weight"}
                id={"weight"}
                name={"weight"}
                value={weight}
                onChange={handleWeightChange}
              />

              <select
                value={unit}
                onChange={handleUnitChange}
                className="p-2 rounded-md border-gray-400 border"
              >
                <option value="lb">lb</option>
                <option value="kg">kg</option>
              </select>
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
              <select
                value={dimensionUnit}
                onChange={handleDimensionUnitChange}
                className="p-2 rounded-md border-gray-400 border"
              >
                <option value="inch">inches</option>
                <option value="cm">centimeters</option>
              </select>
            </div>
          </div>

          <p className=" text-white text-base font-medium capitalize my-8">
            Shipping Weight Is{" "}
            <span className="text-lg border p-2">
              {multiplyDimensions()} {dimensionUnit}
            </span>
          </p>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="currency"
              className="text-base font-medium text-white"
            >
              Choose Price Unit:
            </label>
            <select
              value={currency}
              onChange={handleCurrencyChange}
              className="p-2 mt-2 rounded-md border-gray-400 border"
            >
              <option value="lb">Price Per Pound</option>
              <option value="kg">Price per Kg</option>
            </select>
          </div>
          <button
            type="submit"
            className={` w-full px-4 py-4 text-base font-medium rounded-md ${
              isCalculateButtonActive
                ? "bg-yellow-500 text-white hover:bg-yellow-400"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!isCalculateButtonActive}
          >
            Calculate
          </button>
        </form>
      )}
    </>
  );
}
{
}
