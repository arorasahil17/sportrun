import { addCourse } from "../controllers/coursesControllers";
import { upload } from "../middlewares/uploadVideo";
import { router } from "../utils";

router.post("/course", upload, addCourse);
