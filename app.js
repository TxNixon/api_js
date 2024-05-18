import express from 'express';
import todoRoutes from './routes/todoRoutes.js';
import ngrok from '@ngrok/ngrok';
import http from 'http';

const app = express();
const PORT = 3030;

app.use(express.json());
app.use('/api', todoRoutes);

const server = http.createServer(app);

server.listen(PORT, async () => {
    console.log(`Server is running on PORT ${PORT}`);

    try {
        const listener = await ngrok.connect({ addr: PORT, authtoken_from_env: true });
        const url = listener.url();
        console.log(`Ngrok tunnel running at: ${url}`);
        
    } catch (err) {
        console.error('Error starting Ngrok:', err);
    }
});
