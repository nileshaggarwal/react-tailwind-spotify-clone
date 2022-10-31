import { createClient } from "@supabase/supabase-js";

const options = {
  db: {
    schema: "public",
  },
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
  global: {
    headers: { "x-my-custom-header": "tunestream" },
  },
};

const supabase = createClient(
  "https://kquybjqcspyatsvvanya.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxdXlianFjc3B5YXRzdnZhbnlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY4ODY5MDgsImV4cCI6MTk4MjQ2MjkwOH0.8i5mZaxB-OyzalYRORbeTuyAaYR6nADYCwqmwNBqT94",
  options
);

export default supabase;
