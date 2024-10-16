import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { OpenAIService } from './openai.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [OpenAIService],
})
export class AppModule{}
