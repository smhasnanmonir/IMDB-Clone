import { useParams } from "react-router-dom";
import useApi from "../../Hooks/useApi";

import MovieDeatilSlide from "./MovieDeatilSlide";
import TopStart from "./TopStart";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Recommendation from "./Recommendation/Recommendation";
import alt2 from "../../assets/MovieDetails/alt2.jpg";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
const MovieDetailsPage = () => {
  const { MovieId } = useParams();
  const apiKey = import.meta.env.VITE_apiKey;
  const movieImageUrl = `https://api.themoviedb.org/3/movie/${MovieId}/images?api_key=${apiKey}`;
  const recommendationMovieUrl = `https://api.themoviedb.org/3/movie/${MovieId}/recommendations?api_key=${apiKey}`;
  const similarMovieUrl = `https://api.themoviedb.org/3/movie/${MovieId}/similar?api_key=${apiKey}`;
  const movieUrl = `https://api.themoviedb.org/3/movie/${MovieId}?api_key=${apiKey}`;
  const creditUrl = `https://api.themoviedb.org/3/movie/${MovieId}/credits?api_key=${apiKey}`;
  const singleMovieData = useApi(movieUrl);
  console.log("singleMovieData", singleMovieData);
  const singleMovieCreditData = useApi(creditUrl);
  const movieImageUrlData = useApi(movieImageUrl);
  const recommendationsMovieData = useApi(recommendationMovieUrl);
  const similarMovieData = useApi(similarMovieUrl);

  return (
    <div className="md:w-3/4 mx-auto my-0 md:px-0 px-[5%] py-[2%]">
      {singleMovieData?.loading ? (
        <>
          <LoaderSpinner></LoaderSpinner>
        </>
      ) : (
        <>
          <h1 className="md:text-5xl text-3xl pb-[12px] font-semibold">
            {singleMovieData?.datas?.title}
          </h1>
          {singleMovieData?.datas?.backdrop_path ? (
            <>
              <LazyLoadImage
                effect="blur"
                src={`https://image.tmdb.org/t/p/original/${singleMovieData?.datas?.backdrop_path}`}
              ></LazyLoadImage>
            </>
          ) : (
            <>
              <LazyLoadImage effect="blur" src={alt2}></LazyLoadImage>
            </>
          )}
        </>
      )}
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
      {movieImageUrlData?.datas?.backdrops?.length != 0 && (
        <MovieDeatilSlide
          movieImageUrlData={movieImageUrlData}
        ></MovieDeatilSlide>
      )}

      {/* Top Start */}
      <TopStart singleMovieCreditData={singleMovieCreditData}></TopStart>

      {/* Recommendation Movies */}

      {recommendationsMovieData?.datas?.results?.length != 0 && (
        <div className="">
          <h1 className="md:text-4xl text-2xl font-semibold py-[35px]">
            Recommended Movies
          </h1>
          <Recommendation
            recommendationsMovieData={recommendationsMovieData}
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
            recommendationsMovieData={similarMovieData}
          ></Recommendation>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
