import { IoClose } from "react-icons/io5";

export default function DisplayImage({ imgUrl, onClose }) {
  return (
    <div className="fixed bottom-0 left-0 top-15 right-0 justify-center items-center ">
      <div className="bg-white shadow-lg rounded-md max-w-4xl mx-auto p-4">
        <button
          onClick={onClose}
          className="w-fit block text-4xl hover:text-red-500 cursor-pointer ml-auto "
        >
          <IoClose />
        </button>
        <div className="flex justify-center items-center max-w-[80vh] p-4 max-h-[80vh]">
          <img src={imgUrl} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
