import { Router } from "express";
import {
  createUser,
  getUsers,
  getUserById,
  loginUser,
} from "../controllers/userController.js";

const userRouter = Router();

// Endpoint: POST /api/users
userRouter.post("/", createUser);

//Endpoint: GET /api/users
userRouter.get("/", getUsers);

userRouter.post("/login", loginUser);

//Endpoint: GET /api/users/:id
userRouter.get("/:id", getUserById);
export default userRouter;
