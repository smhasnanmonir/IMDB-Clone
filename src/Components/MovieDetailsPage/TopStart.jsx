import { LazyLoadImage } from "react-lazy-load-image-component";
import castAvatar from "../../assets/Cast/user.png";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
const TopStars = ({ singleMovieCreditData }) => {
  return (
    <>
      <h1 className="md:text-4xl text-xl font-semibold py-[25px]">Top Casts</h1>
      <>
        <div className="">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-[12px] ">
            {singleMovieCreditData?.datas?.cast
              ?.slice(0, 15)
              .map((castMember, i) => (
                <Link
                  to={`/actorDetails/${castMember?.id}`}
                  key={i}
                  className="flex gap-2 shadow-sm shadow-blue-400 overflow-hidden bg-white"
                >
                  {castMember?.profile_path ? (
                    <>
                      <LazyLoadImage
                        effect="blur"
                        wrapperProps={{
                          style: {
                            transitionDuration: "1s",
                            scale: "1.05",
                          },
                        }}
                        src={`https://image.tmdb.org/t/p/w500${castMember?.profile_path}`}
                        className="w-[65px] h-full object-cover"
                      ></LazyLoadImage>
                    </>
                  ) : (
                    <>
                      <LazyLoadImage
                        wrapperClassName="w-[65px] hover-img h-full object-cover"
                        src={castAvatar}
                        className="w-[65px] hover-img h-full object-cover"
                      ></LazyLoadImage>
                    </>
                  )}
                  <div className="flex flex-col justify-center">
                    <h1 className="font-semibold text-[18px]">
                      {castMember?.name}
                    </h1>
                    <h1>{castMember?.character}</h1>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </>
    </>
  );
};

export default TopStars;
