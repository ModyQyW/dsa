import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import dts from 'rollup-plugin-dts';
import path from 'path';

const configs = [];

configs.push(
  {
    input: path.resolve('src', 'index.ts'),
    output: [
      {
        file: path.resolve('dist', 'index.cjs.js'),
        format: 'cjs',
      },
      {
        file: path.resolve('dist', 'index.esm.js'),
        format: 'es',
      },
      {
        file: path.resolve('dist', 'index.iife.js'),
        format: 'iife',
        name: 'dsa',
        extend: true,
      },
      {
        file: path.resolve('dist', 'index.iife.min.js'),
        format: 'iife',
        name: 'dsa',
        extend: true,
        plugins: [
          terser({
            format: {
              comments: false,
            },
          }),
        ],
      },
    ],
    plugins: [typescript()],
  },
  {
    input: path.resolve('src', 'index.ts'),
    output: {
      file: path.resolve('dist', 'index.d.ts'),
      format: 'es',
    },
    plugins: [dts()],
  },
);

export default configs;
