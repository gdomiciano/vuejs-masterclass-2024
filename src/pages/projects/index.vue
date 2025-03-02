<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';
import type { Tables } from '../../../database/types';
import type { ColumnDef } from '@tanstack/vue-table';
import { RouterLink } from 'vue-router';

const projects = ref<Tables<'projects'>[] | null>();

(async () => {
  const { data, error } = await supabase.from('projects').select();
  if (error) console.error(error);

  projects.value = data;

  console.log('projects:', projects.value);
})();

const columns: ColumnDef<Tables<'projects'>>[] = [
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left' }, 'Name'),
    cell: ({ row }) => h(RouterLink, { to: `/projects/${row.original.slug}`, class: 'text-left font-medium hover:bg-muted block w-full p-4' }, () => row.getValue('name')),
  },
  {
    accessorKey: 'status',
    header: () => h('div', { class: 'text-left' }, 'Status'),
    cell: ({ row }) => h('div', { class: 'text-left' }, row.getValue('status')),
  },
  {
    accessorKey: 'collaborators',
    header: () => h('div', { class: 'text-left' }, 'Collaborators'),
    cell: ({ row }) => h('div', { class: 'text-left' }, JSON.stringify(row.getValue('collaborators'))),
  },
];
</script>

<template>
  <DataTable v-if="projects" :data="projects" :columns="columns" />
</template>

<style scoped></style>
