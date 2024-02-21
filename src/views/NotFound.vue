<template>
  <div class="not-found">
    <h1>404</h1>
    <img class="not-found-image" src="@/assets/notfound.png" alt="Not Found"/>
    That page wasn't found! <router-link to="/">Go Back Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>
