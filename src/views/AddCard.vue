<template>
  <div class="newcarddesign">
    <h1>ADD A NEW BANK CARD</h1>
    <p id="newcard">NEW CARD</p>
    <main class="main-container">
      <Card :card="card" />
      <CardForm v-model="card" />
    </main>

    <button @click="addCard" id="addcard">ADD CARD</button>
  </div>
</template>

<script>
import Card from "@/Components/Card.vue";
import CardForm from "@/Components/CardForm.vue";

export default {
  components: { Card, CardForm },
  computed: {},
  props: ["data"],
  data: function () {
    return {
      card: {
        expyear: "",
        expmonth: "",
        cardholder: "",
        vendor: "bitcoin",
        cardnumber: "",
      },
    };
  },
  methods: {
    addCard() {
      for (let i = 0; i < this.card.cardnumber.length; ++i) {
        if (Number.isNaN(Number.parseInt(this.card.cardnumber.charAt(i)))) {
          return;
        }
      }

      this.data.setCards([...this.data.cards, this.card]);
      this.$router.push({ path: "/Home" });
    },
  },
};
</script>

<style scoped>
.main-container {
  margin: auto;
}

#newcard {
  color: rgb(92, 92, 83);
}

#addcard {
  margin: auto;
  height: 60px;
  width: 350px;
  margin-top: 50px;
  color: white;
  background-color: black;
  border-radius: 8px;
}
.newcarddesign {
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>