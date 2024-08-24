import mongoose from "mongoose";

const Experience = new mongoose.Schema({
    Company: {
        type: [{
            Name: { type: String, required: true },
            Type: { type: String, required: true },
            Role: { type: String, required: true },
            Location: { type: String, required: true },
            Valadity: {
                StartDate: { type: String, required: true },
                EndDate: { type: String, required: true },
            },
            ProjectLink: { type: String, required: true },
            CertificateLink: { type: String, required: true },
            Skills: { type: [String] },
            description: { type: String, required: true }
        }]
    },

})

const experience = mongoose.model('users', Experience)

export const FindOneByEducation = (collegename: string) => experience.findOne({ 'College.Name': collegename })

export const CreateExperienceById = (id: string, values: Record<string, any>) => experience.findByIdAndUpdate(id, values)

export const CreateExperienceBymail = (gmail: string, values: Record<string, any>) => experience.findOneAndUpdate({ Gmail: gmail }, { $set: { values } })

export const RemoveExperienceBymail = (gmail: string, values: Record<string, any>) => experience.findOneAndUpdate({ Gmail: gmail }, { $unset: { values } })