import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useContext } from 'react';
import { Context } from '../store/appContext';

const PlanetDetails = () => {

  const { store, actions } = useContext(Context);
  const planet = store.planet;
  const planetInfo = store.planetInfo;
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    actions.getPlanetInfo(id);
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-5'>
          <img src={'https://starwars-visualguide.com/assets/img/planets/' + id + '.jpg'} className="img-fluid" alt="Responsive image" />
        </div>
        <div className='col-md-7'>
          <h3>{planetInfo.name}</h3>
          <p>{planet.description}</p>
          <h4>Details</h4>
          <p><b>Population </b>{planetInfo.population}</p>
          <p><b>Climate: </b>{planetInfo.climate}</p>
          <p><b>Terrain: </b>{planetInfo.terrain}</p>
          <h4>Specs</h4>
          <p><b>Diameter: </b>{planetInfo.diameter}</p>
          <p><b>Rotation Speed: </b>{planetInfo.rotation_speed}</p>
          <p><b>Surface Water: </b>{planetInfo.surface_water}</p>
          <p><b>Orbital Period: </b>{planetInfo.orbital_period}</p>
        </div>
      </div>
    </div>
  )
}
export default PlanetDetails