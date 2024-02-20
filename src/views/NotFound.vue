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

<style>
/* Style as needed */
.not-found {
  text-align: center;
}

.not-found-image {
  display: block;
  margin: 0 auto 1em;
  width: auto;
  max-height: 40vh;
}

.not-found h1 {
  font-size: 4em;
  margin: 0;
}

.not-found p {
  font-size: 2em;
}
</style>
