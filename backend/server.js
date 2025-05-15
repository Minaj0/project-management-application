require('dotenv').config();
const app = require('./app');
const connection = require('./src/config/db.config');

const PORT = process.env.PORT || 3333;

connection();

app.listen(3333, () => {
    console.log(`server running on localhost ${PORT}`);
    
});