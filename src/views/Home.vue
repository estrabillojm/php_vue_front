<template>
    <div class="cs-flex">
      <w-form @submit.prevent="submitForm()" v-model="valid" class="cst-form">
        <w-input
          type="text"
          inner-icon-left='mdi mdi-account'
          v-model="formData.username"
          class="mb5"
          label="Username"
          :validators="[validators.required]"
        >
        </w-input>
        <w-input class="mb2"
          label="Password"
          :type="isPassword ? 'password' : 'text'"
          inner-icon-left="mdi mdi-account-lock"
          :inner-icon-right="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
          :validators="[validators.required]"
          @click:inner-icon-right="isPassword = !isPassword">
        </w-input>
        <div class="text-right mt6">
          <w-button type="submit" bg-color="success"  lg>
            Login
          </w-button>
        </div>
      </w-form>
    </div>

</template>

<script>
// @ is an alias to /src

import { ref } from  '@vue/reactivity';
import { useRouter } from 'vue-router'

export default {
  setup() {
      const router = useRouter()
      const valid =  ref(null)
      const rating = ref(3)
      const validators =  ref({
        required: value => !!value || 'This field is required'
      })

      const formData = ref({
        username: "", 
        password: ""
      })
      const isPassword = ref(true)
      
      const submitForm = () => {
        if(valid.value){
          router.push('/applicants')
        }
      }
      
     return { valid, validators, isPassword, submitForm, rating, formData }
  }
};
</script>

<style>
  .cs-flex{
    display: flex;
    height: 100vh;
    width:100vw;
    border: 3px solid red;
    justify-content: center;
    align-items: center;
  }
  .cst-form{
    border:1px solid #ccc;
    height: fit-content;
    width: 50%;
    padding:60px 40px;
    border-radius:15px;
    box-shadow: 1px 1px 4px rgb(184, 184, 184);
  }
</style>

