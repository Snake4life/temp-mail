module.exports = {
	appPort: process.env.PORT || 3000,
	mailServerPort: process.env.MAIL_SERVER_PORT || 2525,
	dbConnection: {
		host: process.env.DB_HOST || '127.0.0.1',
		port: process.env.DB_PORT || 5432,
		database: process.env.DB_NAME || 'postgres',
		password: process.env.DB_PASSWORD
	}
};