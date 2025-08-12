import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const PaymentFailed = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Clear the local storage flag for this specific appointment ID
        localStorage.removeItem(`payment_initiated_${id}`);
        toast.error("Payment failed. Please try again.");

        // Redirect back to the appointments page after a short delay
        const timer = setTimeout(() => {
            navigate('/my-appointments');
        }, 3000); 

        return () => clearTimeout(timer);
    }, [id, navigate]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-red-100">
            <h1 className="text-4xl text-red-600 font-bold mb-4">Payment Failed ❌</h1>
            <p className="text-lg text-gray-700">Redirecting to your appointments page...</p>
        </div>
    );
};

export default PaymentFailed;