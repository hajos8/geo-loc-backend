const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/geolocation', (req, res) => {
    const { latitude, longitude } = req.body
    console.log({ latitude, longitude })

    return res.status(201).json('ok')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});