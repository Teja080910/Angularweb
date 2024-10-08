import { Controller, Get, Middleware, Post } from "@overnightjs/core";
import { Request, Response } from "express";
import { Authentication } from "../../../src/services/personal.service/personal.service";
import { UploadFile } from "../../../src/services/uploadfiles/uploadfiles";
import { initiateMulter } from "../../helpers/multer/multer";

@Controller('auth')
export class AuthenticationController {
    @Post('register')
    @Middleware(initiateMulter())
    async Register(req: Request, res: Response) {
        try {
            const uploadResult = await UploadFile.UploadPhoto(req?.files);
            if (uploadResult?.fileName) {
                const result = await Authentication.Register(req.body,uploadResult?.fileName);
                if (result?._id) {
                    res.send({ message: "Register successfully" });
                } else {
                    res.send({ error: "Failed to register" });
                }
            } else {
                res.send({ error: "Failed to upload photo" });
            }
        } catch (error) {
            console.error('Error in registration:', error);
            res.status(500).send({ error: 'Registration failed' });
        }
    }

    @Post('login')
    async Login(req: Request, res: Response) {
        try {
            await Authentication.Login(req.body)
                .then((result) => {
                    if (result?._id) {
                        res.send({ message: "login sucessfully",data:result })
                    } else {
                        res.send({ error: "failed login" })
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }

    @Post('checkuser')
    async Checkuser(req: Request, res: Response) {
        try {
            await Authentication.Login(req.body)
                .then((result) => {
                    if (result?._id) {
                        res.send({ message: "login sucessfully", data: result })
                    } else {
                        res.send({ error: "user not found" })
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }

    @Get('file/:filename')
    async RetrivePhoto(req:Request,res:Response){
        await UploadFile.Photodata(req.params.filename,res)
    }
}