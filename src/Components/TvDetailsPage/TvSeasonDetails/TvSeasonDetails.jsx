import { useParams } from "react-router-dom";
import useApi from "../../../Hooks/useApi";

const TvSeasonDetails = () => {
  const { TvId } = useParams();

  const apiKey = import.meta.env.VITE_apiKey;

  const tvDetailsUrl = `https://api.themoviedb.org/3/tv/${TvId}?api_key=${apiKey}`;
  const singleTvData = useApi(tvDetailsUrl);
  console.log(singleTvData);
  return (
    <div className="md:w-3/4 mx-auto py-[25px] px-[5%]">
      <h1>{TvId}</h1>
    </div>
  );
};

export default TvSeasonDetails;
