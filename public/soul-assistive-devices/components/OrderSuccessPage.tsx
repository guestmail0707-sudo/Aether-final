
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircleIcon } from './Icons';

const OrderSuccessPage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto text-center py-20 px-4">
                <CheckCircleIcon className="h-20 w-20 text-green-500 mx-auto mb-4" />
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Thank you for your order!</h1>
                <p className="text-lg text-slate-600 mt-4">Your payment was successful and your order is being processed. You will receive a confirmation email shortly.</p>
                <p className="text-sm text-slate-500 mt-6">You will be redirected to the homepage in 5 seconds...</p>
                <Link to="/" className="mt-8 inline-block bg-amber-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-amber-700 transition duration-300">
                    Go to Homepage
                </Link>
            </div>
        </div>
    );
};

export default OrderSuccessPage;