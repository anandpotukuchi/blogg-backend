module.exports = {
    port: process.env.PORT || 3000,
    mongoUser: process.env.MONGODB_USER,
    mongoPass: process.env.MONGODB_PASS,
    mongoHost: process.env.MONGODB_HOST,
    mongoPort: process.env.MONGODB_PORT,
    mongoDb: process.env.MONGODB_DB,
};