import { Request, Response } from "express";


export class GithubController {

    constructor(

    ){};


    webhookHandler = (req: Request, res: Response) => {
        console.log('endpoint called')
        res.json('Done');
    }

}