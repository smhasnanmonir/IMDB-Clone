import { ThreeDots } from "react-loader-spinner";
import HomeCard from "../../Home/HomeCard/HomeCard";

const Recommendation = ({ recommendationsMovieData }) => {
  console.log(recommendationsMovieData);
  return (
    <div>
      {recommendationsMovieData?.loading ? (
        <>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </>
      ) : (
        <>
          <div className="grid md:grid-cols-6 grid-cols-2 gap-[8px]">
            {recommendationsMovieData?.datas?.results?.map((result, i) => (
              <HomeCard key={i} cate={result}></HomeCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Recommendation;
