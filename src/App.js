import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar'
import Modal from './components/Modal';
import {calculateTotal} from './features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from 'react'


function App() {
  const {cartItems}=useSelector(state=>state.cart)
  const {isOpen}=useSelector(state=>state.modal)

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(calculateTotal())
  },[cartItems])

  return (
    <main className='app'>
      {isOpen&&
      <Modal/>
      }
    
   <Navbar/>
   <CartContainer/>
    </main>
  );
}

export default App;
