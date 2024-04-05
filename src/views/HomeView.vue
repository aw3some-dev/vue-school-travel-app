<script>
import TheWelcome from '../components/TheWelcome.vue'
import sourceData from '@/data.json'
export default {
  data() {
    return {
      destinations: sourceData.destinations
    }
  },
  computed: {
    travelDestinations() {
      return this.destinations
    }
  },
  methods: {}
}
</script>

<template>
  <!--  <main>-->
  <!--    <TheWelcome />-->
  <!--  </main>-->

  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations">
      <RouterLink
        v-for="destination in destinations"
        :key="destination.id"
        :to="{
          name: 'destination.show',
          // path: `/destination/${destination.id}`,
          params: { id: destination.id, slug: destination.slug }
        }"
      >
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
      </RouterLink>
    </div>
  </div>
</template>
