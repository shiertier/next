/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    turbo: {
      enabled: true,
      rules: {
        '*.svg': {
          loaders: [{
            loader: '@svgr/webpack',
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false // 确保viewBox属性被保留
                      }
                    }
                  }
                ]
              }
            }
          }],
          as: '*.js', // 将处理后的 SVG 作为 JS 模块导入
        },
      },
    },
  },
}