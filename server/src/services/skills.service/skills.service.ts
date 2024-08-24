import { FindOneByGmail } from "../../../src/models/personal.model/personal.model"
import { AddSkillsById, RemoveSkillsBymail } from "../../../src/models/skills.model/skills.model"

export const Skills = {
    AddSkill: async (data: any) => {
        let id = await FindOneByGmail(data?.gmail)
        const { skill, percen } = data
        const obj = {
            Skill: skill,
            Percentage: percen
        }
        return await AddSkillsById(id?._id?.toString(), obj)
    },

    RemoveSkill: async (data: any) => {
        const {gmail, skill } = data
        return await RemoveSkillsBymail(gmail, skill)
    }
}