<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';
import { ref } from 'vue';
import type { Tables } from '../../../database/types';
const tasks = ref<Tables<'tasks'>[] | null>();

(async () => {
  const { data, error } = await supabase.from('tasks').select();
  if (error) console.error(error);

  tasks.value = data;

})();
</script>

<template>
  <div>
    <h1>Tasks page</h1>
    <router-link to="/"> Goto to home</router-link>

    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
