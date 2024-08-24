import { Controller, Post } from "@overnightjs/core";
import { Request, Response } from "express";
import { Experience } from "../../../src/services/experience.service/experience.service";

@Controller('experience')
export class ExperienceController {
    @Post('add')
    async AddExperience(req: Request, res: Response) {
        try {
            await Experience.UpdateExperience(req.body)
                .then((result) => {
                    if (result?._id) {
                        res.send({ message: "update experience" })
                    } else {
                        res.send({ error: "failed update experience" })
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }
}