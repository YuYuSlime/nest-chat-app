import { Injectable } from "@nestjs/common";
import { OpenAI } from 'openai';
import {ConfigService} from "@nestjs/config"
import * as fs from 'fs';

@Injectable()
    export class OpenAIService{
        private openai: OpenAI;

        constructor(private configService: ConfigService){
            this.openai = new OpenAI({
                apiKey: this.configService.get<string>('OPENAI_API_KEY'),
           });
        }
        async sendMessageToOpenAI(message: string): Promise<any> {
            const systemPrompt = fs.readFileSync('backups/characters/Iroha', 'utf8')
            
            const completion = await this.openai.chat.completions.create({
                model: 'gpt-4o-mini',
                messages: [
                    {role:'system',content:systemPrompt},
                    {role: 'user', content: message}],
            });
        console.log("今回の返答: ", completion)
        return completion;
    }
}
