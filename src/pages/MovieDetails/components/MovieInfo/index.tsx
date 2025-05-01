import { Badge, Card } from "react-bootstrap";
import { IMovieDetails } from "@api/movie-details/types";
import MovieData from "./MovieData";

interface Props {
  movieDetails: IMovieDetails;
}

const MovieInfo = ({ movieDetails }: Props) => {
  const {
    title,
    release_date,
    original_language,
    original_title,
    overview,
    popularity,
    vote_average,
    vote_count,
    genres,
  } = movieDetails;

  return (
    <Card.Body>
      <Card.Title className="text-center">{title}</Card.Title>
      <hr />

      <MovieData title="Release Date" subtitle={release_date} />

      <MovieData title="Genre">
        {genres?.map((genre, indx) => (
          <Badge key={indx} className="mx-1" bg="secondary" pill>
            {genre.name}
          </Badge>
        ))}
      </MovieData>

      <MovieData title="Original Language" subtitle={original_language} />

      <MovieData title="Original Title" subtitle={original_title} />

      <MovieData title="Overview" subtitle={overview} />

      <MovieData title="Popularity" subtitle={popularity} />

      <MovieData title="Ratings" subtitle={vote_average} />

      <MovieData
        title="Vote Count"
        subtitle={vote_count}
        showHorizontalLine={false}
      />
    </Card.Body>
  );
};

export default MovieInfo;
