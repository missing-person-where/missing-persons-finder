
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://yuvutrtznlgxwdsjuram.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dnV0cnR6bmxneHdkc2p1cmFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0MzIyOTcsImV4cCI6MjA4MDAwODI5N30.cX3THMxVf75h455beFVMmUxtfgfqCsaoVsKQ_-SIAbc'
export const supabase = createClient(supabaseUrl, supabaseKey)
