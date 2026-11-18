const normalizeOrigin = (url) => (url ? url.trim().replace(/\/+$/, '') : '');

const allowedOrigins = [
  normalizeOrigin(process.env.FRONTEND_URL), // https://student-portal-anits.vercel.app
  'http://localhost:5173',                   // Vite local dev origin
].filter(Boolean);

// Allows Vercel preview deployments for this project only (never use '*')
const vercelPreviewRegex = /^https:\/\/student-portal-anits-[a-z0-9-]+\.vercel\.app$/;

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // Render health checks / curl
    const clean = normalizeOrigin(origin);
    if (allowedOrigins.includes(clean) || vercelPreviewRegex.test(clean)) {
      return callback(null, true);
    }
    console.warn(`[CORS] Blocked unauthorized origin: ${origin}`);
    return callback(null, false); // Cleanly omit ACAO without throwing HTTP 500
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200,
  maxAge: 86400,
};

module.exports = corsOptions;
