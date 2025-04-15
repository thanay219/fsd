import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ztlbarladmfmyxddxyjg.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0bGJhcmxhZG1mbXl4ZGR4eWpnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0Mzc3NTIyMywiZXhwIjoyMDU5MzUxMjIzfQ.TbfsJZb6kK2uZs9t74fZ9nC_Pkgjj79tNLLNOErN_mA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
