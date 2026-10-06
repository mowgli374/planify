/*
 * Supabase browser client for Planify.
 * The publishable key is designed for client applications. Never put a
 * Supabase secret/service_role key in this file. Enable RLS and add policies
 * before exposing any application tables through the Data API.
 */
(() => {
  const SUPABASE_URL = 'https://mctdgzqghwmgwssrrozq.supabase.co';
  const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_meAua8X-xHvBQws19nR5TA_3gu4Utcb';

  if (!window.supabase?.createClient) {
    console.error('Supabase JS n’a pas été chargé. Vérifie la connexion Internet et le CDN.');
    return;
  }

  window.planifySupabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY,
    {
      auth: {
        autoRefreshToken: true,
        detectSessionInUrl: true,
        persistSession: true
      }
    }
  );
})();
