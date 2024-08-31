import { Response } from "express";
import { Bucket } from "../../../src/config/bucket";
import mime from 'mime'

export const UploadFile = {
    UploadPhoto: async (files: any) => {
        try {
            const bucket = await Bucket.bucket()
            const uploadPromises = files.map(async (file: any) => {
                const { originalname, buffer } = file;
                return new Promise((resolve, reject) => {
                    const uploadStream = bucket.openUploadStream(originalname);
                    uploadStream.end(buffer);
                    uploadStream.on('finish', () => {
                        resolve(uploadStream);
                    });
                    uploadStream.on('error', (error) => {
                        reject(error);
                    });
                });
            });
            const results = await Promise.all(uploadPromises);
            return { fileName: results[0]?.filename }
        } catch (error) {

        }
    },

    Photodata: async (filename: string, res: Response) => {
        try {
            const bucket = await Bucket.bucket();
            const downloadStream = bucket.openDownloadStreamByName(filename);
            downloadStream.on('error', (error) => {
                console.error('Error downloading file:', error);
                res.status(404).send('File not found');
            });
            downloadStream.on('file', (file) => {
                const mimeType = mime.lookup(file.filename);
                if (mimeType) {
                    res.setHeader('Content-Type', mimeType);
                } else {
                    res.setHeader('Content-Type', 'application/octet-stream');
                }
            });
            downloadStream.pipe(res);
        } catch (error) {
            console.error('Error in Photodata function:', error);
            res.status(500).send('Internal Server Error');
        }
    }
};
