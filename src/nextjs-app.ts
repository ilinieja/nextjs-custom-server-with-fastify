import next from 'next';
import env from './env';

export default next({
  dev: import.meta.env.DEV,
  hostname: env.HOST,
  port: env.PORT,
  // Next.js project directory relative to project root
  dir: './src/nextjs-app',
});
