import { removeItem,increase,decrease } from "../features/cart/cartSlice"
import { useDispatch } from "react-redux"

const CartItem = ({id,img,title,price,amount}) => {
const dispatch=useDispatch()

const decreaseHandle=(id)=>{
  if(amount>0){
    dispatch(decrease(id))
  }
  }

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div className="item-info">
        <h4>{title}</h4>
        <h4 className="item-price">{price}</h4>
        <button className="remove-btn" onClick={()=>dispatch(removeItem(id))}>remove</button>
      </div>
      <div>
        <button onClick={()=>dispatch(increase(id))}>
          ▲
        </button>
        <p>
        {amount}
        </p>
        <button onClick={()=>decreaseHandle(id)}>
          ▼
        </button>
      </div>
    </article>
  )
}

export default CartItem