<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';
import { Input } from './components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

console.log(supabase)
</script>

<template>
  <nav class="h-16 border-b bg-muted/40 flex justify-between items-center px-6">
    <form action="" class="relative w-full h-fit max-w-96" role="search">
      <iconify-icon class="absolute top-[50%] translate-y-[-50%] left-2.5 text-muted-foreground"
        icon="pepicons-pop:loop"></iconify-icon>
      <Input class="w-full pl-8 bg-background" type="search" name="search" value="" placeholder="Search" />
    </form>
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/unovue.png" alt="@unovue" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<style scoped></style>
