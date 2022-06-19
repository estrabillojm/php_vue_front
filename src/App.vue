<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <w-app>
    <router-view/>
  </w-app>
</template>

<style>
  *{
    font-family: Helvetica, Arial, sans-serif
  }

  .router-link-active{
    font-weight: bolder;
    text-decoration: underline;
  }
</style>
