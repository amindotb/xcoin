import mongoose from 'mongoose';
import { MONGO_URI, MONGO_OPTIONS } from '../utils/config'
import logger from "../utils/logger";

try {
  mongoose.connect(MONGO_URI, MONGO_OPTIONS);
} catch (error) {
  logger.error('❌ MongoDb connection error', error)
}

mongoose.connection.on('connected', () => {
  logger.info('✅ MongoDb connected')
});

mongoose.connection.on('error', (error) => {
  logger.error('❌ MongoDb error', error)
});

export default mongoose;
