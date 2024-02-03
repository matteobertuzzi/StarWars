import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PaginationComponent from '../component/Pagination.jsx';
import SearchBar from "../component/SearchBar.jsx";

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
        const favCount = store.favoriteCount;
        const newCount = favCount + 1;
        actions.setFavoriteChar(newFav);
        actions.setCount(newCount);
        console.log('fav characters: ', newFav)
    };


    return (
        <div className="container-fluid ">
            <div className='d-flex justify-content-center my-5'>
                <SearchBar />
            </div>
            <div className="row characters d-flex justify-content-center mt-5">
                <h2>Charachters</h2>
                {charachters.map((char) => {
                    return (
                        <div className="card m-4" style={{ width: '20rem' }}>
                            <img className="card-img-top" src={'https://starwars-visualguide.com/assets/img/characters/' + char.uid + '.jpg'} alt="Card image cap" onError={errorImg} />
                            <div className="card-body">
                                <h5 className="card-title">{char.name}</h5>
                                <div className="d-flex justify-content-between">
                                    <Link className='btn btn-primary cardbutton' to={'/character/' + char.uid}>Details</Link>
                                    <h4><i className="fa-regular fa-heart" id={char.name} onClick={addFavorite}></i></h4>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <PaginationComponent />
        </div >
    );

};

export default Characters;
