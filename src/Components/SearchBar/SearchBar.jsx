import React, { useContext } from 'react';
import { Form } from './styled';
import { BsSearch } from 'react-icons/bs';
import GlobalContext from '../../contexts/GlobalContext';

function SearchBar () {

    const { getAllProducts, search, setSearch } = useContext(GlobalContext);

    function searchProduct (e) {
        e.preventDefault();
        setSearch(search);
        getAllProducts();
    }

    return (
        <Form  onSubmit={searchProduct}>
            <input 
                type="search" 
                value={search}
                placeholder="Buscar Produtos" 
                onChange={({ target }) => setSearch(target.value)}
                required 
            />
            <button type="submit">
                <BsSearch />
            </button>
        </Form>
    );
}

export default SearchBar;
