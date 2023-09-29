import { useParams } from "react-router-dom";
import useApi from "../../Hooks/useApi";

import MovieDeatilSlide from "./MovieDeatilSlide";
import TopStart from "./TopStart";

const MovieDetailsPage = () => {
  const { MovieId } = useParams();
  const apiKey = import.meta.env.VITE_apiKey;
  const movieUrl = `https://api.themoviedb.org/3/movie/${MovieId}?api_key=${apiKey}`;
  const singleMovieData = useApi(movieUrl);
  const creditUrl = `https://api.themoviedb.org/3/movie/${MovieId}/credits?api_key=${apiKey}`;
  const singleMovieCreditData = useApi(creditUrl);
  const director = singleMovieCreditData?.crew?.filter(
    (directorName) => directorName?.job == "Director"
  );
  const movieImageUrl = `https://api.themoviedb.org/3/movie/${MovieId}/images?api_key=${apiKey}`;
  const movieImageUrlData = useApi(movieImageUrl);
  console.log(movieImageUrlData);

  return (
    <div className="w-3/4 mx-auto my-0 md:px-0 px-[5%] py-[3%]">
      <h1 className="md:text-5xl text-3xl pb-[12px] font-semibold">
        {singleMovieData?.title}
      </h1>
      <img
        className="aspect-video  object-cover object-top"
        src={`https://image.tmdb.org/t/p/original/${singleMovieData?.backdrop_path}`}
        alt={singleMovieData?.title}
      />
      {/* Genre */}
      <div className="flex font-semibold gap-[12px]">
        {singleMovieData?.genres?.map((genre, i) => (
          <div key={i} className="pt-[13px]">
            <h1 className="border-2 border-slate-400 p-1 rounded-md text-[12px]">
              {genre?.name}
            </h1>
          </div>
        ))}
      </div>

      {/* Photos */}
      <MovieDeatilSlide
        movieImageUrlData={movieImageUrlData}
      ></MovieDeatilSlide>

      {/* Top Start */}
      <TopStart singleMovieCreditData={singleMovieCreditData}></TopStart>
    </div>
  );
};

export default MovieDetailsPage;
