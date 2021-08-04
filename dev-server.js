import express from 'express';

const PORT = 8082;

const app = express();
app.use(express.static('./build'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
