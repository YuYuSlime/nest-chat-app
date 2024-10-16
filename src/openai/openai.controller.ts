import { Body,Controller, Post } from '@nestjs/common';
import { OpenAIService } from './openai.service';


@Controller("api")
export class AppController {
  constructor(private readonly openaiService: OpenAIService) {}

  @Post("chat")
  async getChatResponse(
    @Body("message") message: string
 ){
const response = await this.openaiService.sendMessageToOpenAI(message);
  return {response};
 }
}
