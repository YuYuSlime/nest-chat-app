import { Module } from '@nestjs/common';
import { OpenAIModule } from './openai/openai.module';
import { VoiceVoxModule } from './voicevox/voicevox.module';


@Module({
    imports: [OpenAIModule, VoiceVoxModule]
})
export class AppModule{}