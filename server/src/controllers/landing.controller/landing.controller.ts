import { Controller, Get } from "@overnightjs/core";
import { Request, Response } from "express";

@Controller('/')
export class LandingController {
    @Get('/')
    async Landing(req: Request, res: Response) {
        res.send("Running sucessfully");
    }
}