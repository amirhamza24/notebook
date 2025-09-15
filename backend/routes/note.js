import express from "express";
import Note from "../models/Note.js";

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const { title, description } = req.body;

    const newNote = new Note({
      title,
      description,
    });

    await newUser.save();

    return res
      .status(200)
      .json({ success: true, message: "Account created successfully " });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});

export default router;
