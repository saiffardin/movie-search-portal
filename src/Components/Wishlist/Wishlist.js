import React, {useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {getItemFromLocalStorage} from '../../utility/localStorage';
import SingleMovie from '../SingleMovie/SingleMovie';

const Wishlist = () => {

    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        setWishlist(getItemFromLocalStorage());

    }, [])

    return (
        <div className='bgGenre w-100 py-3'>
            {
                wishlist.length === 0 && <h2 className='text-center'>Wishlist Empty</h2>
            }

            <div className="container">
                <Row>
                    {wishlist?.map((movie) => (
                        <Col className="d-flex justify-content-center" key={movie.id}>
                            <SingleMovie
                                movie={movie}
                                showDetailsBtn={true}
                                setWishlistOfParent={setWishlist}
                            />
                        </Col >
                    ))}
                </Row >
            </div>
        </div>
    );
};

export default Wishlist;