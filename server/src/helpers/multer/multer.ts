import { NextFunction, Request, Response } from 'express';
import multer from 'multer';

export const initiateMulter = () => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const storage = multer.memoryStorage();
        const upload = multer({ storage, limits: { fileSize: 25 * 1024 * 1024 } });
        const uploadFn = upload.any();
        uploadFn(req, res, function (err) {
            if (err) {
                console.error(err);
                return next(err);
            }
            next();
        });
    };
};