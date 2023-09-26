import { useState } from "react";
import useApi from "../../../Hooks/useApi";

const TrendingNow = () => {
  const apiKey = import.meta.env.VITE_apiKey;
  const movieURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
  const tvURL = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}`;
  const [url, setUrl] = useState(`${movieURL}`);
  console.log(url);
  const fetchData = useApi(url);
  const setMovies = () => {
    setUrl(movieURL);
  };
  const setTv = () => {
    setUrl(tvURL);
  };
  console.log("fetch Data", fetchData);
  return (
    <div className="px-[10%] py-[2%]">
      <h1 className="font-semibold text-xl pb-[15px]">Trending Now</h1>
      <div className="flex gap-2">
        <button onClick={setMovies} className="btn-red">
          Movies
        </button>
        <button onClick={setTv} className="btn-black">
          TV-Shows
        </button>
      </div>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-x-[6px] gap-y-[12px] place-items-center py-[25px] overflow-hidden">
        {fetchData?.results?.map((cate) => (
          <div key={cate?.backdrop_path} className="overflow-hidden">
            <div className="overflow-hidden">
              <div className="absolute mt-1  ml-1 px-3 py-1 z-10 bg-red-300 rounded-lg">
                <h1 className="">{cate?.vote_average}</h1>
              </div>
              <div className="overflow-hidden">
                <img
                  className="relative w-full lg:h-[350px] h-[250px] object-cover object-top hover:scale-110 transition-all duration-300 ease-in cursor-pointer overflow-hidden"
                  src={`https://image.tmdb.org/t/p/original${cate?.backdrop_path}`}
                />
              </div>

              <p className="font-xl font-semibold">
                {cate?.name?.slice(0, 20)}
              </p>
              <p className="font-xl font-semibold">
                {cate?.title?.slice(0, 20)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNow;
