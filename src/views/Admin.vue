<template>
    <div class="px5">
        <Navbar/>
        <h3 class="primary my5">Applicants</h3>
        <Admin/>
        
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Admin from '@/components/admin/Admin'
    
    export default {
        components: {
            Admin
        },
        setup(){
            
        }
    }
</script>