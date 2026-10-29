import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://chmdsvfmlscrbqomqifp.supabase.co';

const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_A1NbTHmXm8gqCDsj-EKFwQ_3SvQ6nPZ';

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
