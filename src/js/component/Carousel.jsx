import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";

function HomeCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img src='https://media.timeout.com/images/105863223/750/422/image.jpg' alt='characters' style={{ width: '80vw' }} />
                <Carousel.Caption>
                    <h3 style={{ color: 'white' }}>Characters</h3>
                    <Link to="/characters">
                        <button className="btn btn-warning">Characters</button>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='https://assetsio.reedpopcdn.com/Tatooine.jpg' alt='planets' style={{ width: '80vw' }} />
                <Carousel.Caption>
                    <h3 style={{ color: 'white' }}>Planets</h3>
                    <Link to="/planets">
                        <button className="btn btn-warning">Planets</button>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='https://www.drivingline.com/s3/drivingline.prd/media/12935/dl-sw_10-01.jpg?quality=70&mode=pad&copymetadata=true&w=800' alt='vehicles' style={{ width: '80vw' }} />
                <Carousel.Caption>
                    <h3 style={{ color: 'white' }}>Vehicles</h3>
                    <Link to="/vehicles">
                        <button className="btn btn-warning">Vehicles</button>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HomeCarousel;