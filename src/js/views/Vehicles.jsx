import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Vehicles = () => {
    const { store, actions } = useContext(Context);
    const vehicles = store.vehicles;
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
        const currentFav = store.favoriteVehicles;
        if (currentFav == id || currentFav.includes(id)) {
            return;
        }
        const newFav = [...currentFav, id];
        actions.setFavoriteVeh(newFav)
        console.log('fav vehicles: ', newFav)
    }


    return (
        <div className="container-fluid">
            <div className='searchBar'>
			// here goes search bar
            </div>
            <div className="row vehicles d-flex justify-content-center mt-5">
                <h2>Vehicles</h2>
                {vehicles.map((vehicle) => {
                    return (
                        <div className="card m-2" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={'https://starwars-visualguide.com/assets/img/vehicles/' + vehicle.uid + '.jpg'} alt="Card image cap" onError={errorImg} />
                            <div className="card-body">
                                <h5 className="card-title">{vehicle.name}</h5>
                                <p className="card-text">{vehicle.uid}</p>
                                <div className="d-flex justify-content-between">
                                    <Link className='btn btn-primary' to={'/vehicle/' + vehicle.uid}>Details</Link>
                                    <h4><i className="fa-regular fa-heart" id={vehicle.uid} onClick={addFavorite}></i></h4>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div >
    );

};

export default Vehicles;