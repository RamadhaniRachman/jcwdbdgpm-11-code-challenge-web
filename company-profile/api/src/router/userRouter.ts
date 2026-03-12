import { Router } from "express";
import {
  createUser,
  getUsers,
  getUserById,
} from "../controllers/userController.js";

const userRouter = Router();

// Endpoint: POST /api/users
userRouter.post("/", createUser);

//Endpoint: GET /api/users
userRouter.get("/", getUsers);

//Endpoint: GET /api/users/:id
userRouter.get("/:id", getUserById);
export default userRouter;
