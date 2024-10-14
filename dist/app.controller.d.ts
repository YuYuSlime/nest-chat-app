import { OpenAIService } from './openai.service';
export declare class AppController {
    private readonly openaiService;
    constructor(openaiService: OpenAIService);
    getChatResponse(message: string): Promise<{
        response: string;
    }>;
}
