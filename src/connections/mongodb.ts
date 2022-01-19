import mongoose from 'mongoose';
import { MONGO_URI, MONGO_OPTIONS } from '../config'

try {
    mongoose.connect(MONGO_URI, MONGO_OPTIONS);
} catch (error) {
    console.error('❌ MongoDb connection error', error)
}

mongoose.connection.on('connected', () => {
    console.info('✅ MongoDb connected')
});

mongoose.connection.on('error', (error) => {
    console.error('❌ MongoDb error', error)
});

export default mongoose;
