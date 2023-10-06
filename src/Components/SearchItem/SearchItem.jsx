import { useParams } from "react-router-dom";
import useApi from "../../Hooks/useApi";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import SearchMovieData from "./SearchMovieData/SearchMovieData";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const SearchItem = () => {
  const { SearchId } = useParams();
  const apiKey = import.meta.env.VITE_apiKey;
  const searchMovieURL = `https://api.themoviedb.org/3/search/movie?query=${SearchId}&api_key=${apiKey}`;
  const searchTvURL = `https://api.themoviedb.org/3/search/tv?query=${SearchId}&api_key=${apiKey}`;
  const searchActorURL = `https://api.themoviedb.org/3/search/person?query=${SearchId}&api_key=${apiKey}`;
  const searchMovieData = useApi(searchMovieURL);
  const searchTvData = useApi(searchTvURL);
  const searchActorData = useApi(searchActorURL);
  console.log("actor", searchActorData);
  const filteredMovieSearchData = searchMovieData?.datas?.results?.filter(
    (search) => search?.backdrop_path != null
  );
  const filteredTvSearchData = searchTvData?.datas?.results?.filter(
    (search) => search?.backdrop_path != null
  );
  const filteredActorSearchData = searchActorData?.datas?.results?.filter(
    (search) => search?.profile_path != null
  );
  return (
    <div className="md:w-3/4 md:px-0 px-[5%] mx-auto">
      <Tabs>
        <TabList>
          <Tab>Movie</Tab>
          <Tab>Tv Series</Tab>
          <Tab>Actors</Tab>
        </TabList>

        <TabPanel>
          {searchMovieData?.datas?.loading ? (
            <>
              <LoaderSpinner></LoaderSpinner>
            </>
          ) : (
            <>
              <SearchMovieData
                searchData={filteredMovieSearchData}
                type="movie"
              ></SearchMovieData>
            </>
          )}
        </TabPanel>
        <TabPanel>
          {searchTvData?.datas?.loading ? (
            <>
              <LoaderSpinner></LoaderSpinner>
            </>
          ) : (
            <>
              <SearchMovieData
                searchData={filteredTvSearchData}
                type="tv"
              ></SearchMovieData>
            </>
          )}
        </TabPanel>
        <TabPanel>
          {searchActorData?.datas?.loading ? (
            <>
              <LoaderSpinner></LoaderSpinner>
            </>
          ) : (
            <>
              <SearchMovieData
                searchData={filteredActorSearchData}
                type="person"
              ></SearchMovieData>
            </>
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SearchItem;
