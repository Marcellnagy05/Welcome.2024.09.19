type ShoppingItemProps ={
    productName: string,
    productPrice: number
}

const ShoppingItem = (props:ShoppingItemProps) => {
  return (
    <div>
        <h3>{props.productName}</h3>
        <h4>{props.productPrice}</h4>
    </div>
  )
}

export default ShoppingItem