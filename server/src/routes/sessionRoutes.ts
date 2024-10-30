import {
  createSessionm,
  fetchUpcomingSessions,
} from "../controllers/sessionController";
import { router } from "../utils";

router
  .post("/session", createSessionm)
  .get("/upcoming/sessions/:id", fetchUpcomingSessions);

export default router;
