import {
  cancelSubscription,
  fetchAllCancellations,
  updateCancellationStatus,
} from "../controllers/cancellationControllers";
import { router } from "../utils";

router
  .post("/cancel/subscription", cancelSubscription)
  .get("/cancellations", fetchAllCancellations)
  .put("/update-cancellation", updateCancellationStatus);

export default cancelSubscription;
