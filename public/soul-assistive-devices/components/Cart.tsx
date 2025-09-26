
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../App';
import { XIcon, TrashIcon } from './Icons';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    onClose();
    navigate('/confirmation');
  };

  return (
    <div className={`fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 ${isOpen ? 'bg-black bg-opacity-50' : 'pointer-events-none opacity-0'}`} onClick={onClose}>
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-2xl font-bold text-slate-800">Shopping Cart</h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100">
                <XIcon className="h-6 w-6 text-slate-600"/>
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
              <p className="text-slate-500 text-lg">Your cart is empty.</p>
              <button onClick={onClose} className="mt-4 bg-amber-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-amber-700 transition duration-300">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex-grow overflow-y-auto p-6">
              <ul className="divide-y divide-slate-200">
                {cartItems.map(item => (
                  <li key={item.id} className="flex py-4">
                    <img src={item.imageUrl} alt={item.name} className="h-20 w-20 object-cover rounded-md" />
                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-slate-900">
                          <h3>{item.name}</h3>
                          <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                      <div className="flex-1 flex items-end justify-between text-sm">
                        <div className="flex items-center border rounded">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1">-</button>
                          <span className="px-3">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1">+</button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="font-medium text-red-600 hover:text-red-800">
                           <TrashIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {cartItems.length > 0 && (
            <div className="border-t p-6 bg-slate-50">
              <div className="flex justify-between text-lg font-medium text-slate-900">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <p className="mt-1 text-sm text-slate-500">Shipping and taxes calculated at checkout.</p>
              <div className="mt-6">
                <button onClick={handleCheckout} className="w-full bg-amber-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-amber-700 transition duration-300">
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;