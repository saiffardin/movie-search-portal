import { IMovie } from "@api/types";
import { createContext } from "react";
import { IGenre } from "@api/genre-list/types";

export interface IWishlistMovie extends IMovie {
  genres: IGenre[];
}

export type IWishlistCtx = {
  loading: boolean;
  wishlist: IWishlistMovie[];
  addToWishlist: (item: IWishlistMovie) => void;
  deleteFromWishlist: (item: IWishlistMovie) => void;
};

export const WishlistContext = createContext<IWishlistCtx | null>(null);
