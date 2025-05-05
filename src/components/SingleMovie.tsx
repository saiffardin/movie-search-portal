import { PATHS } from "@constants/paths";
import { getMoviePosterUrl } from "@utils/getMoviePosterUrl";
import { Badge, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import ButtonsWishlist from "./ButtonsWishlist";
import { IMovie } from "@api/types";
import { IGenre } from "@api/genre-list/types";

interface ISingleMovie extends IMovie {
  genres: IGenre[];
}

interface Props {
  movie: ISingleMovie;
  showDetailsBtn?: boolean;
}

const SingleMovie = (props: Props) => {
  const { movie, showDetailsBtn } = props;

  const navigate = useNavigate();

  const handleMovieDetailsClick = () => {
    navigate(PATHS.MOVIE_ID.NAVIGATE(movie.id));
  };

  return (
    <div className="d-flex justify-content-center my-3">
      <Card style={{ width: "15rem" }} className="m-2">
        <Card.Img
          variant="top"
          src={getMoviePosterUrl(movie.poster_path)}
          className=""
        />
        <Card.Body>
          <Card.Title className="text-center">{movie.title}</Card.Title>
          <hr />

          <div>
            {/* Release Date */}
            <Card.Subtitle className="my-2">
              Release Date:{" "}
              <span className=" fw-light">{movie.release_date}</span>
            </Card.Subtitle>
            <hr />

            {/* Genre */}
            <Card.Subtitle className="">
              Genre:
              <span className=" fw-light">
                {movie?.genres?.map((item) => {
                  return (
                    <Badge
                      pill
                      bg="secondary"
                      className="my-1 mx-1"
                      key={movie.id + item.id}
                    >
                      {item.name}
                    </Badge>
                  );
                })}
              </span>
            </Card.Subtitle>
            <hr />

            {/* Rating */}
            <Card.Subtitle className="my-2">
              Ratings: <span className=" fw-light">{movie.vote_average}</span>
            </Card.Subtitle>
          </div>
        </Card.Body>

        {/* details button */}
        {showDetailsBtn && (
          <div className="d-grid gap-2 p-1">
            <Button variant="outline-dark" onClick={handleMovieDetailsClick}>
              Show Movie Details
            </Button>
          </div>
        )}

        {/* wishlist button */}
        <ButtonsWishlist movie={movie} />
      </Card>
    </div>
  );
};

export default SingleMovie;
