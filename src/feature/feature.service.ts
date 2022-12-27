import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig, PokemonConfig } from '../../types';

@Injectable()
export class FeatureService {
  // Vars pre-declare:
  private dbUser;
  private dbPassword;
  private pokemonUrl;
  private pokemonKey;

  constructor(
    @Inject(ConfigService) private readonly configService: ConfigService,
  ) {
    // Get env-vars in constructor:
    const databaseConfig = this.configService.get<DatabaseConfig>('database');
    const pokemonConfig = this.configService.get<PokemonConfig>('pokemon');
    // Validate:
    if (
      !Object.values(databaseConfig).every((val) => val) ||
      !Object.values(pokemonConfig).every((val) => val)
    )
      throw new Error('Environment variables are missing.');

    this.dbUser = databaseConfig.user;
    this.dbPassword = databaseConfig.password;
    this.pokemonUrl = pokemonConfig.url;
    this.pokemonKey = pokemonConfig.key;
  }

  action() {
    /* --- * Achieving variables demo: * --- */
    const byEnvName = this.configService.get<string>('DB_USER');
    const byToken = this.configService.get<DatabaseConfig>('database');
    const byKey = this.configService.get<string>('database.user');
    console.log({
      title: 'Achieving variables demo:',
      result: {
        byEnvName,
        byToken,
        byKey,
      },
    });
    /* --- * --- * --- * --- * --- * --- */
    /* Method logic with validated env-vars: */
    const { dbUser, dbPassword, pokemonUrl, pokemonKey } = this;
    console.log({
      title: 'Validated and achieved env-vars:',
      result: {
        dbUser,
        dbPassword,
        pokemonUrl,
        pokemonKey,
      },
    });
    /* --- * --- * --- * --- * --- * --- */
  }
}
