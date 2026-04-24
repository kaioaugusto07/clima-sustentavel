import express from 'express';


const PORT = 3000
const app = express();

app.listen(PORT, () => {
    console.log(`Estou funcionando na porta ${PORT}`);
});

app.get('/clima', (req, res) => {
    const { lat, lon } = req.query;
    console.log(lat, lon); 
})