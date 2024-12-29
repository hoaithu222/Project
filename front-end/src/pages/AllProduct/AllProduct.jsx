import { useEffect, useState } from "react";
import UploadProduct from "../../components/UploadProduct/UploadProduct";
import colors from "../../styles/custom";
import SummaryApi from "../../common";
import { toast } from "react-toastify";
import AdminCartProduct from "../../components/AdminCardProduct/AdminCartProduct";
import Loading from "../Loading";

export default function AllProduct() {
  const [openUpLoadProduct, setOpenUpLoadProduct] = useState(false);
  const [allProduct, setAllProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchAllProduct = async () => {
    setLoading(true);
    const response = await fetch(SummaryApi.getProduct.url, {
      method: SummaryApi.getProduct.method,
    });
    const data = await response.json();
    if (data.success) {
      // toast.success(data?.message);
      setAllProduct(data?.data);
    }
    if (data.error) {
      toast.error(data.message);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchAllProduct();
  }, []);

  return (
    <div>
      <div className="bg-white py-2 px-4 flex justify-between items-center relative">
        <h2 className="font-bold text-lg">All Product</h2>
        <button
          className={`${colors.button.gradientVioletYellow}`}
          onClick={() => setOpenUpLoadProduct(true)}
        >
          Upload Product
        </button>
      </div>
      {/* all product  */}
      <div className="flex gap-2 flex-wrap justify-between py-4 h-[calc(100vh-190px)] overflow-y-scroll p-3">
        {allProduct?.map((product) => {
          return (
            <AdminCartProduct
              data={product}
              key={product._id}
              fetchData={fetchAllProduct}
            />
          );
        })}
      </div>
      {/* upload product component */}
      {openUpLoadProduct && (
        <UploadProduct
          onClose={() => setOpenUpLoadProduct(false)}
          onLoad={() => fetchAllProduct()}
        />
      )}
      {loading ? <Loading /> : ""}
    </div>
  );
}
