const Sequelize = require('sequelize');

class User extends Sequelize.Model {
  static initiate(sequelize) {  // 테이블 설정
    User.init({  // 테이블 컬럼에 대한 설정
      name: {
        type : Sequelize.STRING(20),
        allowNull : false,
        unique : true,
      },
      nickname : {
        type : Sequelize.STRING(20),
        allowNull : false,
      },
      age : {
        type : Sequelize.INTEGER.UNSIGNED,
        allowNull : false,
      },
      comment : {
        type : Sequelize.TEXT,
        allowNull : false,
      },
      created_at : {
        type : Sequelize.DATE,
        allowNull : false,
        defaultValue : Sequelize.NOW,
      },
    }, {  // 테이블 자체에 대한 설정
      sequelize,
      timestamps: false,
      underscored : false,
      modelName: 'User',
      tableName: 'users',  // 소문자 및 복수형으로 만듦
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  static associate(db) {  // 다른 모델과의 관계 명시
    db.User.hasMany(db.Comment, { foreignKey : 'commenter', sourceKey : 'id' });
  }  
};

module.exports = User;