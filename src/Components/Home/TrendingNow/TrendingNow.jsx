import useApi from "../../../Hooks/useApi";
import Card from "../../Card/Card";
import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./TrendingNow.css";
const TrendingNow = () => {
  const apiKey = import.meta.env.VITE_apiKey;
  const trendingMovieURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
  const trendingTvURL = `https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`;
  const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
  const trendingFetchMovieData = useApi(trendingMovieURL);
  const trendingFetchTVData = useApi(trendingTvURL);
  const topRatedFetchData = useApi(topRated);

  return (
    <div className="md:px-[10%] px-[2%]">
      <h1 className="font-semibold text-xl mt-[10px] py-[10px] ml-2">
        Trending Now
      </h1>
      <Tabs className="">
        <TabList className="ml-2 mb-2">
          <Tab>Movies</Tab>
          <Tab>Tv Series</Tab>
        </TabList>

        <TabPanel>
          <div className="px-2 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-[6px] gap-y-[12px] place-items-center py-[10px] overflow-hidden">
            <>
              {trendingFetchMovieData?.loading ? (
                <>
                  <LoaderSpinner></LoaderSpinner>
                </>
              ) : (
                <>
                  {trendingFetchMovieData?.datas?.results?.map((cate) => (
                    <Card
                      cate={cate}
                      type="movie"
                      key={cate?.backdrop_path}
                    ></Card>
                  ))}
                </>
              )}
            </>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="p-2 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-[6px] gap-y-[12px] place-items-center  overflow-hidden">
            <>
              {trendingFetchTVData?.loading ? (
                <>
                  <LoaderSpinner></LoaderSpinner>
                </>
              ) : (
                <>
                  {trendingFetchTVData?.datas?.results?.map((cate) => (
                    <Card
                      cate={cate}
                      type="tv"
                      key={cate?.backdrop_path}
                    ></Card>
                  ))}
                </>
              )}
            </>
          </div>
        </TabPanel>
      </Tabs>

      <h1 className="p-2 font-semibold text-xl">Top Rated Movies</h1>
      <div className="px-2 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-[6px] gap-y-[12px] place-items-center py-[10px] overflow-hidden">
        <>
          {topRatedFetchData?.loading ? (
            <>
              <LoaderSpinner></LoaderSpinner>
            </>
          ) : (
            <>
              {topRatedFetchData?.datas?.results?.map((cate) => (
                <Card cate={cate} type="movie" key={cate?.backdrop_path}></Card>
              ))}
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default TrendingNow;
