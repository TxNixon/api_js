import express from 'express';
import cookieParser from 'cookie-parser';
import todoRoutes from './routes/todoRoutes.js';
import registerRoutes from './routes/registerRoutes.js';
import loginRoutes from './routes/loginRoutes.js';
import indexRoutes from './routes/indexRoutes.js';
import ngrok from '@ngrok/ngrok';
import http from 'http';

const app = express();
const PORT = 3030;

app.use(express.json());
app.use(cookieParser()); // Middleware to parse cookies
app.use('/api', todoRoutes);
app.use('/api', registerRoutes);
app.use('/api', loginRoutes);
app.use('/api', indexRoutes);

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
