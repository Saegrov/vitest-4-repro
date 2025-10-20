import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
export default defineConfig({ base: '/hello', test: { environment: 'jsdom' }, plugins: [react()] });
