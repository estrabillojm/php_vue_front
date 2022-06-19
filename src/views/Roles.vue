<template>
    <div class="px5">
        <Navbar/>
        <h3 class="primary my5">Roles</h3>
        <w-flex wrap>
            <div class="xs4 pa1 pr5">
                <w-card shadow class="px5">
                    <w-input type="text" label="Role Description" class="mb3"></w-input>
                    <p class="body primary mb3 text-bold">Role Access: </p>
                    <w-grid columns="2" class="wrapper">
                        <div><w-checkbox color="blue-light1">All</w-checkbox>&nbsp;</div>
                        <div><w-checkbox color="blue-light1">Applicants</w-checkbox>&nbsp;</div>
                        <div><w-checkbox color="blue-light1">Roles</w-checkbox>&nbsp;</div>
                        <div><w-checkbox color="blue-light1">Courses</w-checkbox>&nbsp;</div>
                        <div><w-checkbox color="blue-light1">Users</w-checkbox>&nbsp;</div>
                        
                    </w-grid>

                    <w-grid columns="6" class="wrapper mt5">
                        <w-button>Save</w-button>
                    </w-grid>
                </w-card>
            </div>
            <div class="xs8 pa1">
                <div class="pa1">
                <v-tbl 
                :headers="['ID', 'First Name', 'Action']"
                :row="['id','fullName']"
                :data="table.items"
                :view="true" :edit="true" :deletes="true"
                ></v-tbl>
            </div>
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
        { label: "Role", key: "role" },
        { label: "Action", key: "lastName" },
      ],
      items: [
        { id: 1, role: "Floretta", lastName: "<button class='primary'>Edit</button>" },
        { id: 2, role: "Nellie", lastName: "Lynn" },
        { id: 3, role: "Rory", lastName: "Bristol" },
        { id: 4, role: "Daley", lastName: "Elliott" },
        { id: 5, role: "Virgil", lastName: "Carman" },
        { id: 6, role: "Baldwin", lastName: "Morison" },
        { id: 7, role: "Beckah", lastName: "Mann" },
        { id: 8, role: "Davie", lastName: "Forester" },
        { id: 9, role: "Andi", lastName: "Montgomery" },
        { id: 10, role: "Magnolia", lastName: "Kirk" }
      
      ],
    });
 
    return {
      table
    }
    },
}
</script>