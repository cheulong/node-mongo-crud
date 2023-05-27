import asyncHandler from "express-async-handler";
import admin from "firebase-admin";
import Todo from "../models/todo.model.js";

const getUsers = async (req, res) => {
  const todosRef = await admin.firestore().collection("todos");
  const data = await todosRef.get();
  const todosArray = [];
  data.forEach((doc) => {
    const todo = new Todo(doc.id, doc.data().label);
    todosArray.push(todo);
  });
  res.status(200).send(todosArray);
};

const getUser = async (req, res) => {
  res.status(200).json({ message: `Get user with ${req.params.id}` });
};

const createUser = asyncHandler(async (req, res, next) => {
  console.log("The request body is ", req.body);
  const { email, phone, name } = req.body;
  if (!email || !phone || !name) {
    res.status(400);
    throw new Error("All fields are required");
  }
  res.status(201).json({ message: "Create user" });
});

const updateUser = async (req, res) => {
  res.status(200).json({ message: `Update user with ${req.params.id}` });
};

const deleteUser = async (req, res) => {
  res.status(200).json({ message: `Delete user with ${req.params.id}` });
};

export { getUsers, getUser, createUser, updateUser, deleteUser };
