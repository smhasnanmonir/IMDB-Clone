import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const [hide, SetHide] = useState(true);
  const navigate = useNavigate();

  const handleHide = () => {
    SetHide(!hide);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      SetHide(true);
      event.preventDefault();
      navigate(`/search/${inputValue}`);
    }
  };

  const searchInput = (
    <div className="flex items-center justify-end md:gap-5 gap-2">
      <input
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="block md:px-[35px] md:w-full px-[10px] py-[6px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md"
        type="text"
        placeholder="Search"
      />
      <Link
        onClick={handleHide}
        to={`search/${inputValue}`}
        className="btn-red rounded-md block px-[10px] py-[6px]"
      >
        Search
      </Link>
    </div>
  );

  return (
    <>
      <div className="flex justify-between md:px-[15%] px-[3%] sticky top-0 z-50 bg-white bg-opacity-50 backdrop-blur-md">
        <div className="flex gap-3 items-center">
          <Link to="/">
            <img
              className="w-[65px]"
              src="https://i.ibb.co/nkRjRXc/JJgBY9R.png"
              alt="Logo"
            />
          </Link>
          <h1 className="text-xl font-semibold">SM Movies</h1>
        </div>
        <div className="md:grid justify-center hidden">{searchInput}</div>
        <div className="md:hidden grid place-content-center">
          <img
            onClick={handleHide}
            className="max-w-[35px]"
            src="https://i.ibb.co/Jt1p2jF/search.png"
            alt="Search Button"
          />
        </div>
        <div
          className={`fixed bg-white border border-gray-300 p-4 rounded-lg shadow-lg z-10 mt-[75px] mr-2 md:hidden ${
            hide
              ? " opacity-0 scale-0 transition-all duration-200 ease-linear"
              : "opacity-100 scale-100 transition-all duration-200 ease-linear"
          }`}
        >
          {searchInput}
        </div>
      </div>
    </>
  );
};

export default Header;
