const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const task = require('./router/task')

var corsOption = {
    origin: `http://localhost:3000`
};

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/task',task);
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});
