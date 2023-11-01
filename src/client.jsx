import { createClient } from '@supabase/supabase-js'

const URL = "https://vwgujubtrboyysquinhu.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3Z3VqdWJ0cmJveXlzcXVpbmh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1OTgxMTQsImV4cCI6MjAxNDE3NDExNH0.TWhMU2lnGNZ5H4k-f1rc_mFUNFO8AN2Puen72OsEZXE"

export const supabase = createClient(URL, API_KEY);