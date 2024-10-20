import express, { Request, Response, Express } from "express";
import { errorHandler } from "./middlewares/errorHandler";
const app: Express = express();
const port = 3000;
import userRoutes from "./routes/userRoutes";

app.use(express.json());
app.use("/api/v1", userRoutes);
app.use(errorHandler);

app.get("/", (_request: Request, response: Response) => {
  response.send("Hello World!");
});

app.listen(port, () => console.log(`Server is running at ${port}`));
