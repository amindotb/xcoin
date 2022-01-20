import dotenv from "dotenv";

dotenv.config();

function checkEnv(envVar: string, defaultValue?: string) {
  if (!process.env[envVar]) {
    if (defaultValue) {
      return defaultValue;
    }
    throw new Error(`Please define the Environment variable"${envVar}"`);
  } else {
    return process.env[envVar] as string;
  }
};

export const NODE_ENV: string = checkEnv("NODE_ENV");
export const APP_PORT: number = parseInt(checkEnv("APP_PORT", '1000'));
export const MONGO_URI: string = checkEnv("MONGO_URI");
export const CORS_ORIGINS: string[] = checkEnv('CORS_ORIGINS', "http://localhost:1000").split(',');

// We could get these options from env if we care about that should be dynamic
export const MONGO_OPTIONS: any = {
  connectTimeoutMS: 4000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  replicaSet: 'rs0',
};
export const FETCH_LIMIT = '50';
export const FETCH_SORT = 'createdAt';
export const FETCH_ORDER = '-1';