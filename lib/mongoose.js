import mongoose from 'mongoose';

let isConnected = false; // Track the connection state

export async function mongooseConnect() {
    if (isConnected) {
        console.log('Using existing MongoDB connection');
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI, {
            // No need to specify useNewUrlParser or useUnifiedTopology
        });
        isConnected = db.connections[0].readyState === 1; // Check if the connection is successful
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw new Error('Database connection failed');
    }
}
