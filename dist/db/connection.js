"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('node_ts_rest_server', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
});
exports.default = db;
//# sourceMappingURL=connection.js.map