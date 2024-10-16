import { Injectable } from "@nestjs/common";
import { OpenAI } from 'openai';
import {ConfigService} from "@nestjs/config"
import { Messages } from "openai/resources/beta/threads/messages";

@Injectable()
    export class OpenAIService{
        private openai: OpenAI;

        constructor(private configService: ConfigService){
            this.openai = new OpenAI({
                apiKey: this.configService.get<string>('OPENAI_API_KEY'),
           });
        }
        async sendMessageToOpenAI(message: string): Promise<any> {
            const completion = await this.openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [{role: 'user', content: message}],
            });
        console.log("今回の返答: ", completion)
        return completion;
    }
}
