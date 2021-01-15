<template>
  <div>
    <h1>E-WALLET</h1>
    <p>ACTIVE CARD</p>
    <main>
      <Card />
      <CardStack />
    </main>
    <button @click: class="newcard">ADD A NEW CARD</button>
  </div>
</template>

<script>
import Card from "@/Components/Card.vue";
import CardStack from "@/Components/CardStack.vue";

export default {
  components: { Card, CardStack },
};
</script>

<style scoped>
</style>