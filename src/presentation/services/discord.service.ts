import { envs } from "../../config";



export class DiscordService {
    private readonly discordWebhookUrl: string = envs.DISCORD_WEBHOOK_URL;

    constructor(){}

    async notify(message: string){

        const body = {
            content: message,
            embeds: [{
                image: {
                    url: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMm85OWRraDV4NzBzMXJ6ZDk5enljeGpocjJxczNsbXprajV1b29lcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xl5QdxfNonh3q/giphy.gif'
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