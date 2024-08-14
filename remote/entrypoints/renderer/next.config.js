import { join }                       from 'path';
import { dirname }                    from 'path';
import { fileURLToPath }              from 'node:url';
import { NextFederationPlugin }       from '@module-federation/nextjs-mf';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const withVanilla = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
export default withVanilla({
  reactStrictMode: true,
  basePath: process.env.BASE_PATH ?? '',
  experimental: {
    externalDir: true,
    outputFileTracingRoot: join(__dirname, './'),
    esmExternals: 'loose',
  },
  compiler: {
    reactRemoveProperties: true,
  },
  webpack: (webpackConfig, {webpack, isServer}) => {
    webpackConfig.resolve.alias.canvas = false;

    webpackConfig.plugins.push(
      new webpack.NormalModuleReplacementPlugin(new RegExp(/\.js$/), (
        /** @type {{ request: string }} */ resource
      ) => {
        resource.request = resource.request.replace('.js', '');
      }),
      new NextFederationPlugin({
        name: 'remote',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './index': './pages/index.js'
        }
      })
    );

    return webpackConfig;
  },
  output: 'standalone',
});
