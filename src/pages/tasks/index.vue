<script setup lang="ts">
import { tasksWithProjectsQuery, type TasksWithProjects } from '@/utils/supaQueries';
import { columns } from '@/utils/tableColumns/tasksColumns';
usePageStore().pageData.title = 'My Tasks page';

const tasks = ref<TasksWithProjects | null>();

const getTasks = async () => {
  const { data, error, status } = await tasksWithProjectsQuery

  if (error) useErrorStore().setError({ error, customCode: status });

  tasks.value = data;
};

await getTasks();

</script>

<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>

<style lang="">

</style>
