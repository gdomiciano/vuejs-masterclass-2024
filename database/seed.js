import { faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.VITE_SUPABASE_URL
const serviceRoleKey = process.env.SERVICE_ROLE_KEY

const supabase = createClient(supabaseUrl, serviceRoleKey)

const seedProjects = async () => {
  const projects = [...Array(10).keys()].map(() => {
    const name = faker.lorem.words(3)
    return {
      name,
      slug: name.toLowerCase().replace(/\s/g, '-'),
      status: faker.helpers.arrayElement(['in-progress', 'completed']),
      collaborators: faker.helpers.arrayElements([1, 2, 3]),
    }
  })

  const { data, error } = await supabase.from('projects').insert(projects)

  if (error) {
    console.error('Error seeding projects', error)
  } else {
    console.log('Projects seeded successfully', data)
  }
}

await seedProjects()
