// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY; // Use anon/public key
export const supabase = createClient(supabaseUrl, supabaseKey);


export async function POST({ request, url }) {
  if (url.pathname.endsWith('/signup')) {
    const { email, password } = await request.json();
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      return new Response(JSON.stringify({ success: false, error: error.message }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    return new Response(JSON.stringify({ success: true, user: data.user }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  if (url.pathname.endsWith('/signout')) {
    const { error } = await supabase.auth.signOut();
    if (error) {
      return new Response(JSON.stringify({ success: false, error: error.message }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  return new Response('Not found', { status: 404 });
}





