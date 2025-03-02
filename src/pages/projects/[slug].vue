<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute<'/projects/[slug]'>();
</script>

<template>
  <h1>project {{ route.params?.slug }}</h1>
</template>

<style scoped></style>
