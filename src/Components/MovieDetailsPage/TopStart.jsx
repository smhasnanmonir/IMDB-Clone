import { LazyLoadImage } from "react-lazy-load-image-component";
import castAvatar from "../../assets/Cast/user.png";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ThreeDots } from "react-loader-spinner";
const TopStart = ({ singleMovieCreditData }) => {
  return (
    <>
      <h1 className="md:text-4xl text-xl font-semibold py-[25px]">Top Casts</h1>
      {singleMovieCreditData?.loading ? (
        <>
          <div>
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
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-[12px] ">
              {singleMovieCreditData?.datas?.cast
                ?.slice(0, 15)
                .map((castMember, i) => (
                  <div
                    key={i}
                    className="flex gap-2 shadow-sm shadow-blue-400 overflow-hidden"
                  >
                    {castMember?.profile_path ? (
                      <>
                        <LazyLoadImage
                          src={`https://image.tmdb.org/t/p/w500/${castMember?.profile_path}`}
                          className="w-[65px] hover-img"
                        ></LazyLoadImage>
                      </>
                    ) : (
                      <>
                        <LazyLoadImage
                          src={castAvatar}
                          className="w-[65px] hover-img"
                        ></LazyLoadImage>
                      </>
                    )}
                    <div className="flex flex-col justify-center">
                      <h1 className="font-semibold text-[18px]">
                        {castMember?.name}
                      </h1>
                      <h1>{castMember?.character}</h1>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TopStart;
