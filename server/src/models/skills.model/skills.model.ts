import mongoose from "mongoose";

const Skills = new mongoose.Schema({
    Skills: {
        type: [{
            Skill: { type: String, required: true },
            Percentage: { type: Number, required: true }
        }]
    },
})

const skills = mongoose.model('users', Skills)

export const AddSkillsById = (id: string, values: Record<string, any>) => skills.findByIdAndUpdate(id, values)

export const AddSkillsBymail = (gmail: string, values: Record<string, any>) => skills.findOneAndUpdate({ Gmail: gmail }, { $set: { values } })

export const RemoveSkillsBymail = (gmail: string, skill: string) => skills.findOneAndUpdate({ Gmail: gmail }, { $pull:{'Skills.skill':skill} })