import { CreateProjectsById } from "../../../src/models/projects.model/projects.model"
import { FindOneByGmail } from "../../../src/models/personal.model/personal.model"

export const Projects = {
    AddProject: async (data: any) => {
        let id = await FindOneByGmail(data?.gmail)
        const { name, start, end, prolink, gitlink, skills, desc } = data
        const obj = {
            Name: name,
            duration: {
                StartDate: start,
                EndDate: end,
            },
            ProjectLink: prolink,
            RepoLink: gitlink,
            Skills: skills,
            description: desc,
        }
        return await CreateProjectsById(id?._id?.toString(), obj)
    }
}