<script setup lang="ts">

const { activeError } = storeToRefs(useErrorStore())
const errorStore = useErrorStore()

onErrorCaptured((error) => {
  errorStore.setError({ error })
})
</script>

<template>
  <AuthLayout>
    <AppErrorPage v-if="activeError" />

    <RouterView v-else v-slot="{ Component, route }">
      <Suspense v-if="Component" :timeout="0">
        <Component :is="Component" :key="route.name" />

        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>
