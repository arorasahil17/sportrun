import { addCourse, fetchAllCourses } from "../controllers/coursesControllers";
import { upload } from "../middlewares/uploadVideo";
import { router } from "../utils";

router.post("/course", upload, addCourse).get("/courses", fetchAllCourses);

export default router;
