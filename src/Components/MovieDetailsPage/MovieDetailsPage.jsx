import { useParams } from "react-router-dom";
import useApi from "../../Hooks/useApi";

const MovieDetailsPage = () => {
  const { MovieId } = useParams();
  const apiKey = import.meta.env.VITE_apiKey;
  const movieUrl = `https://api.themoviedb.org/3/movie/${MovieId}?api_key=${apiKey}`;
  const singleMovieData = useApi(movieUrl);
  console.log(singleMovieData);
  return (
    <div>
      <img
        className="aspect-video md:max-h-[550px] w-full object-cover object-top"
        src={`https://image.tmdb.org/t/p/original/${singleMovieData?.backdrop_path}`}
        alt=""
      />
    </div>
  );
};

export default MovieDetailsPage;
