import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [carts, setCarts] = useState(JSON.parse(localStorage.getItem('carts')) || []);

  // useEffect(() => {
  //   window.addEventListener("storage", () => {
  //     setCarts(JSON.parse(localStorage.getItem('carts')) || [])
  //   })
  // }, [])

  return (
    <div className="w-full bg-blue-400 p-4 text-white flex justify-between items-center">
      <a href="/" className="text-xl font-bold">APP</a>
      <a
        href="/cart"
        className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lgfocus:ring-4 focus:outline-none"
      >
        <FaShoppingCart  className="text-2xl"/>
      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
        {carts?.length}
      </div>
      </a>
    </div>
  );
};

export default Header;
