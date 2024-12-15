import { useEffect, useRef, useState } from "react";

import getCategoryWishProduct from "../../helpers/fetchCategoryWishProduct";
import colors from "../../styles/custom";
import displayVNDCurrency from "../../helpers/displayCurrent";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function VerticalCardProduct({ category, heading }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadingList = new Array(13).fill(null);
  const [scroll, setScroll] = useState(0);
  const scrollElement = useRef();
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
    <div className={`container mx-auto px-4 py-6 bg-white  relative`}>
      <h2 className="text-3xl font-semibold py-2">{heading}</h2>
      <div
        className="flex items-center gap-4 md:gap-6 overflow-scroll scroll-none  transition-all"
        ref={scrollElement}
      >
        <button
          className={`${colors.button.btnVioletYellow} absolute left-0  hidden md:block`}
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
        {data?.map((product, index) => {
          return (
            <div
              className={`w-full min-w-[280px] bg-white md:min-w-[360px]  max-w-[280px] md:max-w-[360px] h-36  shadow-lg p-1 ${colors.gradients.tealToPurple} rounded-sm  `}
              key={index + 1}
            >
              <div className="bg-white h-full min-w-[120px] md:min-w-[145px] flex ">
                <img
                  src={product.productImage[0]}
                  alt=""
                  className="object-scale-down h-full hover:scale-105 bg-slate-200 transition-transform"
                />
                <div className="p-2">
                  <h2 className="font-semibold text-base md:text-lg text-ellipsis line-clamp-1">
                    {product.productName}
                  </h2>
                  <p className="capitalize text-gray-400 ">
                    {product.category}
                  </p>
                  <div className="flex gap-3 ">
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
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
