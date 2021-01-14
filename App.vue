<template>
  <div id="app">
    <Card :card="myCard" />
    <router-link to="/views/AddCard">ADD CARD</router-link>
    <router-link to="/views/Home"> ADD A NEW CARD</router-link>
    <router-view />
  </div>
</template>

<script>
import Card from "./Components/Card.vue";

export default {
  components: { Card },
  data() {
    return {
      background: "white",
      myCard: {
        expyear: "12",
        expmonth: "5",
        cardholder: "Yngwie Malmsteen",
        vendor: "bitcoin",
        cardnumber: "1234567890123",
      },
    };
  },
};
</script>
<style lang="scss">
.foo {
  border: 1px solid black;
  min-width: 20rem;
  min-height: 20rem;
}
.evil {
  background-color: white;
}
.bitcoin {
  background-color: red;
}
</style>