<script>
import HelloWorld from '@/components/HelloWorld.vue'
import TheNavigation from '@/components/TheNavigation.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    TheNavigation
  }
}
</script>

<template>
  <div class="wrapper">
    <!-- <HelloWorld msg="You did it!" />-->
    <TheNavigation />
  </div>

  <div class="container">
    <!-- key attribute/directive is needed to force Vue to destroy and recreate component instance when it reuses the same component that is loaded when path changes -->
    <!-- it has performance downsides cos it destroys and recreates the component -->
    <RouterView :key="$route.path" />
  </div>
</template>

<!--<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.nav-exact-active {
  color: var(&#45;&#45;color-text);
}

nav a.nav-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(&#45;&#45;color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(&#45;&#45;section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>-->
