const knex = require("knex")({
    client: 'pg',
    connection: {
        host: 'ec2-3-219-52-220.compute-1.amazonaws.com',
        user: 'flwlvdigdpwabv',
        password: '7ed8c01ffb5cdafb8f156421cf3425cfed092b16a21deccc0b3a49b38109793f',
        database: 'd2drag2i50t10h',
        port: 5432,
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = knex;