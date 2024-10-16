import { ConfigService } from "@nestjs/config";
export declare class OpenAIService {
    private configService;
    private openai;
    constructor(configService: ConfigService);
    sendMessageToOpenAI(message: string): Promise<string>;
}
