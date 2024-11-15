import { Request, Response } from "express";
import { DiscordService, GithubService } from "../services";


export class GithubController {

    constructor(
        private readonly githubSevice: GithubService = new GithubService(),
        private readonly discordService: DiscordService = new DiscordService(),
    ){};
    


    webhookHandler = (req: Request, res: Response) => {
        const githubEvent = req.header('x-github-event') ?? 'unknown';
        //const signature = req.header('x-hub-signature-256') ?? 'unknown';

        const payload = req.body;
       // console.log(JSON.stringify(payload));
       let message:string;

       switch(githubEvent){
        case 'star':
            message = this.githubSevice.onStar(payload);
        break;
        case 'issues':
            message = this.githubSevice.onIssue(payload);
        break; 

        default:
           message = `Unknown event: ${githubEvent}`;
       }
      // console.log({message});
       this.discordService.notify(message)
       .then( () => res.status(202).send('Accepted'))
       .catch( ()=> res.status(500).json({error: 'Internal Server Error'}))
     
    }

}