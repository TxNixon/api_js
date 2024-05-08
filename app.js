import express from "express";
import todoRoutes from './routes/todoRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', todoRoutes);

app.listen(PORT, function(){
    console.log(`Server is running on PORT ${PORT}`);
});