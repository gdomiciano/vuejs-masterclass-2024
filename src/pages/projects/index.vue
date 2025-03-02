<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';
import { ref } from 'vue';
import type { Tables } from '../../../database/types';

const projects = ref<Tables<'projects'>[] | null>();

(async () => {
  const { data, error } = await supabase.from('projects').select();
  if (error) console.error(error);

  projects.value = data;

  console.log('projects:', projects.value);
})();
</script>

<template>
  <div>
    <h1>project page</h1>
    <router-link to="/"> Goto to home</router-link>

    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
