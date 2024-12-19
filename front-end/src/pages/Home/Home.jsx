import BannerProduct from "../../components/BannerProduct/BannerProduct";
import CategoryList from "../../components/CategoryList/CategoryList";
import HorizontalCardProduct from "../../components/HorizontalCardProduct/HorizontalCardProduct";
import VerticalCardProduct from "../../components/VerticalCardProduct/VerticalCardProduct";

export default function Home() {
  return (
    <div className="w-full  bg-slate-200">
      <CategoryList />
      <BannerProduct />
      <HorizontalCardProduct
        category={"Áo"}
        heading={"The most popular shirts"}
      />

      <VerticalCardProduct
        category={"Đầm"}
        heading={"The most popular dresses"}
      />
      <HorizontalCardProduct
        category={"Quần"}
        heading={"The most popular pants"}
      />

      <VerticalCardProduct
        category={"Áo Khoác"}
        heading={"The most popular jackets"}
      />
      <HorizontalCardProduct
        category={"Chân váy"}
        heading={"The most popular skirts"}
      />
    </div>
  );
}
