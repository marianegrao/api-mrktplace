const knex = require("knex")({
    client: 'pg',
    connection: {
        host: 'ec2-52-20-166-21.compute-1.amazonaws.com',
        user: 'pkaiyxsbhkfquq',
        password: 'e3400ffc6eb981ba138fa9104e00cb073269adee89e2b773fa9d687cbb4abd78',
        database: 'dc0g9hfa1b86if',
        port: 5432,
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = knex;