module.exports = ({ env }) => ({
  host: env('HOSTNAME'),
  port: env.int('PORT'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '4ff9208bd5a1573f8f54b18e491921d4'),
    },
  },
});
