/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";

import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";
import Card from "../../Card/Card";

const SearchData = ({ searchData, type }) => {
  const { SearchId } = useParams();

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
                Search result of{" "}
                <span className="text-green-400">{SearchId}</span> in {type}{" "}
                category
              </h1>
              <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2">
                {searchData?.map((result, i) => (
                  <Card type={type} key={i} cate={result}></Card>
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

export default SearchData;
