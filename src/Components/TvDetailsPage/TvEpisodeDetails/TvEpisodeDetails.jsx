import { Link, useParams } from "react-router-dom";
import useApi from "../../../Hooks/useApi";
import "./TvEpisodeDetails.css";
import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const TvEpisodeDetails = () => {
  const { TvId, SeasonNumber } = useParams();
  const apiKey = import.meta.env.VITE_apiKey;
  const EpisodeDetailsUrl = `https://api.themoviedb.org/3/tv/${TvId}/season/${SeasonNumber}?api_key=${apiKey}`;
  const EpisodeDetails = useApi(EpisodeDetailsUrl);
  const tvDetailsUrl = `https://api.themoviedb.org/3/tv/${TvId}?api_key=${apiKey}`;
  const singleTvData = useApi(tvDetailsUrl);
  return (
    <>
      {EpisodeDetails?.loading ? (
        <>
          <LoaderSpinner></LoaderSpinner>
        </>
      ) : (
        <div className="md:w-3/4 mx-auto md:px-0 px-[5%] pb-[25px] pt-[10px]">
          <h1 className="md:text-3xl text-2xl font-semibold py-[15px]">
            Episodes of <span className="text-xl">Season {SeasonNumber}</span>
          </h1>
          <div className="mb-[15px]">
            <div className="dropdown inline-block relative">
              <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1">Seasons</span>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                </svg>
              </button>
              <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                {singleTvData?.datas?.seasons?.[0]?.season_number == 0 ? (
                  <>
                    {singleTvData?.datas?.seasons?.slice(1)?.map((season) => (
                      <li
                        className="bg-gray-200 hover:bg-gray-400 py-4 px-4 block whitespace-no-wrap"
                        key={season?.name}
                      >
                        <Link
                          to={`/tvSeasonDetails/${TvId}/${season?.season_number}`}
                        >
                          Season {season?.season_number}
                        </Link>
                      </li>
                    ))}
                  </>
                ) : (
                  <>
                    {singleTvData?.datas?.seasons?.map((season) => (
                      <li
                        className="bg-gray-200 hover:bg-gray-400 py-4 px-4 block whitespace-no-wrap"
                        key={season?.name}
                      >
                        <Link
                          to={`/tvSeasonDetails/${TvId}/${season?.season_number}`}
                        >
                          Season {season?.season_number}
                        </Link>
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 place-content-center">
            {EpisodeDetails?.datas?.episodes?.map((episode, i) => (
              <div
                key={i}
                className="py-4 px-3  shadow-sm shadow-red-300 hover:shadow-red-600 hover:shadow-md transition-all ease-linear duration-200 cursor-pointer"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${episode?.still_path}`}
                  alt=""
                />
                <div>
                  <h1>Episode: {episode?.episode_number}</h1>
                  <p>{episode?.name}</p>
                  <p>{episode?.overview}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TvEpisodeDetails;
