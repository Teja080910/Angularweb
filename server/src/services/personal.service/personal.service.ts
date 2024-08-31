import { CreateUser, FindOneByGmail } from "../../../src/models/personal.model/personal.model"

export const Authentication = {
    Register: async (data: any, photo: string) => {
        const { name, phone, gmail, role, linkedin, github, hackrank } = data
        const obj = {
            Gmail: gmail,
            Phonenumber: phone,
            Name: name,
            Role: role,
            Links: {
                type: [{
                    LinkedIn: linkedin,
                    GitHub: github,
                    HackerRank: hackrank
                }]
            },
            Photo: photo

        }
        return await CreateUser(obj)
    },

    Login: async (data: any) => {
        const user = await FindOneByGmail(data?.gmail)
        if (user?.Phonenumber == data?.password) {
            return user
        }
    }
}