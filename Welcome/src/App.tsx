import ItemList from "./components/ItemList"
import Product from "./components/Product"
import ShoppingList from "./components/ShoppingList"
import StyledBox from "./components/StyledBox"
import WelcomeMessage from "./components/WelcomeMessage"

const App = () => {
  const termek = {
    productName: "Apple",
    productPrice: 500,
  };

  const termekek = [
    {
      productName: "Apple",
      productPrice: 500,
    },
    {
      productName: "Banana",
      productPrice: 300,
    },
    {
      productName: "Kiwi",
      productPrice: 800,
    }
  ]

  return (
    <div>
      <WelcomeMessage />
      <ItemList />
      <StyledBox />
      <Product {...termek} />
      <ShoppingList items={termekek}/>
    </div>

  )
}

export default App