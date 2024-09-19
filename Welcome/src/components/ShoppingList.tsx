import ShoppingItem from "./ShoppingItem"

type shoppingListProps ={
    items: {productName:string, productPrice: number}[]
}

const ShoppingList = ({items}: shoppingListProps) => {
  return (
    <div>
        {items.map(item =>(
            <ShoppingItem {...item}></ShoppingItem>
        ))}
    </div>
  )
}

export default ShoppingList