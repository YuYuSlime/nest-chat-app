import { Module } from "@nestjs/common";
import { VoiceVoxService } from "./voicevox.service";
import { VoiceController } from "./voicevox.controller";

@Module({
    controllers: [VoiceController],
    providers: [VoiceVoxService],
})
export class VoiceVoxModule{}