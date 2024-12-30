import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supaBaseUrl='https://zlqamiacnaooafloyuga.supabase.co'
const supabase = createClient(supaBaseUrl, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpscWFtaWFjbmFvb2FmbG95dWdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA0NDg4OTMsImV4cCI6MjA0NjAyNDg5M30.hjRT86iqf0BzuG9fW_bDTTd6kLpVjwxyX6qONUK6oUk')
// const supabase = createClient('https://zlqamiacnaooafloyuga.supabase.co/rest/v1/Cabins?select=*', {
//   headers: {
//     'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpscWFtaWFjbmFvb2FmbG95dWdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA0NDg4OTMsImV4cCI6MjA0NjAyNDg5M30.hjRT86iqf0BzuG9fW_bDTTd6kLpVjwxyX6qONUK6oUk',
//     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpscWFtaWFjbmFvb2FmbG95dWdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA0NDg4OTMsImV4cCI6MjA0NjAyNDg5M30.hjRT86iqf0BzuG9fW_bDTTd6kLpVjwxyX6qONUK6oUk'
//   }
// });


export default supabase