import asyncHandler from "express-async-handler";

const getUsers = async (req, res) => {
  res.status(200).json({ message: "Get all users" });
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
