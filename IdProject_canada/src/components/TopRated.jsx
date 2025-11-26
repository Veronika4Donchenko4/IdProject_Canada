import React from 'react'
import StarSvg from '../assets/images/svg/star.svg';
import RightArrowSvg from '../assets/images/svg/right-arrow-svg.svg';
import ImagePhoto from '../assets/images/home-page/image-Photo.png';
import { Link } from 'react-router-dom';

const TopRated = () => {
    return (
        <div>

            <div className="container">
                <div className="row curved-section-row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 curved-section-col1">
                        <div className="quality-main about-qulity-main fade_down">
                            <p className="quality">TOP RATED</p>
                        </div>
                        <h2 className="handyman-text handyman-services fade_down">Highest rated company</h2>
                        <p className="fusce malesuada pharetra fade_down">Id pharetra sit urna tortor tempor nibh sit enim id.
                            Malesuada potenti auctor consequat ultrices vel nulla quisque convallis. Orci malesuada vel
                            vitae semper massa mattis.
                        </p>
                        <div className="trusted-group fade_down">
                            <div className="star-img-main">
                                <img src={StarSvg} alt="star" />
                                <p className="rating-digit">4.8<sub>/5.0</sub></p>
                            </div>
                            <div>
                                <h2 className="TrustScore">Trust Score Rated</h2>
                                <p className="ratedCustom">Rated by over 5000 customers</p>
                            </div>
                        </div>
                        <div className="Review fade_down">
                            <Link to="/Testimonials" className="btn-main btn1">View All Review
                                <span className="arrow-section">
                                    <img className="arrow" src={RightArrowSvg} alt="right-arrow-svg" />
                                </span>
                                <div className="btn-box-left btn1"></div>
                                <div className="btn-box-right btn1"></div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 image-Photo-main">
                        <img className="image-Photo" src={ImagePhoto} alt="image-Photo" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TopRated