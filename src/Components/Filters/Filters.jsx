import { FilterContainer } from "./styled"

function Filters() {
    return (
        <>
            <FilterContainer>
                <h2>Filtros</h2>
                <div className="row">
                    <label>Valor Mínimo: </label>
                    <input type="number" />
                </div>
                <div className="row">
                    <label>Valor Máximo: </label>
                    <input type="number" />
                </div>
                <div className="row">
                    <label>Busca por nome: </label>
                    <input type="text" />
                </div>
            </FilterContainer>
        </>
    )
}

export default Filters