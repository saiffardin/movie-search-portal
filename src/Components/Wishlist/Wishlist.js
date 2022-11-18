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
            <h1>Wishlist Page</h1>
            {
                wishlist.length === 0 && <h4>Empty Wishlist</h4>
            }

            <div className="container">
                <Row>
                    {wishlist.map((movie) => (
                        <Col className="d-flex justify-content-center" key={movie.id}>
                            <SingleMovie
                                movie={movie}
                                showDetailsBtn={true}

                            />
                        </Col >
                    ))}
                </Row >
            </div>
        </div>
    );
};

export default Wishlist;