import express from 'express';

import gameRoutes from './routes/game';
const app = express();


app.use(express.json());

const PORT = 3000;

app.get('/api', (_req, res) => {
    res.send('Hello World!');
});

app.use('/api/game', gameRoutes);

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});
