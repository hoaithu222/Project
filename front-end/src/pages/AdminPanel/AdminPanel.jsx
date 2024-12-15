import { useSelector } from "react-redux";
import colors from "../../styles/custom";
import { FaCircleUser } from "react-icons/fa6";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ROLE from "../../common/role";

export default function AdminPanel() {
  const user = useSelector((state) => state?.user?.user?.data);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (user?.role !== ROLE.ADMIN) {
  //     navigate("/");
  //   }
  // }, []);
  return (
    <div className="min-h-[calc(100vh-100px)] bg-slate-100  hidden md:flex">
      <aside className="bg-white min-h-full w-full max-w-60 shadow-xl mt-2">
        <div className={`h-32 flex justify-center items-center flex-col `}>
          <div
            className={`${colors.textColors.violet100} text-4xl cursor-pointer flex justify-center  items-center hover:scale-110`}
          >
            {user?.profilePic ? (
              <div
                className={`p-0.5 rounded-full ${colors.gradients.cyanToIndigo}`}
              >
                <img
                  src={user?.profilePic}
                  alt="avatar user"
                  className="w-20 h-20
                rounded-full object-contain"
                />
              </div>
            ) : (
              <FaCircleUser />
            )}
          </div>
          <p
            className={`capitalize text-lg font-semibold ${colors.gradients.violetToYellow} bg-clip-text text-transparent`}
          >
            {user?.name}
          </p>
          <p
            className={`capitalize text-xs font-semibold ${colors.gradients.blueToPink} bg-clip-text text-transparent`}
          >
            {user?.role}
          </p>
        </div>
        {/* Navigation */}
        <div>
          <nav className="grid gap-4">
            <Link to={"all-user"} className="px-4 py-0.5 hover:bg-slate-100">
              All users
            </Link>
            <Link
              to={"upload-product"}
              className="px-4 py-0.5 hover:bg-slate-100"
            >
              Upload products
            </Link>
          </nav>
        </div>
      </aside>
      <main className="w-full h-full p-2">
        <Outlet />
      </main>
    </div>
  );
}
