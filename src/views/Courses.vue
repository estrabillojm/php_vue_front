<template>
    <div class="px5">
        <Navbar/>
        <h3 class="primary my5">Courses</h3>
        <w-flex wrap>
                <div class="xs4 pa1 pr5">
                    <w-card shadow class="px5">
                        <w-input type="text" label="Course" class="mb3" v-model="course.course"
                        ></w-input>
                        <w-grid columns="6" class="wrapper mt5">
                            <w-button @click="saveUpdate()" :disabled="course.course.length < 1 ? true : false">{{ !isEditMode ? 'Save' : 'Update' }}</w-button>
                            <w-button type="button" @click="cancelEditMode()" v-if="isEditMode" class="ml2" bg-color="secondary">Cancel</w-button>
                        </w-grid>
                    </w-card>
                </div>
            <div class="xs8 pa1">
                <div class="pa1">
                <v-tbl :headers="['ID', 'Course', 'Action']" 
                :row="['id','course']"
                :data="courses"
                :edit="true" :deletes="true" @editFn="editCourse" @deleteFn="deleteCourse"
                ></v-tbl>
            </div>
            </div>
        </w-flex>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
export default {
    setup() {

    const store = useStore()
    const courses = computed(() => store.state.courses.courses)
    const course = ref({
        course: ""
    })
    const fetchAllCourses = () => store.dispatch('courses/fetchAll')
    const isEditMode = ref(false)
    const editCourse = (index) => {
        isEditMode.value = true 
        course.value = {...courses.value[index]}
    }
    const cancelEditMode = () => {
        course.value = ""
        isEditMode.value = false
    }
    const saveUpdate = () => {
        if(isEditMode.value) store.dispatch("courses/update", course.value )
        else store.dispatch("courses/add", course.value )
        course.value.course = ""
    }

    const deleteID = ref("")
    const deleteCourse = (index) => {
        store.dispatch("courses/delete", courses.value[index].id)
    }
    onMounted(() => {
        fetchAllCourses()
    })
    return {
      courses, course, editCourse, isEditMode, cancelEditMode, saveUpdate, deleteCourse
    }
    },
}
</script>