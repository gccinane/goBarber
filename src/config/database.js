module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  timezone: '00:00',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
