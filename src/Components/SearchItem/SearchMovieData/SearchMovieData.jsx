import { useParams } from "react-router-dom";
import HomeCard from "../../Home/HomeCard/HomeCard";

const SearchMovieData = ({ searchData, type }) => {
  const { SearchId } = useParams();
  console.log(searchData);

  return (
    <div>
      {searchData?.loading ? (
        <>
          <LoaderSpinner></LoaderSpinner>
        </>
      ) : (
        <>
          {searchData?.length != 0 ? (
            <>
              <h1 className="font-semibold md:text-3xl text-2xl py-[25px]">
                Search result of {SearchId}
              </h1>
              <div className="grid md:grid-cols-6 grid-cols-2 gap-2">
                {searchData?.map((result, i) => (
                  <HomeCard type={type} key={i} cate={result}></HomeCard>
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

export default SearchMovieData;
