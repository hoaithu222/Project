import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import SummaryApi from "./common";
import Context from "./context";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice";
import "./App.css";
import Loading from "./pages/Loading";

export default function App() {
  const dispatch = useDispatch();
  const [cardProduct, setCardProduct] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchUserDetails = async () => {
    setLoading(true);
    const response = await fetch(SummaryApi.current_user.url, {
      method: SummaryApi.current_user.method,
      credentials: "include",
    });
    const data = await response.json();
    if (data.success) {
      dispatch(setUserDetails(data));
      setLoading(false);
    }
  };
  const fetchUserAddToCard = async () => {
    const response = await fetch(SummaryApi.getCard.url, {
      method: SummaryApi.getCard.method,
      credentials: "include",
    });
    const data = await response.json();
    console.log(data);
    setLoading(false);
    setCardProduct(data?.data?.count);
  };
  console.log(cardProduct);

  useEffect(() => {
    fetchUserDetails();
    fetchUserAddToCard();
  }, []);
  return (
    <>
      <Context.Provider
        value={{
          fetchUserDetails,
          // user detail fetch
          cardProduct,
          fetchUserAddToCard,
          //card fetch
        }}
      >
        <ToastContainer position="top-center" />
        <Header className="container mx-auto" />
        <main className="min-h-[calc(140vh-50px)]  ">
          <Outlet />
        </main>
        <Footer />
        {loading && <Loading />}
      </Context.Provider>
    </>
  );
}
