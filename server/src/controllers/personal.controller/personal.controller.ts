import { Controller, Middleware, Post } from "@overnightjs/core";
import { Request, Response } from "express";
import { DB_URL } from "../../../src/config/config";
import connectDB from "../../../src/config/connection";
import { Authentication } from "../../../src/services/personal.service/personal.service";
import { UploadFile } from "../../../src/services/uploadfiles/uploadfiles";
import { initiateMulter } from "../../helpers/multer/multer";

@Controller('auth')
export class AuthenticationController {
    @Post('register')
    @Middleware(initiateMulter())
    async Register(req: Request, res: Response) {
      try {
        const gridFSBucket = await connectDB(DB_URL);
        const uploadResult = await UploadFile.UploadPhoto(req?.files, gridFSBucket);
        console.log('Upload Result:', uploadResult);
    
        // Authentication logic can go here
        // const result = await Authentication.Register(req.body);
        // if (result?._id) {
        //   res.send({ message: "Register successfully" });
        // } else {
        //   res.send({ error: "Failed to register" });
        // }
    
      } catch (error) {
        console.error('Error in registration:', error);
        res.status(500).send({ error: 'Registration failed' });
      }
    }

    @Post('login')
    async Login(req: Request, res: Response) {
        try {
            await Authentication.Login(req.body.gmail)
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

    @Post('checkuser')
    async Checkuser(req: Request, res: Response) {
        try {
            console.log(req.body.gmail)
            await Authentication.Login(req.body.gmail)
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
}