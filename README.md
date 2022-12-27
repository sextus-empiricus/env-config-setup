# Nest.js🐈‍⬛

### Environment variables configuration

<hr/>

### Sources

* Tutorial 1 by [NestJS Docs](https://docs.nestjs.com/techniques/configuration), <br/>
* Tutorial 2 by [Tom Ray's](https://www.tomray.dev/nestjs-config), <br>
* Tutorial 3 by [Kevin Vogel's](https://blog.devgenius.io/environment-variables-in-nest-js-b989bb0370bf)

<hr/>

### Comments
* For some reason nest-compiler is changing`./dist` folder structure and place the application files into `./dist/src` folder.
* Because of mentioned above its necessary to change `start:prod` script.
* It's required to add `"outDir": "dist/src"` to `nest-cli.json` file to keep the `config` folder structure and get
  the `.env` files by `getEnvPatch()` function without modification.
```json
  "compilerOptions": {
    "assets": [
      {
        "include": "config/envs/*",
        "outDir": "dist/src"
      }
```