export const DATABASE = {
    type: 'postgres' as const,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    /**
     * Flag to show all generated sql queries on each interaction with DB.
     * Should be omitted for production production.
     */
    logging: process.env.DB_LOGGING === 'true',
};
