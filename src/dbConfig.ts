const connection = {
  charset: 'utf8',
  timezone: 'UTC',
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  authSource: process.env.DB_AUTH_SOURCE
};

export default {
  connection,
  client: process.env.DB_CLIENT
};
