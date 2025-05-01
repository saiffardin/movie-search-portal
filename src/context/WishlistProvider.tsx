import { type ReactNode, useEffect, useState } from "react";
import {
  addToWishlistLS,
  deleteFromWishlistLS,
  getWishlistLS,
} from "@utils/local-storage";
import { IWishlistMovie, WishlistContext } from "./WishlistContext";

interface Props {
  children: ReactNode;
}

const WishlistProvider = ({ children }: Props) => {
  const [loading, setLoading] = useState(false);
  const [wishlist, setWishlist] = useState<IWishlistMovie[]>([]);

  useEffect(() => {
    getWishlist();
  }, []);

  const getWishlist = () => {
    setLoading(true);

    try {
      const result = getWishlistLS();
      setWishlist(result);
    } catch (error: unknown) {
      console.error("Error fetching data:", error);
      setWishlist([]);
    } finally {
      setLoading(false);
    }
  };

  const addToWishlist = (item: IWishlistMovie) => {
    setLoading(true);

    try {
      const newData = addToWishlistLS(item);
      setWishlist(newData);
    } catch (error: unknown) {
      console.error("Error while adding data to local-storage:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteFromWishlist = (item: IWishlistMovie) => {
    setLoading(true);

    try {
      const updatedData = deleteFromWishlistLS(item);
      setWishlist(updatedData);
    } catch (error: unknown) {
      console.error("Error while deleting data to local-storage:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <WishlistContext.Provider
      value={{ loading, wishlist, addToWishlist, deleteFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
