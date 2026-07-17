import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Shared .env lives at the repo root (frontend/ and backend/ both read from it).
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

export const env = {
  port: process.env.PORT || 4000,
  squareAccessToken: process.env.SQUARE_ACCESS_TOKEN || '',
  squareEnvironment: process.env.SQUARE_ENVIRONMENT || 'sandbox',
  squareLocationId: process.env.SQUARE_LOCATION_ID || '',
};
