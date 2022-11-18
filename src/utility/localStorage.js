export const addItemToLocalStorage = (item) => {
    let wishlistArr = getItemFromLocalStorage();
    wishlistArr = [...wishlistArr, item];

    localStorage.setItem('wishlist', JSON.stringify(wishlistArr));
}

export const getItemFromLocalStorage = () => {
    let wishlistArr = JSON.parse(localStorage.getItem('wishlist'));
    return wishlistArr || [];
}

export const isItemAlreadyInLocalStorage = (newItem) => {
    const itemsInWishlist = getItemFromLocalStorage();

    const resultArr = itemsInWishlist.filter((obj => obj.id === newItem.id));
    return resultArr.length === 0 ? false : true;
}

export const removeItemFromLocalStorage = (removeItem) => {
    const itemsInWishlist = getItemFromLocalStorage();

    const updatedWishlist = itemsInWishlist.filter((obj => obj.id !== removeItem.id));

    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
}
