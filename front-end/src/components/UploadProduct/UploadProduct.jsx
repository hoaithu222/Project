import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaCloudUploadAlt } from "react-icons/fa";
import productCategory from "../../helpers/productCategory";

import uploadImage from "../../helpers/uploadImage";
import colors from "../../styles/custom";
import DisplayImage from "../DisplayImage/DisplayImage";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";
import SummaryApi from "../../common";

export default function UploadProduct({ onClose, onLoad }) {
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    selling: "",
  });
  console.log(data);
  const [openFullScreen, setOpenFullScreen] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState("");

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleUploadProduct = async (e) => {
    const file = e.target.files[0];

    const uploadImageCloudinary = await uploadImage(file);
    setData((preve) => {
      return {
        ...preve,
        productImage: [...preve.productImage, uploadImageCloudinary.secure_url],
      };
    });
  };
  const handleDeleteImage = async (img) => {
    setData((preve) => {
      return {
        ...preve,
        productImage: preve.productImage.filter((image) => image !== img),
      };
    });
  };
  /**/
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const response = await fetch(SummaryApi.uploadProduct.url, {
      method: SummaryApi.uploadProduct.method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const dataResponse = await response.json();
    if (dataResponse.success) {
      setData({
        productName: "",
        brandName: "",
        category: "",
        productImage: "",
        description: "",
        price: "",
        selling: "",
      });
      onClose(); // Đóng popup sau khi submit
      onLoad();
      toast.success(dataResponse.message);
    }
    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };

  return (
    <div className="fixed w-full h-full top-0 left-0 bg-slate-700 bg-opacity-30 flex justify-center items-center overflow-scroll">
      <div className="bg-white py-4 px-6 rounded-lg w-full max-w-2xl overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg">Upload Product</h2>
          <button onClick={onClose}>
            <IoClose className="text-2xl hover:text-red-500 cursor-pointer" />
          </button>
        </div>
        <form
          className="grid gap-4 overflow-scroll h-full pb-3 pr-3"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="productName" className="block font-medium">
              Product Name:
            </label>
            <input
              type="text"
              name="productName"
              id="productName"
              placeholder="Enter product name"
              value={data.productName}
              onChange={handleChange}
              className="w-full bg-slate-200 p-2 rounded-lg outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="brandName" className="block font-medium">
              Brand Name:
            </label>
            <input
              type="text"
              name="brandName"
              id="brandName"
              placeholder="Enter brand name"
              value={data.brandName}
              onChange={handleChange}
              className="w-full bg-slate-200 p-2 rounded-lg  outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="category" className="block font-medium">
              Category:
            </label>
            <select
              value={data.category}
              onChange={handleChange}
              id="category"
              className="w-full bg-slate-200 p-2 rounded-lg"
              name="category"
              required
            >
              <option value="">Select Category</option>
              {productCategory.map((category, index) => (
                <option value={category.value} key={index}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="productImage" className="block font-medium ">
              Product Image (URL):
            </label>
            <label htmlFor="productImage">
              <div className="p-2 bg-slate-200 rounded-lg h-32 w-full flex justify-center items-center cursor-pointer">
                <div className="text-slate-500 flex justify-center items-center flex-col gap-2">
                  <span className="text-4xl">
                    <FaCloudUploadAlt />
                  </span>
                  <p className="text-sm">Upload Product Image</p>
                  <input
                    type="file"
                    id="productImage"
                    name="productImage"
                    className="hidden"
                    onChange={handleUploadProduct}
                  />
                </div>
              </div>
            </label>
            <div
              className={`flex p-1 ${colors.gradients.blueToPink} mt-1 rounded-lg gap-1 items-center`}
            >
              {data?.productImage[0] ? (
                data.productImage.map((image, index) => {
                  return (
                    <div key={index} className="relative group">
                      <img
                        src={image}
                        width={80}
                        alt={80}
                        className="bg-slate-100 border cursor-pointer"
                        onClick={() => {
                          setFullScreenImage(image);
                          setOpenFullScreen(true);
                        }}
                      />
                      <div
                        className={`absolute text-2xl top-0 right-0 text-white p-0.5 rounded-full  cursor-pointer ${colors.gradients.orangeToRed} hidden group-hover:block`}
                        onClick={() => handleDeleteImage(image)}
                      >
                        <MdDeleteForever />
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-red-500 text-xs">
                  *Please Upload Product Image
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="price" className="block font-medium">
                Price:
              </label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Enter price"
                value={data.price}
                onChange={handleChange}
                className="w-full bg-slate-200 p-2 rounded-lg outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="selling" className="block font-medium">
                Selling:
              </label>
              <input
                type="number"
                name="selling"
                id="selling"
                placeholder="Enter selling price"
                value={data.selling}
                onChange={handleChange}
                className="w-full bg-slate-200 p-2 rounded-lg outline-none"
              />
            </div>
          </div>
          <div>
            <label htmlFor="description" className="block font-medium">
              Description:
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Enter product description"
              value={data.description}
              onChange={handleChange}
              className="w-full bg-slate-200 p-2 rounded-lg outline-none"
              rows="4"
            ></textarea>
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* display image full screen */}
      {openFullScreen && (
        <DisplayImage
          onClose={() => setOpenFullScreen(false)}
          imgUrl={fullScreenImage}
        />
      )}
    </div>
  );
}
