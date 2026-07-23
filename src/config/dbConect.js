import mongoose, { mongo } from "mongoose";

async function conectaDatabase() {
    
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.uluq17o.mongodb.net/livraria?appName=Cluster0")
    return mongoose.connection;
};
export default conectaDatabase;