import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';

const Favorites = () => {

  const { store, actions } = useContext(Context);
  const favoriteCharacters = store.favoriteCharacters;
  const favoritePlanets = store.favoritePlanets;
  const favoriteVehicles = store.favoriteVehicles;

  return (
    <div className='container'>
      <div className='row my-5'>
        <h4>Favorite Characters</h4>
        <div className='col-md-5 d-flex justify-content-start'>
          <ul>
            {favoriteCharacters.map((char) => {
              return (
                <li>
                  <i className="fa-solid fa-heart"></i>
                  <i className="fa-regular fa-trash-can mx-2"></i>
                  <span>{char}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className='row my-5'>
        <h4>Favorite Planets</h4>
        <div className='col-md-5'>
          <ul>
            {
              favoritePlanets.map((plan) => {
                return (
                  <li>{plan}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
      <div className='row my-5'>
        <h4>Favorite Vehicles</h4>
        <div className='col-md-5'>
          <ul>
            {
              favoriteVehicles.map((vehicle) => {
                return (
                  <li>{vehicle}</li>
                )
              })
            }
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Favorites