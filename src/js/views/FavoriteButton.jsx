import React, { useEffect, useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import { Context } from '../store/appContext';

function FavoriteButton() {

    const { store, actions } = useContext(Context);
    const favoriteCharacters = store.favoriteCharacters;
    const favoritePlanets = store.favoritePlanets;
    const favoriteVehicles = store.favoriteVehicles;
    const favCount = store.favoriteCount;

    function removeFav(e) {
        const el = e.target.id;
        if (favoriteCharacters.includes(el)) {
            const index = favoriteCharacters.indexOf('el');
            const deletedEl = favoriteCharacters.splice(index, 1);
            console.log(favoriteCharacters);
            actions.removeFavoriteChar(favoriteCharacters);
        };
        if (favoritePlanets.includes(el)) {
            const index = favoritePlanets.indexOf('el');
            const deletedEl = favoritePlanets.splice(index, 1);
            console.log(favoritePlanets);
            actions.removeFavoritePlanet(favoritePlanets);
        };
        if (favoriteVehicles.includes(el)) {
            const index = favoriteVehicles.indexOf('el');
            const deletedEl = favoriteVehicles.splice(index, 1);
            console.log(favoriteVehicles);
            actions.removeFavoriteVehicle(favoriteVehicles)
        }
    }


    return (
        <Dropdown>
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                {'Favorites     '}
                <Badge bg="dark">{favCount}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {favoriteCharacters.map((char) => {
                    return (
                        <div className='d-flex justify-content-between'>
                            <Dropdown.Item href="#/action-1">{char}</Dropdown.Item>
                            <i className="fa-regular fa-trash-can mx-2" id={char} onClick={removeFav}></i>
                        </div>
                    )
                })}
                {favoritePlanets.map((plan) => {
                    return (
                        <div className='d-flex justify-content-between'>
                            <Dropdown.Item href="#/action-1">{plan}</Dropdown.Item>
                            <i className="fa-regular fa-trash-can mx-2" id={plan} onClick={removeFav}></i>
                        </div>
                    )
                })}
                {favoriteVehicles.map((vehicle) => {
                    return (
                        <div className='d-flex justify-content-between'>
                            <Dropdown.Item href="#/action-1">{vehicle}</Dropdown.Item>
                            <i className="fa-regular fa-trash-can mx-2" id={vehicle} onClick={removeFav}></i>
                        </div>
                    )
                })}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default FavoriteButton;