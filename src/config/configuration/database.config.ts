import { registerAs } from '@nestjs/config';

export const databaseConfig = registerAs('database', () => ({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
}));
