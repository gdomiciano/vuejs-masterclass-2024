<script setup lang="ts">
</script>
<template>
  <div>
    <h1>Home page</h1>
    <router-link :to="{ name: '/projects/[id]', params: { id: 1 } }"> Go To projects 1</router-link>
  </div>
</template>
<style lang="">

</style>
