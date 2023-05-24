import express from "express";
const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Get all users" });
});

router.route("/:id").get((req, res) => {
  res.status(200).json({ message: `Get user with ${req.params.id}` });
});

router.route("/").post((req, res) => {
  res.status(200).json({ message: "Create user" });
});

router.route("/:id").put((req, res) => {
  res.status(200).json({ message: `Update user with ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
  res.status(200).json({ message: `Delete user with ${req.params.id}` });
});

export default router;
