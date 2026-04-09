import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://orkjarwuhrkxjnwvccqf.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ya2phcnd1aHJreGpud3ZjY3FmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4NTQ1MjYsImV4cCI6MjA5MDQzMDUyNn0.o8lNPrUoQ6c9EN70FbIuOGELKNTcnYPQYY1Kq4gdJoA`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
