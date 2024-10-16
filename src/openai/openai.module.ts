import { Module } from '@nestjs/common';
import { AppController } from './openai.controller';
import { ConfigModule } from '@nestjs/config';
import { OpenAIService } from './openai.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [OpenAIService],
})
export class OpenAIModule{}
