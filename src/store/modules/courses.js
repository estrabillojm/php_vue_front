import axios from 'axios'
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'success',
    customClass: {
      popup: 'success'
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true
})




const courses = {
    namespaced: true,
    state:{
        courses: []
    },
    mutations: {
        FETCH_ALL: (state, payload) => {
            state.courses = payload
            
        },
        UPDATE: (state, payload) => {
            state.courses = state.courses.map(c => payload.id == c.id ?  payload : c )
         
        },
        ADD: (state, payload) => {
            state.courses.unshift(payload)
        },
        DELETE: (state, id ) => {
            state.courses = state.courses.filter(c => c.id != id)
        }
    },
    actions:{
        fetchAll: async ({ commit }) => {
            await axios.post("/courses.php", { method: "fetchAllCourses"}).then(res => {
                commit('FETCH_ALL', res.data)
            })
        },
        update: async ({ commit }, payload) => {
            await axios.put("/courses.php", { method: "updateCourse", payload }).then(async res => {
                
                commit('UPDATE', res.data.data)
                await Toast.fire({
                    icon: 'success',
                    title: 'Data Updated'
                })
            })
        },
        add: async ({ commit }, payload) => {
            
            await axios.post("/courses.php", { method: "addCourse", payload }).then(async res => {
                commit('ADD', { ...res.data.data , id: res.data.id })
                await Toast.fire({
                    icon: 'success',
                    title: 'Data Successfully Added'
                })
            })
        },
        delete: async ({ commit }, id) => {
            await axios.post("/courses.php", { method: "deleteCourse", payload: id }).then(async res => {
                commit('DELETE', id )
                await Toast.fire({
                    icon: 'success',
                    title: 'Data Deleted'
                })
            })
        }
    }
}

export default courses