
import myMongoose from 'mongoose';
const mongoURL = 'mongodb://localhost:27017/shelfshareDB';
 

const connectToMongo = async () => {
    try {
        await myMongoose.connect(mongoURL);
        console.log('Connected to MongoDB');
    } catch (e) {
        console.error('Error connecting to MongoDB:', e.message);
    }
};
export default connectToMongo;