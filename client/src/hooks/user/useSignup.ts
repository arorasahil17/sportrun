import useAuthForm from "./useAuthForm";
import { signup } from "../../helpers/userHelper";
import { UserSchemaType, UserValidationSchema } from "../../schemas/userSchema";

const useSignup = () => {
  return useAuthForm<UserSchemaType>({
    mutationFn: signup,
    validationSchema: UserValidationSchema,
    successMessage: "Sign up successful!",
    errorMessage: "Sign up failed. Please try again.",
  });
};

export default useSignup;
