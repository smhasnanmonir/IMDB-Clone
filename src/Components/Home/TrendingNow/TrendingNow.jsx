import { useState } from "react";
import useApi from "../../../Hooks/useApi";
import HomeCard from "../HomeCard/HomeCard";
import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./TrendingNow.css";
import HomeTvCard from "../HomeCard/HomeTvCard";
const TrendingNow = () => {
  const apiKey = import.meta.env.VITE_apiKey;
  const trendingMovieURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
  const trendingTvURL = `https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`;
  const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
  const trendingFetchMovieData = useApi(trendingMovieURL);
  const trendingFetchTVData = useApi(trendingTvURL);
  const topRatedFetchData = useApi(topRated);

  return (
    <div className="md:px-[10%] px-[5%] py-[2%]">
      <h1 className="font-semibold text-xl pb-[15px]">Trending Now</h1>
      <Tabs>
        <TabList>
          <Tab>Movies</Tab>
          <Tab>Tv Series</Tab>
        </TabList>

        <TabPanel>
          <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-x-[6px] gap-y-[12px] place-items-center py-[25px] overflow-hidden">
            <>
              {trendingFetchMovieData?.loading ? (
                <>
                  <LoaderSpinner></LoaderSpinner>
                </>
              ) : (
                <>
                  {trendingFetchMovieData?.datas?.results?.map((cate) => (
                    <HomeCard cate={cate} key={cate?.backdrop_path}></HomeCard>
                  ))}
                </>
              )}
            </>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-x-[6px] gap-y-[12px] place-items-center py-[25px] overflow-hidden">
            <>
              {trendingFetchTVData?.loading ? (
                <>
                  <LoaderSpinner></LoaderSpinner>
                </>
              ) : (
                <>
                  {trendingFetchTVData?.datas?.results?.map((cate) => (
                    <HomeTvCard
                      cate={cate}
                      key={cate?.backdrop_path}
                    ></HomeTvCard>
                  ))}
                </>
              )}
            </>
          </div>
        </TabPanel>
      </Tabs>

      <h1 className="font-semibold text-xl">Top Rated Movies</h1>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-x-[6px] gap-y-[12px] place-items-center py-[25px] overflow-hidden">
        <>
          {topRatedFetchData?.loading ? (
            <>
              <LoaderSpinner></LoaderSpinner>
            </>
          ) : (
            <>
              {topRatedFetchData?.datas?.results?.map((cate) => (
                <HomeCard cate={cate} key={cate?.backdrop_path}></HomeCard>
              ))}
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default TrendingNow;
