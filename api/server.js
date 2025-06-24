import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import Project from "../models/Project.js";
import Skill from "../models/Skill.js";

dotenv.config();

const app = express();
// ✅ FIXED: CORS set to allow your frontend
app.use(cors({
    origin: "https://portfolio-frontend-pi-jade.vercel.app/" // Replace with your frontend URL
}));
  
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

app.get("/api/projects", async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/api/skills", async (req, res) => {
    try {
        const skills = await Skill.find();
        res.json(skills);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default app; // ✅ Important for Vercel
