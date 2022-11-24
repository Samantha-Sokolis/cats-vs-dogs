require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

    cloudinary.config({ 
      cloud_name: 'dj99ibnyv', 
      api_key: '687436637182371', 
      api_secret: 'tEopDQoMPB7FTvR4NvHH_76iUMs' 
    });
    
module.exports = sequelize;
