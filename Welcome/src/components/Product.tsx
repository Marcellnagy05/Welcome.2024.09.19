type Products = {
    productName: string,
    productPrice: number
}
const Product = (props: Products) => {
  return (
    <div>
        <ul>
            <li> {props.productName}</li>
            <li>{props.productPrice}</li>
        </ul>
    </div>
  )
}

export default Product