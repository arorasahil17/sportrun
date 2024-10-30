import { UseMutateFunction } from "@tanstack/react-query";
import { ApiResponse } from "../types";

interface DeleteModalProps {
  open: boolean;
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
  id: number;
  path: string;
  isDeleting: boolean;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  open,
  handleClose,
  mutate,
  id,
  path,
  isDeleting,
}) => {
  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-xs">
            <p className="text-gray-200 mb-4">
              Are you sure you want to delete this session?
            </p>
            <div className="flex space-x-4 justify-center">
              <button
                className={`bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700 ${
                  isDeleting && "animate-pulse"
                }`}
                onClick={() => mutate({ id, path })}
              >
                {isDeleting ? "Please wait..." : "Confirm"}
              </button>
              <button
                onClick={handleClose}
                className="bg-gray-500 px-4 py-2 rounded text-white hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteModal;
