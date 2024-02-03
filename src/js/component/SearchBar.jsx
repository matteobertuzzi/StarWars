import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../store/appContext';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from 'react-router-dom';

function SearchBar() {

    const [input, setInput] = useState('');
    const { store, actions } = useContext(Context);
    const searchResults = store.searchResults;
    const navigate = useNavigate();



    useEffect(() => {
        actions.searchCharacter(input);

    }, [input]);

    return (
        <Dropdown>
            <Dropdown.Toggle variant='light' id="dropdown-basic" style={{ width: '60vw' }}>
                <input placeholder='Seach character, planet or vehicle' value={input} onChange={(e) => { setInput(e.target.value) }} style={{ width: '55vw' }} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {searchResults.map((res) => {
                    const id = res.id.toString();
                    return (
                        <Dropdown.Item onClick={() => navigate('/character/' + id)} style={{ width: '50vw' }}>{res.name}</Dropdown.Item>
                    )
                })
                }
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default SearchBar;