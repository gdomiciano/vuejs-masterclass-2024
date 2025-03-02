<script setup lang="ts">

import { projectsQuery, type Projects } from '@/utils/supaQueries';
import { columns } from '@/utils/tableColumns/projectsColumns'
usePageStore().pageData.title = 'My projects page';

const projects = ref<Projects | null>();

const getProjects = async () => {
  const { data, error, status } = await projectsQuery

  if (error) useErrorStore().setError({ error, customCode: status });

  projects.value = data;
};

await getProjects();

</script>

<template>
  <DataTable v-if="projects" :data="projects" :columns="columns" />
</template>

<style scoped></style>
