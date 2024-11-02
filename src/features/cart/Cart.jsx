import Button from '../../ui/Button'
import LinkButton from '../../ui/LinkButton';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { clearCart, getTotalPrice } from './cartSlice';
import EmptyCart from './EmptyCart'

function Cart() {
  const cart = useSelector(state=>state.cart.cart);
  const userName= useSelector(state=>state.user.userName)
  const totalAmount = useSelector(getTotalPrice);
  const dispatch = useDispatch();

  if(!cart.length) return <EmptyCart/>
  return (
   <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className='  divide-stone-200 border-b flex justify-between py-4'>
        <p className='font-semibold '>Total Amount :</p>
        <p className='mr-4 font-bold'>${totalAmount}</p>
      </div>
      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary" >
          Order pizzas
        </Button>

        <Button type="secondary" onClick={()=>dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
      </div>

  );
}

export default Cart;
