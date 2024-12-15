import { useState } from "react";
import ROLE from "../../common/role";
import colors from "../../styles/custom";
import { IoClose } from "react-icons/io5";
import SummaryApi from "../../common";
import { toast } from "react-toastify";

export default function ChangeUserRole({
  name,
  email,
  role,
  onClose,
  userId,
  callFunc,
}) {
  const [userRole, setUserRole] = useState(role);
  const handleChangeRole = (e) => {
    setUserRole(e.target.value);
    console.log(e.target.value);
  };
  const updateUserRole = async () => {
    const response = await fetch(SummaryApi.updateUser.url, {
      method: SummaryApi.updateUser.method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        role: userRole,
      }),
    });
    const data = await response.json();
    if (data.success) {
      toast.success(data.message);
      callFunc();
      onClose();
    }
    console.log(data);
  };
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-10 flex justify-between items-center bg-blue-950 bg-opacity-35">
      <div className=" mx-auto bg-white shadow-md p-4 w-full max-w-sm ">
        <button className="block ml-auto text-xl" onClick={onClose}>
          <IoClose />
        </button>
        <h1 className="pb-4 font-medium text-lg">Change User Role</h1>
        <p>Name:{name}</p>
        <p>Email:{email}</p>

        <div className="flex items-center justify-between my-4">
          <p>Role:</p>
          <select
            className="border px-4 py-1"
            value={userRole}
            onChange={handleChangeRole}
          >
            {Object.values(ROLE).map((role, index) => (
              <option key={index} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
        <button
          className={`w-fit mx-auto block ${colors.button.gradientVioletYellow}`}
          onClick={updateUserRole}
        >
          Change Role
        </button>
      </div>
    </div>
  );
}
