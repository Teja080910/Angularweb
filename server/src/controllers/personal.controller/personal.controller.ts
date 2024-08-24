import { Controller, Post } from "@overnightjs/core";
import { Request, Response } from "express";
import { Authentication } from "../../../src/services/personal.service/personal.service";

@Controller('auth')
export class AuthenticationController {
    @Post('register')
    async Register(req: Request, res: Response) {
        try {
            await Authentication.Register(req.body)
                .then((result) => {
                    if (result?._id) {
                        res.send({ message: "register sucessfully" })
                    } else {
                        res.send({ error: "failed register" })
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }

    @Post('login')
    async Login(req: Request, res: Response) {
        try {
            await Authentication.login(req.body.gmail)
                .then((result) => {
                    if (result?._id) {
                        res.send({ message: "login sucessfully" })
                    } else {
                        res.send({ error: "failed login" })
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }
}