import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Characters = () => {
    const { store, actions } = useContext(Context);
    const charachters = store.charachters;
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
        const currentFav = store.favoriteCharacters;
        if (currentFav == id || currentFav.includes(id)) {
            return;
        }
        const newFav = [...currentFav, id];
        actions.setFavoriteChar(newFav)
        console.log('fav characters: ', newFav)
    }


    return (
        <div className="container-fluid">
            <div className='searchBar'>
			// here goes search bar
            </div>
            <div className="row characters d-flex justify-content-center mt-5">
                <h2>Charachters</h2>
                {charachters.map((char) => {
                    return (
                        <div className="card m-2" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={'https://starwars-visualguide.com/assets/img/characters/' + char.uid + '.jpg'} alt="Card image cap" onError={errorImg} />
                            <div className="card-body">
                                <h5 className="card-title">{char.name}</h5>
                                <p className="card-text">{char.uid}</p>
                                <div className="d-flex justify-content-between">
                                    <Link className='btn btn-primary' to={'/character/' + char.uid}>Details</Link>
                                    <h4><i className="fa-regular fa-heart" id={char.uid} onClick={addFavorite}></i></h4>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            // here goes pagination

        </div >
    );

};

export default Characters;
