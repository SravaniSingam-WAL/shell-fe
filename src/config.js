import dotenv from 'dotenv';
dotenv.config();

export const PORT = 'http://localhost:3030'
export const OP_BASE_URL =  process.env.OP_APP_BASEURL
export const CLAS_BASE_URL =  process.env.CLAS_APP_BASEURL
export const RDMS_BASE_URL =  process.env.RDMS_APP_BASEURL
export const FAA_BASE_URL =  process.env.FAA_APP_BASEURL
