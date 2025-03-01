import { supabase } from '@/lib/supabaseClient'
import type { QueryData } from '@supabase/supabase-js'

export const tasksWithProjectsQuery = supabase.from('tasks').select(`
  *,
  projects (
    id,
    name,
    slug)
  `)
export const projectsQuery = supabase.from('projects').select()

export type TasksWithProjects = QueryData<typeof tasksWithProjectsQuery>
export type Projects = QueryData<typeof projectsQuery>

export const projectQuery = (slug: string) =>
  supabase
    .from('projects')
    .select(
      `
      *,
      tasks (
        id,
        name,
        status,
        description,
        due_date
      )`,
    )
    .eq('slug', slug)
    .single()

export type Project = QueryData<ReturnType<typeof projectQuery>>

export const taskQuery = (id: number) =>
  supabase
    .from('tasks')
    .select(
      `
  *,
  projects (
    name
    )`,
    )
    .eq('id', id)
    .single()

export type Task = QueryData<ReturnType<typeof taskQuery>>
