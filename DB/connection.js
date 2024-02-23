import { Sequelize } from 'sequelize';
export const sequelize = new Sequelize('freedb_blogSystem2', 'freedb_talaBlogSystem', 'y89p%@X$bu8t@qC', {
  host: 'sql.freedb.tech',
  port: 3306,
  dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

export const connectDB = async () => {
  try {
    return await sequelize.sync({ alter: false , force:false });
  }
  catch (error) {
    console.log("error connecting to database");
  }
}
