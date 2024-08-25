import mongoose from "mongoose";

const Personal = new mongoose.Schema({
    Gmail: { type: String, required: true, unique: true },
    Phonenumber: { type: String, required: true, unique: true },
    Name: { type: String, required: true },
    Role: { type: String, required: true },
    Links: {
        LinkedIn: { type: String },
        GitHub: { type: String },
        HackerRank: { type: String }
    },
    Photo: { type: String }
})

const personal = mongoose.model('users', Personal)

export const FindOneByGmail = (gmail: string) => personal.findOne({ Gmail: gmail })

export const FindOneByPhone = (phone: string) => personal.findOne({ Phonenumber: phone })

export const CreateUser = (data: any) => new personal(data).save()