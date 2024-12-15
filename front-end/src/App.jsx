import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import SummaryApi from "./common";
import Context from "./context";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice";
import "./App.css";

export default function App() {
  const dispatch = useDispatch();

  const fetchUserDetails = async () => {
    const response = await fetch(SummaryApi.current_user.url, {
      method: SummaryApi.current_user.method,
      credentials: "include",
    });
    const data = await response.json();
    if (data.success) {
      dispatch(setUserDetails(data));
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);
  return (
    <>
      <Context.Provider
        value={{
          fetchUserDetails,
          // user detail fetch
        }}
      >
        <ToastContainer />
        <Header className="container mx-auto" />
        <main className="min-h-[calc(100vh-50px)]">
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
}
