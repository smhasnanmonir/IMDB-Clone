import Card from "../../Card/Card";

const Recommendation = ({ recommendations, type }) => {
  return (
    <>
      {recommendations?.datas?.results != 0 && (
        <div className="grid md:grid-cols-6 grid-cols-2 gap-[8px]">
          {type == "movie" ? (
            <>
              {recommendations?.datas?.results?.map((result, i) => (
                <Card type={type} key={i} cate={result}></Card>
              ))}
            </>
          ) : (
            <>
              {recommendations?.datas?.results?.map((result, i) => (
                <Card type={type} key={i} cate={result}></Card>
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Recommendation;
