import express, { Application } from 'express';
import colors from 'colors/safe';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(colors.cyan(`Server running on port' ${this.port}`));
        });
    }
}

export default Server;
