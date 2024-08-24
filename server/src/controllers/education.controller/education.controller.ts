import { Controller, Post } from "@overnightjs/core";
import { Request, Response } from "express";
import { Education } from "../../../src/services/education.service/education.service";

@Controller('educate')
export class EducationController {
    @Post('add')
    async AddEducation(req: Request, res: Response) {
        try {
            await Education.UpdateEducation(req.body)
                .then((result) => {
                    if (result?._id) {
                        res.send({ message: "update education" })
                    } else {
                        res.send({ error: "failed update education" })
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }
}