<template>
  <div class="not-found">
    <h1>404: Not Found</h1>
    <h4>Some who wander are actually lost, methinks</h4>
    <img class="not-found-image" src="@/assets/notfound.png" alt="Not Found"/>
    That page wasn't found! <router-link to="/">Go Back to Homepage</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>
