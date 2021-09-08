import resolve from '@rollup/plugin-node-resolve'
import typescript from "@rollup/plugin-typescript"
import commonjs from '@rollup/plugin-commonjs'
import eslint from "@rbnlffl/rollup-plugin-eslint"
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: './example/events.esm.js',
      format: 'esm',
      name: 'Events',
      sourcemap: true,
    }
  ],
  plugins: [
    eslint(),
    resolve(),
    typescript(),
    commonjs(),
    livereload({
      watch: './example',
    }),
    serve({
      open: true,
      port: 8000,
      contentBase: ['example'],
      openPage: '/index.html',
    })
  ],
}
