import { useContext } from "react";
import addToCard from "../../helpers/addToCart";
import Context from "../../context";
import { Link } from "react-router-dom";
import scrollTop from "../../helpers/scrollTop";
import displayVNDCurrency from "../../helpers/displayCurrent";
import colors from "../../styles/custom";

export default function VerticalProduct({ loading, data = [] }) {
  const loadingList = new Array(13).fill(null);
  const { fetchUserAddToCard } = useContext(Context);

  const handleAddToCart = async (e, id) => {
    await addToCard(e, id);
    fetchUserAddToCard();
  };

  return (
    <div>
      <div className="flex  flex-wrap justify-center md:justify-between gap-2  md:gap-4 overflow-x-scroll scroll-none  transition-all">
        {loading
          ? loadingList.map((product, index) => {
              return (
                <div
                  className="w-full min-w-[280px]  md:min-w-[320px] max-w-[280px] md:max-w-[320px]  bg-white rounded-sm shadow "
                  key={index}
                >
                  <div className="bg-slate-200 h-48 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center animate-pulse"></div>
                  <div className="p-4 grid gap-3">
                    <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black p-1 py-2 animate-pulse rounded-full bg-slate-200"></h2>
                    <p className="capitalize text-slate-500 p-1 animate-pulse rounded-full bg-slate-200  py-2"></p>
                    <div className="flex gap-3">
                      <p className="text-red-600 font-medium p-1 animate-pulse rounded-full bg-slate-200 w-full  py-2"></p>
                      <p className="text-slate-500 line-through p-1 animate-pulse rounded-full bg-slate-200 w-full  py-2"></p>
                    </div>
                    <button className="text-sm  text-white px-3  rounded-full bg-slate-200  py-2 animate-pulse"></button>
                  </div>
                </div>
              );
            })
          : data.map((product, index) => {
              return (
                <Link
                  to={"/product/" + product?._id}
                  className="w-full min-w-[180px]  md:min-w-[240px] max-w-[180px] md:max-w-[240px]  bg-white rounded-sm shadow "
                  onClick={scrollTop}
                  key={index}
                >
                  <div
                    className={`h-80 p-4 min-w-[175px] md:min-w-[230px] flex justify-center items-center`}
                  >
                    <img
                      src={product?.productImage[0]}
                      className={`object-scale-down h-full w-full hover:scale-110 transition-all mix-blend-multiply  ${colors.gradients.blueToPink}`}
                    />
                  </div>
                  <div className="p-4 grid gap-3">
                    <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black">
                      {product?.productName}
                    </h2>
                    <p className="capitalize text-slate-500">
                      {product?.category}
                    </p>
                    <div className="flex gap-3">
                      <p className="text-red-600 font-medium">
                        {displayVNDCurrency(product?.selling)}
                      </p>
                      <p className="text-slate-500 line-through">
                        {displayVNDCurrency(product?.price)}
                      </p>
                    </div>
                    <button
                      className={`${colors.button.gradientFrostToFlame}`}
                      onClick={(e) => handleAddToCart(e, product?._id)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
}
