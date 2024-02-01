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

    function addFavorite(e) {
        const id = e.target.id;
        e.target.className = 'fa-solid fa-heart';
        setTimeout(() => {
            e.target.className = 'fa-regular fa-heart';
        }, 500);
        console.log(id);;
        const currentFav = store.favoritePlanets;
        if (currentFav == id || currentFav.includes(id)) {
            return;
        }
        const newFav = [...currentFav, id];
        actions.setFavoritePlan(newFav)
        console.log('fav planets: ', newFav)
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
                                <div className="d-flex justify-content-between">
                                    <Link className='btn btn-primary' to={'/planet/' + plan.uid}>Details</Link>
                                    <h4><i className="fa-regular fa-heart" id={plan.uid} onClick={addFavorite}></i></h4>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    );

};

export default Planets;
