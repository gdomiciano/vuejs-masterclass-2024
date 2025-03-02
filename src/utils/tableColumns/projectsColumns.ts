import { RouterLink } from 'vue-router'
import type { ColumnDef } from '@tanstack/vue-table'
import type { Projects } from '../supaQueries'

export const columns: ColumnDef<Projects[0]>[] = [
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left' }, 'Name'),
    cell: ({ row }) =>
      h(
        RouterLink,
        {
          to: `/projects/${row.original.slug}`,
          class: 'text-left font-medium hover:bg-muted block w-full p-4',
        },
        () => row.getValue('name'),
      ),
  },
  {
    accessorKey: 'status',
    header: () => h('div', { class: 'text-left' }, 'Status'),
    cell: ({ row }) => h('div', { class: 'text-left' }, row.getValue('status')),
  },
  {
    accessorKey: 'collaborators',
    header: () => h('div', { class: 'text-left' }, 'Collaborators'),
    cell: ({ row }) =>
      h('div', { class: 'text-left' }, JSON.stringify(row.getValue('collaborators'))),
  },
]
