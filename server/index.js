import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import routes from './routes/route.js';

const app = express();  //initalising express

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.use('/', routes);

const PORT = 8000; 
//This variable is used to specify the port on which the server will listen.

Connection();


//server ko start/call karne ke liye hum use karte hain listen()
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));