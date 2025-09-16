import express from "express";
import Note from "../models/Note.js";
import middleware from "../middleware/middleware.js";

const router = express.Router();

// create note
router.post("/add", middleware, async (req, res) => {
  try {
    const { title, description } = req.body;

    const newNote = new Note({
      title,
      description,
      userId: req.user.id,
    });

    await newNote.save();

    return res
      .status(200)
      .json({ success: true, message: "Note Created Successfully " });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error in Adding Note" });
  }
});

// get all notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    return res.status(200).json({ success: true, notes });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Can't Retrieve Notes" });
  }
});

export default router;
