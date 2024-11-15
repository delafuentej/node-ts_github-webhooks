import express from 'express'
import { envs } from './config';
import { GithubController } from './presentation/github/controller';


(()=>{
    main();
})();

function main(){
    const app = express();

    const githubController = new GithubController();
    
    app.post('/api/github', githubController.webhookHandler);

    app.listen(envs.PORT, ()=> {
        console.log(`App running on PORT:${envs.PORT}`);
    })
}


