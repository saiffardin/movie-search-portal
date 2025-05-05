import { PATHS } from "@constants/paths";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import ButtonsWishlist from "@components/ButtonsWishlist";
import { getMoviePosterUrl } from "@utils/getMoviePosterUrl";
import { IMovieByGenre } from "@api/movies-by-genre/types";
import useCtxOutlet from "@hooks/useCtxOutlet";
import { getGenreArray } from "@utils/getGenreArray";

interface Props {
  movie: IMovieByGenre;
  showDetailsBtn?: boolean;
}

const SingleSwiperMovie = (props: Props) => {
  const { movie, showDetailsBtn } = props;
  const navigate = useNavigate();

  const { genres } = useCtxOutlet();

  const { genre_ids: genreIds } = movie;

  const handleMovieDetailsClick = () => {
    navigate(PATHS.MOVIE_ID.NAVIGATE(movie.id));
  };

  return (
    <div className="my-5">
      <Card style={{ width: "18rem" }} className="m-2 ms-md-4">
        <Card.Img variant="top" src={getMoviePosterUrl(movie.poster_path)} />

        <Card.Body>
          <Card.Title className="text-center">{movie.title}</Card.Title>
        </Card.Body>

        {showDetailsBtn && (
          <div className="d-grid gap-2 p-1">
            <Button variant="outline-dark" onClick={handleMovieDetailsClick}>
              Show Movie Details
            </Button>
          </div>
        )}

        <ButtonsWishlist
          movie={{
            ...movie,
            genres: getGenreArray({ genreIds, genres }),
          }}
        />
      </Card>
    </div>
  );
};

export default SingleSwiperMovie;
