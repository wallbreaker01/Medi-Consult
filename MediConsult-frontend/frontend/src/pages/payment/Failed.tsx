import React from "react";
import { useParams } from "react-router-dom";

export default function PaymentFailed() {
  const { id } = useParams();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="rounded-md shadow-md border">
        <div className="p-6 text-center">
          <h1 className="text-2xl font-bold mb-4">Payment Failed!</h1>
          <p className="text-gray-700 mb-4">
            Your payment for appointment ID:{" "}
            <span className="font-semibold">{id}</span> has been unsuccessful.
          </p>
          <p className="text-gray-600">Please Try Again</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-b-md">
          <a href="/" className="text-blue-500 hover:underline">
            Go back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
