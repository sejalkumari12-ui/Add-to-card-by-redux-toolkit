import React from "react";
import { Products } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItems } from "../features/cartSlice/cartSlice";

const Product = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItems);

  console.log("Cart Items = ", cartItem);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-6">
      
        <h2 className="text-3xl font-bold text-gray-200 mb-8 text-center">
          🛍️ Our Products
        </h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Products.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
            >
          
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-56 object-cover"
              />

           
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-200">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm mt-1">
                  {item.description}
                </p>

               
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-violet-600 font-bold text-lg">
                    ₹{item.price}
                  </span>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

     
        <div className="mt-10 p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">Cart Items: {cartItem.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;

