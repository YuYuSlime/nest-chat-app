import * as Pusher from 'pusher';
export declare class PusherService {
    pusher: Pusher;
    constructor();
    trigger(channgel: string, event: string, data: any): Promise<void>;
}
