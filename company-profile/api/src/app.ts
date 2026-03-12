import "dotenv/config";
import express from "express";
import cors from "cors";
import userRouter from "./router/userRouter.js";
import { blogRouter } from "./router/blogRouter.js";

const app = express();

app.use(cors({ origin: "http://localhost:5173" })); //ke vite
app.use(express.json()); /// middleware untuk mengambil data dari request client

// Sambungin router user
app.use("/api/users", userRouter);

// Sambungin router blog
app.use("/api/blogs", blogRouter);

const PORT = 8000;
app.listen(PORT, () => console.info(`Server is listening on port : ${PORT}`));
