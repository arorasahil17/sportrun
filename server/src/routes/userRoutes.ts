import { checkAuth, signIn, signUp } from "../controllers/userControllers";
import { authenticateUser } from "../middlewares/auth";
import { router } from "../utils";

router
  .post("/signup", signUp)
  .post("/login", signIn)
  .get("/check/auth", authenticateUser, checkAuth);

export default router;
