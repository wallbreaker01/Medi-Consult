import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const PaymentSuccess = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Since payment is successful, we remove the local storage flag.
        // The backend should now have a payment record, and the next API call will reflect that.
        localStorage.removeItem(`payment_initiated_${id}`);
        toast.success("Payment successful!");

        // Redirect back to the appointments page after a short delay
        const timer = setTimeout(() => {
            navigate('/infoform');
        }, 3000); 

        return () => clearTimeout(timer);
    }, [id, navigate]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-green-100">
            <h1 className="text-4xl text-green-600 font-bold mb-4">Payment Successful ✅</h1>
            
        </div>
    );
};

export default PaymentSuccess;