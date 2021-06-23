import external from "rollup-plugin-peer-deps-external";
import {nodeResolve} from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: './src/index.ts',
    output: [
      {
        format: 'cjs',
        dir: './dist/cjs'
      },
      {
        dir: './dist/esm',
        format: 'es',
        exports: 'named'
      }
    ],
    plugins: [
      external(),
      nodeResolve(),
      commonjs(),
      typescript({
        target: 'ES2018'
      }),
      postcss()
    ]
  }
]
