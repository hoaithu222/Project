import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SummaryApi from "../../common";
import colors from "../../styles/custom";
import { FaStar, FaStarHalf } from "react-icons/fa";
import displayVNDCurrency from "../../helpers/displayCurrent";
import VerticalCardProduct from "../../components/VerticalCardProduct/VerticalCardProduct";
import addToCard from "../../helpers/addToCart";
import Context from "../../context";

export default function ProductDetails() {
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    description: "",
    price: "",
    productImage: [],
    selling: "",
  });
  const { fetchUserAddToCard } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState("0");
  const [zoomImageCoordinate, setZoomImageCoordinate] = useState({
    x: 0,
    y: 0,
  });
  const [zoomImage, setZoomImage] = useState(false);
  const { id } = useParams();
  console.log(id);
  const productImageListLoading = new Array(data.productImage.length).fill(
    null
  );
  const fetchProductDetails = async () => {
    setLoading(true);
    const response = await fetch(SummaryApi.getProductDetail.url, {
      method: SummaryApi.getProductDetail.method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ productId: id }),
    });
    const dataResponse = await response.json();
    setLoading(false);
    setData(dataResponse?.data);
    setActiveImage(dataResponse.data.productImage[0]);
  };
  const handleMouseEnterProduct = (imgURL) => {
    setActiveImage(imgURL);
  };
  useEffect(() => {
    fetchProductDetails();
  }, [id]);
  const handleZoomImage = useCallback(
    (e) => {
      setZoomImage(true);
      const { left, top, width, height } = e.target.getBoundingClientRect();
      console.log("coordinate", left, top, width, height);

      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      setZoomImageCoordinate({
        x,
        y,
      });
    },
    [zoomImageCoordinate]
  );
  console.log(data?.category);
  const handleLeaveImageZoom = () => {
    setZoomImage(false);
  };
  return (
    <div className="container mx-auto p-4 mt-7 pb-14">
      <div className="min-h-[200px] flex flex-col lg:flex-row gap-10 ">
        {/* product Image */}
        <div className="h-96 flex flex-col lg:flex-row-reverse gap-4 relative">
          <div className="h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-200">
            <img
              src={activeImage}
              alt=""
              className="w-full h-full object-scale-down mix-blend-multiply"
              onMouseMove={handleZoomImage}
              onMouseLeave={handleLeaveImageZoom}
            />
            {/* product zoom */}
            {zoomImage && (
              <div className="hidden lg:block absolute min-w-[500px] overflow-hidden min-h-[400px] bg-slate-200 p-1 -right-[510px] top-0">
                <div
                  className="w-full h-full min-h-[400px] min-w-[500px] mix-blend-multiply scale-150"
                  style={{
                    background: `url(${activeImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: `${zoomImageCoordinate.x * 100}% ${
                      zoomImageCoordinate.y * 100
                    }% `,
                  }}
                ></div>
              </div>
            )}
          </div>
          <div className="h-full ">
            {loading ? (
              <div className="flex gap-2 lg:flex-col overflow-scroll scroll-none h-full">
                {productImageListLoading.map((el, index) => {
                  return (
                    <div
                      className="h-24 w-24 bg-slate-200 rounded animate-pulse"
                      key={"loangImage" + index}
                    ></div>
                  );
                })}
              </div>
            ) : (
              <div className="flex gap-2 lg:flex-col overflow-scroll scroll-none h-full">
                {data?.productImage?.map((imgURL, index) => {
                  return (
                    <div
                      className="h-24 w-24 bg-slate-200 rounded p-1"
                      key={imgURL + index}
                    >
                      <img
                        src={imgURL}
                        className="w-full h-full object-scale-down mix-blend-multiply cursor-pointer"
                        onMouseEnter={() => handleMouseEnterProduct(imgURL)}
                        onClick={() => handleMouseEnterProduct(imgURL)}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        {/* Product detail */}
        {loading ? (
          <div className="grid gap-6 w-full p-4 bg-white rounded-lg shadow-md">
            {/* Placeholder Line */}
            <p className="bg-gray-300 animate-pulse h-6 lg:h-8 w-full rounded-full mt-2"></p>

            {/* Title Placeholder */}
            <h2 className="text-2xl lg:text-4xl font-semibold bg-gray-300 animate-pulse h-4  rounded w-full"></h2>

            {/* Subtitle Placeholder */}
            <p className="capitalize text-gray-400 bg-gray-300 animate-pulse h-4 lg:h-6 w-2/3 rounded"></p>

            {/* Info Section */}
            <div className="flex items-center gap-2 text-red-600 bg-gray-300 animate-pulse h-4 lg:h-6 rounded w-1/3"></div>

            {/* Price Section */}
            <div className="flex items-center gap-3 text-2xl lg:text-3xl font-semibold my-2">
              <p className="text-red-500 bg-gray-300 animate-pulse h-4 lg:h-6 rounded w-3/4"></p>
              <p className="text-gray-400 line-through bg-gray-300 animate-pulse h-4 lg:h-6 rounded w-3/4"></p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4 my-4">
              <button className="h-8 lg:h-10 bg-gray-300 animate-pulse rounded w-3/4"></button>
              <button className="h-8 lg:h-10 bg-gray-300 animate-pulse rounded w-3/4"></button>
            </div>

            {/* Description Section */}
            <div className="w-full space-y-2">
              <p className="text-gray-600 font-medium bg-gray-300 animate-pulse h-6 lg:h-8 rounded-full"></p>
              <p className="bg-gray-300 animate-pulse h-10 lg:h-24 rounded-sm"></p>
            </div>
          </div>
        ) : (
          <div className="mx-7 flex flex-col gap-2 ">
            <p className={`${colors.button.gradientBluePink} w-fit`}>
              BrandName
            </p>
            <h2 className="text-3xl font-bold lg:text-4xl ">
              {data.productName}
            </h2>
            <p className="capitalize text-slate-400">{data.category}</p>
            <div className="flex items-center text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
            <div className="flex gap-3 items-center my-1 lg:text-3xl">
              <p className="text-red-400 font-semibold">
                {displayVNDCurrency(data.selling)}
              </p>
              <p className="text-gray-300 line-through">
                {displayVNDCurrency(data.price)}
              </p>
            </div>
            <div className="flex gap-4">
              <button className={`${colors.button.gradientFireGlow}`}>
                Buy
              </button>
              <button
                className={`${colors.button.gradientFrostToFlame}`}
                onClick={async (e) => {
                  await addToCard(e, id);
                  fetchUserAddToCard();
                }}
              >
                Add To Card
              </button>
            </div>
            <div>
              <p className="text-slate-600 font-medium my-1">Description:</p>
              <p className="text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
                impedit quasi aut fugit ad iste sequi cum itaque aliquam! Natus,
                id et! Veniam recusandae et porro earum placeat tenetur
                laboriosam voluptates facilis quibusdam aperiam! Eius vitae et,
                aliquid accusantium minus neque blanditiis in corrupti, ratione
                vero tempora temporibus modi ullam accusamus iste quasi
                praesentium omnis nulla suscipit asperiores! Quisquam explicabo
                dolores repudiandae. Magni velit, provident non in reprehenderit
                possimus exercitationem excepturi laudantium itaque error
                dignissimos tempora a deserunt, ullam impedit nihil! Modi
                deserunt tempore blanditiis fugit aliquam consequuntur tenetur,
                rem eaque, dolores jkjdk
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="mt-4 ">
        {data?.category && (
          <VerticalCardProduct
            category={`${data.category}`}
            heading={"Recommended Product"}
          />
        )}
      </div>
    </div>
  );
}
