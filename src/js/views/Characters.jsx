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
                                <Link className='btn btn-primary' to={'/character/' + char.uid}>Details</Link>
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
