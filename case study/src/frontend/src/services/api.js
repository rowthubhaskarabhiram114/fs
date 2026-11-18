import axios from 'axios';

// Strictly read Vite build-time env var (never process.env in Vite browser code)
const rawBaseUrl = import.meta.env.VITE_API_BASE_URL || '';
const API_BASE_URL = rawBaseUrl.trim().replace(/\/+$/, '');

if (!API_BASE_URL) {
  throw new Error('Configuration Error: VITE_API_BASE_URL is missing in Vite env.');
}

const apiClient = axios.create({
  baseURL: API_BASE_URL, // e.g., https://student-api-anits.onrender.com
  timeout: 30000,        // 30s timeout tolerates Render free-tier spin-up
  withCredentials: true,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

export const fetchStudents = () => apiClient.get('/api/students');
export default apiClient;
