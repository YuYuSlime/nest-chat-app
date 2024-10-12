import { Injectable } from '@nestjs/common';
import * as Pusher from 'pusher'
import { stringify } from 'querystring';

@Injectable()
export class PusherService {
    pusher: Pusher;

    constructor(){
        this.pusher = new Pusher({
            appId: "1875970",
            key: "4ae7a624950a0258aa3e",
            secret: "3590b8b7fb939da5992c",
            cluster: "ap3",
            useTLS: true
          });
    }
    async trigger(channgel: string, event:string, data:any){
        await this.pusher.trigger(channgel, event, data);
    }
}
