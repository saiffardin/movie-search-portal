import { IWishlistMovie } from "@context/WishlistContext";

const LS_KEY_WISHLIST = "wishlist";

export const getWishlistLS = (): IWishlistMovie[] => {
  const data = localStorage?.getItem(LS_KEY_WISHLIST) ?? "[]";
  return JSON.parse(data);
};

export const addToWishlistLS = (newItem: IWishlistMovie): IWishlistMovie[] => {
  const newWishlistArr = [...getWishlistLS(), newItem];

  localStorage.setItem(LS_KEY_WISHLIST, JSON.stringify(newWishlistArr));

  return newWishlistArr;
};

export const deleteFromWishlistLS = (
  removeItem: IWishlistMovie
): IWishlistMovie[] => {
  const currWishlist = getWishlistLS();

  const updatedWishlist = currWishlist.filter(
    (obj) => obj.id !== removeItem.id
  );

  localStorage.setItem(LS_KEY_WISHLIST, JSON.stringify(updatedWishlist));

  return updatedWishlist;
};
