import { getMoviePosterUrl } from "@utils/getMoviePosterUrl";

interface Props {
  posterUrl: string;
}

const Poster = ({ posterUrl }: Props) => {
  return (
    <img
      alt="poster_img"
      src={getMoviePosterUrl(posterUrl)}
      className="img-fluid"
      style={{ width: "400px" }}
    />
  );
};

export default Poster;
