import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default function () {
    return {
        name: 'webpack-alias-plugin',
        configureWebpack() {
            return {
                resolve: {
                    alias: {
                        '@': path.resolve(__dirname, '../'),
                        '@css': path.resolve(__dirname, '../css'),
                        '@lib': path.resolve(__dirname, '../lib'),
                        '@pages': path.resolve(__dirname, '../pages'),
                        '@plugins': path.resolve(__dirname, '../plugins')
                    }
                }
            }
        }
    }
}
