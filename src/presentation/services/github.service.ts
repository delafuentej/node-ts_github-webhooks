import { GitHubStarPayload, GitHubIssuePayload} from "../../interfaces";


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
    onIssue(payload: GitHubIssuePayload): string{
        let message: string = '';

        const {issue, action} = payload;

        if( action === 'opened'){
            message = `An issue was ${action} with this title: ${issue.title}`;
            return message;
        }else if( action === 'closed'){
            message = `An issue was ${action} by user${issue.user.login}`;
        }else if ( action === 'reopened'){
            message = `An issue was ${action} by user${issue.user.login}`;
        }else{
            message = `Unhandled action for the issue even: ${action}`;
        }

        return message;
    }

}