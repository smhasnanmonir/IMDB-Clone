import { useContext } from "react";
import TrendingNow from "../TrendingNow/TrendingNow";
import HomeSlide from "./HomeSlide/HomeSlide";
import { AuthContext } from "../../Provider/AuthProvider";

const Home = () => {
  const data = useContext(AuthContext);
  console.log(data);
  return (
    <div>
      <HomeSlide></HomeSlide>
      <TrendingNow></TrendingNow>
    </div>
  );
};

export default Home;
