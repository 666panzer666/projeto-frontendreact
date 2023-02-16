import Filters from "./Components/Filters/Filters"
import Home from "./Components/ProductList/Home/Home"
import Cart from "./Components/ShoppingCard/Cart/Cart"
import styled, { createGlobalStyle } from "styled-components"
import products from "./assets/productsList"
import { useState } from "react"

const GlobalStyle = createGlobalStyle`
`

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(250px, 1fr) 3fr minmax(250px, 1fr);
  align-content: flex-start;
`

function App() {

  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState("");



  return (
    <>
      <GlobalStyle />
      <Container>
        <Filters
          minFilter={minFilter} setMinFilter={setMinFilter}
          maxFilter={maxFilter} setMaxFilter={setMaxFilter}
          searchFilter={searchFilter} setSearchFilter={setSearchFilter}
        />
        <Home
          products={products}
          amount={amount} setAmount={setAmount}
          cart={cart} setCart={setCart}
        />
        <Cart
          amount={amount} setAmount={setAmount}
          cart={cart} setCart={setCart}
        />
      </Container>

    </>
  )
}

export default App
