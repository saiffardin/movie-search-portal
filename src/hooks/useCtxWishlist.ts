import { useContext } from "react";
import { IWishlistCtx, WishlistContext } from "@context/WishlistContext";

const useCtxWishlist = (): IWishlistCtx => {
  const ctxValues = useContext(WishlistContext) as IWishlistCtx;

  return ctxValues;
};

export default useCtxWishlist;
