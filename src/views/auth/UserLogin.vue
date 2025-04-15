<script setup lang="ts">
    import { Button } from '@/components/ui/button'
</script>

<template>
    <div class="flex flex-col items-center justify-center bg-gray-400 w-50">
        <p>Login</p>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <Button>Login</Button>
    </div>
</template>