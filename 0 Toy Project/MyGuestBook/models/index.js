const Sequelize = require('sequelize');

// 환경변수 설정
const env = proces.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

// db 연결
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

module.exports = db;