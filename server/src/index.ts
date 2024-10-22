import express, { Request, Response, Express } from "express";
import { errorHandler } from "./middlewares/errorHandler";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import cookieParser from "cookie-parser";
import path from "path";
const app: Express = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, "uploads")));
app.use(express.static(path.resolve(__dirname, "dist")));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/api/v1", userRoutes);
app.use(errorHandler);

app.get("*", (_request: Request, response: Response) => {
  return response.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => console.log(`Server is running at ${port}`));
