import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";

function HomeCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img src='https://www.fortressofsolitude.co.za/wp-content/uploads/2023/05/The-20-Strongest-Star-Wars-Characters-scaled.jpeg' alt='characters' className='img-fluid' style={{ width: '1300px', heigth: '500px', borderRadius: '20%', alignItems: 'center' }} />
                <Carousel.Caption>
                    <h2 className='carouselTitle my-3' style={{ color: 'white' }}>Characters</h2>
                    <Link to="/characters">
                        <button className="btn btn-warning carouselButton">See Characters</button>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='https://img-c.udemycdn.com/course/750x422/4679738_8ea3.jpg' alt='planets' className='img-fluid' style={{ width: '1300px', heigth: '500px', borderRadius: '20%', alignItems: 'center' }} />
                <Carousel.Caption>
                    <h2 className='carouselTitle my-3' style={{ color: 'white' }}>Planets</h2>
                    <Link to="/planets">
                        <button className="btn btn-warning carouselButton">See Planets</button>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='https://i.imgur.com/V4dk8Sa.jpg' alt='vehicles' className='img-fluid' style={{ width: '1300px', heigth: '500px', borderRadius: '20%', alignItems: 'center' }} />
                <Carousel.Caption>
                    <h2 className='carouselTitle my-3' style={{ color: 'white' }}>Vehicles</h2>
                    <Link to="/vehicles">
                        <button className="btn btn-warning carouselButton">See Vehicles</button>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HomeCarousel;