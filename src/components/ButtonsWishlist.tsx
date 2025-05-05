import { Button } from "react-bootstrap";
import useCtxWishlist from "@hooks/useCtxWishlist";
import { IWishlistMovie } from "@context/WishlistContext";

interface Props {
  movie: IWishlistMovie;
}

const ButtonsWishlist = (props: Props) => {
  const { movie } = props;

  const { loading, wishlist, addToWishlist, deleteFromWishlist } =
    useCtxWishlist();

  const isMovieAlreadyInWishlist = wishlist.some(
    (item) => item.id === movie.id
  );

  const handleAddToWishlist = () => {
    addToWishlist(movie);
  };

  const handleRemoveFromWishlist = () => {
    deleteFromWishlist(movie);
  };

  const renderRemoveBtn = (
    <Button
      variant="outline-danger"
      onClick={handleRemoveFromWishlist}
      disabled={loading}
    >
      Remove from wishlist
    </Button>
  );

  const renderAddBtn = (
    <Button
      variant="outline-success"
      onClick={handleAddToWishlist}
      disabled={loading}
    >
      Add to wishlist
    </Button>
  );

  return (
    <div className="d-grid gap-2 p-1">
      {isMovieAlreadyInWishlist ? renderRemoveBtn : renderAddBtn}
    </div>
  );
};

export default ButtonsWishlist;
