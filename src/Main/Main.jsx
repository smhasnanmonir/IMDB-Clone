import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../Components/Headers/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default Main;
