import { User } from "../../types";

interface UserListProps {
  users: User[] | null | undefined;
}

const UsersList: React.FC<UserListProps> = ({ users }) => {
  // Dummy data for users, can be replaced by API calls
  // const users = [
  //   { id: 1, name: "John Doe", email: "john@example.com", role: "Student" },
  //   { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Teacher" },
  // ];

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-red-500">All Users</h2>
      <div className="relative overflow-x-auto">
        <table className="w-full text-left text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-700 text-red-500">
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              {/* <th className="p-3">Role</th> */}
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b bg-gray-600 border-gray-700 hover:bg-gray-700"
                >
                  <td className="p-3 text-white">{user.id}</td>
                  <td className="p-3 text-white">{user.name}</td>
                  <td className="p-3 text-white">{user.email}</td>
                  {/* <td className="p-3 text-white">{user.role}</td> */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
