<template>
    <div class="px5">
        <Navbar/>
        <h3 class="primary my5">Users</h3>
        <w-flex wrap>
            <div class="xs4 pa1 pr5">
                <w-card shadow class="px5">
                    <w-input type="text" label="First Name" class="mb3"></w-input>
                    <w-input type="text" label="Last Name" class="mb3"></w-input>
                    <w-input type="text" label="Username" class="mb3"></w-input>
                    <w-input type="password" label="Password" class="mb3"></w-input>
                    <w-input type="password" label="Confirm Password" class="mb3"></w-input>
                    <w-button>Save</w-button>
                </w-card>
            </div>
            <div class="xs8 pa1">
                <v-tbl 
                :headers="['ID', 'First Name', 'Action']"
                :row="['id','fullName']"
                :data="table.items"
                :view="true" :edit="true" :deletes="true"
                ></v-tbl>
            </div>
        </w-flex>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    setup() {
        
        const table = ref({
      headers: [
        { label: "ID", key: "id" },
        { label: "Full Name", key: "firstName" },
        { label: "Action", key: "lastName" },
      ],
      items: [
        { id: 1, firstName: "Floretta", lastName: "Sampson" },
        { id: 2, firstName: "Nellie", lastName: "Lynn" },
        { id: 3, firstName: "Rory", lastName: "Bristol" },
        { id: 4, firstName: "Daley", lastName: "Elliott" },
        { id: 5, firstName: "Virgil", lastName: "Carman" },
        { id: 6, firstName: "Baldwin", lastName: "Morison" },
        { id: 7, firstName: "Beckah", lastName: "Mann" },
        { id: 8, firstName: "Davie", lastName: "Forester" },
        { id: 9, firstName: "Andi", lastName: "Montgomery" },
        { id: 10, firstName: "Magnolia", lastName: "Kirk" }
      
      ],
    });

    table.value.items = table.value.items.map(t => {
        return {
            ...t,
            fullName: `${t.firstName} ${t.lastName}`
        }
    })
 
    return {
      table
    }
    },
}
</script>