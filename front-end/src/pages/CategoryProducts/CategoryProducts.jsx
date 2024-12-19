import productCategory from "../../helpers/productCategory";
import { useEffect, useState } from "react";
import VerticalProduct from "../../components/VerticalProduct/VerticalProduct";
import SummaryApi from "../../common";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function CategoryProducts() {
  const params = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const urlSearch = new URLSearchParams(location.search);
  const urlCategoryListinArray = urlSearch.getAll("category");
  const urlCategoryListinObject = {};
  urlCategoryListinArray.forEach((el) => {
    urlCategoryListinObject[el] = true;
  });
  console.log("urlCategoryListinObject", urlCategoryListinObject);
  console.log("urlCategoryListinArray", urlCategoryListinArray);

  const [selectCategory, setSelectCategory] = useState(urlCategoryListinObject);
  const [filterCategory, setFilterCategory] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(SummaryApi.filterProduct.url, {
      method: SummaryApi.filterProduct.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: filterCategory,
      }),
    });
    const responseData = await response.json();
    setData(responseData?.data || []);
    setLoading(false);
    console.log(responseData);
  };
  console.log(data);

  const handleSelectCategory = (e) => {
    const { value, checked } = e.target;
    setSelectCategory((preve) => {
      return {
        ...preve,
        [value]: checked,
      };
    });
  };
  useEffect(() => {
    fetchData();
  }, [filterCategory]);
  useEffect(() => {
    const arrayOfCategory = Object.keys(selectCategory)
      .map((category) => {
        if (selectCategory[category]) {
          return category;
        }
        return null;
      })
      .filter((el) => el);
    setFilterCategory(arrayOfCategory);
    //format for url change when change on the checkbox
    const urlFormat = arrayOfCategory.map((el, index) => {
      if (arrayOfCategory.length - 1 === index) {
        return `category=${el}`;
      }
      return `category=${el}&&`;
    });

    navigate("/product-category?" + urlFormat.join(""));
  }, [selectCategory]);
  const handleOnChangeSortBy = (e) => {
    const { value } = e.target;

    setSortBy(value);

    if (value === "asc") {
      setData((preve) => preve.sort((a, b) => a.selling - b.selling));
    }

    if (value === "dsc") {
      setData((preve) => preve.sort((a, b) => b.selling - a.selling));
    }
  };

  useEffect(() => {}, [sortBy]);

  return (
    <div className="container mx-auto p-5 h-full">
      {/* Desktop */}
      <div className="hidden lg:grid grid-cols-[200px,1fr]">
        {/* left side */}
        <div className="bg-white p-2 min-h-[calc(100vh-120px)] flex flex-col gap-10">
          {/* sort by */}
          <div className="p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg overflow-hidden text-white mt-4">
            <h3 className="text-base uppercase font-medium text-purple-400 bg-white rounded-md text-center py-2">
              Sort By
            </h3>
            <form className="text-sm flex flex-col gap-2 py-2">
              <div className="flex items-center gap-3 p-3">
                <input
                  type="radio"
                  name="sortBy"
                  checked={sortBy === "asc"}
                  onChange={handleOnChangeSortBy}
                  value={"asc"}
                />
                <label>Price - Low to High</label>
              </div>
              <div className="flex items-center gap-3 p-3">
                <input
                  type="radio"
                  name="sortBy"
                  checked={sortBy === "dsc"}
                  onChange={handleOnChangeSortBy}
                  value={"dsc"}
                />
                <label>Price - High to Low</label>
              </div>
            </form>
          </div>
          {/* filter by */}
          <div className="p-[2px] bg-gradient-to-r from-red-400 to-blue-400 rounded-lg overflow-hidden text-white">
            <h3 className="text-base uppercase font-medium text-purple-400 bg-white rounded-md text-center py-2">
              CATEGORY
            </h3>
            <form className="text-sm flex flex-col gap-2 py-2">
              {productCategory.map((category, index) => {
                return (
                  <div
                    key={index + ":jksdkjs"}
                    className="flex items-center gap-4 p-3"
                  >
                    <input
                      type="checkbox"
                      name={"category"}
                      checked={selectCategory[category.value]}
                      id={category.value}
                      onChange={handleSelectCategory}
                      defaultValue={category?.value}
                    />
                    <label htmlFor={category.value}>{category.label}</label>
                  </div>
                );
              })}
            </form>
          </div>
        </div>
        {/* right side product */}
        <div className="px-4 bg-slate-200">
          <p className="font-medium text-slate-800 text-lg my-2">
            Search Results : {data.length}
          </p>

          <div className=" h-full">
            {data && data.length !== 0 && !loading && (
              <VerticalProduct data={data} loading={loading} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
