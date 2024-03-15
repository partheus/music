<template>
  <div>
    <h1>Musique!</h1>
    <p>Navigate to the pages and play some music. Volume control is available on all pages. This site is under construction.</p>

    <div class="homepage-links">
      <router-link to="/originals" title="Original Music" class="button button--primary">Original Music</router-link>
      <router-link to="/remixes" title="Remixes" class="button button--primary">Remixes</router-link>
      <router-link to="/about" title="About" class="button button--secondary">About</router-link>
    </div>

    <p>a project by [<router-link to="/colophon">Parth Shiralkar</router-link>], also
    known as hTrap</p>

    <!-- Other content for Home page -->
  </div>
</template>

<script>
export default {
  name: 'HomePage', // Updated the name of the component
};
</script>
