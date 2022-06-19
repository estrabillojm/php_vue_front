<template>
    <div>
        <table width="100%">
            <thead>
                <tr>
                    <td v-for="(header, index) in headers" :key="index">{{ header}}</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(d, index) in data" :key="index">
                    <td v-for="(r, index) in row" :key="index">{{ d[r] }}</td>
                    <td class="action">
                        <button v-if="view" class="view">View</button>
                        <button v-if="edit" class="edit" @click="handleEdit(index)"> Edit</button> 
                        <button v-if="deletes" class="delete" @click="handleDelete(index)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        props: {
            headers: Array,
            data: Array,
            row: Array,
            deletes: Boolean,
            edit: Boolean,
            view: Boolean
        },
        setup(props, { emit }){
            const handleEdit = (index) => {
                emit('editFn', index)
            }

            const handleDelete = (index => {
                emit('deleteFn', index)
            })

            return {
                handleEdit, handleDelete
            }
        }
        
    }
</script>

<style> 
    table{
        border-collapse: collapse;
    }
    table thead tr{
        background: rgb(39, 101, 158);
        color: white;
       
    }

    table thead tr td, table tbody tr td{
        padding: 6px 4px; 
        border:1px solid #ccc;
    }

    table tbody tr td button{
        margin-right:6px;
        padding:3px 10px;
        border:none;
        outline:none;
        color:white;
        border-radius:3px;
    }

    table tbody tr td button.view{
        background: rgb(101, 202, 101);
    }

    table tbody tr td button.edit{
        background: rgb(51, 116, 202);
    }

    table tbody tr td button.delete{
        background: rgb(224, 80, 80);
    }
</style>