import asyncHandler from "express-async-handler";
import admin from "firebase-admin";
import User from "../models/user.model.js";

const getUsers = asyncHandler(async (req, res) => {
  const usersRef = await admin.firestore().collection("users");
  const data = await usersRef.get();
  const usersArray = [];
  if (data.empty) {
    res.status(404).send("User record not found");
  } else {
    data.forEach((doc) => {
      const user = new User(
        doc.id,
        doc.data().firstName,
        doc.data().lastName,
        doc.data().age
      );
      usersArray.push(user);
    });
    res.status(200).send(usersArray);
  }
});

const getUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const user = await admin.firestore().collection("users").doc(id);
  const data = await user.get();
  if (!data.exists) {
    res.status(404).send("User with given ID not found");
  } else {
    res.status(200).json(data.data());
  }
});

const createUser = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, age } = req.body;
  if (!firstName || !lastName || !age) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const data = req.body;
  await admin.firestore().collection("users").doc().set(data);
  res.status(201).send("User created successfully");
});

const updateUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, age } = req.body;
  if (!firstName || !lastName || !age) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const id = req.params.id;
  const data = req.body;
  const user = await admin.firestore().collection("users").doc(id);
  await user.update(data);
  res.status(200).send("User updated successfully");
});

const deleteUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  await admin.firestore().collection("users").doc(id).delete();
  res.status(200).send(`Delete user with ${req.params.id}`);
});

export { getUsers, getUser, createUser, updateUser, deleteUser };
