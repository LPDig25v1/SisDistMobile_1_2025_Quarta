import express from 'express';
const api = express();

api.get('/', (req, res) => {
 res.send('Oi Gente');
});

api.get('/user', (req, res) => {
    res.send('Recebi uma requisição na rota /user');
   });

api.listen(3000, () => {
 console.log('Server escutando na porta 3000');
});