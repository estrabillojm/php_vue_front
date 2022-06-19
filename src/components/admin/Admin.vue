<template>
  <w-tabs v-model="activeTab" :items="tabs" active-class="primary">
    <template #item-content.1="{ item }">
      <!-- PERSONAL INFO TAB-->
      <w-grid columns="4" gap="5" class="wrapper mt5">
        <div class="title3 box">
          <w-input type="text" class="mb5" label="First Name"></w-input>
        </div>
        <div class="title3 box">
          <w-input type="text" class="mb5" label="Middle Name"></w-input>
        </div>
        <div class="title3 box">
          <w-input type="text" class="mb5" label="Last Name"></w-input>
        </div>
      </w-grid>
      <w-grid columns="4" gap="5" class="wrapper">
        <div class="title3 box">
          <w-input type="date" class="mb5" label="Date of Birth"></w-input>
        </div>
      </w-grid>

      <w-grid columns="6" gap="5" class="wrapper">
        <div class="title3 box">
          <w-button @click="">Next</w-button>
        </div>
      </w-grid>
    </template>
    <template #item-content.2="{ item }">
      <w-grid columns="1" gap="5" class="wrapper primary mt5 mb3">
        <h3>College</h3>
      </w-grid>
      <w-grid columns="4" gap="5" class="wrapper mt5">
        <div class="title3 box">
          <w-input type="text" class="mb5" label="School"></w-input>
        </div>

        <div class="title3 box">
          <w-input type="date" class="mb5" label="Year Graduated"></w-input>
        </div>
      </w-grid>

      <w-grid columns="6" gap="5" class="wrapper">
        <div class="title3 box">
          <w-button class="mr2" @click="" bg-color="secondary"
            >Previous</w-button
          >
          <w-button @click="">Next</w-button>
        </div>
      </w-grid>
    </template>
    <template #item-content.3="{ item }">
      <div class="title3">
            <v-tbl 
            :headers="['ID', 'First Name', 'Action']"
            :row="['id','fullName']"
            :data="table.items"
            :view="true" :edit="true" :deletes="true"
            ></v-tbl>
        
      </div>
    </template>
  </w-tabs>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const tabs = ref([
      { title: "Personal Info" },
      { title: "Education" },
      { title: `Applicant'\s MasterList` },
      // { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
    ]);
    const activeTab = ref(0);
    const table = ref({
      headers: [
        { label: "ID", key: "id" },
        { label: "First name", key: "firstName" },
        { label: "Last name", key: "lastName" },
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
        { id: 10, firstName: "Magnolia", lastName: "Kirk" },
        { id: 11, firstName: "Hamilton", lastName: "Mallory" },
        { id: 12, firstName: "Sheree", lastName: "Castle" },
        { id: 13, firstName: "Rebekah", lastName: "Eason" },
        { id: 14, firstName: "Maude", lastName: "Hayley" },
        { id: 15, firstName: "Josie", lastName: "Richard" },
      ],
    });

    return {
      tabs,
      activeTab,
      table
    }
  },
};
</script>