<script setup lang="ts">
const route = useRoute<'/projects/[slug]'>();
</script>

<template>
  <h1>project {{ route.params?.slug }}</h1>
</template>

<style scoped></style>
