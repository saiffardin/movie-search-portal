
import React from 'react';
import {Button} from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import SwiperCore, {Autoplay, EffectCoverflow, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SingleSwiperMovie from '../SingleSwiperMovie/SingleSwiperMovie';
SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

const ShowMovies = (props) => {
    const {divBg, sectionTitle, movies, genreId} = props;
    const history = useHistory();

    const handleViewAllClick = (divBg) => {
        history.push(`/genre/${genreId}`);
    }

    return (
        <div className={`${divBg} w-100 py-3`}>
            <div className="container">

                {/* Section Title */}
                <h1 className={`text-center ${divBg !== 'bgGrey' && 'text-white'}`}>{sectionTitle}</h1>
                <Swiper
                    navigation
                    pagination={{clickable: true}}
                    effect="coverflow"
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false
                    }}
                    // slidesPerView={4}
                    centeredSlides
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    grabCursor={true}
                    breakpoints={{
                        // when window width is >= 320
                        320: {
                            width: 320,
                            slidesPerView: 1,
                        },

                        // when window width is >= 768px
                        768: {
                            width: 768,
                            slidesPerView: 2,
                        },

                        // when window width is >= 1024px
                        1024: {
                            width: 1024,
                            slidesPerView: 3,
                        },

                        // when window width is >= 1440px
                        1440: {
                            width: 1440,
                            slidesPerView: 3,
                        },
                    }}
                >
                    {movies.map((movie, indx) => (

                        <SwiperSlide key={indx}>
                            <SingleSwiperMovie
                                movie={movie}
                                showDetailsBtn={true}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* view all button */}
                <div className=" text-center my-2 my-md-4">
                    {/* <div className=" d-flex w-100"> */}
                    <Button variant="danger" size="lg" onClick={() => handleViewAllClick(divBg)}>
                        View More {sectionTitle} Movies
                    </Button>
                </div>
            </div>
        </div >
    );
};

export default ShowMovies;