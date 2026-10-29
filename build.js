// One-command build: bundles the app and Tailwind CSS into a single standalone file, dist/iep-assist.html
const { execSync } = require('child_process');
const fs = require('fs');
fs.mkdirSync('dist', { recursive: true });
execSync(`npx esbuild src/main.tsx --bundle --minify --format=iife --target=es2020 --define:process.env.NODE_ENV='"production"' --outfile=dist/app.js`, { stdio: 'inherit' });
execSync('npx tailwindcss -i src/styles.css -o dist/app.css --minify', { stdio: 'inherit' });
const js = fs.readFileSync('dist/app.js', 'utf8').replace(/<\/script>/g, '<\\/script>');
const css = fs.readFileSync('dist/app.css', 'utf8');
const html = `<!DOCTYPE html>
<html lang="en-GB"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><title>IEP Assist (research prototype)</title><style>${css}</style></head><body><div id="root"></div><script>${js}</script></body></html>`;
fs.writeFileSync('dist/iep-assist.html', html);
console.log('Built dist/iep-assist.html — double-click it to open.');
