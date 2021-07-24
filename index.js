const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.post('/api/gitWebhook',(req, res) => {
    console.log(req);

    res.send({message: 'Hey We recived an event'});
});

app.get('/api',(req, res) => {
    res.send('Hello');
})

app.listen(8000,()=>{
    console.log('Running on port 8000');
})