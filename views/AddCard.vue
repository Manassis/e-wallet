<template>
  <div>
    <h1>ADD A NEW BANK CARD</h1>
    <p>NEW CARD</p>
    <main>
      <Card />
      <CardForm />
    </main>
    <button @click: class="addcard">ADD CARD</button>
  </div>
</template>

<script>
import Card from "./Components/Card.vue";
import CardForm from "./Components/CardForm.vue";

export default {
  components: { Card, CardForm },
  computed: {},
};
</script>

<style scoped>
.addcard {
  box-sizing: border-box;
}
</style>