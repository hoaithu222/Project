import { useEffect, useState } from "react";
import SummaryApi from "../../common";
import { toast } from "react-toastify";
import moment from "moment";
import { FaEdit } from "react-icons/fa";
import colors from "../../styles/custom";
import ChangeUserRole from "../../components/ChangeUserRole/ChangeUserRole";

export default function AllUser() {
  const [allUser, setAllUser] = useState([]);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [updateUserDetails, setUpdateUserDetails] = useState({
    email: "",
    name: "",
    _id: "",
    role: "",
  });
  const fetchAllUsers = async () => {
    const response = await fetch(SummaryApi.allUser.url, {
      method: SummaryApi.allUser.method,
      credentials: "include",
    });
    const data = await response.json();

    if (data.success) {
      toast.success(data.message);
      setAllUser(data.data);
    }
  };
  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className="bg-white pb-4">
      <table className="w-full userTable">
        <thead>
          <tr className={`${colors.gradients.coolSky} text-white`}>
            <th>Sr.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Created Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allUser?.map((user, index) => (
            <tr key={user?._id}>
              <td>{index + 1}</td>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
              <td>{user?.role}</td>
              <td>{moment(user?.createdAt).format("ll")}</td>
              <td>
                <button
                  className={`${colors.button.edit}`}
                  onClick={() => {
                    setOpenUpdate((preve) => !preve);
                    setUpdateUserDetails(user);
                  }}
                >
                  <FaEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {openUpdate ? (
        <ChangeUserRole
          onClose={() => setOpenUpdate((preve) => !preve)}
          userId={updateUserDetails._id}
          name={updateUserDetails.name}
          email={updateUserDetails.email}
          role={updateUserDetails.role}
          callFunc={fetchAllUsers}
        />
      ) : (
        ""
      )}
    </div>
  );
}
