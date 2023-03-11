const express = require (`express`);
const bodyParser = require('body-parser');
const cors = require ('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3000;
const users = [
    { name: 'Hugo',color: 'Rojo'},
    {  name: 'Paco',color: 'Azul' },
    { name: 'Luis',color: 'Verde'},
];

app.get('/',(req,res) => res.send('Restaurante API working'));
app.get('/users', (req,res) => res.json(users));

app.listen(port, () => console.log(`Server listening at port  ${port}`));