import {
  capturePayment,
  createSubscription,
  fetchAllSubscriptions,
} from "../controllers/suscriptionControllers";
import { router } from "../utils";

router
  .post("/subscribe", createSubscription)
  .get("/subscriptions", fetchAllSubscriptions)
  .get("/subscriptions", fetchAllSubscriptions)
  .post("/capture-payment", capturePayment);

export default router;
