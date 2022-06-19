<template>
    <w-flex justify-space-between class="blue-light5--bg pa3 py5 mb2">
        <div>
            <h3 class="warning">
                Sample CRUD
            </h3>
        </div>
        <div>
            <router-link to="/applicants">Applicants</router-link> &nbsp;
            <router-link to="/users">Users</router-link> &nbsp;
            <router-link to="/roles">Roles</router-link> &nbsp;
            <router-link to="/courses">Courses</router-link> &nbsp;
            <router-link to="/">Logout</router-link>
        </div>
    </w-flex>
</template>