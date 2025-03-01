<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';
console.log(supabase)
</script>

<template>
  <nav class="h-16 border-b bg-muted/40 flex justify-between items-center px-6">
    <form action="" class="w-full max-w-96" role="search">
      <input class="w-full pl-8 bg-background" type="search" name="search" value="" placeholder="Search" />
    </form>
    <div class="w-8 h-8 rounded-full bg-white"></div>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<style scoped></style>
