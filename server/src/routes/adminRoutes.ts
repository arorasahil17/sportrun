import {
  checkAdminAuth,
  createAdmin,
  loginAdmin,
} from "../controllers/adminController";
import { authenticateAdmin } from "../middlewares/auth";
import { router } from "../utils";

router
  .post("/admin", createAdmin)
  .post("/login/admin", loginAdmin)
  .get("/admin/auth", authenticateAdmin, checkAdminAuth);

export default router;
