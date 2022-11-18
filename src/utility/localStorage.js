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
    return JSON.parse(localStorage.getItem('wishlist'));
}
