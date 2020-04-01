require('dotenv').config()

module.exports = {
  development: {
    username: "postgres",
    password: "root",
    database: "carfil",
    host: "127.0.0.1",
    dialect: 'postgres'
  },
  test: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    "ssl":true,
    "dialectOptions": {
      "ssl": {
        "require":true
      }
    }
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
    logging: true,
    dialectOptions: {
      ssl: true
    }
  }
}
