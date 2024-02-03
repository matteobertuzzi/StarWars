import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../store/appContext';
import Dropdown from 'react-bootstrap/Dropdown';

function SearchBar() {

    const [input, setInput] = useState('');
    const { store, actions } = useContext(Context);
    const searchResults = store.searchResults



    useEffect(() => {
        actions.searchCharacter(input);

    }, [input]);

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <input placeholder='Seach character, planet or vehicle' value={input} onChange={(e) => { setInput(e.target.value) }} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {searchResults.map((res, id) => {
                    return (
                        <Dropdown.Item href="#">{res.name}</Dropdown.Item>
                    )
                })
                }
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default SearchBar;