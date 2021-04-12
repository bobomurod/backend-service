export const environment = {
  production: false,
  APP_PORT: process.env.APP_PORT || 5001,
  databaseConfig: {},
  authenticationConfig: {
    SECRET: process.env.SECRET || 'secret',
  },
};
