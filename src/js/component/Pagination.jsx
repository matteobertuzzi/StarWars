import React, { useContext } from 'react';
import { Pagination } from 'react-bootstrap';
import { Context } from '../store/appContext';

function PaginationComponent() {

    const { store, actions } = useContext(Context);

    function handlePageClick(e) {
        const page = e.target.innerHTML;
        console.log(page);
        actions.getNextCharacters(page);
        // e.target.style.background = 'white'

    }
    return (
        <>
            <div className='container p-2 d-flex justify-content-center my-3'>
                <Pagination>
                    <Pagination.Item onClick={handlePageClick}>1</Pagination.Item>
                    <Pagination.Item onClick={handlePageClick}>2</Pagination.Item>
                    <Pagination.Item onClick={handlePageClick}>3</Pagination.Item>
                    <Pagination.Item onClick={handlePageClick}>4</Pagination.Item>
                    <Pagination.Item onClick={handlePageClick}>5</Pagination.Item>
                    <Pagination.Item onClick={handlePageClick}>6</Pagination.Item>
                    <Pagination.Item onClick={handlePageClick}>7</Pagination.Item>
                    <Pagination.Item onClick={handlePageClick}>8</Pagination.Item>
                    <Pagination.Item onClick={handlePageClick}>9</Pagination.Item>
                </Pagination>
            </div>
        </>
    );
}
export default PaginationComponent;  
