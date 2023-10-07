import HomeCard from "../../Home/HomeCard/HomeCard";
import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";

const Recommendation = ({ recommendations, type }) => {
  return (
    <div>
      {recommendations?.loading ? (
        <>
          <LoaderSpinner></LoaderSpinner>
        </>
      ) : (
        <>
          {recommendations?.datas?.results != 0 && (
            <div className="grid md:grid-cols-6 grid-cols-2 gap-[8px]">
              {type == "movie" ? (
                <>
                  {recommendations?.datas?.results?.map((result, i) => (
                    <HomeCard type={type} key={i} cate={result}></HomeCard>
                  ))}
                </>
              ) : (
                <>
                  {recommendations?.datas?.results?.map((result, i) => (
                    <HomeCard type={type} key={i} cate={result}></HomeCard>
                  ))}
                </>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Recommendation;
