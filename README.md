# NextJS Module Federation error demo

## Steps to reproduce
1. `yarn`
2. `yarn workspace @app/renderer-entrypoint dev`
3. Visit http://localhost:3000

<details>

<summary>Error logs</summary>

```
/Users/nikoroach/.nvm/versions/node/v19.9.0/bin/node /Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.yarn/releases/yarn-remote.cjs run dev
  ▲ Next.js 14.2.5
  - Local:        http://localhost:3000
  - Experiments (use with caution):
    · externalDir
    · esmExternals
    · outputFileTracingRoot

 ✓ Starting...
No ModuleFederationPlugin(s) found.
[ Module Federation Manifest Plugin ]: Manifest will use absolute path resolution via its host at runtime, reason: publicPath='auto'
[ Module Federation Manifest Plugin ] Manifest Link: {auto}/static/chunks/mf-manifest.json
[ Module Federation Manifest Plugin ] Manifest Link: /_next/mf-manifest.json
[ Module Federation Manifest Plugin ] Manifest Link: {auto}/static/chunks/mf-manifest.json
[ Module Federation Manifest Plugin ] Manifest Link: /_next/mf-manifest.json
 ✓ Compiled in 93ms (182 modules)
 ✓ Ready in 3.3s
[ Module Federation Manifest Plugin ] Manifest Link: {auto}/static/chunks/mf-manifest.json
[ Module Federation Manifest Plugin ] Manifest Link: /_next/mf-manifest.json
 ✓ Compiled in 225ms (381 modules)
 ○ Compiling / ...
[ Module Federation Manifest Plugin ] Manifest Link: {auto}/static/chunks/mf-manifest.json
[ Module Federation Manifest Plugin ] Manifest Link: /_next/mf-manifest.json
[ Module Federation Manifest Plugin ] Manifest Link: {auto}/static/chunks/mf-manifest.json
[ Module Federation Manifest Plugin ] Manifest Link: /_next/mf-manifest.json
 ✓ Compiled /_error in 4.8s (1428 modules)
 ⨯ TypeError: _Users_nikoroach_Documents_Dev_Atlantis_atls_lab_nextmf_demo_yarn_virtual_module_federation_node_virtual_fd110d4423_0_cache_module_federation_node_npm_2_5_6_2f46457e1d_fc2bee4af9_zip_node_modules_module_federation_node_dist_src_runtimePlugin_js__WEBPACK_IMPORTED_MODULE_1__ is not a function
    at eval (webpack-internal:///../node_modules/.federation/entry.62296f9205979873546916ac24c2ba70.js:19:279)
    at ../node_modules/.federation/entry.62296f9205979873546916ac24c2ba70.js (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/webpack-runtime.js:239:1)
    at __webpack_require__ (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/webpack-runtime.js:268:33)
    at webpack/container/entry/app (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/webpack-runtime.js:113:1)
    at __webpack_require__ (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/webpack-runtime.js:268:33)
    at attachRemote (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/webpack-runtime.js:881:28)
    at /Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/webpack-runtime.js:889:12
    at /Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/webpack-runtime.js:890:13
    at Object.<anonymous> (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/webpack-runtime.js:896:12)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329:10)
    at require$$0.Module._extensions..js (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.pnp.cjs:32080:33)
    at Module.load (node:internal/modules/cjs/loader:1133:32)
    at Module._load (node:internal/modules/cjs/loader:972:12)
    at require$$0.Module._load (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.pnp.cjs:31928:31)
    at Module.require (node:internal/modules/cjs/loader:1157:19)
    at mod.require (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.yarn/__virtual__/next-virtual-2b2d4d60c0/0/cache/next-npm-14.2.5-ce63d89d89-c107b45ffe.zip/node_modules/next/dist/server/require-hook.js:65:28)
    at require (node:internal/modules/helpers:119:18)
    at /Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/pages/_document.js:420:27
    at Object.<anonymous> (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/pages/_document.js:436:3)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329:10)
    at require$$0.Module._extensions..js (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.pnp.cjs:32080:33)
    at Module.load (node:internal/modules/cjs/loader:1133:32)
    at Module._load (node:internal/modules/cjs/loader:972:12)
    at require$$0.Module._load (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.pnp.cjs:31928:31)
    at Module.require (node:internal/modules/cjs/loader:1157:19)
    at mod.require (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.yarn/__virtual__/next-virtual-2b2d4d60c0/0/cache/next-npm-14.2.5-ce63d89d89-c107b45ffe.zip/node_modules/next/dist/server/require-hook.js:65:28)
    at require (node:internal/modules/helpers:119:18)
    at requirePage (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.yarn/__virtual__/next-virtual-2b2d4d60c0/0/cache/next-npm-14.2.5-ce63d89d89-c107b45ffe.zip/node_modules/next/dist/server/require.js:109:84)
    at /Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.yarn/__virtual__/next-virtual-2b2d4d60c0/0/cache/next-npm-14.2.5-ce63d89d89-c107b45ffe.zip/node_modules/next/dist/server/load-components.js:72:65
    at async Promise.all (index 0)
    at async loadComponentsImpl (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.yarn/__virtual__/next-virtual-2b2d4d60c0/0/cache/next-npm-14.2.5-ce63d89d89-c107b45ffe.zip/node_modules/next/dist/server/load-components.js:71:33)
    at async DevServer.findPageComponentsImpl (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.yarn/__virtual__/next-virtual-2b2d4d60c0/0/cache/next-npm-14.2.5-ce63d89d89-c107b45ffe.zip/node_modules/next/dist/server/next-server.js:710:36)
No ModuleFederationPlugin(s) found.
[ Module Federation Manifest Plugin ]: Manifest will use absolute path resolution via its host at runtime, reason: publicPath='auto'
<w> [webpack.cache.PackFileCacheStrategy] Restoring pack failed from /Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/cache/webpack/client-development-fallback.pack.gz: Error: invalid stored block lengths
 ⨯ TypeError: _Users_nikoroach_Documents_Dev_Atlantis_atls_lab_nextmf_demo_yarn_virtual_module_federation_node_virtual_fd110d4423_0_cache_module_federation_node_npm_2_5_6_2f46457e1d_fc2bee4af9_zip_node_modules_module_federation_node_dist_src_runtimePlugin_js__WEBPACK_IMPORTED_MODULE_1__ is not a function
    at eval (webpack-internal:///../node_modules/.federation/entry.62296f9205979873546916ac24c2ba70.js:19:279)
    at ../node_modules/.federation/entry.62296f9205979873546916ac24c2ba70.js (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/webpack-runtime.js:239:1)
    at __webpack_require__ (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/webpack-runtime.js:268:33)
    at webpack/container/entry/app (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/webpack-runtime.js:113:1)
    at __webpack_require__ (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/webpack-runtime.js:268:33)
    at attachRemote (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/webpack-runtime.js:881:28)
    at /Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/webpack-runtime.js:889:12
    at /Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/webpack-runtime.js:890:13
    at Object.<anonymous> (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/webpack-runtime.js:896:12)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329:10)
    at require$$0.Module._extensions..js (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.pnp.cjs:32080:33)
    at Module.load (node:internal/modules/cjs/loader:1133:32)
    at Module._load (node:internal/modules/cjs/loader:972:12)
    at require$$0.Module._load (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.pnp.cjs:31928:31)
    at Module.require (node:internal/modules/cjs/loader:1157:19)
    at mod.require (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.yarn/__virtual__/next-virtual-2b2d4d60c0/0/cache/next-npm-14.2.5-ce63d89d89-c107b45ffe.zip/node_modules/next/dist/server/require-hook.js:65:28)
    at require (node:internal/modules/helpers:119:18)
    at /Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/pages/_document.js:420:27
    at Object.<anonymous> (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/pages/_document.js:436:3)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329:10)
    at require$$0.Module._extensions..js (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.pnp.cjs:32080:33)
    at Module.load (node:internal/modules/cjs/loader:1133:32)
    at Module._load (node:internal/modules/cjs/loader:972:12)
    at require$$0.Module._load (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.pnp.cjs:31928:31)
    at Module.require (node:internal/modules/cjs/loader:1157:19)
    at mod.require (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.yarn/__virtual__/next-virtual-2b2d4d60c0/0/cache/next-npm-14.2.5-ce63d89d89-c107b45ffe.zip/node_modules/next/dist/server/require-hook.js:65:28)
    at require (node:internal/modules/helpers:119:18)
    at requirePage (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.yarn/__virtual__/next-virtual-2b2d4d60c0/0/cache/next-npm-14.2.5-ce63d89d89-c107b45ffe.zip/node_modules/next/dist/server/require.js:109:84)
    at /Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.yarn/__virtual__/next-virtual-2b2d4d60c0/0/cache/next-npm-14.2.5-ce63d89d89-c107b45ffe.zip/node_modules/next/dist/server/load-components.js:72:65
    at async Promise.all (index 0)
    at async loadComponentsImpl (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.yarn/__virtual__/next-virtual-2b2d4d60c0/0/cache/next-npm-14.2.5-ce63d89d89-c107b45ffe.zip/node_modules/next/dist/server/load-components.js:71:33)
    at async DevServer.findPageComponentsImpl (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.yarn/__virtual__/next-virtual-2b2d4d60c0/0/cache/next-npm-14.2.5-ce63d89d89-c107b45ffe.zip/node_modules/next/dist/server/next-server.js:710:36) {
  page: '/'
}
 ⨯ TypeError: _Users_nikoroach_Documents_Dev_Atlantis_atls_lab_nextmf_demo_yarn_virtual_module_federation_node_virtual_fd110d4423_0_cache_module_federation_node_npm_2_5_6_2f46457e1d_fc2bee4af9_zip_node_modules_module_federation_node_dist_src_runtimePlugin_js__WEBPACK_IMPORTED_MODULE_1__ is not a function
    at eval (webpack-internal:///../node_modules/.federation/entry.62296f9205979873546916ac24c2ba70.js:19:279)
    at ../node_modules/.federation/entry.62296f9205979873546916ac24c2ba70.js (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/webpack-runtime.js:239:1)
    at __webpack_require__ (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/webpack-runtime.js:268:33)
    at webpack/container/entry/app (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/webpack-runtime.js:113:1)
    at __webpack_require__ (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/webpack-runtime.js:268:33)
    at attachRemote (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/webpack-runtime.js:881:28)
    at /Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/webpack-runtime.js:889:12
    at /Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/webpack-runtime.js:890:13
    at Object.<anonymous> (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/webpack-runtime.js:896:12)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329:10)
    at require$$0.Module._extensions..js (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.pnp.cjs:32080:33)
    at Module.load (node:internal/modules/cjs/loader:1133:32)
    at Module._load (node:internal/modules/cjs/loader:972:12)
    at require$$0.Module._load (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.pnp.cjs:31928:31)
    at Module.require (node:internal/modules/cjs/loader:1157:19)
    at mod.require (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.yarn/__virtual__/next-virtual-2b2d4d60c0/0/cache/next-npm-14.2.5-ce63d89d89-c107b45ffe.zip/node_modules/next/dist/server/require-hook.js:65:28)
    at require (node:internal/modules/helpers:119:18)
    at /Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/pages/_document.js:420:27
    at Object.<anonymous> (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/server/pages/_document.js:436:3)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329:10)
    at require$$0.Module._extensions..js (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.pnp.cjs:32080:33)
    at Module.load (node:internal/modules/cjs/loader:1133:32)
    at Module._load (node:internal/modules/cjs/loader:972:12)
    at require$$0.Module._load (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.pnp.cjs:31928:31)
    at Module.require (node:internal/modules/cjs/loader:1157:19)
    at mod.require (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.yarn/__virtual__/next-virtual-2b2d4d60c0/0/cache/next-npm-14.2.5-ce63d89d89-c107b45ffe.zip/node_modules/next/dist/server/require-hook.js:65:28)
    at require (node:internal/modules/helpers:119:18)
    at requirePage (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.yarn/__virtual__/next-virtual-2b2d4d60c0/0/cache/next-npm-14.2.5-ce63d89d89-c107b45ffe.zip/node_modules/next/dist/server/require.js:109:84)
    at /Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.yarn/__virtual__/next-virtual-2b2d4d60c0/0/cache/next-npm-14.2.5-ce63d89d89-c107b45ffe.zip/node_modules/next/dist/server/load-components.js:72:65
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Promise.all (index 0)
    at async loadComponentsImpl (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.yarn/__virtual__/next-virtual-2b2d4d60c0/0/cache/next-npm-14.2.5-ce63d89d89-c107b45ffe.zip/node_modules/next/dist/server/load-components.js:71:33)
    at async DevServer.findPageComponentsImpl (/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/.yarn/__virtual__/next-virtual-2b2d4d60c0/0/cache/next-npm-14.2.5-ce63d89d89-c107b45ffe.zip/node_modules/next/dist/server/next-server.js:710:36)
No ModuleFederationPlugin(s) found.
[ Module Federation Manifest Plugin ]: Manifest will use absolute path resolution via its host at runtime, reason: publicPath='auto'
<w> [webpack.cache.PackFileCacheStrategy] Restoring pack failed from /Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/cache/webpack/client-development-fallback.pack.gz: Error: invalid stored block lengths
[ Module Federation Manifest Plugin ] Manifest Link: {auto}/static/chunks/mf-manifest.json
[ Module Federation Manifest Plugin ] Manifest Link: {auto}/static/chunks/mf-manifest.json
 GET / 500 in 6702ms
[ Module Federation Manifest Plugin ] Manifest Link: {auto}/static/chunks/mf-manifest.json
[ Module Federation Manifest Plugin ] Manifest Link: {auto}/static/chunks/mf-manifest.json
<w> [webpack.cache.PackFileCacheStrategy] Caching failed for pack: Error: ENOENT: no such file or directory, rename '/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/cache/webpack/client-development-fallback/0.pack.gz_' -> '/Users/nikoroach/Documents/Dev/Atlantis/atls-lab-nextmf-demo/app/entrypoints/renderer/src/.next/cache/webpack/client-development-fallback/0.pack.gz'
```

</details>

## Steps to fix

1. Go to `/app/entrypoints/renderer/node_modules/.federation`
2. Change in all files from 
    ```js
	  const pluginsToAdd = [
		  plugin_0 ? plugin_0() : false,
		  plugin_1 ? plugin_1() : false,
	  ].filter(Boolean);
    ```
    to
    ```js
	  const pluginsToAdd = [
		  plugin_0 ? plugin_0.default() : false,
		  plugin_1 ? plugin_1.default() : false,
	  ].filter(Boolean);
    ```
