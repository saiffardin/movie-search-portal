import React from 'react';
import {Button} from 'react-bootstrap';
import {addItemToLocalStorage, isItemAlreadyInLocalStorage} from '../../utility/localStorage';

const ButtonsWishlist = (props) => {
    const {movie} = props;

    const handleAddToWishlist = (movie) => {
        console.log('wished movie:', movie);
        addItemToLocalStorage(movie);
    }

    const handleRemoveFromWishlist = (movie) => {
        console.log('remove this movie:', movie);
        // addItemToLocalStorage(movie);
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