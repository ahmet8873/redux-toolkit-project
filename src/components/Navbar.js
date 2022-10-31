import { useSelector, useDispatch } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import store from "../store";

const Navbar = () => {
  const {amount}=useSelector(state=>state.cart)
  return (
    <nav>
      <div className="nav-center">
        <h1>redux toolkit</h1>
        <div className="nav-container">
          <AiOutlineShoppingCart className="icon" />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
