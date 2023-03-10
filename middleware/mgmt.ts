import * as supabase from '@supabase/supabase-js'


import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const client = createClient(supabaseUrl?.toString()!, supabaseKey?.toString()!)

async function signUp(): Promise<boolean> {
  let { data, error } = await client.auth.signUp({
    email: 'someone@email.com',
    password: 'GUJMqEumzWqOxhkcDuQH',
  })
  return true
}

async function signInWithPassword(): Promise<boolean> {
  let { data, error } = await client.auth.signInWithPassword({
    email: 'someone@email.com',
    password: 'GUJMqEumzWqOxhkcDuQH',
  })
  return true
}

async function getUser(): Promise<boolean> {
  const {
    data: { user },
  } = await client.auth.getUser()
  return true
}

async function resetPasswordForEmail(email: string): Promise<boolean> {
  let { data, error } = await client.auth.resetPasswordForEmail(email)
  return true
}

async function updateUser(): Promise<boolean> {
  const { data, error } = await client.auth.updateUser({
    email: 'new@email.com',
    password: 'new-password',
    data: { hello: 'world' },
  })
  return true
}

async function signOut(): Promise<boolean> {
  let { error } = await client.auth.signOut()
  return true
}

module.exports = {
  signUp: signUp,
  signInWithPassword: signInWithPassword,
  getUser: getUser,
  resetPasswordForEmail: resetPasswordForEmail,
  updateUser: updateUser,
}
