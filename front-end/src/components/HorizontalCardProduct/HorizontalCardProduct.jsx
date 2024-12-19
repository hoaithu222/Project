import { useContext, useEffect, useRef, useState } from "react";

import getCategoryWishProduct from "../../helpers/fetchCategoryWishProduct";
import colors from "../../styles/custom";
import displayVNDCurrency from "../../helpers/displayCurrent";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import addToCard from "../../helpers/addToCart";
import Context from "../../context";
import scrollTop from "../../helpers/scrollTop";

export default function HorizontalCardProduct({ category, heading }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadingList = new Array(13).fill(null);
  const scrollElement = useRef();
  const { fetchUserAddToCard } = useContext(Context);

  const fetchData = async () => {
    setLoading(true);
    const dataProduct = await getCategoryWishProduct(category);
    console.log(dataProduct);
    setData(dataProduct?.data);
    setLoading(false);
  };

  const scrollRight = () => {
    scrollElement.current.scrollLeft += 300;
  };

  const scrollLeft = () => {
    scrollElement.current.scrollLeft -= 300;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className={`container mx-auto px-4 py-6 bg-white relative cursor-pointer`}
    >
      <h2 className="text-3xl font-semibold py-2">{heading}</h2>
      <div
        className="flex items-center gap-4 md:gap-6 overflow-scroll scroll-none transition-all"
        ref={scrollElement}
      >
        <button
          className={`${colors.button.btnVioletYellow} absolute left-0 hidden md:block`}
          onClick={scrollLeft}
        >
          <FaChevronLeft />
        </button>
        <button
          className={`${colors.button.btnVioletYellow} absolute right-0 z-12 hidden md:block`}
          onClick={scrollRight}
        >
          <FaChevronRight />
        </button>

        {loading
          ? loadingList.map((_, index) => (
              <div
                key={index}
                className="w-full min-w-[280px] bg-gray-100 md:min-w-[360px] max-w-[280px] md:max-w-[360px] h-36 shadow-lg p-1 animate-pulse rounded-lg "
              >
                <div className="bg-gray-200 h-full w-full flex flex-col gap-2 p-4">
                  <div className="h-16 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                </div>
              </div>
            ))
          : data?.map((product, index) => {
              return (
                <Link
                  to={`product/${product._id}`}
                  className={`w-full min-w-[280px] bg-white md:min-w-[360px] max-w-[280px] md:max-w-[360px] h-36 shadow-lg p-1 ${colors.gradients.cyanToIndigo} rounded-lg `}
                  onClick={scrollTop}
                  key={index + 1}
                >
                  <div className="bg-white h-full min-w-[120px] md:min-w-[145px] flex">
                    <img
                      src={product.productImage[0]}
                      alt=""
                      className="object-scale-down h-full hover:scale-105 bg-slate-200 transition-transform"
                    />
                    <div className="p-2">
                      <h2 className="font-semibold text-base md:text-lg text-ellipsis line-clamp-1">
                        {product.productName}
                      </h2>
                      <p className="capitalize text-gray-400">
                        {product.category}
                      </p>
                      <div className="flex gap-3">
                        <p className="text-red-600 font-semibold">
                          {displayVNDCurrency(product.selling)}
                        </p>
                        <p className="text-slate-500 line-through">
                          {displayVNDCurrency(product.price)}
                        </p>
                      </div>
                      <div className="py-2">
                        <button
                          className={`${colors.button.btngradientFrostToFlame}`}
                          onClick={async (e) => {
                            await addToCard(e, product._id);
                            fetchUserAddToCard();
                          }}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
}
