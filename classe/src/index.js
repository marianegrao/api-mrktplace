const express = require('express');
const rotas = require('./rotas');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(rotas);

const server = app.listen(process.env.PORT || 3100, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
});