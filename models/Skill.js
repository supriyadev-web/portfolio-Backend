import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    src: { type: String, required: true }, // Image URL
});

const Skill = mongoose.model("Skill", skillSchema);

export default Skill;
