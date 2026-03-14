import express from 'express';
import 'dotenv/config';
import jsonRoute from './routes/jsonRoute.js';
import xmlRoute from './routes/xmlRoute.js';

const app = express();
app.use(express.json());
app.use(express.text({ type: 'application/xml' }));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('🚀 API funcionando');
});

// Rotas
app.use('/json', jsonRoute);
app.use('/xml', xmlRoute);

app.use((req, res) => {
    res.status(404).json({ error: 'Rota não encontrada' });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
