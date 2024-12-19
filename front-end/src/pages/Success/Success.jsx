import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center">
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
                d="M9 12l2 2 4-4m-6 4V7m0 0L7 9m2-2h.01M7 20h10a2 2 0 002-2v-4a2 2 0 00-2-2H7a2 2 0 00-2 2v4a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-green-600 mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-4">
          Thank you for your payment. Your transaction has been completed
          successfully.
        </p>
        <div className="bg-gray-100 rounded-lg p-4 text-left mb-4">
          <p className="text-gray-600">
            <span className="font-bold">Transaction ID:</span> TXN123456789
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Amount Paid:</span> $99.99
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
            to="/order"
            className="flex-1 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition text-center"
          >
            See Order
          </Link>
        </div>
        <p className="text-gray-500 text-sm mt-4">
          A confirmation email has been sent to your registered email address.
        </p>
      </div>
    </div>
  );
}
