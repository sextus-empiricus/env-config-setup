import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getEnvPath } from './config/utils/getEnvPath';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig, pokemonConfig } from './config';
import { FeatureModule } from './feature/feature.module';

const envFilePath: string = getEnvPath(`${__dirname}/config/envs`);

@Module({
  imports: [
    ConfigModule.forRoot({
      /* Always 1st import */
      envFilePath,
      /* Load custom configuration files */
      load: [databaseConfig, pokemonConfig],
      /* Get access in whole app scope */
      isGlobal: true,
    }),
    FeatureModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
