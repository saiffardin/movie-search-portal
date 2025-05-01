import useMovieDetails from "@api/movie-details/useMovieDetails";
import ScreenLoader from "@components/ScreenLoader";
import usePathParams from "@hooks/usePathParams";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import Poster from "./components/Poster";
import MovieInfo from "./components/MovieInfo";
import ButtonsWishlist from "@components/ButtonsWishlist";

const MovieDetails = () => {
  const { movieId } = usePathParams();
  const { movieDetails, getMovieDetails, loading } = useMovieDetails();

  useEffect(() => {
    if (movieId) {
      getMovieDetails(Number(movieId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  if (loading) {
    return <ScreenLoader />;
  }

  if (!movieDetails) {
    return <h1>No Data Found !!</h1>;
  }

  return (
    <div className="m-1 m-md-2 my-lg-5 overflow-hidden">
      <Card style={{ width: "", border: "none" }}>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
            <Poster posterUrl={movieDetails?.poster_path} />
          </div>

          <div className="col-md-6 col-xl-4 right-side-details">
            <MovieInfo movieDetails={movieDetails} />

            <ButtonsWishlist movie={movieDetails} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MovieDetails;
