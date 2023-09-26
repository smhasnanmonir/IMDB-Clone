import { useState } from "react";
import useApi from "../../../Hooks/useApi";
import HomeCard from "../HomeCard/HomeCard";

const TrendingNow = () => {
  const apiKey = import.meta.env.VITE_apiKey;
  const trendingMovieURL = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`;
  const trendingTvURL = `https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`;
  const onAirTv = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}`;
  const [url, setUrl] = useState(`${trendingMovieURL}`);
  const trendingFetchData = useApi(url);
  const onAirTvFetchData = useApi(onAirTv);
  const setMovies = () => {
    setUrl(trendingMovieURL);
  };
  const setTv = () => {
    setUrl(trendingTvURL);
  };

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
        {trendingFetchData?.results?.map((cate) => (
          <HomeCard cate={cate} key={cate?.backdrop_path}></HomeCard>
        ))}
      </div>

      <h1 className="font-semibold text-xl">On air TV Series</h1>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-x-[6px] gap-y-[12px] place-items-center py-[25px] overflow-hidden">
        {onAirTvFetchData?.results?.map((cate) => (
          <HomeCard cate={cate} key={cate?.backdrop_path}></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default TrendingNow;
