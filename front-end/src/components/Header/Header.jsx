import Logo from "../Logo/Logo";
import { FaCartPlus, FaSearchengin } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import colors from "../../styles/custom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SummaryApi from "../../common";
import { setUserDetails } from "../../store/userSlice";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import ROLE from "../../common/role";
import Context from "../../context";

export default function Header() {
  const [menuDisplay, setMenuDisplay] = useState(false);

  const user = useSelector((state) => state?.user?.user?.data);
  const dispatch = useDispatch();
  const context = useContext(Context);
  const navigate = useNavigate();
  const searchInput = useLocation();
  const URLSearch = new URLSearchParams(searchInput?.search);
  const searchQuery = URLSearch.getAll("q");
  const [search, setSearch] = useState(searchQuery);

  const handleLogout = async () => {
    const response = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: "include",
    });
    const data = await response.json();
    console.log(user);

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
    } else {
      toast.error(data.message);
    }
  };
  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
    if (value) {
      navigate(`/search?q=${value}`);
    } else {
      navigate(`/search`);
    }
  };
  return (
    <header className={`h-16 shadow-md`}>
      <div
        className={`h-full container mx-auto flex items-center justify-between xs:flex-wrap xs:gap-2 sm:flex-nowrap md:p-3`}
      >
        <div>
          <Link to={"/"}>
            <Logo w={90} h={70} />
          </Link>
        </div>
        <div
          className={`hidden lg:flex items-center min-w-[55%] justify-between border border-transparent p-2 ml-36 rounded-full ${colors.gradients.blueToPink} focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-white focus-within:ring-pink-100`}
        >
          <input
            type="text"
            placeholder="Search product here........."
            className={`w-full focus:outline-none rounded-md px-2 ${colors.gradients.blueToPink}`}
            onChange={(e) => handleSearch(e)}
            value={search}
          />
          <FaSearchengin
            className={`${colors.textColors.pink400} text-xl cursor-pointer`}
          />
        </div>
        <div></div>

        <div className="flex items-center gap-4 cursor-pointer">
          <div className="relative flex justify-center items-center">
            {user?._id && (
              <div
                className={`${colors.textColors.violet100} text-3xl`}
                onClick={() => setMenuDisplay((preve) => !preve)}
              >
                {user?.profilePic ? (
                  <div
                    className={`p-0.5 rounded-full ${colors.gradients.cyanToIndigo}`}
                  >
                    <img
                      src={user?.profilePic}
                      alt="avatar user"
                      className="w-10 h-10
                rounded-full object-contain"
                    />
                  </div>
                ) : (
                  <FaCircleUser />
                )}
              </div>
            )}
            {menuDisplay && (
              <div
                className={`absolute ${colors.gradients.pinkToYellow} bottom-0 top-11 h-fit p-2 md:block hidden shadow-xl rounded-sm  `}
              >
                <nav>
                  {user?.role === ROLE.ADMIN && (
                    <Link
                      to="/admin-panel/upload-product"
                      className={`whitespace-nowrap hover:${colors.gradients.pinkToYellowHover} p-2 `}
                      onClick={() => setMenuDisplay((preve) => !preve)}
                    >
                      Admin Panel
                    </Link>
                  )}
                </nav>
              </div>
            )}
          </div>
          {user?._id && (
            <Link className={`text-3xl relative cursor-pointer `} to={"/cart"}>
              <span>
                <FaCartPlus />
              </span>
              <div
                className={`${colors.backgroundColors.red300} w-5 h-5 flex items-center  justify-center rounded-full absolute -top-1 left-6`}
              >
                <p className="text-sm text-white ">{context?.cardProduct}</p>
              </div>
            </Link>
          )}

          <div
            className={`text-md ${colors.gradients.blueToPinkHover} ${colors.gradients.blueToPink} rounded-full p-0.5`}
          >
            <div
              className={`${colors.backgroundColors.white}  text-center ${colors.textColors.blue200} rounded-full p-1 pr-3 pl-3`}
            >
              {user?._id ? (
                <button onClick={handleLogout}>Logout</button>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
