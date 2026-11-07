import path from 'node:path';
export default { resolve: { alias: { '@': path.resolve('src') } }, test: { include: ['tests/**/*.test.ts'] } };
