import { useState } from "react";
import loginIcons from "../../assest/signin.gif";
// import image01 from "../../assest/icons8-login-100.png";
// import image02 from "../../assest/icons8-sign-up-100.png";
import colors from "../../styles/custom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import imageTobase64 from "../../helpers/imageTobase64";
import SummaryApi from "../../common";
import { toast } from "react-toastify";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
  });
  const navigate = useNavigate();

  const handleChangeValue = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.confirmPassword === data.password) {
      const response = await fetch(SummaryApi.signUp.url, {
        method: SummaryApi.signUp.method,
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(data),
      });
      const dataUser = await response.json();
      if (dataUser.success) {
        toast.success(dataUser.message);
        navigate("/login");
      } else {
        toast(dataUser.message);
      }
    } else {
      toast.error("Please check password and confirm password");
    }

    setData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  const handleUploadPic = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      alert("Vui lòng tải lên tệp ảnh hợp lệ (jpg, png, gif).");
      return;
    }

    const imagePic = await imageTobase64(file);
    setData({
      ...data,
      profilePic: imagePic,
    });
  };
  const handleSubmitPic = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section
        id="signup"
        className={`${colors.backgroundColors.gray} w-full h-screen pt-20`}
      >
        <div className="mx-auto container p-5">
          <div className="bg-white p-4 w-full max-w-md mx-auto rounded-md py-5">
            <div className="w-20 mx-auto cursor-pointer">
              <div className="w-20 h-20 overflow-hidden rounded-md border border-gray-200">
                <img
                  src={data.profilePic || loginIcons}
                  alt="login icon"
                  className="w-full h-full object-cover"
                />
              </div>

              <form onSubmit={handleSubmitPic} className="mt-1">
                <label htmlFor="file" className="block text-center">
                  <input
                    type="file"
                    className="hidden"
                    id="file"
                    name="profilePic"
                    onChange={handleUploadPic}
                  />
                  <div className="text-xs bg-gradient-to-r from-purple-500 to-green-500 text-white p-0.5 rounded-md shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300">
                    Upload photo
                  </div>
                </label>
              </form>
            </div>

            <form className="pt-6" onSubmit={handleSubmit}>
              <div className="grid">
                <label>Name : </label>
                <div className="bg-gray-200  pr-2 rounded-full ">
                  <input
                    type="name"
                    name="name"
                    placeholder="Enter name"
                    className="w-full h-full outline-none bg-transparent  p-2 rounded-full"
                    onChange={handleChangeValue}
                    value={data.name}
                    required
                  />
                </div>
              </div>
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
              <div className="grid">
                <label>Confirm Password : </label>
                <div className="bg-gray-200  flex items-center justify-center  pr-2 rounded-full">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Enter confirm password"
                    className="w-full h-full outline-none bg-transparent  p-2 rounded-full"
                    onChange={handleChangeValue}
                    value={data.confirmPassword}
                    required
                  />
                  <div>
                    <span
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>
              </div>

              <button
                className={` ${colors.button.gradientBluePink} mx-auto flex mt-4 hover:scale-110`}
              >
                Sign up
              </button>
            </form>
            <p className="mt-5 mb-4">
              Already have account ?
              <Link
                to="/login"
                className="text-red-600 font-semibold hover:text-red-700 hover:underline ml-1"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
