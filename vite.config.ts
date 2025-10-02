import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { visualizer } from 'rollup-plugin-visualizer';

const plugins: PluginOption[] = [react(), tailwindcss()];

if (process.env.VITE_VISUALIZER === 'true') {
  plugins.push(visualizer({ open: true, gzipSize: true, brotliSize: true }));
}

// https://vite.dev/config/
export default defineConfig({
  plugins: plugins,
  base: '/',
  assetsInclude: ['**/*.glb'],
  server: {
    host: true,
    port: 5173,
    hmr: {
      overlay: false,
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return;
          }

          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor';
          }

          if (id.includes('three') || id.includes('@react-three')) {
            return 'three-vendor';
          }
        },
      },
    },
  },
});
