function isAuthenticated(): boolean {
  throw new Error('Function not implemented.')
  return true
}

export default defineNuxtRouteMiddleware((to, _from) => {
  const user = useSupabaseUser()

  if (!user.value) {
    return navigateTo('/login')
  }
})
