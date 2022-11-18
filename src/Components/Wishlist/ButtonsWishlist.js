/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import {addItemToLocalStorage, getItemFromLocalStorage, isItemAlreadyInLocalStorage, removeItemFromLocalStorage} from '../../utility/localStorage';

const ButtonsWishlist = (props) => {
    const {movie, setWishlistOfParent = null} = props;
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const items = getItemFromLocalStorage();
        if (items) {
            setWishlist(items);
        }
    }, [])

    const handleAddToWishlist = (movie) => {
        console.log('wished movie:', movie);
        addItemToLocalStorage(movie);
        setWishlist(prev => ([
            ...prev,
            movie
        ]))
    }

    const handleRemoveFromWishlist = (movie) => {
        console.log('remove this movie:', movie);
        removeItemFromLocalStorage(movie);
        setWishlist(prev => prev.filter(obj => obj.id !== movie.id));

        if (setWishlistOfParent) {
            console.log('%c not null', 'color:coral');
            setWishlistOfParent(prev => prev.filter(obj => obj.id !== movie.id))
        }
    }

    return (
        isItemAlreadyInLocalStorage(movie)
            ? (
                // remove from wishlist button
                <div className="d-grid gap-2 p-1">
                    <Button variant="outline-danger" onClick={() => handleRemoveFromWishlist(movie)}>
                        Remove from wishlist
                    </Button>
                </div>
            )
            : (
                // add to wishlist button
                <div className="d-grid gap-2 p-1">
                    <Button variant="outline-success" onClick={() => handleAddToWishlist(movie)}>
                        Add to wishlist
                    </Button>
                </div>
            )

    );
};

export default ButtonsWishlist;