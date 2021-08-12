<template>
  <div class="stack">
    <h1>E-WALLET</h1>
    <p>ACTIVE CARD</p>

    <div v-if="data.selectedCard != null" style="margin: auto auto 70px auto">
      <Card :card="data.selectedCard" />
    </div>

    <CardStack
      :cards="data.cards"
      :selectedCard="data.selectedCard"
      :setSelectedCard="data.setSelectedCard"
    />
    <button id="addnewcard">
      <router-link id="addnewcards" to="/AddCard">ADD NEW CARD</router-link>
    </button>
  </div>
</template>

<script>
import CardStack from "@/Components/CardStack.vue";
import Card from "@/Components/Card.vue";

export default {
  components: { CardStack, Card },
  props: ["data"],
};
</script>

<style scoped>
.stack {
  display: flex;
  flex-direction: column;
  text-align: center;
}

#addnewcard {
  margin: auto;
  width: 370px;
  max-width: 370px;
  height: 60px;
  border-radius: 8px;
  margin-top: 230px;
  margin-bottom: 80px;
  color: black;
  background-color: black;
}

#addnewcards {
  color: white;
}
</style>