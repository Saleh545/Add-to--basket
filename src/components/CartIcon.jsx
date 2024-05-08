import { FaCartShopping } from "react-icons/fa6";

const CartIcon = ({cart}) => {
  return (
    <div>
         <div className="relative">
        <FaCartShopping className="text-3xl" />
        <span className="bg-red-500 text-white flex w-5 h-5 justify-center items-center rounded-full absolute -top-2 text-xs" >{cart.length}</span>
      </div>
    </div>
  )
}

export default CartIcon