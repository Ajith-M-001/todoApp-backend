import express from "express";
import {
  addTodo,
  deleteTodo,
  getAllTodos,
  toggleTodo,
  updateTodo,
} from "../controller/todoController.js";

const todoRouter = express.Router();

todoRouter.post("/add", addTodo);
todoRouter.get("/all", getAllTodos);
todoRouter.put("/update/:id", updateTodo);
todoRouter.delete("/delete/:id", deleteTodo);
todoRouter.put("/toggle/:id", toggleTodo);

export default todoRouter;
