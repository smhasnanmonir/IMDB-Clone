import { useParams } from "react-router-dom";
import ShowMoreText from "react-show-more-text";
import useApi from "../../Hooks/useApi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Card from "../Card/Card";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import { Helmet } from "react-helmet";

const ActorDetailsPage = () => {
  const { ActorId } = useParams();
  const apiKey = import.meta.env.VITE_apiKey;
  const actorURL = `https://api.themoviedb.org/3/person/${ActorId}?api_key=${apiKey}`;
  const actorData = useApi(actorURL);
  console.log(actorData);
  const actorImageURL = `https://api.themoviedb.org/3/person/${ActorId}/images?api_key=${apiKey}`;
  const actorImageData = useApi(actorImageURL);
  const actorMovieURL = `https://api.themoviedb.org/3/person/${ActorId}/movie_credits?api_key=${apiKey}`;
  const actorMovieCredit = useApi(actorMovieURL);
  const actorSeriesURL = `https://api.themoviedb.org/3/person/${ActorId}/tv_credits?api_key=${apiKey}`;
  const actorSeriesCredit = useApi(actorSeriesURL);
  return (
    <>
      {actorData?.loading ||
      actorImageData?.loading ||
      actorMovieCredit?.loading ||
      actorSeriesCredit?.loading ? (
        <>
          <LoaderSpinner></LoaderSpinner>
        </>
      ) : (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{actorData?.datas?.name} - SM Movies</title>
          </Helmet>
          <div className="md:w-3/4 mx-auto md:px-0 px-[2%] my-[10px] ">
            <div className=" bg-red-100 px-6 md:rounded-md  pb-[20px]">
              <h1 className="py-[20px] text-2xl font-semibold">
                {actorData?.datas?.name}
              </h1>
              <div className="grid md:grid-cols-2 md:gap-3">
                <div className="w-full h-full object-cover">
                  <img
                    className="w-full h-full object-cover pb-[7px] rounded-md rounded-br-md rounded-bl-md"
                    src={`https://image.tmdb.org/t/p/original${actorData?.datas?.profile_path}`}
                    alt=""
                  />
                </div>
                <div className="md:py-0 py-[10px]">
                  {actorImageData?.datas?.profiles?.length != 0 && (
                    <>
                      <div className="grid grid-cols-2 gap-2">
                        {actorImageData?.datas?.profiles
                          ?.slice(1, 7)
                          .map((profile, i) => (
                            <div key={i} className="overflow-hidden">
                              <div className="hover-img">
                                <LazyLoadImage
                                  effect="blur"
                                  className="w-full h-full object-cover rounded-md"
                                  src={`https://image.tmdb.org/t/p/original${profile?.file_path}`}
                                ></LazyLoadImage>
                              </div>
                            </div>
                          ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {actorMovieCredit?.datas?.cast?.length != 0 && (
              <>
                <h1 className="md:text-3xl text-xl font-semibold md:py-[25px] py-[10px]">
                  Movies
                </h1>
                <>
                  <div className="grid md:grid-cols-5 grid-cols-2 gap-2">
                    {actorMovieCredit?.datas?.cast?.map((movie, i) => (
                      <Card key={i} type="movie" cate={movie}></Card>
                    ))}
                  </div>
                </>
              </>
            )}
            {actorSeriesCredit?.datas?.cast?.length != 0 && (
              <>
                <h1 className="md:text-3xl text-xl font-semibold md:py-[25px] py-[10px]">
                  TV and Web Series
                </h1>
                <>
                  <div className="grid md:grid-cols-5 grid-cols-2 gap-2">
                    {actorSeriesCredit?.datas?.cast?.map((series, i) => (
                      <Card key={i} type="tv" cate={series}></Card>
                    ))}
                  </div>
                </>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default ActorDetailsPage;
