import { envs } from "../../config";



export class DiscordService {
    private readonly discordWebhookUrl: string = envs.DISCORD_WEBHOOK_URL;

    constructor(){}

    async notify(message: string){

        const body = {
            content: message,
            embeds: [{
                image: {
                    url: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWthbXJuazN2bzJ6MjFmdDBkM3UxNzlxeDRraGt2OWh5bm5qcDJidSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JwwYTeuOHhEB2/giphy.gif'
                }
            }]

            
        }

        const res = await fetch(this.discordWebhookUrl, {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body),
        });

        if(!res.ok){
            console.log('Error: Sending message to Discord');
            return false;
        }
        return true;
    }

   
}