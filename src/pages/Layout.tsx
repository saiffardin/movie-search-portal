import { useEffect } from "react";
import Navbar from "@components/Navbar";
import useGenres from "@api/genre-list/useGenres";
import { Outlet } from "react-router";
import { IGenre } from "@api/genre-list/types";
import ScreenLoader from "@components/ScreenLoader";

export type OutletContextType = {
  genres: IGenre[];
};

const Layout = () => {
  const { genres, getGenreList, loading } = useGenres();

  useEffect(() => {
    getGenreList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <ScreenLoader fullscreen />;
  }

  return (
    <div>
      <Navbar genres={genres} />

      <Outlet context={{ genres }} />
    </div>
  );
};

export default Layout;
