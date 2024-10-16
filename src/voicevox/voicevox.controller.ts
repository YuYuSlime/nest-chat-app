import { Body, Controller, Post, Res } from "@nestjs/common";
import { Response } from "express";
import {VoiceVoxService} from "./voicevox.service";

@Controller('api')
export class VoiceController {
    constructor(private readonly voiceVoiceService: VoiceVoxService) {}

    @Post('voice')
    async getVoice(@Body('message') message:string, @Res() res:Response) {
        const audioBuffer = await this.voiceVoiceService.generateVoice(message);

        res.set({
            'Content-Type': 'audio/wav',
            'Content-Disposition': 'inline; filename="voice.wav',
        });
        res.send(audioBuffer);
    }
}