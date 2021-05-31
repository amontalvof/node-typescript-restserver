"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const safe_1 = __importDefault(require("colors/safe"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.port = process.env.PORT || '8080';
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(safe_1.default.cyan(`Server running on port ${this.port}`));
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map