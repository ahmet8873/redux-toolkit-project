import CartItem from "./CartItem";

import { useSelector,useDispatch } from "react-redux";

import { openModal } from "../features/cart/modalSlice";

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((state) => state.cart);
  
  const dispatch=useDispatch()

    
    

  if (amount < 1) {
    return (
      <section className="empty-cart">
        <h1>your cart is empty</h1>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h1>your bag</h1>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
          <button className="clear-btn" onClick={()=>dispatch(openModal())}>clear cart</button>
        </div>
      </footer>
    </section>
  );
};

export default CartContainer;
