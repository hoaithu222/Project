import { useContext, useState } from "react";
import loginIcons from "../../assest/signin.gif";
import colors from "../../styles/custom";
import image01 from "../../assest/icons8-login-100.png";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../../common";
import { toast } from "react-toastify";
import Context from "../../context";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { fetchUserDetails, fetchUserAddToCard } = useContext(Context);

  const handleChangeValue = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(SummaryApi.signIn.url, {
        method: SummaryApi.signIn.method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
      }
      const dataApi = await response.json();
      if (dataApi.success) {
        toast.success(dataApi.message);
        setData({
          email: "",
          password: "",
        });
        navigate("/");
        fetchUserDetails();
        fetchUserAddToCard();
      } else {
        toast.error(dataApi.message);
      }
    } catch (err) {
      console.error("Error:", err.message || err);
      toast.error("Login failed. Please check your inputs.");
    }
  };

  return (
    <>
      <section
        id="login"
        className={`${colors.backgroundColors.gray} w-full h-screen pt-20`}
      >
        <div className="mx-auto container p-5">
          <div className="bg-white p-4 w-full max-w-md mx-auto rounded-md py-5">
            <div
              className={`w-20 h-20 mx-auto border rounded-full  ${colors.gradients.cyanToIndigo}`}
            >
              <img src={image01} alt="login icon" />
            </div>
            <form className="pt-6" onSubmit={handleSubmit}>
              <div className="grid">
                <label>Email : </label>
                <div className="bg-gray-200  pr-2 rounded-full ">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className="w-full h-full outline-none bg-transparent  p-2 rounded-full"
                    onChange={handleChangeValue}
                    value={data.email}
                    required
                  />
                </div>
              </div>
              <div className="grid">
                <label>Password : </label>
                <div className="bg-gray-200  flex items-center justify-center  pr-2 rounded-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter password"
                    className="w-full h-full outline-none bg-transparent  p-2 rounded-full"
                    onChange={handleChangeValue}
                    value={data.password}
                    required
                  />
                  <div>
                    <span onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>
              </div>
              <Link
                to="/forgot-password"
                className="mt-1 block w-fit ml-auto hover:underline hover:text-red-300"
              >
                Forgot password ?
              </Link>
              <button
                className={` ${colors.button.gradientBluePink} mx-auto flex mt-4 hover:scale-110`}
              >
                Login
              </button>
            </form>
            <p className="mt-5 mb-4">
              Don't have account?
              <Link
                to="/sign-up"
                className="text-red-600 font-semibold hover:text-red-700 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
