import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
const MovieDeatilSlide = ({ movieImageUrlData }) => {
  return (
    <div className="">
      <h1 className="text-4xl py-[25px]">Image Gallery</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full"
      >
        {movieImageUrlData?.backdrops?.slice(5, 50).map((backdrop) => (
          <SwiperSlide key={backdrop?.file_path}>
            <img
              className="w-full object-cover"
              src={`https://image.tmdb.org/t/p/w500${backdrop?.file_path}`}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieDeatilSlide;
