<script>
import sourceData from '@/data.json'

export default {
  name: 'TheNavigation',
  data() {
    return {
      destinations: sourceData.destinations
    }
  },
  computed: {
    destinationNames() {
      return this.destinations.map((destination) => destination.name)
    }
  }
}
</script>

<template>
  <nav>
    <RouterLink id="logo" to="/">Travel App</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink
      v-for="destination in destinations"
      :key="destination.id"
      :to="`/destination/${destination.id}/${destination.slug}`"
      >{{ destination.name }}</RouterLink
    >
    <!--    <RouterLink to="/brazil">Brazil</RouterLink>-->
    <!--    <RouterLink to="/panama">Panama</RouterLink>-->
    <!--    <RouterLink to="/jamaica">Jamaica</RouterLink>-->
    <!--    <RouterLink to="/hawaii">Hawaii</RouterLink>-->
  </nav>
</template>

<style scoped></style>
