import { useEffect } from "react";
import classNames from "classnames";
import { Button } from "react-bootstrap";
import { PATHS } from "@constants/paths";
import { useNavigate } from "react-router";
import { SwiperSlide } from "swiper/react";
import { BG_COLOR } from "@constants/bgColor";
import { IGenre } from "@api/genre-list/types";
import SingleSwiperMovie from "./SingleSwiperMovie";
import ScreenLoader from "@components/ScreenLoader";
import CarouselSwiper from "@components/CarouselSwiper";
import useMoviesByGenre from "@api/movies-by-genre/useMoviesByGenre";

interface Props {
  genre: IGenre;
  divBg: string;
}

const ShowMovies = ({ genre, divBg }: Props) => {
  const navigate = useNavigate();
  const { moviesByGenre, getMoviesByGenre, loading } = useMoviesByGenre();

  const handleViewMoreClick = () => {
    navigate(PATHS.GENRE_ID.NAVIGATE(genre.id));
  };

  useEffect(() => {
    if (genre.id) {
      getMoviesByGenre(genre.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genre]);

  if (loading) {
    return <ScreenLoader />;
  }

  return (
    <div
      className={classNames("w-100 py-3", divBg, {
        "text-white": divBg !== BG_COLOR.GREY,
      })}
    >
      <div className="container">
        <h1 className="text-center pt-3">{genre?.name}</h1>

        <CarouselSwiper>
          {moviesByGenre?.map((movie, indx) => (
            <SwiperSlide>
              <SingleSwiperMovie
                key={indx}
                movie={movie}
                showDetailsBtn={true}
              />
            </SwiperSlide>
          ))}
        </CarouselSwiper>

        {/* view all button */}
        <div className="text-center my-2 my-md-4">
          <Button variant="danger" size="lg" onClick={handleViewMoreClick}>
            View More {genre.name} Movies
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShowMovies;
