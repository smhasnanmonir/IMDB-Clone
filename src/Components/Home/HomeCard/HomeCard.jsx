import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import alt from "../../../assets/Home/HomeCard/alter.jpg";
import { useState } from "react";
import { useEffect } from "react";
const HomeCard = ({ cate, type }) => {
  const [type1, setType1] = useState(type);
  useEffect(() => {
    if (type == "movie") {
      setType1("movieDetails");
    } else if (type == "tv") {
      setType1("tvDetails");
    } else {
      setType1("actorDetails");
    }
  }, [type]);
  return (
    <Link to={`/${type1}/${cate?.id}`}>
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
          ) : cate?.profile_path ? (
            <div className="hover:scale-110 transition-all duration-300 ease-linear cursor-pointer overflow-hidden">
              <LazyLoadImage
                effect="blur"
                src={`https://image.tmdb.org/t/p/w500${cate?.profile_path}`}
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
        {type == "movie" ? (
          <>
            <p className="font-xl font-semibold">{cate?.title?.slice(0, 15)}</p>
          </>
        ) : (
          <>
            <p className="font-xl font-semibold">{cate?.name?.slice(0, 15)}</p>
          </>
        )}
      </div>
    </Link>
  );
};

export default HomeCard;
