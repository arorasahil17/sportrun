import useAuthForm from "./useAuthForm";
import { login } from "../../helpers/userHelper";
import { UserLoginSchema, UserLoginSchemaType } from "../../schemas/userSchema";

const useLogin = () => {
  return useAuthForm<UserLoginSchemaType>({
    mutationFn: login,
    validationSchema: UserLoginSchema,
    successMessage: "Login successful!",
    errorMessage: "Login failed. Please try again.",
  });
};

export default useLogin;
