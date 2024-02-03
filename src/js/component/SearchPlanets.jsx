import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../store/appContext';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from 'react-router-dom';

function SearchPlanets() {

    const [input, setInput] = useState('');
    const { store, actions } = useContext(Context);
    const searchResults = store.planetSearch;
    const navigate = useNavigate();



    useEffect(() => {
        actions.searchPlanets(input);

    }, [input]);

    return (
        <Dropdown>
            <Dropdown.Toggle variant='light' className='searchInput' id="dropdown-basic" style={{ width: '60vw' }}>
                <input placeholder='Seach planet' value={input} onChange={(e) => { setInput(e.target.value) }} style={{ width: '55vw', paddingLeft: '3px' }} />
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropdownMenu'>
                {searchResults.map((res) => {
                    const id = res.id.toString();
                    return (
                        <Dropdown.Item onClick={() => navigate('/planet/' + id)} style={{ width: '50vw' }}>{res.name}</Dropdown.Item>
                    )
                })
                }
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default SearchPlanets;