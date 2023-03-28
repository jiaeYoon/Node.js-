const Sequelize = require('sequelize');
// 모델 연결
const User = require('./user');
const Comment = require('./comment');

// 환경변수 설정
const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];  // 해당하는 config의 db를 연결
const db = {};

// db 연결
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = User;
db.Comment = Comment;

// 테이블을 모델로 연결
User.initiate(sequelize);
Comment.initiate(sequelize);

// 다른 테이블과의 관계를 연결
User.associate(db);
Comment.associate(db);

module.exports = db;