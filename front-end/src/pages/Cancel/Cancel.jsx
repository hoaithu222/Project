import React from "react";
import { Link } from "react-router-dom";

export default function Cancelled() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-red-600 mb-2">
          Payment Cancelled
        </h1>
        <p className="text-gray-600 mb-4">
          Your payment has been cancelled. If this was a mistake, you can try
          again or contact support for further assistance.
        </p>
        <div className="bg-gray-100 rounded-lg p-4 text-left mb-4">
          <p className="text-gray-600">
            <span className="font-bold">Transaction ID:</span> TXN987654321
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Amount:</span> $99.99
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Payment Method:</span> Credit Card
          </p>
        </div>
        <div className="flex justify-between gap-4">
          {/* Nút Back */}
          <Link
            to="/"
            className="flex-1 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 transition text-center"
          >
            &larr; Back
          </Link>
          {/* Nút Retry Payment */}
          <Link
            to="/cart"
            className="flex-1 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition text-center"
          >
            Go To Cart
          </Link>
        </div>
        <p className="text-gray-500 text-sm mt-4">
          If you need help, please contact our customer support.
        </p>
      </div>
    </div>
  );
}
