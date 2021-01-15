<template>
  <div>
    <main>
      <Card />
    </main>
    <p>{{ id }}</p>
    <p>{{ holder }}</p>
    <p>{{ vendor }}</p>
    <p>{{ number }}</p>
    <p>{{ validMonth }}</p>
    <p>{{ validDay }}</p>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  components: { Card },
  computed: {
    id() {
      return this.$root.id;
    },
    holder() {
      return this.$root.holder;
    },
    vendor() {
      return this.$root.vendor;
    },
    number() {
      return this.$root.number;
    },
    validMonth() {
      return this.$root.validMonth;
    },
    validDay() {
      return this.$root.validDay;
    },
  },
};
</script>

<style scoped>
</style>