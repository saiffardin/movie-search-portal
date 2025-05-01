import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "@pages/Home";
import Layout from "@pages/Layout";
import { PATHS } from "@constants/paths";
import Wishlist from "@pages/Wishlist";
import MovieDetails from "@pages/MovieDetails";
import TopMoviesList from "@pages/TopMoviesList";

const routes = [
  {
    path: PATHS.HOME,
    element: <Layout />,

    children: [
      { index: true, element: <Home /> },
      { path: PATHS.MOVIES, element: <Home /> },
      { path: PATHS.MOVIE_ID.SEGMENTS, element: <MovieDetails /> },
      { path: PATHS.GENRE_ID.SEGMENTS, element: <TopMoviesList /> },
      { path: PATHS.WISHLIST, element: <Wishlist /> },
    ],
  },
];

const AppRouter = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default AppRouter;
