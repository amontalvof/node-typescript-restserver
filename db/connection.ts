import { Sequelize } from 'sequelize';

const db = new Sequelize('node_ts_rest_server', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
});

export default db;
