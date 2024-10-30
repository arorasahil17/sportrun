import { useMutation } from "@tanstack/react-query";
import { forgetPassword } from "../../helpers/userHelper";
import toast from "react-hot-toast";

const useForgetPassword = () => {
  const { mutate, status } = useMutation<string | null, Error, string>({
    mutationFn: (email) => forgetPassword(email),
    onSuccess: (message) => {
      if (message) {
        toast.success(message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { mutate, status };
};

export default useForgetPassword;
