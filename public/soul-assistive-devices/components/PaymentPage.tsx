import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../App';
import { LockIcon, YellowIcon, CreditCardIcon, PayPalIcon, GooglePayIcon } from './Icons';

const PaymentPage: React.FC = () => {
    const { cartItems, clearCart } = useCart();
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);
    const [showPaymentMethods, setShowPaymentMethods] = useState(false);

    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const shipping = subtotal > 0 ? 15.00 : 0;
    const total = subtotal + shipping;

    const handleInitiatePayment = () => {
        setShowPaymentMethods(true);
    };

    const handlePayment = () => {
        if (isProcessing) return;
        setIsProcessing(true);

        if (!window.Yellow) {
            alert('Payment gateway is not available. Please try again later.');
            setIsProcessing(false);
            return;
        }

        // In a real app, this key would be a public key from an environment variable
        window.Yellow.init({ apiKey: 'pub_yellow_sdk_test_key' });

        window.Yellow.pay({
            amount: total,
            currency: 'USD',
            onSuccess: (response) => {
                console.log('Payment successful:', response.transactionId);
                clearCart();
                navigate('/order-success');
            },
            onError: (error) => {
                alert(`Payment failed: ${error.message}`);
                setIsProcessing(false);
            },
            onClose: () => {
                console.log('Payment widget closed.');
                setIsProcessing(false);
            }
        });
    };

    if (cartItems.length === 0) {
        return (
            <div className="text-center py-20 max-w-2xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-slate-800">No order to pay for.</h1>
                 <Link to="/" className="mt-6 inline-block bg-amber-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-amber-700 transition duration-300">
                    Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-amber-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Payment Method */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-slate-900 border-b pb-4">Payment Method</h2>
                        <div className="mt-6">
                            {!showPaymentMethods ? (
                                <>
                                <p className="text-slate-600 mb-4">You will be redirected to our secure payment partner to complete your purchase.</p>
                                <button 
                                    onClick={handleInitiatePayment} 
                                    className="w-full bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition duration-300 text-lg shadow-md flex items-center justify-center gap-2"
                                >
                                    <YellowIcon className="w-6 h-6" />
                                    Proceed to Payment
                                </button>
                                </>
                            ) : (
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-slate-800">Select a payment method</h3>
                                    <button onClick={handlePayment} disabled={isProcessing} className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-slate-300 rounded-lg hover:bg-slate-100 transition disabled:bg-slate-200 disabled:cursor-not-allowed">
                                        <CreditCardIcon className="w-6 h-6" />
                                        <span className="font-semibold">{isProcessing ? 'Processing...' : 'Pay with Card'}</span>
                                    </button>
                                    <button onClick={handlePayment} disabled={isProcessing} className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-slate-300 rounded-lg hover:bg-slate-100 transition disabled:bg-slate-200 disabled:cursor-not-allowed">
                                        <PayPalIcon className="w-6 h-6" />
                                        <span className="font-semibold">{isProcessing ? 'Processing...' : 'Pay with PayPal'}</span>
                                    </button>
                                    <button onClick={handlePayment} disabled={isProcessing} className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-slate-300 rounded-lg hover:bg-slate-100 transition disabled:bg-slate-200 disabled:cursor-not-allowed">
                                        <GooglePayIcon className="w-6 h-6" />
                                        <span className="font-semibold">{isProcessing ? 'Processing...' : 'Pay with Google Pay'}</span>
                                    </button>
                                </div>
                            )}

                            <div className="flex items-center justify-center mt-4 text-sm text-slate-500">
                                <LockIcon className="w-4 h-4 mr-1"/>
                                <span>Secure Payment</span>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                     <div className="bg-white p-8 rounded-lg shadow-md h-fit">
                        <h2 className="text-2xl font-bold text-slate-900 border-b pb-4">Order Summary</h2>
                         <ul className="divide-y divide-slate-200 mt-6">
                            {cartItems.map(item => (
                                <li key={item.id} className="flex py-4">
                                    <img src={item.imageUrl} alt={item.name} className="h-16 w-16 object-cover rounded-md flex-shrink-0" />
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

export default PaymentPage;