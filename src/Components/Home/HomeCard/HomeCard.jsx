const HomeCard = ({ cate }) => {
  return (
    <div className="overflow-hidden">
      <div className="overflow-hidden">
        <div className="absolute mt-1  ml-1 px-3 py-1 z-10 bg-red-300 rounded-lg">
          <h1 className="">{cate?.vote_average}</h1>
        </div>
        <div className="overflow-hidden">
          <img
            className="relative w-full lg:h-[350px] h-[250px] object-cover object-top hover:scale-110 transition-all duration-300 ease-in cursor-pointer overflow-hidden"
            src={`https://image.tmdb.org/t/p/original${cate?.backdrop_path}`}
          />
        </div>

        <p className="font-xl font-semibold">{cate?.name?.slice(0, 20)}</p>
        <p className="font-xl font-semibold">{cate?.title?.slice(0, 20)}</p>
      </div>
    </div>
  );
};

export default HomeCard;
