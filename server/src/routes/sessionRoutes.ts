import {
  createSessionm,
  deleteSession,
  fetchAllSession,
  fetchSession,
  fetchUpcomingSessions,
  updateSession,
} from "../controllers/sessionController";
import { router } from "../utils";

router
  .post("/session", createSessionm)
  .get("/upcoming/sessions/:id", fetchUpcomingSessions)
  .get("/sessions", fetchAllSession)
  .put("/session", updateSession)
  .delete("/session/:id", deleteSession)
  .get("/session/:id", fetchSession);

export default router;
