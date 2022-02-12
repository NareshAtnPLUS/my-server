import dotenv from 'dotenv';
dotenv.config();

const appConfig = {
  PORT: Number(process.env.PORT || 8100),
  NODE_ENV:
    process.env.NODE_ENV === undefined
      ? 'development'
      : String(process.env.NODE_ENV),
  BASE_URL: String(process.env.BASE_URL)
  
};
export default appConfig;
