# Physique Coach

## Run locally
```
npm install
npm run dev
```

## Deploy (Vercel)
1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo (framework auto-detects as Vite).
3. Before deploying, add an Environment Variable: `ANTHROPIC_API_KEY` = your key from console.anthropic.com/settings/keys.
4. Deploy. Vercel will host the frontend and automatically turn `api/claude.js` into a live serverless endpoint at `/api/claude`.

## Notes
- Data is saved with the browser's local storage — it stays on the device/browser it was created on. It does not sync across devices; that needs a real backend + accounts.
- The AI Coach, meal suggestions, and photo analysis features call `/api/claude`, which uses the `ANTHROPIC_API_KEY` you set in Vercel. Usage on that key is billed by Anthropic based on API usage — separate from any claude.ai subscription.
