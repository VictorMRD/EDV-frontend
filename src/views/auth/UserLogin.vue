<script setup lang="ts">
    import { Button } from '@/components/ui/button'
    import { Input } from '@/components/ui/input'

    function login() {
        console.log('Login button clicked')
    }

</script>

<template>
    <div class="flex flex-col items-center justify-center w-50 gap-2">
        <p class="font-bold text-2xl">Login page</p>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button variant="secondary" @click="login">Login</Button>
    </div>
</template>