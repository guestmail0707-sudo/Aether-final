
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../App';
import Cart from './Cart';
import { LogoIcon, CartIcon } from './Icons';


const Header: React.FC = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useCart();
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const navLinkClasses = "text-slate-700 hover:text-slate-900 transition duration-200 px-3 py-2 rounded-md text-sm font-medium";
  const activeNavLinkClasses = "bg-amber-400 text-slate-900";

  return (
    <>
      <header className="bg-orange-200 shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center text-slate-800">
                <LogoIcon className="h-8 w-8 mr-2" />
                <span className="font-bold text-xl tracking-tight">SOUL</span>
              </Link>
            </div>
            <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                    <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`} end>Home</NavLink>
                    <NavLink to="/products" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>Products</NavLink>
                    <NavLink to="/ai-finder" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>AI Device Finder</NavLink>
                </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative text-slate-700 hover:text-slate-900 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-200 focus:ring-slate-800"
                aria-label="Open shopping cart"
              >
                <CartIcon className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 flex items-center justify-center h-5 w-5 bg-red-500 text-white text-xs rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;