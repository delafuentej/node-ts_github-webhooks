import 'dotenv/config';
import {get} from 'env-var';

export const envs = {
    PORT: get('PORT').required().asPortNumber(),
    GITHUB_WEBHOOK_SECRET: get('GITHUB_WEBHOOK_SECRET').required().asString(),
    DISCORD_WEBHOOK_URL: get('DISCORD_WEBHOOK_URL').required().asString(),
}

