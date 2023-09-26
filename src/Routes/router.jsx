import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Components/Home/Home/Home";
import MovieDetailsPage from "../Components/MovieDetailsPage/MovieDetailsPage";
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
    ],
  },
]);

export default router;
