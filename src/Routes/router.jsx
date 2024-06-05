import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Components/Home/Home/Home";
import MovieDetailsPage from "../Components/MovieDetailsPage/MovieDetailsPage";
import ActorDetailsPage from "../Components/ActorDetailsPage/ActorDetailsPage";
import SearchItem from "../Components/SearchItem/SearchItem";
import TvDetailsPage from "../Components/TvDetailsPage/TvDetailsPage";
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
        path: "/tvDetails/:TvId/:season/:episode",
        element: <TvDetailsPage></TvDetailsPage>,
      },
      {
        path: "/actorDetails/:ActorId",
        element: <ActorDetailsPage></ActorDetailsPage>,
      },
      {
        path: "/search/:SearchId",
        element: <SearchItem></SearchItem>,
      },
    ],
  },
]);

export default router;
