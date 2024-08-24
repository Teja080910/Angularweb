import { Controller, Post } from "@overnightjs/core";
import { Request, Response } from "express";
import { Skills } from "../../../src/services/skills.service/skills.service";

@Controller('skills')
export class SkillsController {
    @Post('add')
    async AddSkills(req: Request, res: Response) {
        try {
            await Skills.AddSkill(req.body)
                .then((result) => {
                    if (result?._id) {
                        res.send({ message: "add skill sucessfully" })
                    } else {
                        res.send({ error: "failed add skill" })
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }

    @Post('remove')
    async RemoveSkill(req: Request, res: Response) {
        try {
            await Skills.RemoveSkill(req.body)
                .then((result) => {
                    if (result?._id) {
                        res.send({ message: "remove skill sucessfully" })
                    } else {
                        res.send({ error: "failed skill remove" })
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }
}