import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../store/appContext';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from 'react-router-dom';

function SearchVehicles() {

    const [input, setInput] = useState('');
    const { store, actions } = useContext(Context);
    const searchResults = store.vehicleSearch;
    const navigate = useNavigate();



    useEffect(() => {
        actions.searchVehicles(input);

    }, [input]);

    return (
        <Dropdown>
            <Dropdown.Toggle variant='light' className='searchInput' id="dropdown-basic" style={{ width: '60vw' }}>
                <input placeholder='Search vehicle' value={input} onChange={(e) => { setInput(e.target.value) }} style={{ width: '55vw', paddingLeft: '3px' }} />
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropdownMenu'>
                {searchResults.map((res) => {
                    const id = res.id.toString();
                    return (
                        <Dropdown.Item onClick={() => navigate('/vehicle/' + id)} style={{ width: '50vw' }}>{res.name}</Dropdown.Item>
                    )
                })
                }
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default SearchVehicles;