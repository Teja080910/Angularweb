import { Controller, Post } from "@overnightjs/core";
import { Request, Response } from "express";
import { Projects } from "../../../src/services/projects.service/projects.service";

@Controller('projects')
export class ProjectsController {
    @Post('add')
    async AddProject(req: Request, res: Response) {
        try {
            await Projects.AddProject(req.body)
                .then((result) => {
                    if (result?._id) {
                        res.send({ message: "project add sucessfully" })
                    } else {
                        res.send({ error: "failed add project" })
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }
}