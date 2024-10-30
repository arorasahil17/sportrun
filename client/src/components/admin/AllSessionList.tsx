import { Link } from "react-router-dom";
import { ApiResponse, Session } from "../../types";
import { UseMutateFunction } from "@tanstack/react-query";
import DeleteModal from "../../common/DeleteModal";
import { useState } from "react";

interface AllSessionListProps {
  sessions: Session[] | null | undefined;
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  mutate: UseMutateFunction<
    ApiResponse<any> | null,
    Error,
    {
      id: number;
      path: string;
    },
    unknown
  >;
  isDeleting: boolean;
  //   status: "error" | "success" | "pending" | "idle";
}
const AllSessionList: React.FC<AllSessionListProps> = ({
  sessions,
  open,
  handleClose,
  handleOpen,
  mutate,
  isDeleting,
  //   status,
}) => {
  const [sessionToDelete, setSessionToDelete] = useState(0);
  return (
    <>
      <div className="w-full">
        <Link
          to="/admin/create/session"
          className="mb-4 py-2 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 w-full sm:w-auto"
        >
          Create New Session
        </Link>
        <h2 className="text-2xl font-bold text-red-500 my-4">All Sessions</h2>
        <div className="bg-gray-800 rounded-lg overflow-x-auto">
          <table className="w-full text-left text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-700 text-red-500">
                <th className="p-3">Title</th>
                <th className="p-3">Description</th>
                <th className="p-3">Meeting Link</th>
                <th className="p-3">Time</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sessions &&
                sessions.map((session) => (
                  <tr
                    key={session.id}
                    className="border-b border-gray-700 hover:bg-gray-700"
                  >
                    <td className="p-3">{session.title}</td>
                    <td className="p-3">{session.description}</td>
                    <td className="p-3">
                      <a
                        href={session.sessionLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline"
                      >
                        Link
                      </a>
                    </td>
                    <td className="p-3">
                      {new Date(session.sessionTime).toLocaleString()}
                    </td>
                    <td className="p-3 space-x-2">
                      <Link
                        to={`/admin/edit/session/${session.id}`}
                        //   onClick={() => {
                        //     setSessionToEdit(session);
                        //     setShowForm(true);
                        //   }}
                        className="text-yellow-500 hover:text-yellow-600"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => {
                          setSessionToDelete(session.id);
                          handleOpen();
                        }}
                        className="text-red-500 hover:text-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {!sessions ||
            (sessions.length === 0 && (
              <p className="text-center text-gray-300 p-4">
                No sessions available.
              </p>
            ))}
        </div>
      </div>
      <DeleteModal
        open={open}
        handleClose={handleClose}
        id={sessionToDelete}
        isDeleting={isDeleting}
        mutate={mutate}
        path="/session"
      />
    </>
  );
};

export default AllSessionList;
