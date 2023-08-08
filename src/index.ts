import { WebSocket } from 'ws';

class EosDatabase {
    private ws: WebSocket;

    constructor(token: string) {
        this.ws = new WebSocket(new URL("ws://192.168.1.27:8456/db"), {
            headers: {
                "Authorization": "Bearer " + token,
            },
        });

        this.ws.on('message', data => console.log(data.toString()));
        this.ws.on('error', console.error);
        this.ws.on('close', (code, reason) => console.error(code, reason.toString()));
        this.ws.on('unexpected-response', console.error);
    }
}

export default EosDatabase;
