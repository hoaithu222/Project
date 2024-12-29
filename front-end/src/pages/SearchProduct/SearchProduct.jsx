import { useLocation } from "react-router-dom";
import SummaryApi from "../../common";
import { useEffect, useState, useCallback } from "react";
import VerticalProduct from "../../components/VerticalProduct/VerticalProduct";
import Loading from "../Loading";

// Hàm debounce tự viết
function debounce(func, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

export default function SearchProduct() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const query = useLocation();

  // Debounced fetchData
  const fetchData = useCallback(
    debounce(async (searchQuery) => {
      if (!searchQuery) return; // Tránh gọi API khi không có từ khóa
      setLoading(true);
      const response = await fetch(SummaryApi.searchProduct.url + searchQuery);
      const dataResponse = await response.json();
      if (dataResponse.success) {
        setLoading(false);
        setData(dataResponse.data);
      }
    }, 500), // 500ms delay
    []
  );

  useEffect(() => {
    fetchData(query.search);
  }, [query, fetchData]);

  return (
    <div className="container mx-auto p-4">
      {loading && (
        <div>
          <p className="text-lg text-center">Loading</p>
        </div>
      )}
      <p>Search Result: {data.length}</p>
      {data.length === 0 && !loading && (
        <p className="bg-white text-red-300 text-center">
          Không tìm thấy sản phẩm thỏa mãn
        </p>
      )}
      {data.length !== 0 && !loading && (
        <VerticalProduct loading={loading} data={data} />
      )}
      {loading && <Loading />}
    </div>
  );
}
