import { useParams } from "react-router-dom";
import useApi from "../../Hooks/useApi";
import MovieSlide from "./MovieSlide";
import TopStars from "./TopStart";
import "react-lazy-load-image-component/src/effects/blur.css";
import Recommendation from "./Recommendation/Recommendation";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import { Helmet } from "react-helmet";
const MovieDetailsPage = () => {
  const { MovieId } = useParams();
  const apiKey = import.meta.env.VITE_apiKey;
  const movieImageUrl = `https://api.themoviedb.org/3/movie/${MovieId}/images?api_key=${apiKey}`;
  const recommendationMovieUrl = `https://api.themoviedb.org/3/movie/${MovieId}/recommendations?api_key=${apiKey}`;
  const similarMovieUrl = `https://api.themoviedb.org/3/movie/${MovieId}/similar?api_key=${apiKey}`;
  const movieUrl = `https://api.themoviedb.org/3/movie/${MovieId}?api_key=${apiKey}`;
  const creditUrl = `https://api.themoviedb.org/3/movie/${MovieId}/credits?api_key=${apiKey}`;
  const singleMovieData = useApi(movieUrl);
  const singleMovieCreditData = useApi(creditUrl);
  const movieImageUrlData = useApi(movieImageUrl);
  const recommendationsMovieData = useApi(recommendationMovieUrl);
  const similarMovieData = useApi(similarMovieUrl);

  return (
    <>
      {singleMovieData?.loading ||
      movieImageUrlData?.loading ||
      recommendationMovieUrl?.loading ||
      similarMovieData?.loading ? (
        <>
          <LoaderSpinner></LoaderSpinner>
        </>
      ) : (
        <div className="md:px-[10%] px-[5%] py-[2%]">
          <Helmet>
            <meta charSet="utf-8" />
            <title>{singleMovieData?.datas?.title} - SM Movies</title>
          </Helmet>
          <div>
            <h1 className="md:text-5xl text-2xl mt-[10px] pb-[12px] font-semibold ">
              {singleMovieData?.datas?.title}
            </h1>
            {/* Movie poster link */}
            <img
              className="aspect-video w-full md:h-[450px] h-[250px] object-cover"
              src={`https://image.tmdb.org/t/p/original${singleMovieData?.datas?.backdrop_path}`}
              alt=""
            />
          </div>
          {/* Genre */}
          <div className="flex font-semibold gap-[12px]">
            {singleMovieData?.datas?.genres?.map((genre, i) => (
              <div key={i} className="pt-[13px]">
                <h1 className="border-2 border-slate-400 p-1 rounded-md text-[12px]">
                  {genre?.name}
                </h1>
              </div>
            ))}
          </div>

          {/* Photos */}
          <>
            <h1 className="md:text-4xl text-xl py-[25px] ">Image Gallery</h1>
            {movieImageUrlData?.datas?.backdrops?.length != 0 && (
              <MovieSlide movieImageUrlData={movieImageUrlData}></MovieSlide>
            )}
          </>

          {/* Top Start */}
          <TopStars singleMovieCreditData={singleMovieCreditData}></TopStars>

          {/* Recommendation Movies */}

          {recommendationsMovieData?.datas?.results?.length != 0 && (
            <div className="">
              <h1 className="md:text-4xl text-2xl font-semibold py-[35px]">
                Recommended Movies
              </h1>
              <Recommendation
                recommendations={recommendationsMovieData}
                type="movie"
              ></Recommendation>
            </div>
          )}

          {/* Similar Movies */}

          {similarMovieData?.datas?.results?.length != 0 && (
            <div>
              <h1 className="md:text-4xl text-2xl font-semibold py-[35px]">
                Similar Movies
              </h1>
              <Recommendation
                recommendations={similarMovieData}
                type="movie"
              ></Recommendation>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MovieDetailsPage;
