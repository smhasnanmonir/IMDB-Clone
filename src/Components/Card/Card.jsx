/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import alt from "../../assets/Home/HomeCard/alter.jpg";

import { useState } from "react";
import { useEffect } from "react";
const Card = ({ cate, type }) => {
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
    <Link
      className="overflow-hidden py-4 px-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white"
      to={type == "tv" ? `/${type1}/${cate?.id}/1/1` : `/${type1}/${cate?.id}`}
    >
      <div className="overflow-hidden">
        <div className="overflow-hidden">
          {cate?.backdrop_path ? (
            <div className="w-full lg:h-[210px] h-[250px] object-cover hover:scale-110 transition-all duration-300 ease-linear cursor-pointer overflow-hidden">
              <LazyLoadImage
                effect="blur"
                src={`https://image.tmdb.org/t/p/w500/${cate?.backdrop_path}`}
                className="relative w-full lg:h-[210px] h-[250px] object-cover object-top"
              ></LazyLoadImage>
            </div>
          ) : cate?.profile_path ? (
            <div className="w-full lg:h-[210px] h-[250px] object-cover hover:scale-110 transition-all duration-300 ease-linear cursor-pointer overflow-hidden">
              <LazyLoadImage
                effect="blur"
                src={`https://image.tmdb.org/t/p/w500/${cate?.profile_path}`}
                className="relative w-full lg:h-[210px] h-[250px] object-cover object-top"
              ></LazyLoadImage>
            </div>
          ) : (
            <>
              <img
                className="relative w-full lg:h-[210px] h-[250px] object-cover object-top hover:scale-110 transition-all duration-300 ease-in cursor-pointer overflow-hidden"
                src={alt}
                alt=""
              />
            </>
          )}
        </div>
        {type == "movie" ? (
          <>
            <p className="font-xl font-semibold">{cate?.title?.slice(0, 15)}</p>
            <p className="font-xl">Rating: {cate?.vote_average?.toFixed(1)}</p>
          </>
        ) : (
          <>
            <p className="font-xl font-semibold">{cate?.name?.slice(0, 15)}</p>
            <p className="font-xl">Rating: {cate?.vote_average?.toFixed(1)}</p>
          </>
        )}
      </div>
    </Link>
  );
};

export default Card;
