import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useContext } from 'react';
import { Context } from '../store/appContext';

const VehicleDetails = () => {
  const params = useParams();
  const id = params.id;
  const { store, actions } = useContext(Context);
  const vehicle = store.vehicle;
  const vehicleInfo = store.vehicleInfo;

  useEffect(() => {
    actions.getVehicleInfo(id);
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-5'>
          <img src={'https://starwars-visualguide.com/assets/img/vehicles/' + id + '.jpg'} className="img-fluid" alt="Responsive image" />
        </div>
        <div className='col-md-7'>
          <h3>{vehicleInfo.name}</h3>
          <p>{vehicle.description}</p>
          <h4>Details</h4>
          <p><b>Model </b>{vehicleInfo.model}</p>
          <p><b>Manufacturer: </b>{vehicleInfo.manufacturer}</p>
          <p><b>Vehicle Class: </b>{vehicleInfo.vehicle_class}</p>
          <h4>Specs</h4>
          <p><b>Length: </b>{vehicleInfo.length}</p>
          <p><b>Max Atmosphering Speed: </b>{vehicleInfo.max_atmosphering_speed}</p>
          <p><b>Passengers: </b>{vehicleInfo.surface_water}</p>
          <p><b>Cargo Capacity: </b>{vehicleInfo.cargo_capacity}</p>
        </div>
      </div>
    </div>
  )
}

export default VehicleDetails