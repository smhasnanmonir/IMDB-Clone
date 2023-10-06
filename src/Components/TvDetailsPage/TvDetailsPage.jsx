import { Link, useParams } from "react-router-dom";
import useApi from "../../Hooks/useApi";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import alt2 from "../../assets/MovieDetails/alt2.jpg";
import MovieDeatilSlide from "../MovieDetailsPage/MovieDeatilSlide";
import TopStart from "../MovieDetailsPage/TopStart";
import Recommendation from "../MovieDetailsPage/Recommendation/Recommendation";

const TvDetailsPage = () => {
  const { TvId } = useParams();

  const apiKey = import.meta.env.VITE_apiKey;

  const tvDetailsUrl = `https://api.themoviedb.org/3/tv/${TvId}?api_key=${apiKey}`;
  const singleTvData = useApi(tvDetailsUrl);

  const singleTvPhotoUrl = `https://api.themoviedb.org/3/tv/${TvId}/images?api_key=${apiKey}`;
  const singleTvPhotoData = useApi(singleTvPhotoUrl);
  const tvReViewUrl = `https://api.themoviedb.org/3/tv/${TvId}/reviews?api_key=${apiKey}`;
  const tvReViewData = useApi(tvReViewUrl);
  const singleTvCastsUrl = `https://api.themoviedb.org/3/tv/${TvId}/credits?api_key=${apiKey}`;
  const singleTvCastsData = useApi(singleTvCastsUrl);

  const recommendationTvUrl = `https://api.themoviedb.org/3/tv/${TvId}/recommendations?api_key=${apiKey}`;
  const similarTvUrl = `https://api.themoviedb.org/3/tv/${TvId}/recommendations?api_key=${apiKey}`;
  const recommendationTvData = useApi(recommendationTvUrl);
  const similarTvData = useApi(similarTvUrl);
  console.log(similarTvData);

  return (
    <div className="md:w-3/4 mx-auto pb-[45px] px-[5%]">
      <>
        {singleTvData?.loading ? (
          <>
            <LoaderSpinner></LoaderSpinner>
          </>
        ) : (
          <>
            <h1 className="md:text-4xl text-2xl py-[25px]">
              {singleTvData?.datas?.original_name}
            </h1>
            {singleTvData?.datas?.backdrop_path != null ? (
              <>
                <LazyLoadImage
                  effect="blur"
                  src={`https://image.tmdb.org/t/p/original${singleTvData?.datas?.backdrop_path}`}
                ></LazyLoadImage>
              </>
            ) : (
              <>
                <LazyLoadImage effect="blur" src={alt2}></LazyLoadImage>
              </>
            )}
          </>
        )}
      </>
      <div className="md:flex gap-3">
        <div className="shadow-sm shadow-orange-500 md:w-1/2 py-[10px] px-[15px] mt-[15px]">
          <h1 className="text-xl py-[5px] pt-[10px] font-semibold">
            Seasons: {singleTvData?.datas?.number_of_seasons}
          </h1>
          <h1 className="text-xl py-[9px] font-semibold">
            Episodes: {singleTvData?.datas?.number_of_episodes}
          </h1>
          <Link
            to={`/tvSeasonDetails/${TvId}`}
            className="btn-red inline-block mb-[13px]"
          >
            Details
          </Link>
        </div>
        <div className=" md:w-1/2 shadow-sm shadow-red-500 text-center py-[10px] px-[15px] mt-[15px] grid place-content-center">
          <h1 className="text-xl font-semibold ">Rating</h1>
          <h1 className="text-4xl font-bold">
            {singleTvData?.datas?.vote_average?.toFixed(2)}/10
          </h1>
        </div>
      </div>
      <>
        <h1 className="py-[25px] md:text-4xl text-xl font-semibold ">Photos</h1>
        <div className="">
          <MovieDeatilSlide
            movieImageUrlData={singleTvPhotoData}
          ></MovieDeatilSlide>
        </div>
      </>
      <>
        <TopStart singleMovieCreditData={singleTvCastsData}></TopStart>
      </>
      <>
        <h1 className="py-[25px] md:text-4xl text-xl font-semibold">
          Similar Tv Shows
        </h1>
        <Recommendation recommendations={recommendationTvData}></Recommendation>
      </>
    </div>
  );
};

export default TvDetailsPage;
