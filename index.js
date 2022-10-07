import express from 'express';
import bodyParser from 'body-Parser';
import userRoutes from './routes/users.js';

const app=express();

const PORT = 5000;

app.use(bodyParser.json());

app.use('/users',userRoutes);

app.get('/',(req,res)=> res.send("hello hompage"));

app.listen(PORT,()=>{
    console.log(`Sever running on port http://localhost:${PORT}`);
})