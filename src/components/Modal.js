import { useDispatch,useSelector } from "react-redux"
import {closeModal} from '../features/cart/modalSlice'
import { clearCart } from "../features/cart/cartSlice"

const Modal = () => {
    const dispatch=useDispatch()
    const {isOpen}=useSelector(state=>state.modal)

const clearHandle=()=>{
    dispatch(clearCart())
    dispatch(closeModal())
}

  return (
    <aside className={`modal-container ${isOpen?'show-modal':''}`}>
        <div className="modal">
            <h4>remove all items from your shopping cart?</h4>
            <div className="btn-container">
                <button onClick={()=>clearHandle()}>confirm</button>
                <button onClick={()=>dispatch(closeModal())}>cancel</button>
            </div>
        </div>
    </aside>
  )
}

export default Modal