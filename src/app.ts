import express from 'express'
import { envs } from './config';
import { GithubController } from './presentation/github/controller';
import { GithubMiddleware } from './presentation/middlewares';


(()=>{
    main();
})();

function main(){
    const app = express();

    const githubController = new GithubController();

      //* Middlewares
      app.use( express.json() ); // raw
      //app.use( express.urlencoded({ extended: true }) ); // x-www-form-urlencoded
      app.use(GithubMiddleware.verifySignatur);
    
    app.post('/api/github', githubController.webhookHandler);

    app.listen(envs.PORT, ()=> {
        console.log(`App running on PORT:${envs.PORT}`);
    })
}


