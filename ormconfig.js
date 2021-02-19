const env = process.env.NODE_ENV;

module.exports = {
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  username: '',
  password: '',
  database: 'graduation-project',
  synchronize: true,
  logging: false,
  entities: ["./src/entity/**/*.ts"]
};
