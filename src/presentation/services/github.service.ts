import { GitHubStarPayload } from "../../interfaces";


export class GithubService {
    constructor(){}

    onStar(payload: GitHubStarPayload): string{
        let message: string = '';

        const {starred_at, sender, repository, action} = payload;

        if(starred_at){
             message = `User:${sender.login} ${action} star on repository:${repository.full_name}.Date:${starred_at}`
        }else{
             message = `User:${sender.login} ${action} star on repository:${repository.full_name}.`
        }

       
  

       
        return message;
    }
}