import { CreateExperienceById } from "../../../src/models/experience.model/experience.model"
import { FindOneByGmail } from "../../../src/models/personal.model/personal.model"

export const Experience = {
    UpdateExperience: async (data: any) => {
        let id = await FindOneByGmail(data?.gmail)
        const { name, type, course, marks, location, start, end, role, prolink, gitlink, skills, desc } = data
        const obj = {
            Name: name,
            Type: type,
            Course: course,
            Marks: marks,
            Location: location,
            Valadity: {
                StartDate: start,
                EndDate: end,
            },
            Role: role,
            ProjectLink: prolink,
            CertificateLink: gitlink,
            Skills: skills,
            description: desc
        }
        return await CreateExperienceById(id?._id?.toString(), obj)
    }
}