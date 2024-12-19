import { useContext, useEffect, useState } from "react";
import colors from "../../styles/custom";
import SummaryApi from "../../common";
import { FcShipped } from "react-icons/fc";
import Context from "../../context";
import displayVNDCurrency from "../../helpers/displayCurrent";
import { MdDelete } from "react-icons/md";
import { loadStripe } from "@stripe/stripe-js";

export default function Cart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const context = useContext(Context);
  const loadingCart = new Array(4).fill(null);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(SummaryApi.addToCardViewProduct.url, {
      method: SummaryApi.addToCardViewProduct.method,
      credentials: "include",
    });
    const dataResponse = await response.json();
    if (dataResponse.success) {
      setLoading(false);
      setData(dataResponse.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const increment = async (id, qty) => {
    const response = await fetch(SummaryApi.updateCardProduct.url, {
      method: SummaryApi.updateCardProduct.method,
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
        quantity: qty + 1,
      }),
    });

    const dataResponse = await response.json();
    if (dataResponse.success) {
      fetchData();
    }
  };

  const decrement = async (id, qty) => {
    if (qty >= 2) {
      const response = await fetch(SummaryApi.updateCardProduct.url, {
        method: SummaryApi.updateCardProduct.method,
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          _id: id,
          quantity: qty - 1,
        }),
      });

      const dataResponse = await response.json();
      if (dataResponse.success) {
        fetchData();
      }
    }
  };

  const deleteCartProduct = async (id) => {
    const response = await fetch(SummaryApi.deleteCardProduct.url, {
      method: SummaryApi.deleteCardProduct.method,
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
      }),
    });

    const dataResponse = await response.json();
    if (dataResponse.success) {
      fetchData();
      context.fetchUserAddToCard();
    }
  };

  const totalQty = data.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity,
    0
  );

  const totalPrice = data.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.quantity * currentValue?.productId?.selling,
    0
  );

  const handlePayment = async () => {
    const stripePromise = await loadStripe(import.meta.env.VITE_PUBLIC_KEY);
    const response = await fetch(SummaryApi.payment.url, {
      method: SummaryApi.payment.method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartItems: data }),
    });
    const responseData = await response.json();
    if (responseData?.id) {
      stripePromise.redirectToCheckout({ sessionId: responseData.id });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        {data.length === 0 && !loading && (
          <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
            <p className="text-gray-500 text-lg">No items in your cart</p>
          </div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-8 w-full">
        {/* Product List */}
        <div className="w-full lg:w-2/3">
          {loading
            ? loadingCart?.map((el, index) => (
                <div
                  key={el + "Add To Cart Loading" + index}
                  className="w-full bg-gray-100 h-40 mb-4 rounded-lg shadow-sm animate-pulse"
                ></div>
              ))
            : data.map((product) => (
                <div
                  key={product?._id}
                  className={`${colors.gradients.blueToPink} p-2 `}
                >
                  <div
                    className={`w-full bg-white mb-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 grid grid-cols-[128px,1fr] overflow-hidden `}
                  >
                    <div className="w-32 h-40 bg-gray-50 p-2 flex items-center justify-center">
                      <img
                        src={product?.productId?.productImage[0]}
                        className="w-full h-full object-contain mix-blend-multiply"
                        alt={product?.productId?.productName}
                      />
                    </div>
                    <div className="p-6 relative flex flex-col justify-between">
                      {/* Delete Button */}
                      <button
                        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors duration-200"
                        onClick={() => deleteCartProduct(product?._id)}
                      >
                        <MdDelete className="w-6 h-6" />
                      </button>

                      {/* Product Info */}
                      <div>
                        <h2 className="text-lg font-medium text-gray-800 line-clamp-1">
                          {product?.productId?.productName}
                        </h2>
                        <p className="text-sm text-gray-500 capitalize mt-1">
                          {product?.productId.category}
                        </p>
                      </div>

                      {/* Price and Quantity */}
                      <div className="mt-4">
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-red-600 font-medium">
                            {displayVNDCurrency(product?.productId?.selling)}
                          </p>
                          <p className="text-gray-800 font-medium">
                            {displayVNDCurrency(
                              product?.productId?.selling * product?.quantity
                            )}
                          </p>
                        </div>

                        <div className="flex items-center gap-4">
                          <button
                            className="w-8 h-8 rounded-full border-2 border-gray-300 text-gray-600 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-colors duration-200"
                            onClick={() =>
                              decrement(product?._id, product?.quantity)
                            }
                            disabled={product?.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="font-medium text-gray-800 w-8 text-center">
                            {product?.quantity}
                          </span>
                          <button
                            className="w-8 h-8 rounded-full border-2 border-gray-300 text-gray-600 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-colors duration-200"
                            onClick={() =>
                              increment(product?._id, product?.quantity)
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {/* Summary Card */}
        {data.length !== 0 && (
          <div className="w-full lg:w-1/3">
            {loading ? (
              <div className="h-64 bg-gray-100 rounded-lg shadow-sm animate-pulse"></div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm sticky top-4">
                <h2
                  className={`text-lg font-medium text-white bg-gradient-to-r from-red-500 to-green-400 px-6 py-4 rounded-t-lg`}
                >
                  Order Summary
                </h2>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-gray-600">
                    <p>Total Items</p>
                    <p className="font-medium">{totalQty}</p>
                  </div>

                  <div className="flex items-center justify-between text-gray-600">
                    <p>Total Price</p>
                    <p className="font-medium">
                      {displayVNDCurrency(totalPrice)}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <button
                      className={`w-full ${colors.gradients.cyanToIndigo} text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200`}
                      onClick={handlePayment}
                    >
                      Proceed to Payment
                    </button>
                    <div className="flex gap-3 items-center mt-5">
                      <FcShipped className="text-4xl" />
                      <p className="text-center text-sm text-green-400 mt-4">
                        Free shipping on all orders
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
