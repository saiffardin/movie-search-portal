import React, {useEffect, useState} from 'react';

const Wishlist = () => {

    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {

        const items = JSON.parse(localStorage.getItem('wishlist'));
        console.log('%cget from wishlist:', 'color:cyan', items);
        if (items) {
            setWishlist(items);
        }

    }, [])

    return (
        <div>
            <h1>Wishlist Page</h1>
            {
                wishlist.length === 0 && <h4>Empty Wishlist</h4>
            }
        </div>
    );
};

export default Wishlist;