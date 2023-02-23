<script setup lang="ts">
  import type { RealtimeChannel } from '@supabase/supabase-js'
  import type { Database } from '~/types'

  const client = useSupabaseClient<Database>()

  let realtimeChannel: RealtimeChannel

  // Fetch collaborators and get the refresh method provided by useAsyncData
  const { data: collaborators, refresh: refreshCollaborators } =
    await useAsyncData('collaborators', async () => {
      const { data } = await client.from('collaborators').select('name')
      return data
    })

  const { data: videos } = await useAsyncData('videos', async () => {
    const { data } = await client
      .from('videos')
      .select('id, title')
      .eq('id', 'username')
      .single()

    return data
  })

  // Once page is mounted, listen to changes on the `collaborators` table and refresh collaborators when receiving event
  onMounted(() => {
    // Real time listener for new workouts
    realtimeChannel = client
      .channel('public:collaborators')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'collaborators' },
        () => refreshCollaborators(),
      )
    realtimeChannel.subscribe()
  })
  // Don't forget to unsubscribe when user left the page
  onUnmounted(() => {
    client.removeChannel(realtimeChannel)
  })
</script>
