<script setup lang="ts">
    import Button from '@/components/ui/button/Button.vue';
    import { ref } from 'vue';
    import { RouterLink, RouterView } from 'vue-router'
    import { useColorMode } from '@vueuse/core'    
    
    const mode = useColorMode()
</script>
<template>
    <div>
        Header
        <div>
            Change style
            <Button>{{ mode ? "Dark" : "Light" }}</Button>
        </div>
    </div>
    <div>
        <RouterView />
    </div>
    <div>
        Footer
    </div>
</template>