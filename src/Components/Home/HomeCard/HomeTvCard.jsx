import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import alt from "../../../assets/Home/HomeCard/alter.jpg";

const HomeTvCard = ({ cate }) => {
  return (
    <Link to={`/tvDetails/${cate?.id}`}>
      <div className="overflow-hidden">
        <div className="absolute mt-1  ml-1 px-3 py-1 z-10 bg-red-300 rounded-lg">
          <h1 className="">{cate?.vote_average?.toFixed(2)}</h1>
        </div>
        <div className="overflow-hidden">
          {cate?.backdrop_path ? (
            <div className="hover:scale-110 transition-all duration-300 ease-linear cursor-pointer overflow-hidden">
              <LazyLoadImage
                effect="blur"
                src={`https://image.tmdb.org/t/p/w500${cate?.backdrop_path}`}
                className="relative w-full lg:h-[350px] h-[250px] object-cover object-top"
              ></LazyLoadImage>
            </div>
          ) : (
            <>
              <LazyLoadImage
                effect="blur"
                src={alt}
                className="relative w-full lg:h-[350px] h-[250px] object-cover object-top hover:scale-110 transition-all duration-300 ease-in cursor-pointer overflow-hidden"
              ></LazyLoadImage>
            </>
          )}
        </div>

        <p className="font-xl font-semibold">{cate?.name?.slice(0, 15)}</p>
      </div>
    </Link>
  );
};

export default HomeTvCard;
