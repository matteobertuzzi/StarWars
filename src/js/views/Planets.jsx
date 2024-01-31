import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Planets = () => {
    const { store, actions } = useContext(Context);
    const planets = store.planets;
    const placeholderImg = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';

    function errorImg(e) {
        e.target.src = placeholderImg;
    }


    return (
        <div className="container-fluid">
            <div className='searchBar'>
			// here goes search bar
            </div>
            <div className="row planets d-flex justify-content-center mt-5">
                <h2>Planets</h2>
                {planets.map((plan) => {
                    return (
                        <div className="card m-2" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={'https://starwars-visualguide.com/assets/img/planets/' + plan.uid + '.jpg'} alt="Card image cap" onError={errorImg} />
                            <div className="card-body">
                                <h5 className="card-title">{plan.name}</h5>
                                <p className="card-text">{plan.uid}</p>
                                <Link className='btn btn-primary' to={'/planet/' + plan.uid}>Details</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    );

};

export default Planets;
