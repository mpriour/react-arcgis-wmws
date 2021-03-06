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
        dir: './dist/',
        format: 'es',
        exports: 'named'
      }
    ],
    plugins: [
      external(),
      nodeResolve(),
      commonjs(),
      typescript({
        target: 'ESNext',
        declarationDir: './dist/'
      }),
      postcss()
    ]
  }
]
