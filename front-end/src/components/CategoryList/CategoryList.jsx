import { useEffect, useState } from "react";
import SummaryApi from "../../common";
import colors from "../../styles/custom";
import { Link } from "react-router-dom";
import img01 from "../../assest/cv.png";
import img02 from "../../assest/quan.png";
import img03 from "../../assest/ao.png";
import img04 from "../../assest/ak.png";
import img05 from "../../assest/vay.png";
import "./style.css";

export default function CategoryList() {
  const [categoryProducts, setCategoryProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const image = [img01, img02, img03, img04, img05];

  const getCategory = async () => {
    setLoading(true);
    try {
      const response = await fetch(SummaryApi.getCategoryProduct.url, {
        method: SummaryApi.getCategoryProduct.method,
      });
      const data = await response.json();
      if (data.success) {
        setCategoryProduct(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch categories", error);
    } finally {
      setLoading(false);
    }
  };

  const categoryLoading = new Array(5).fill(null);

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="container mx-auto p-4 flex justify-center">
      <div className="flex items-center gap-10 overflow-x-auto scroll-none">
        {loading
          ? categoryLoading.map((_, index) => (
              <div
                className="h-16 w-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-gradient-to-r from-blue-200 to-pink-200 animate-pulse"
                key={"categoryLoading" + index}
              ></div>
            ))
          : categoryProducts?.map((product, index) => (
              <Link
                key={index}
                className="flex flex-col items-center cursor-pointer group"
                to={"/product-category?category=" + product?.category}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-4 bg-gradient-to-br from-indigo-300 via-pink-300 to-purple-300 shadow-md transition-transform group-hover:scale-11 category-item">
                  <img
                    src={image[index]}
                    alt={product.category}
                    className="category-image"
                  />
                </div>
                <h2
                  className={`${colors.textColors.blueToPink} bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-sm md:text-base capitalize font-semibold mt-2 group-hover:text-pink-600`}
                >
                  {product.category}
                </h2>
              </Link>
            ))}
      </div>
    </div>
  );
}
