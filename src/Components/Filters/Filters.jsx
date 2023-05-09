import { FilterContainer, FilterTitle } from './styled';
import React from 'react';
import { FcFilledFilter, FcClearFilters } from 'react-icons/fc';
import { useContext } from 'react';
import GlobalContext from '../../contexts/GlobalContext';

function Filters() {
    
    const { minFilter, setMinFilter, maxFilter, setMaxFilter, searchFilter, setSearchFilter } = useContext(GlobalContext);

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
        <div>
            <FilterTitle>
                <FcFilledFilter />
                <div>Filtrar por:</div>
            </FilterTitle>
            <FilterContainer>
                <div className="row">
                    <label htmlFor="min" >Valor Mínimo: </label>
                    <input id="min" type="number" value={minFilter} onChange={handleMinFilter} />
                </div>
                <div className="row">
                    <label htmlFor="max">Valor Máximo: </label>
                    <input id="max" type="number" value={maxFilter} onChange={handleMaxFilter} />
                </div>
                <div className="row">
                    <label htmlFor="search">Palavras: </label>
                    <input id="search" type="text" value={searchFilter} onChange={handleSearchFilter} />
                </div>
                <button onClick={handleClearSearchFilter}>
                    <FcClearFilters />
                    <span>Limpar Filtros</span>
                </button>
            </FilterContainer>
        </div>
    );
}

export default Filters;
