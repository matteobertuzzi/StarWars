import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useContext } from 'react';
import { Context } from '../store/appContext';

const CharacterDetails = () => {

  const { store, actions } = useContext(Context);
  const character = store.character;
  const charDetails = store.charDetails;

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    actions.getCharacterInfo(id);
  }, [])

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-5'>
          <img src={'https://starwars-visualguide.com/assets/img/characters/' + id + '.jpg'} className="img-fluid" alt="Responsive image" />
        </div>
        <div className='col-md-7'>
          <h3>{charDetails.name}</h3>
          <p>{character.description}</p>
          <h4>About</h4>
          <p><b>Birth Year: </b>{charDetails.birth_year}</p>
          <p><b>Gender: </b>{charDetails.gender}</p>
          <h4>About</h4>
          <p><b>Body Height: </b>{charDetails.height + ' cm'}</p>
          <p><b>Body Mass: </b>{charDetails.mass}</p>
          <p><b>Eye Color: </b>{charDetails.eye_color}</p>
          <p><b>Hair Color: </b>{charDetails.hair_color}</p>
          <p><b>Skin Color: </b>{charDetails.skin_color}</p>

        </div>
      </div>
    </div>
  )
}

export default CharacterDetails