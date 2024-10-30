import {
  checkAuth,
  fetchUsers,
  forgetPassword,
  logoutUser,
  resetPassword,
  signIn,
  signUp,
} from "../controllers/userControllers";
import { authenticateUser } from "../middlewares/auth";
import { router } from "../utils";

router
  .post("/signup", signUp)
  .post("/login", signIn)
  .get("/check/auth", authenticateUser, checkAuth)
  .post("/forget-password", forgetPassword)
  .post("/reset-password", resetPassword)
  .post("/logout", authenticateUser, logoutUser)
  .get("/users", fetchUsers);

export default router;
