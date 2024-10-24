import {
  addCourse,
  deleteCourse,
  fetchAllCourses,
  fetchCourse,
  updateCourse,
} from "../controllers/coursesControllers";
import { upload } from "../middlewares/uploadVideo";
import { router } from "../utils";

router
  .post("/course", upload, addCourse)
  .get("/courses", fetchAllCourses)
  .put("/course/:id", upload, updateCourse)
  .get("/course/:id", fetchCourse)
  .delete("/course/:id", deleteCourse);

export default router;
