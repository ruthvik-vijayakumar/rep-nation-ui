import { createClient } from '@supabase/supabase-js'
export const supabase = createClient(
  'https://dozesvlwpdskvppsstlq.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvemVzdmx3cGRza3ZwcHNzdGxxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0NzE4NzgsImV4cCI6MjAyODA0Nzg3OH0.uKiKSaQ_sp4Ef1RELlPndanrtPKvHUz0w0KQUi_cL9g'
)

// supabase.auth.getSession().then(({ data: { session } }) => {
//   setSession(session)
// })
//
// const {
//   data: { subscription }
// } = supabase.auth.onAuthStateChange((_event, session) => {
//   setSession(session)
// })
