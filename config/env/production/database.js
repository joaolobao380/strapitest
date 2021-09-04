module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT'),
        database: env('DATABASE_NAME'),
        username: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        ssl: env.bool("DATABASE_SSL", false) ? {
          require: true,
          rejectUnauthorized: false,
        } : false,
      },
      options: {
        pool:{
          min: 0,
          max: 10,
          idleTimeoutMillis: 3000,
          createTimeoutMillis: 3000,
          acquireTimeoutMillis: 3000
      }
      }
    },
  },
});
