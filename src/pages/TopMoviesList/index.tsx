import useFilter from "./useFilter";
import useTopMovies from "./useTopMovies";
import { Col, Row } from "react-bootstrap";
import SortingDD from "./components/SortingDD";
import SingleMovie from "@components/SingleMovie";
import ScreenLoader from "@components/ScreenLoader";

const TopMoviesList = () => {
  const { topMovies, setTopMovies, loading } = useTopMovies();
  const { filter, handleSelectFilter } = useFilter({ topMovies, setTopMovies });

  if (loading) {
    return <ScreenLoader />;
  }

  return (
    <div className={`bgGenre w-100 py-3`}>
      <div className="container">
        <h1 className={`text-center `}>Top {topMovies?.genreName} Movies</h1>

        <SortingDD filter={filter} handleSelectFilter={handleSelectFilter} />

        <Row>
          {topMovies?.movies?.map((movie) => (
            <Col className="d-flex justify-content-center" key={movie.id}>
              <SingleMovie movie={movie} showDetailsBtn={true} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default TopMoviesList;
