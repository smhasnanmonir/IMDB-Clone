import { Link, useParams } from "react-router-dom";
import useApi from "../../../Hooks/useApi";
import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const TvSeasonDetails = () => {
  const { TvId } = useParams();

  const apiKey = import.meta.env.VITE_apiKey;

  const tvDetailsUrl = `https://api.themoviedb.org/3/tv/${TvId}?api_key=${apiKey}`;
  const singleTvData = useApi(tvDetailsUrl);
  const tvEpisodeDetailsUrl = `https://api.themoviedb.org/3/tv/${TvId}/season/{season_number}?api_key=${apiKey}`;
  console.log(singleTvData);
  return (
    <div className="md:w-3/4 mx-auto py-[25px] px-[5%]">
      <h1 className="md:text-3xl text-2xl py-[25px]">
        <span className="font-semibold">{singleTvData?.datas?.name}</span>{" "}
        <span className="md:text-xl text-xs">season details</span>
      </h1>
      {singleTvData?.loading ? (
        <>
          <LoaderSpinner></LoaderSpinner>
        </>
      ) : (
        <>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-3 place-items-center">
            {singleTvData?.datas?.seasons?.[0]?.season_number == 0 ? (
              <>
                {singleTvData?.datas?.seasons?.slice(1)?.map((season, i) => (
                  <div
                    key={i}
                    className="relative shadow-sm shadow-yellow-200 max-w-fit"
                  >
                    <LazyLoadImage
                      className="w-[350px] h-[250px] object-cover "
                      src={`https://image.tmdb.org/t/p/w500${season?.poster_path}`}
                    ></LazyLoadImage>

                    <div className="cursor-pointer hover:scale-125 transition-all duration-300 ease-linear absolute flex items-center justify-center flex-col inset-0 text-white bg-blue-600 bg-opacity-50 backdrop-blur-sm p-4 w-[150px] h-[175px] mx-auto my-auto rounded-md">
                      <h1 className="text-xl font-semibold">
                        Season {season?.season_number}
                      </h1>
                      <h1 className="text-xl font-semibold">
                        Episodes {season?.episode_count}
                      </h1>
                      <Link
                        to={`/tvSeasonDetails/${TvId}/${season?.season_number}`}
                        className="bg-red-400 p-1 rounded-md block max-w-fit mt-[8px]"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {singleTvData?.datas?.seasons?.map((season, i) => (
                  <div
                    key={i}
                    className="relative shadow-sm shadow-yellow-200 max-w-fit"
                  >
                    <LazyLoadImage
                      className="w-[350px] h-[250px] object-cover "
                      src={`https://image.tmdb.org/t/p/w500${season?.poster_path}`}
                    ></LazyLoadImage>

                    <div className="cursor-pointer hover:scale-125 transition-all duration-300 ease-linear absolute flex items-center justify-center flex-col inset-0 text-white bg-blue-600 bg-opacity-50 backdrop-blur-sm p-4 w-[150px] h-[175px] mx-auto my-auto rounded-md">
                      <h1 className="text-xl font-semibold">
                        Season {season?.season_number}
                      </h1>
                      <h1 className="text-xl font-semibold">
                        Episodes {season?.episode_count}
                      </h1>
                      <Link
                        to={`/tvSeasonDetails/${TvId}/${season?.season_number}`}
                        className="bg-red-400 p-1 rounded-md block max-w-fit mt-[8px]"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default TvSeasonDetails;
