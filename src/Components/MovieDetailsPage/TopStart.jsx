import castAvatar from "../../assets/Cast/user.png";
const TopStart = ({ singleMovieCreditData }) => {
  return (
    <div>
      <h1 className="text-4xl font-semibold py-[25px]">Top Casts</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-[12px] ">
        {singleMovieCreditData?.cast?.slice(0, 15).map((castMember, i) => (
          <div
            key={i}
            className="flex gap-2 shadow-sm shadow-blue-400 overflow-hidden"
          >
            {castMember?.profile_path ? (
              <>
                <img
                  className="w-[65px] hover-img"
                  src={`https://image.tmdb.org/t/p/w500/${castMember?.profile_path}`}
                  alt=""
                />
              </>
            ) : (
              <>
                <img
                  className="object-cover w-[65px] hover-img"
                  src={castAvatar}
                  alt=""
                />
              </>
            )}
            <div className="flex flex-col justify-center">
              <h1 className="font-semibold text-[18px]">{castMember?.name}</h1>
              <h1>{castMember?.character}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopStart;
