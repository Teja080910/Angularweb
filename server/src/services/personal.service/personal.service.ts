import { CreateUser, FindOneByGmail } from "../../../src/models/personal.model/personal.model"

export const Authentication = {
    Register: async (data: any) => {
        const { name, phone, gmail, role, linkedin, github, hackrank,photo } = data
        const obj = {
            Gmail: gmail,
            Phonenumber: phone,
            Name: name,
            Role: role,
            Links: {
                type: [{
                    LinkedIn: linkedin,
                    GitHub: github,
                    HackerRank:hackrank
                }]
            },
            Photo: photo
            
        }
        return await CreateUser(obj)
    },

    login:async(gmail:string)=>{
        return await FindOneByGmail(gmail)
    }
}