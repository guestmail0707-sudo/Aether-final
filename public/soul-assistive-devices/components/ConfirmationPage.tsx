
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../App';
import { ArrowLeftIcon } from './Icons';

const ConfirmationPage: React.FC = () => {
    const { cartItems } = useCart();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        country: 'United States',
    });

    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const shipping = subtotal > 0 ? 15.00 : 0;
    const total = subtotal + shipping;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email, address, city, zip } = formData;
        if (!name || !email || !address || !city || !zip) {
            alert('Please fill out all required shipping details.');
            return;
        }
        navigate('/payment');
    };

    if (cartItems.length === 0) {
        return (
            <div className="text-center py-20 max-w-2xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-slate-800">Your cart is empty.</h1>
                <p className="mt-2 text-slate-600">You can't proceed to checkout without any items.</p>
                <Link to="/products" className="mt-6 inline-block bg-amber-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-amber-700 transition duration-300">
                    Browse Products
                </Link>
            </div>
        )
    }

    const inputClasses = "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500";

    return (
        <div className="bg-amber-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <Link to="/products" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-800 font-semibold mb-8">
                    <ArrowLeftIcon className="w-5 h-5" />
                    Back to Products
                </Link>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Shipping Details Form */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-slate-900 border-b pb-4">Shipping Information</h2>
                        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                                <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} className={inputClasses} required />
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} className={inputClasses} required />
                            </div>
                            <div>
                                <label htmlFor="address" className="block text-sm font-medium text-slate-700">Street Address</label>
                                <input type="text" name="address" id="address" value={formData.address} onChange={handleInputChange} className={inputClasses} required />
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium text-slate-700">City</label>
                                    <input type="text" name="city" id="city" value={formData.city} onChange={handleInputChange} className={inputClasses} required />
                                </div>
                                <div>
                                    <label htmlFor="zip" className="block text-sm font-medium text-slate-700">ZIP / Postal Code</label>
                                    <input type="text" name="zip" id="zip" value={formData.zip} onChange={handleInputChange} className={inputClasses} required />
                                </div>
                            </div>
                             <div>
                                <label htmlFor="country" className="block text-sm font-medium text-slate-700">Country</label>
                                <input type="text" name="country" id="country" value={formData.country} onChange={handleInputChange} className={inputClasses + " bg-slate-100"} readOnly />
                            </div>
                            <div className="pt-4">
                                <button type="submit" className="w-full bg-amber-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-amber-700 transition duration-300 text-lg shadow-md">
                                    Proceed to Payment
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white p-8 rounded-lg shadow-md h-fit">
                        <h2 className="text-2xl font-bold text-slate-900 border-b pb-4">Order Summary</h2>
                        <ul className="divide-y divide-slate-200 mt-6">
                            {cartItems.map(item => (
                                <li key={item.id} className="flex py-4">
                                    <img src={item.imageUrl} alt={item.name} className="h-20 w-20 object-cover rounded-md flex-shrink-0" />
                                    <div className="ml-4 flex-1 flex flex-col justify-center">
                                        <h3 className="text-sm font-medium text-slate-900">{item.name}</h3>
                                        <p className="text-sm text-slate-500 mt-1">Qty: {item.quantity}</p>
                                    </div>
                                    <p className="text-sm font-medium text-slate-900">${(item.price * item.quantity).toFixed(2)}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="border-t mt-4 pt-4 space-y-2">
                             <div className="flex justify-between text-base font-medium text-slate-700">
                                <p>Subtotal</p>
                                <p>${subtotal.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between text-base font-medium text-slate-700">
                                <p>Shipping</p>
                                <p>${shipping.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between text-lg font-bold text-slate-900 mt-2">
                                <p>Total</p>
                                <p>${total.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPage;