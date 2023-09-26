import { Swiper, SwiperSlide } from "swiper/react";
import useApi from "../../../../Hooks/useApi";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import star from "../../../../assets/Home/HomeSlider/star.png";
import { Link } from "react-router-dom";
const HomeSlide = () => {
  const apiKey = import.meta.env.VITE_apiKey;
  const nowPlaying = useApi(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
  );
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper "
      >
        {nowPlaying?.results?.map((result, i) => (
          <SwiperSlide className="" key={i}>
            <img
              className="w-full md:max-h-[550px] object-cover object-top brightness-50 relative"
              src={`https://image.tmdb.org/t/p/original${result?.backdrop_path}`}
              alt=""
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center px-[10%] text-white space-y-[10px]">
              <div className="flex gap-1 items-center">
                <img className="w-[25px]" src={star} alt="Rating" />
                <p>{result?.vote_average}</p>
                <p>|</p>
                <p>Release Date: {result?.release_date}</p>
              </div>
              <h1 className="text-3xl font-bold">{result?.title}</h1>

              <p className="md:w-1/2 md:block hidden font-semibold">
                {result?.overview}
              </p>
              <div className="flex gap-3">
                <Link to={`/movieDetails/${result?.id}`} className="btn-red">
                  Details
                </Link>
                <Link className="btn-black">Add to List</Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlide;
