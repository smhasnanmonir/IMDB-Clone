import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div className="flex justify-between py-[10px] md:px-[15%] px-[3%] sticky top-0 z-50 bg-white bg-opacity-50 backdrop-blur-md">
        <div className="flex gap-3 items-center">
          <Link to="/">
            <img
              className="w-[65px]"
              src="https://iili.io/JJgBY9R.png"
              alt="Logo"
            />
          </Link>
          <h1 className="text-xl font-semibold md:block hidden">SM Movies</h1>
        </div>
        <div className="flex items-center justify-end md:gap-5 gap-2">
          <input
            onChange={(e) => setInputValue(e.target.value)}
            className="block md:px-[35px] md:w-full w-1/2 px-[10px] py-[10px] bg-pink-300"
            type="text"
            placeholder="Search"
          />
          <Link to={`search/${inputValue}`} className="btn-red rounded-none">
            Search
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
