import { registerAs } from '@nestjs/config';

export const pokemonConfig = registerAs('pokemon', () => ({
  url: process.env.POKEMON_URL,
  key: process.env.POKEMON_KEY,
}));
