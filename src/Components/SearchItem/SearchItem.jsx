import { useParams } from "react-router-dom";
import useApi from "../../Hooks/useApi";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import SearchMovieData from "./SearchMovieData/SearchMovieData";

const SearchItem = () => {
  const { SearchId } = useParams();
  const apiKey = import.meta.env.VITE_apiKey;
  const searchURL = `https://api.themoviedb.org/3/search/movie?query=${SearchId}&api_key=${apiKey}`;
  const searchData = useApi(searchURL);
  const filteredSearchData = searchData?.datas?.results?.filter(
    (search) => search?.backdrop_path != null
  );

  return (
    <div className="md:w-3/4 md:px-0 px-[5%] mx-auto">
      {searchData?.loading ? (
        <>
          <LoaderSpinner></LoaderSpinner>
        </>
      ) : (
        <>
          {searchData?.datas?.results != 0 ? (
            <>
              <h1 className="font-semibold md:text-3xl text-2xl py-[25px]">
                Search result of {SearchId}
              </h1>
              <div className="grid md:grid-cols-6 grid-cols-2 gap-2">
                {filteredSearchData.map((result, i) => (
                  <SearchMovieData key={i} movieData={result}></SearchMovieData>
                ))}
              </div>
            </>
          ) : (
            <>
              <h1 className="font-semibold md:text-3xl text-2xl py-[25px]">
                No Search result found of {SearchId}
              </h1>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default SearchItem;
