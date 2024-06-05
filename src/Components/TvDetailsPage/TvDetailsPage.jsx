import { useNavigate, useParams } from "react-router-dom";
import useApi from "../../Hooks/useApi";
import "./TvDetailsPage.css";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import MovieSlide from "../MovieDetailsPage/MovieSlide";
import TopStars from "../MovieDetailsPage/TopStart";
import Recommendation from "../MovieDetailsPage/Recommendation/Recommendation";
import "react-tabs/style/react-tabs.css";
import { Helmet } from "react-helmet";

const TvDetailsPage = () => {
  const { TvId, season, episode } = useParams();
  const navigate = useNavigate();
  const apiKey = import.meta.env.VITE_apiKey;
  const tvDetailsUrl = `https://api.themoviedb.org/3/tv/${TvId}?api_key=${apiKey}`;
  const singleTvData = useApi(tvDetailsUrl);
  const singleTvPhotoUrl = `https://api.themoviedb.org/3/tv/${TvId}/images?api_key=${apiKey}`;
  const singleTvPhotoData = useApi(singleTvPhotoUrl);
  const singleTvCastsUrl = `https://api.themoviedb.org/3/tv/${TvId}/credits?api_key=${apiKey}`;
  const singleTvCastsData = useApi(singleTvCastsUrl);
  const recommendationTvUrl = `https://api.themoviedb.org/3/tv/${TvId}/recommendations?api_key=${apiKey}`;
  const similarTvUrl = `https://api.themoviedb.org/3/tv/${TvId}/similar?api_key=${apiKey}`;
  const recommendationTvData = useApi(recommendationTvUrl);
  const similarTvData = useApi(similarTvUrl);
  const EpisodeDetailsUrl = `https://api.themoviedb.org/3/tv/${TvId}/season/1?api_key=${apiKey}`;
  const EpisodeDetails = useApi(EpisodeDetailsUrl);

  return (
    <>
      {singleTvData?.loading ||
      singleTvCastsData?.loading ||
      singleTvPhotoData?.loading ||
      recommendationTvData?.loading ||
      similarTvData?.loading ||
      EpisodeDetails?.loading ? (
        <>
          <LoaderSpinner></LoaderSpinner>
        </>
      ) : (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{singleTvData?.datas?.original_name} - SM Movies</title>
          </Helmet>
          <div className="md:px-[10%] px-[5%]">
            <div>
              <h1 className="md:text-4xl text-2xl py-[25px]">
                {singleTvData?.datas?.original_name}
              </h1>
              <div className="w-full md:h-[450px] h-[275px] aspect-video">
                <img
                  className="aspect-video w-full md:h-[450px] h-[250px] object-cover block object-top"
                  src={`https://image.tmdb.org/t/p/original${singleTvData?.datas?.backdrop_path}`}
                  alt=""
                />
              </div>
            </div>

            <>
              <h1 className="py-[25px] md:text-4xl text-xl font-semibold ">
                Photos
              </h1>
              <div className="">
                <MovieSlide movieImageUrlData={singleTvPhotoData}></MovieSlide>
              </div>
            </>
            <>
              <TopStars singleMovieCreditData={singleTvCastsData}></TopStars>
            </>
            <>
              {recommendationTvData?.datas?.results?.length != 0 && (
                <>
                  <h1 className="py-[25px] md:text-4xl text-xl font-semibold">
                    Similar Tv Shows
                  </h1>
                  <Recommendation
                    type="tv"
                    recommendations={similarTvData}
                  ></Recommendation>
                </>
              )}
              {recommendationTvData?.datas?.results?.length != 0 && (
                <>
                  <h1 className="py-[25px] md:text-4xl text-xl font-semibold">
                    Recommended Tv Shows
                  </h1>
                  <Recommendation
                    type="tv"
                    recommendations={recommendationTvData}
                  ></Recommendation>
                </>
              )}
            </>
          </div>
        </>
      )}
    </>
  );
};

export default TvDetailsPage;
