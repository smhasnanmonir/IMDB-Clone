import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
const MovieDeatilSlide = ({ movieImageUrlData }) => {
  return (
    <div className="">
      {movieImageUrlData?.loading ? (
        <>
          <LoaderSpinner></LoaderSpinner>
        </>
      ) : (
        <>
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
            {movieImageUrlData?.datas?.backdrops
              ?.slice(2, 7)
              .map((backdrop) => (
                <SwiperSlide key={backdrop?.file_path}>
                  <LazyLoadImage
                    effect="blur"
                    src={`https://image.tmdb.org/t/p/w500${backdrop?.file_path}`}
                    className="w-full object-cover"
                  ></LazyLoadImage>
                </SwiperSlide>
              ))}
          </Swiper>
        </>
      )}
    </div>
  );
};

export default MovieDeatilSlide;
