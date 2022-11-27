require('dotenv').config();
const cloudinary = require('cloudinary').v2;

const Sequelize = require('sequelize');

// Uncomment below if you would like to use LocalHost

// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//       host: 'localhost',
//       dialect: 'mysql',
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     });

// Comment below if you wish to use localhost
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  },
);

    cloudinary.config({ 
      cloud_name: 'dj99ibnyv', 
      api_key: '687436637182371', 
      api_secret: 'tEopDQoMPB7FTvR4NvHH_76iUMs' 
    });
    
module.exports = sequelize;
