# Student Records Portal — React (Vercel) + Express (Render) + MongoDB Atlas

Companion code for the case study "Analysis and Resolution of Connectivity Issues Between a React Frontend on Vercel and an Express.js Backend on Render" (R.B. Abhiram, ANITS).

```
student-records-portal/
├── backend/    Express 4 + Mongoose 8 API  -> deploy to Render
└── frontend/   React 18 + Vite 5 SPA       -> deploy to Vercel
```

## Run locally
```bash
# 1) Backend
cd backend
cp .env.example .env        # fill in MONGODB_URI
npm install
npm run seed                # inserts the 4 sample students
npm run dev                 # http://localhost:5000/api/health

# 2) Frontend (new terminal)
cd frontend
npm install
npm run dev                 # http://localhost:5173 (uses .env.development)
```

## Deploy
**Render (backend)**: root directory `backend`, build `npm install`, start `npm start`.
Env vars: `MONGODB_URI`, `FRONTEND_URL` (no trailing slash), `NODE_ENV=production`. `PORT` is injected by Render.

**MongoDB Atlas**: Network Access must allow Render's outbound IPs (0.0.0.0/0 temporarily on the free tier, or Static Outbound IPs). Use a least-privilege `readWrite` user on `student_records_db` and URL-encode special characters in the password.

**Vercel (frontend)**: root directory `frontend`, framework Vite.
Env var: `VITE_API_BASE_URL=https://<your-render-service>.onrender.com`.
`VITE_` vars are baked in at build time: after changing one, redeploy with build cache cleared.

## Quick checks
```bash
curl https://<render-service>.onrender.com/api/health
curl -i -X OPTIONS https://<render-service>.onrender.com/api/students \
  -H "Origin: https://<vercel-app>.vercel.app" \
  -H "Access-Control-Request-Method: GET"
```

## Notes
- `frontend/vercel.json` holds the *suggested* same-origin rewrite from section 7.6. It is optional; the app works with CORS alone.
- Update the service URLs in `vercel.json` and the preview regex in `corsOptions.js` to match your own project names.
