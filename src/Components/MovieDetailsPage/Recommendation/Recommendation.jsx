import HomeCard from "../../Home/HomeCard/HomeCard";
import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";

const Recommendation = ({ recommendationsMovieData }) => {
  return (
    <div>
      {recommendationsMovieData?.loading ? (
        <>
          <LoaderSpinner></LoaderSpinner>
        </>
      ) : (
        <>
          {recommendationsMovieData?.datas?.results != 0 && (
            <div className="grid md:grid-cols-6 grid-cols-2 gap-[8px]">
              {recommendationsMovieData?.datas?.results?.map((result, i) => (
                <HomeCard key={i} cate={result}></HomeCard>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Recommendation;
