import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import serve from 'rollup-plugin-serve';

const dev = !!process.env.DEV;

export default {
  input: 'src/hacomfoairmqtt-card.ts',
  output: {
    file: 'dist/hacomfoairmqtt-card.js',
    format: 'es',
    inlineDynamicImports: true,
  },
  plugins: [
    nodeResolve(),
    json(),
    typescript(),
    !dev && terser({ format: { comments: false } }),
    dev &&
      serve({
        contentBase: './dist',
        host: '0.0.0.0',
        port: 5000,
        headers: { 'Access-Control-Allow-Origin': '*' },
      }),
  ],
};
