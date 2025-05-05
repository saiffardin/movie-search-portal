import { Col, Row } from "react-bootstrap";
import useCtxWishlist from "@hooks/useCtxWishlist";
import ScreenLoader from "@components/ScreenLoader";
import SingleMovie from "@components/SingleMovie";

const Wishlist = () => {
  const { loading, wishlist } = useCtxWishlist();

  if (loading) {
    return <ScreenLoader />;
  }

  return (
    <div className="bgGenre w-100 py-3 ">
      {wishlist.length === 0 && <h2 className="text-center">Wishlist Empty</h2>}

      <div className="container">
        <Row className="">
          {wishlist?.map((movie) => (
            <Col className="d-flex justify-content-center" key={movie.id}>
              <SingleMovie movie={movie} showDetailsBtn />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Wishlist;
