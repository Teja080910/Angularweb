import { CreateEducationById } from "../../../src/models/education.model/education.model"
import { FindOneByGmail } from "../../../src/models/personal.model/personal.model"

export const Education = {
    UpdateEducation: async (data: any) => {
        let id = await FindOneByGmail(data?.gmail)
        const { name, type, course, marks, location, start, end } = data
        const obj = {
            Name: name,
            Type: type,
            Course: course,
            Marks: marks,
            Location: location,
            Graduation: {
                StartDate: start,
                EndDate: end,
            }
        }
        return await CreateEducationById(id?._id?.toString(),obj)
    }
}