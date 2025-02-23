import { useContext } from "react"
import { BasketContext } from "../context/BasketContext"


const BasketItem = ({item}) => {
    const {addToBasket, removeFromBasket, decreaseAmount } = useContext(BasketContext)
    
  return (
    <div className="d-flex align-items-center gap-3 text-black bg-body p-3 rounded">
    <div>
        <img src={item.image} height={80} width={80} className="object, fit-contain" alt="" />
    </div>
    <div className="w-100">
    <div>
        <h5>
            {item.title.slice(0, 40)}
        </h5>
        <p className="text-secondary"> {item.category} </p>
    </div>
    <div className="d-flex justify-content-end align-items-center gap-4">
        <p className="text-success fw-bold text-center"> {(item.price * item.amount).toFixed(2)} </p>
        <div className="rounded overflow-hidden d-flex gap-3">
            <button onClick={() => addToBasket(item)}>+</button>
            <button onClick={() => decreaseAmount(item.id)}>-</button>
        </div>
        <h4> {item.amount} </h4>
        <button onClick={() => removeFromBasket(item.id)}>Sil</button>
    </div>
    </div>
    </div>
  )
}

export default BasketItem