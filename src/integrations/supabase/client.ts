// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://uhckruogsuocucrcgvnf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoY2tydW9nc3VvY3VjcmNndm5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzMzAxNzksImV4cCI6MjA1MDkwNjE3OX0.hfYMHgBz9RgL2wkxJH4KhRnsLtAKbGT-NI7s_rueCR4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);