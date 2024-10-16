import { Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class VoiceVoxService {
    async generateVoice(message: string): Promise<Buffer>{
        const speaker= 66;

        const audioQueryResponse = await axios.post(
            `http://localhost:50021/audio_query?text=${encodeURIComponent(message)}&speaker=${speaker}`,
            {},
            {headers: {'Content-Type': 'application/json'}}
        );

        const audioQuery = audioQueryResponse.data;

        const synthesisResponse = await axios.post(
            `http://localhost:50021/synthesis?speaker=${speaker}`,
            audioQuery,
            {responseType: 'arraybuffer'}
        );

        return Buffer.from(synthesisResponse.data)
    }
}