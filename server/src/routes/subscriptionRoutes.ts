import {
  createSubscription,
  fetchAllSubscriptions,
} from "../controllers/suscriptionControllers";
import { router } from "../utils";

router
  .post("/subscribe", createSubscription)
  .get("/subscriptions", fetchAllSubscriptions);

export default router;
