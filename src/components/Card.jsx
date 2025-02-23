import { useContext } from "react"
import { BasketContext } from "../context/BasketContext"




const Card = ({product}) => {
  const {basket, addToBasket } = useContext(BasketContext);

  const basketItem = basket.find((i) => i.id === product.id)
  


  return (
    <div className="card py-3">
       <div className="d-flex justify-content-center">
        <img src= {product.image} height={120} className="object-fit-contain" />
       </div>
       <div className="card-body">
        <h4 className="text-truncate">{product.title}</h4>
        <h4 className="text-secondary">{product.category}</h4>
        { <button className="w-100 rounded" onClick={() => addToBasket(product)}>Sepete Ekle ({basketItem?.amount || 0})</button> } 
       </div>
    </div>
  )
}

export default Card