import { TailSpin } from "react-loader-spinner";

const LoaderSpinner = () => {
  return (
    <div className="grid place-items-center">
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default LoaderSpinner;
