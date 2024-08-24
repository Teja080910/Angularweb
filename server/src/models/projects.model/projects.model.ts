import mongoose from "mongoose";

const Projects = new mongoose.Schema({
    Projects: {
        type: [{
            Name: { type: String, required: true },
            duration: {
                StartDate: { type: String, required: true },
                EndDate: { type: String, required: true },
            },
            ProjectLink: { type: String, required: true },
            RepoLink: { type: String, required: true },
            Skills: { type: [String] },
            description: { type: String, required: true },
        }]
    },
})

const projects = mongoose.model('users', Projects)



export const CreateProjectsById = (id: string, values: Record<string, any>) => projects.findByIdAndUpdate(id, values)

export const CreateProjectsBymail = (gmail: string, values: Record<string, any>) => projects.findOneAndUpdate({ Gmail: gmail }, { $set: { values } })

export const RemoveProjectsBymail = (gmail: string, values: Record<string, any>) => projects.findOneAndUpdate({ Gmail: gmail }, { $unset: { values } })