import mongoose from "mongoose";

const Education = new mongoose.Schema({
    College: {
        type: [{
            Name: { type: String, required: true },
            Type: { type: String, required: true },
            Course: { type: String, required: true },
            Marks: { type: String, required: true },
            Location: { type: String, required: true },
            Graduation: {
                StartDate: { type: String, required: true },
                EndDate: { type: String, required: true },
            }
        }]
    },
})

const education = mongoose.model('users', Education)

export const DeleteEducationByGmail = (gmail: string) => education.deleteOne({ Gmail: gmail })

export const FindOneByEducation = (collegename: string) => education.findOne({ 'College.Name': collegename })

export const CreateEducationById = (id: string, values: Record<string, any>) => education.findByIdAndUpdate(id, values)

export const CreateEducationBymail = (gmail: string, values: Record<string, any>) => education.findOneAndUpdate({ Gmail: gmail }, { $set: { values } })

export const RemoveEducationBymail = (gmail: string, values: Record<string, any>) => education.findOneAndUpdate({ Gmail: gmail }, { $unset: { values } })