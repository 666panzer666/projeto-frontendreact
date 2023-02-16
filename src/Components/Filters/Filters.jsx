import { FilterContainer } from "./styled"

function Filters(props) {
    const { minFilter, setMinFilter, maxFilter, setMaxFilter, searchFilter, setSearchFilter } = props;

    function changeMinFilter(e) {
        if (e.target.value < 0) {
            e.target.value = 0;
        }
        setMinFilter(e.target.value);
    }

    function changeMaxFilter(e) {
        if (e.target.value < 0) {
            setMaxFilter(0);
            return
        } 
        setMaxFilter(e.target.value);
    }

    function changeSearchFilter(e) {
        setSearchFilter(e.target.value);
    }

    return (
        <>
            <FilterContainer>
                <h2>Filtros</h2>
                <div className="row">
                    <label htmlFor="min" >Valor Mínimo: </label>
                    <input id="min" type="number" value={minFilter} onChange={changeMinFilter}/>
                </div>
                <div className="row">
                    <label htmlFor="max">Valor Máximo: </label>
                    <input id="max" type="number" value={maxFilter} onChange={changeMaxFilter}/>
                </div>
                <div className="row">
                    <label htmlFor="search">Busca por nome: </label>
                    <input id="search" type="text" value={searchFilter} onChange={changeSearchFilter}/>
                </div>
            </FilterContainer>
        </>
    )
}

export default Filters