import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useContext } from 'react';
import { Context } from '../store/appContext';

const CharacterDetails = () => {

  const { store, actions } = useContext(Context);

  const params = useParams();
  const id = params.id;



  useEffect(() => {
    actions.getCharacterInfo(id);
  }, []);

  return (
    <div>
      Hey
    </div>
  )
}

export default CharacterDetails