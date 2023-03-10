<script setup lang="ts">
  import { onMounted, ref } from 'vue'

  const client = useSupabaseClient()

  const session = ref()

  const loading = ref(true)
  const username = ref('')

  onMounted(() => {
    getProfile()
  })

  async function getProfile() {
    try {
      loading.value = true
      const { user } = session.value

      let { data, error, status } = await client
        .from('profiles')
        .select(`username`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406)
        throw Error('Status error 406 is not equaled to')

      if (data) {
        username.value = data.username
      }
    } catch (error) {
      Error('Status error caught in catch statement')
    } finally {
      loading.value = false
    }
  }

  async function updateProfile() {
    try {
      loading.value = true
      const { user } = session.value

      const updates = {
        id: user.id,
        username: username.value,
      }

      let { error } = await client.from('profiles').upsert(updates.id)

      if (error) throw Error('Upsert function from database failed')
    } catch (error) {
      Error('Profiles upsert encountered an error in catch')
    } finally {
      loading.value = false
    }
  }

  async function signOut() {
    try {
      loading.value = true
      let { error } = await client.auth.signOut()
      if (error) throw Error('User signout failed')
    } catch (error) {
      Error('User signout encountered an error in catch')
    } finally {
      loading.value = false
    }
  }

  module.exports = {
    session,
    loading,
    username,
    getProfile,
    updateProfile,
    signOut,
  }
</script>

<template>
  <form class="form-widget" @submit.prevent="updateProfile">
    <div>
      <label for="email">Email</label>
      <input id="email" type="text" :value="session.user.email" disabled />
    </div>
    <div>
      <label for="username">Name</label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <input
        type="submit"
        class="button primary block"
        :value="loading ? 'Loading ...' : 'Update'"
        :disabled="loading"
      />
    </div>

    <div>
      <button class="button block" @click="signOut" :disabled="loading">
        Sign Out
      </button>
    </div>
  </form>
</template>
