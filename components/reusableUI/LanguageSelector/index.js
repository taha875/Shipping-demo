import React from "react";

function index({ languages, defaultLanguage, onSelect }) {
  const [selectedLanguage, setSelectedLanguage] =
    React.useState(defaultLanguage);
  const [toggle, setToggle] = React.useState(true);

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.textContent;
    setSelectedLanguage(newLanguage);
    onSelect(newLanguage);
    setToggle(!toggle);
  };
  return (
    <div>
      <div className="relative">
        <button
          onClick={() => setToggle(!toggle)}
          className="bg-[#805ad5] w-[120px] text-white justify-between py-2 flex items-center text-sm px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          {selectedLanguage}
          <svg
            className="w-4 h-4 inline-block ml-2 -mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 12.586L6.707 9.293a1 1 0 00-1.414 1.414l4.242 4.243a1 1 0 001.414 0l4.242-4.243a1 1 0 00-1.414-1.414L10 12.586z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <ul
          className={`absolute mt-0.5 z-20 w-full bg-white py-2 rounded-md shadow-md ${
            toggle ? `hidden` : `block`
          }  `}
        >
          {languages.map((language) => (
            <li key={language}>
              <a
                href="#"
                onClick={handleLanguageChange}
                className={`block px-4 py-2 hover:bg-[#805ad5] hover:text-white text-sm ${
                  selectedLanguage === language.toLowerCase()
                    ? "bg-[#805ad5] text-white"
                    : ""
                }`}
              >
                {language}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default index;
