"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const safe_1 = __importDefault(require("colors/safe"));
const cors_1 = __importDefault(require("cors"));
const users_1 = __importDefault(require("../routes/users"));
class Server {
    constructor() {
        this.paths = {
            users: '/api/users',
        };
        this.app = express_1.default();
        this.port = process.env.PORT || '8080';
        this.middlewares();
        this.routes();
    }
    // TODO: Connect database
    middlewares() {
        // CORS
        this.app.use(cors_1.default());
        // Body reading
        this.app.use(express_1.default.json());
        // Public folder
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.paths.users, users_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(safe_1.default.cyan(`Server running on port' ${this.port}`));
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map