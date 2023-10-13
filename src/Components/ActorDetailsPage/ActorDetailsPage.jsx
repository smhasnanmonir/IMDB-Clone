import { useParams } from "react-router-dom";
import useApi from "../../Hooks/useApi";
import HomeCard from "../Home/HomeCard/HomeCard";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import "react-lazy-load-image-component/src/effects/blur.css";

const ActorDetailsPage = () => {
  const { ActorId } = useParams();
  const apiKey = import.meta.env.VITE_apiKey;
  const actorURL = `https://api.themoviedb.org/3/person/${ActorId}?api_key=${apiKey}`;
  const actorData = useApi(actorURL);
  const actorImageURL = `https://api.themoviedb.org/3/person/${ActorId}/images?api_key=${apiKey}`;
  const actorImageData = useApi(actorImageURL);
  const actorMovieURL = `https://api.themoviedb.org/3/person/${ActorId}/movie_credits?api_key=${apiKey}`;
  const actorMovieCredit = useApi(actorMovieURL);
  const actorSeriesURL = `https://api.themoviedb.org/3/person/${ActorId}/tv_credits?api_key=${apiKey}`;
  const actorSeriesCredit = useApi(actorSeriesURL);
  return (
    <div className="md:w-3/4 mx-auto md:px-0 px-[5%] py-[3%]">
      {actorData?.loading ? (
        <>
          <LoaderSpinner></LoaderSpinner>
        </>
      ) : (
        <>
          <div className="grid place-items-center">
            <h1 className="md:text-4xl font-semibold pb-[25px]">
              {actorData?.datas?.name}
            </h1>
            <img
              className="w-[250px] pb-[7px]"
              src={`https://image.tmdb.org/t/p/original${actorData?.datas?.profile_path}`}
              alt=""
            />
            {actorData?.datas?.birthday ? (
              <>
                {" "}
                <h1 className="text-lg font-semibold">
                  Birth Day: {actorData?.datas?.birthday}
                </h1>
              </>
            ) : (
              <>
                <h1 className="text-lg font-semibold">
                  Birth Day: No Data Found
                </h1>
              </>
            )}

            {actorData?.datas?.place_of_birth ? (
              <>
                <h1 className="text-lg font-semibold">
                  Birth Place: {actorData?.datas?.place_of_birth}
                </h1>
              </>
            ) : (
              <>
                <h1 className="text-lg font-semibold">
                  Birth Place: No Data Found
                </h1>
              </>
            )}
          </div>
        </>
      )}

      {actorImageData?.datas?.profiles?.length != 0 && (
        <>
          <h1 className="md:text-3xl text-xl font-semibold py-[25px]">
            Image Gallery
          </h1>
          {actorImageData?.loading ? (
            <>
              <LoaderSpinner></LoaderSpinner>
            </>
          ) : (
            <>
              <div className="grid md:grid-cols-5 grid-cols-3 gap-2">
                {actorImageData?.datas?.profiles
                  ?.slice(0, 9)
                  .map((profile, i) => (
                    <div key={i} className="overflow-hidden">
                      <div className="hover-img">
                        <LazyLoadImage
                          effect="blur"
                          className="w-[350px] h-full"
                          src={`https://image.tmdb.org/t/p/original${profile?.file_path}`}
                        ></LazyLoadImage>
                      </div>
                    </div>
                  ))}
              </div>
            </>
          )}
        </>
      )}

      {actorMovieCredit?.datas?.cast?.length != 0 && (
        <>
          <h1 className="md:text-3xl text-xl font-semibold py-[25px]">
            Movies
          </h1>
          {actorMovieCredit?.loading ? (
            <>
              <LoaderSpinner></LoaderSpinner>
            </>
          ) : (
            <>
              <div className="grid md:grid-cols-5 grid-cols-2 gap-2">
                {actorMovieCredit?.datas?.cast?.map((movie, i) => (
                  <HomeCard key={i} type="movie" cate={movie}></HomeCard>
                ))}
              </div>
            </>
          )}
        </>
      )}
      {actorSeriesCredit?.datas?.cast?.length != 0 && (
        <>
          <h1 className="md:text-3xl text-xl font-semibold py-[25px]">
            TV and Web Series
          </h1>
          {actorSeriesCredit?.loading ? (
            <>
              <LoaderSpinner></LoaderSpinner>
            </>
          ) : (
            <>
              <div className="grid md:grid-cols-5 grid-cols-2 gap-2">
                {actorSeriesCredit?.datas?.cast?.map((series, i) => (
                  <HomeCard key={i} type="tv" cate={series}></HomeCard>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ActorDetailsPage;
