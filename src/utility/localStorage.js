export const addItemToLocalStorage = (item) => {
    let wishlistArr = getItemFromLocalStorage();

    if (wishlistArr) {
        console.log('not NULL - curr wishlistArr:', wishlistArr);
        console.log('-------');

        wishlistArr = [...wishlistArr, item];
        console.log('%cNew - added wishlistArr:', 'color:yellow', wishlistArr);
        localStorage.setItem('wishlist', JSON.stringify(wishlistArr));
    }

    // when local storage is empty
    else {
        console.log('%cNULL - wishlistArr:', 'color:red', wishlistArr);
        localStorage.setItem('wishlist', JSON.stringify([item]));
    }
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
