import { existsSync } from 'fs';
import { resolve } from 'path';

export function getEnvPath(dest: string): string {
  const env = process.env.NODE_ENV;
  const fallback = resolve(`${dest}/.env`);
  const filename = env ? `${env}.env` : 'development.env';
  let filePath = resolve(`${dest}/${filename}`);

  if (!existsSync(filePath)) {
    filePath = fallback;
  }

  console.log({
    NODE_ENV: env,
    loadedFile: filename,
    filePath,
  });

  return filePath;
}
