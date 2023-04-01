import React from "react";

function Input({ placeholder, type, name, onChange, value }) {
  return (
    <>
      <input
        className="w-full mt-2 bg-transparent focus:outline-none text-white border-b-2 pb-1 text-base placeholder:text-gray-100"
        placeholder={placeholder}
        type={type}
        name={name}
        key={name}
        onChange={onChange}
        value={value}
      />
    </>
  );
}

export default Input;
