<script setup lang="ts">
  import { reactive, ref, watch } from 'vue'
  import { onMounted } from 'vue'

  const client = useSupabaseClient()
  const SupabasePostgresUri = process.env.SUPABASE_POSTGRES_URI?.toString()
  const videosCollection = client
    .channel('custom-all-channel')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'videos' },
      (payload: any) => {
        console.log('Change received!', payload)
      },
    )
    .subscribe()

  const observedItem = ref(videosCollection) // reference GraphQL query

  watch(
    observedItem,
    async (incomingEvent, outgoingEvent) => {
      // console args value is-equal-to 2
      if (incomingEvent.topic == '/^videos.value$/') {
        let response = await fetch(
          SupabasePostgresUri + '/videos/${videos.value}',
        ) // fetch graphql api url VIP(Replace): replace 'todo' values
        observedItem.value = await response.json()
      }
    },
    { immediate: true },
  )

  reactive({
    videosCollection,
  })
</script>
