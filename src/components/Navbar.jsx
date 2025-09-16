import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import {  useSelector } from "react-redux";
import { selectCartItems , selectCartTotalPrice} from "../features/cartSlice/cartSlice";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const cartItem = useSelector(selectCartItems);
     const totalPrice = useSelector(selectCartTotalPrice);
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-violet-600 text-white shadow-md z-50">
        <div className="flex justify-between items-center px-6 py-4">
   
          <Link to={"/"} className="text-2xl font-bold tracking-wide">
            Smart<span className="text-yellow-400">Gadget</span>
          </Link>

  
          <div>
            <button className="flex items-center gap-2 bg-yellow-400 text-violet-700 font-semibold px-4 py-2 rounded-full hover:bg-yellow-300 transition duration-300">
              <span>Cart Total: ₹{totalPrice}</span>
            </button>
          </div>

      
          <Link to={"/Cart"} className="relative">
            <FaShoppingCart className="text-2xl cursor-pointer hover:text-yellow-400 transition duration-300" />
            {/* Notification Badge */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white font-bold rounded-full px-1.5">
            {cartItem.length}
            </span>
          </Link >
        </div>
      </div>

      <div className="h-20"></div>
    </>
  )
}

export default Navbar
