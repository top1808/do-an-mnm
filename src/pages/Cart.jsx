import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Cart = () => {
  const [carts, setCarts] = useState(
    JSON.parse(localStorage.getItem("carts")) || []
  );

  const [totalPrice, setTotalPrice] = useState(
    carts?.reduce((acc, elm) => {
      acc += elm.price * elm.quantity;
      return acc;
    }, 0)
  );

  const onRemove = (id) => {
    const newCarts = carts.filter((cart) => cart.id !== id);
    setCarts(newCarts);
    localStorage.setItem("carts", JSON.stringify(newCarts));
    toast.error("Xoá sản phẩm thành công.");
  };

  const onChangeQuantity = (id, value) => {
    const newQuantity = value;
    const newCarts = carts.map((cart) => ({
      ...cart,
      quantity: cart.id === id ? newQuantity : cart.quantity,
    }));
    setCarts(newCarts);
    localStorage.setItem("carts", JSON.stringify(newCarts));
  };

  const onCheckout = () => {
    toast.success("Thanh toán thành công");
    localStorage.removeItem("carts");
    window.dispatchEvent(new Event("storage"));
  };

  useEffect(() => {
    window.addEventListener("storage", () => {
      setCarts(JSON.parse(localStorage.getItem('carts')) || [])
    })
  }, [])

  useEffect(() => {
    setTotalPrice(
      carts?.reduce((acc, elm) => {
        acc += elm.price * elm.quantity;
        return acc;
      }, 0)
    );
  }, [carts]);

  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{carts?.length} Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
              Quantity
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
              Price
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
              Total
            </h3>
          </div>
          {carts &&
            carts?.map((cart) => (
              <div
                className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                key={cart.id}
              >
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img
                      className="h-24"
                      src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{cart.name}</span>
                    <button
                      type="button"
                      className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                      onClick={() => onRemove(cart.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <input
                    className="mx-2 border text-center w-8"
                    type="text"
                    value={cart.quantity}
                    onChange={(e) => onChangeQuantity(cart.id, e.target.value)}
                  />
                </div>
                <span className="text-center w-1/5 font-semibold text-sm">
                  {cart.price}$
                </span>
                <span className="text-center w-1/5 font-semibold text-sm">
                  {cart.quantity * cart.price}$
                </span>
              </div>
            ))}

          <a
            href="/"
            className="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            <svg
              className="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </a>
        </div>

        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>

          <div className="mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Tổng tiền</span>
              <span>{totalPrice}$</span>
            </div>
            <button
              className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
              onClick={onCheckout}
            >
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
