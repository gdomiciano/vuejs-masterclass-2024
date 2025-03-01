<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';

(async () => {
  const { data, error } = await supabase.from('projects').select();
  if (error) console.error(error);

  console.log('projects:', data);
})();

</script>
<template>
  <div>
    <h1>Home page</h1>
    <router-link :to="{ name: '/projects/[id]', params: { id: 1 } }"> Go To projects 1</router-link>
  </div>
</template>
<style lang="">

</style>
