/** @type {import('next').NextConfig} */

const nextConfig = {
    webpack(config) {
      config.module.rules.push(
        {
          type: 'asset',
          resourceQuery: /url/, // *.svg?url
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: [{
            loader: '@svgr/webpack',
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false
                      }
                    }
                  }
                ]
              }
            }
          }]
        }
      );
  
      return config;
    },
    
    experimental: {
        turbo: {enabled: false}
      }
  };
  
module.exports = nextConfig; 