import mongoose from "mongoose"
import dotenv from 'dotenv';
dotenv.config(); 


async function databaseConnection(){
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
databaseConnection();
export default databaseConnection;


