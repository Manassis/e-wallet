<template>
  <div class="CardStack">
    <div
      class="stack"
      v-for="(card, index) of getCards"
      :key="index"
      @click="setSelectedCard(card)"
    >
      <Card :card="card" />
    </div>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  components: { Card },

  props: ["cards", "selectedCard", "setSelectedCard"],

  computed: {
    getCards() {
      if (this.selectedCard === null) return this.cards;

      let cards = [];
      for (let card of this.cards) {
        if (card.cardnumber.localeCompare(this.selectedCard.cardnumber) === 0)
          continue;

        cards.push(card);
      }

      return cards;
    },
  },
};
</script>

<style scoped>
.stack {
  margin: auto;
  margin-bottom: -170px;
}

.CardStack {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
}
</style>