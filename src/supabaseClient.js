import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
console.log(
  'Supabase Key Loaded:',
  Boolean(import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY)
);

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    'Missing Supabase URL or publishable key. Check .env.local'
  );
}

export const supabase = createClient(supabaseUrl, supabaseKey);
