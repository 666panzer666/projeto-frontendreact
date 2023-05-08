import { FilterContainer } from './styled';
import React from 'react';

function Filters(props) {
    const { minFilter, setMinFilter, maxFilter, setMaxFilter, searchFilter, setSearchFilter } = props;

    function handleMinFilter(e) {
        if (e.target.value < 0) {
            e.target.value = 0;
        }
        setMinFilter(e.target.value);
    }

    function handleMaxFilter(e) {
        if (e.target.value < 0) {
            setMaxFilter(0);
            return;
        }
        setMaxFilter(e.target.value);
    }

    function handleSearchFilter(e) {
        setSearchFilter(e.target.value);
    }

    function handleClearSearchFilter() {
        setSearchFilter('');
        setMaxFilter('');
        setMinFilter('');
    }

    return (
        <>
            <FilterContainer>
                <h2>Filtros</h2>
                <div className="row">
                    <label htmlFor="min" >Valor Mínimo: </label>
                    <input id="min" type="number" value={minFilter} onChange={handleMinFilter} />
                </div>
                <div className="row">
                    <label htmlFor="max">Valor Máximo: </label>
                    <input id="max" type="number" value={maxFilter} onChange={handleMaxFilter} />
                </div>
                <div className="row">
                    <label htmlFor="search">Busca por nome: </label>
                    <input id="search" type="text" value={searchFilter} onChange={handleSearchFilter} />
                </div>
                <button onClick={handleClearSearchFilter}>Limpar Filtros</button>
            </FilterContainer>
        </>
    );
}

export default Filters;
