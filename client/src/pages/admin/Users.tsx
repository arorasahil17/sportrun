import UsersList from "../../components/admin/UsersList";
import { fetchAllRecords } from "../../helpers/commonHelper";
import useRecords from "../../hooks/useRecords";
import { User } from "../../types";

const Users = () => {
  const { data: users } = useRecords<User>({
    queryKey: ["users"],
    queryFn: fetchAllRecords,
    staleTime: 5 * 60 * 1000,
    path: "/users",
  });

  console.log(users);

  return <UsersList users={users} />;
};

export default Users;
