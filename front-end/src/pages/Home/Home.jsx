import BannerProduct from "../../components/BannerProduct/BannerProduct";
import CategoryList from "../../components/CategoryList/CategoryList";
import HorizontalCardProduct from "../../components/HorizontalCardProduct/HorizontalCardProduct";
import VerticalCardProduct from "../../components/VerticalCardProduct/VerticalCardProduct";

export default function Home() {
  return (
    <div className="w-full  bg-slate-200">
      <CategoryList />
      <BannerProduct />
      <HorizontalCardProduct category={"Áo"} heading={"Top's Clothers"} />

      <VerticalCardProduct category={"Đầm"} heading={"Những mẫu đầm hót"} />
    </div>
  );
}
