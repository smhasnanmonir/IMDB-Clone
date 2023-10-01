import HomeCard from "../../Home/HomeCard/HomeCard";

const SearchMovieData = ({ movieData }) => {
  return (
    <div>
      <HomeCard cate={movieData}></HomeCard>
    </div>
  );
};

export default SearchMovieData;
