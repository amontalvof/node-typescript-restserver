import express, { Application } from 'express';
import colors from 'colors/safe';
import cors from 'cors';
import userRoutes from '../routes/users';
import db from '../db/connection';

class Server {
    private app: Application;
    private port: string;
    private paths = {
        users: '/api/users',
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';

        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log(colors.cyan('Database Online!'));
        } catch (error) {
            throw new Error(error);
        }
    }

    middlewares() {
        // CORS
        this.app.use(cors());
        // Body reading
        this.app.use(express.json());
        // Public folder
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.paths.users, userRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(colors.cyan(`Server running on port' ${this.port}`));
        });
    }
}

export default Server;
