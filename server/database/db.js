import mongoose from "mongoose";
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

// Retrieving MongoDB credentials from environment variables
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD; 

const Connection = () => {
    const DB_URI = `mongodb+srv://shefali1306be21:shafu123@cluster0.mv9qsme.mongodb.net/?retryWrites=true&w=majority`;
    try {
        mongoose.connect(DB_URI, { useNewUrlParser: true });
        mongoose.set('strictQuery', false);
        console.log('Database connected sucessfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message)
    }
}

export default Connection;