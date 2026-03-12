import { Router } from "express";
import {
  createBlog,
  getBlogs,
  getBlogById,
} from "../controllers/blogController.js";

export const blogRouter = Router();

//Endpoint: GET /api/blogs
blogRouter.get("/", getBlogs);

//Endpoint: GET /api/blogs:id
blogRouter.get("/:id", getBlogById);

//Endpoint: POST /api/blogs
blogRouter.post("/", createBlog);
