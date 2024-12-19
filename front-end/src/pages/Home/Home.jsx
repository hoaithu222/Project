import BannerProduct from "../../components/BannerProduct/BannerProduct";
import CategoryList from "../../components/CategoryList/CategoryList";
import HorizontalCardProduct from "../../components/HorizontalCardProduct/HorizontalCardProduct";
import Review from "../../components/Review/Review";
import ServiceFeatures from "../../components/ServiceFeatures/ServiceFeatures";

import VerticalCardProduct from "../../components/VerticalCardProduct/VerticalCardProduct";

export default function Home() {
  return (
    <div className="w-full  bg-slate-100  pb-14 ">
      <CategoryList />
      <BannerProduct />
      <ServiceFeatures />
      <HorizontalCardProduct
        category={"Áo"}
        heading={"Các sản phẩm bán chạy nhất"}
      />
      <VerticalCardProduct
        category={"Đầm"}
        heading={"The most popular dresses"}
      />
      <Review />
    </div>
  );
}
