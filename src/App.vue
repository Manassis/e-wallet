<template>
  <div id="app">
    <router-view :data="data" />
  </div>
</template>

<script>
/*


myCard: {
        expyear: "12",
        expmonth: "5",
        cardholder: "Yngwie Malmsteen",
        vendor: "bitcoin",
        cardnumber: "1234 5678 9012 3456",
      },

*/

export default {
  data() {
    return {
      background: "white",
      data: {
        cards: [],
        setCards: (cards) => {
          this.data.cards = cards;
        },
        selectedCard: null,
        setSelectedCard: (card) => {
          this.data.selectedCard = card;
        },
      },
    };
  },
};
</script>
<style lang="scss">
.foo {
  border: 1px solid rgb(0, 0, 0);
  min-width: 20rem;
  min-height: 20rem;
}
.bitcoin {
  background-color: rgb(242, 206, 63);
}
.evil {
  background-color: rgb(242, 63, 63);
}
.ninja {
  background-color: rgb(8, 8, 8);
}
.blockchain {
  background-color: rgb(75, 58, 184);
}
</style>