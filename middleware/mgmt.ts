import * as supabase from '@supabase/supabase-js'

async function signUp(): Promise<boolean> {
  let { data, error } = await supabase.auth.signUp({
    email: 'someone@email.com',
    password: 'GUJMqEumzWqOxhkcDuQH',
  })
  return true
}

async function signInWithPassword(): Promise<boolean> {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: 'someone@email.com',
    password: 'GUJMqEumzWqOxhkcDuQH',
  })
  return true
}

async function getUser(): Promise<boolean> {
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return true
}

async function resetPasswordForEmail(): Promise<boolean> {
  let { data, error } = await supabase.auth.resetPasswordForEmail(email)
  return true
}

async function updateUser(): Promise<boolean> {
  const { data, error } = await supabase.auth.updateUser({
    email: 'new@email.com',
    password: 'new-password',
    data: { hello: 'world' },
  })
  return true
}

async function signOut(): Promise<boolean> {
  let { error } = await supabase.auth.signOut()
  return true
}

module.exports = {
  signUp: signUp,
  signInWithPassword: signInWithPassword,
  getUser: getUser,
  resetPasswordForEmail: resetPasswordForEmail,
  updateUser: updateUser,
}
