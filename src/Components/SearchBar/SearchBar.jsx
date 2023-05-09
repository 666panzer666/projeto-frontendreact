import React, { useState } from 'react';
import { Form } from './styled';
import { BsSearch } from 'react-icons/bs';

function SearchBar () {

    const [ searchValue, setSearchValue ] = useState('');

    return (
        <Form preventDefault>
            <input 
                type="search" 
                value={searchValue}
                placeholder="Buscar Produtos" 
                onChange={({ target }) => setSearchValue(target.value)}
                required 
            />
            <button type="submit">
                <BsSearch />
            </button>
        </Form>
    );
}

export default SearchBar;
