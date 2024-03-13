<template>
  <div>
    <h1>Musique!</h1>
    <p>Navigate to the pages and play some music. Volume control is available on all pages. This site is under construction.</p>

    <div class="homepage-links">
      <router-link to="/originals" title="Original Music">Original Music</router-link>
      <router-link to="/remixes" title="Remixes">Remixes</router-link>
    </div>

    <p>[a project by <a href="https://parth.ninja" title="Main site of Parth Shiralkar" target="_blank">Parth Shiralkar</a>]</p>

    <!-- Other content for Home page -->
  </div>
</template>

<script>
export default {
  name: 'HomePage', // Updated the name of the component
};
</script>
