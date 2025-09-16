import { useSelector, useDispatch } from "react-redux";
import { clearCart, selectCartItems } from "../features/cartSlice/cartSlice";
import { Link } from "react-router-dom";


const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItems);
  console.log("Cart Items = ", cartItem);


   const handleClearCart = () => {
    dispatch(clearCart());
   }
  return (
    <>
 

      <div className="max-w-3xl mx-auto text-center my-10">
        {cartItem.length === 0 && (
          <div className="space-y-4 ">
            <h1 className="text-2xl font-bold text-gray-700">
              Your Cart is Empty
            </h1>
            <Link
              to={"/"}
              className="inline-block bg-yellow-400 text-violet-800 font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-yellow-300 transition"
            >
              Continue Shopping...
            </Link>
          </div>
        )}

        {cartItem.map((item) => (
          <div
            key={item.id}
            className="bg-gray-900 text-white rounded-lg shadow-lg flex flex-col md:flex-row items-center mb-6 overflow-hidden"
          >
           
            <div className="w-full md:w-1/3 p-4">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="rounded-lg w-full h-40 object-cover"
              />
            </div>

            
            <div className="w-full md:w-2/3 p-4 text-left">
              <h5 className="text-xl font-bold">{item.title}</h5>
              <p className="text-gray-300 mb-4">{item.description}</p>
              <div className="flex gap-4">
                <button className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg transition">
                  ₹{item.price}
                </button>
                
                <button className="bg-yellow-400 hover:bg-yellow-300 text-violet-900 font-semibold px-4 py-2 rounded-lg transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}

        {cartItem.length !== 0 && (
          <button
            onClick={handleClearCart}
            className="mt-6 bg-yellow-400 text-violet-900 font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-yellow-300 transition"
          >
            Clear Cart
          </button>
        )}
      </div>
      </>
  )
}

export default Cart
