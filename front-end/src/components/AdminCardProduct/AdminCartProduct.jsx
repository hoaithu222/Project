import { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import AdminEditProduct from "../AdminEditProduct/AdminEditProduct";

import displayVNDCurrency from "../../helpers/displayCurrent";

export default function AdminCartProduct({ data, fetchData }) {
  const [editProduct, setEditProduct] = useState(false);
  return (
    <>
      <div className="bg-white p-4 rounded-md">
        <div className="w-40 ">
          <div className="w-32 h-32 flex justify-center items-center ">
            <img
              src={data.productImage[0]}
              width={120}
              height={120}
              className="object-contain mx-auto h-full"
            />
          </div>
          <h1 className="text-ellipsis line-clamp-2">{data?.productName}</h1>
          <div>
            <p className="font-bold">{displayVNDCurrency(data.selling)}</p>
            <div
              className="w-fit ml-auto bg-green-300 hover:bg-green-500 p-2 rounded-full  hover:text-white cursor-pointer"
              onClick={() => setEditProduct(true)}
            >
              <MdModeEdit />
            </div>
          </div>
        </div>
        {editProduct && (
          <AdminEditProduct
            onClose={() => setEditProduct(false)}
            product={data}
            fetchData={fetchData}
          />
        )}
      </div>
    </>
  );
}
