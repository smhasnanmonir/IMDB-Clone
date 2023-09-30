import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Components/Home/Home/Home";
import MovieDetailsPage from "../Components/MovieDetailsPage/MovieDetailsPage";
import ActorDetailsPage from "../Components/ActorDetailsPage/ActorDetailsPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/movieDetails/:MovieId",
        element: <MovieDetailsPage></MovieDetailsPage>,
      },
      {
        path: "/actorDetails/:ActorId",
        element: <ActorDetailsPage></ActorDetailsPage>,
      },
    ],
  },
]);

export default router;
