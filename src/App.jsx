import Filters from "./Components/Filters/Filters"
import Home from "./Components/ProductList/Home/Home"
import Cart from "./Components/ShoppingCard/Cart/Cart"
import styled, { createGlobalStyle } from "styled-components"
import products from "./assets/productsList"

const GlobalStyle = createGlobalStyle`
`

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(250px, 1fr) 3fr minmax(250px, 1fr);
  align-content: flex-start;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Filters />
        <Home products={products}/>
        <Cart />
      </Container>

    </>
  )
}

export default App
