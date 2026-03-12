// import "dotenv/config";

// import express from "express";
// import { PrismaPg } from "@prisma/adapter-pg";
// import { PrismaClient } from "./generated/prisma/client.js";

// const app = express();

// /* -------------------------- Membuat prisma client ------------------------- */
// const adapter = new PrismaPg({
//   connectionString: process.env.DATABASE_URL!,
// });

// const prisma = new PrismaClient({ adapter });

// app.use(express.json()); /// middleware untuk mengambil data dari request client

// /* ---------------------------- Create new users --------------------------- */
// app.post("/api/users", async (req, res) => {
//   const userInput = req.body;

//   if (!userInput.name)
//     return res.status(400).json({ message: "Field name is missing" });
//   if (!userInput.email)
//     return res.status(400).json({ message: "Field email is missing" });
//   if (!userInput.password)
//     return res.status(400).json({ message: "Field password is missing" });

//   const author = await prisma.users.create({ data: userInput });
//   res.status(201).json({ message: "Author created", data: author });
// });

// /* --------------------------- Create new article --------------------------- */
// app.post("/api/blogs", async (req, res) => {
//   const userInput = req.body;

//   if (!userInput.title)
//     return res.status(400).json({ message: "Field title is missing" });
//   if (!userInput.content)
//     return res.status(400).json({ message: "Field content is missing" });

//   const article = await prisma.blogs.create({ data: userInput });
//   res.status(201).json({ message: "Article created", data: article });
// });

import "dotenv/config";
import express from "express";
// import cors from "cors";
import userRouter from "./router/userRouter.js";
import { blogRouter } from "./router/blogRouter.js";

const app = express();

// app.use(cors());
app.use(express.json()); /// middleware untuk mengambil data dari request client

// Sambungin router user
app.use("/api/users", userRouter);

// Sambungin router blog
app.use("/api/blogs", blogRouter);

const PORT = 8000;
app.listen(PORT, () => console.info(`Server is listening on port : ${PORT}`));
