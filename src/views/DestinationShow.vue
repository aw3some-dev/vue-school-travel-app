<script>
import sourceData from '@/data.json'
import ExperienceCard from '@/components/ExperienceCard.vue'

export default {
  name: 'DestinationShow',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  components: {
    ExperienceCard
  },
  data() {
    return {
      destination: null
    }
  },
  computed: {
    destinationId() {
      return parseInt(this.$route.params.id)
    }
    // destination() {
    //   return sourceData.destinations.find((dest) => dest.id === this.destinationId)
    // }
  },
  methods: {
    async initData() {
      const response = await fetch(
        `https://travel-dummy-api.netlify.app/${this.$route.params.slug}.json`
      );
      this.destination = await response.json();
    }
  },
  created() {
    this.initData();
    // this.$watch(() => this.$route.params, this.initData);
  }
}
</script>

<template>
  <section v-if="destination" class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>

  <section class="experiences">
    <h2>Top Experiences in {{ destination.name }}</h2>
    <div class="cards">
      <ExperienceCard v-for="exp in destination.experiences" :key="exp.slug" :experience="exp" />
    </div>
  </section>
</template>

<style scoped></style>
