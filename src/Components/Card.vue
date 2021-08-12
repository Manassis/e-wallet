<template>
  <div class="card" :class="card.vendor">
    <header class="header">
      <div class="img">
        <img class="chip" src="@/assets/chip-light.svg" />
        <img class="vendor" :src="getImgUrl(card.vendor)" />
        <nav>
          <h3>{{ displayCardNumber }}</h3>
        </nav>
      </div>
    </header>
    <div class="container">
      <div class="holder">
        <h6>CARDHOLDER NAME</h6>
        <h4>{{ card.cardholder }}</h4>
      </div>
      <div class="valid">
        <h6>VALID THRU</h6>
        <h4>{{ card.expmonth }}/{{ card.expyear }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: Object,
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/vendor-" + pic + ".svg");
    },
  },
  computed: {
    displayCardNumber() {
      let text = "";
      let times = Math.min(4, this.card.cardnumber.length / 4);
      for (let i = 0; i < times; ++i) {
        text += this.card.cardnumber.substring(
          i * 4,
          Math.min(i * 4 + 4, this.card.cardnumber.length)
        );
        text += " ";
      }

      return text;
    },
  },
};
</script>

<style scoped>
.card {
  width: 24rem;
  height: 14rem;
  border-radius: 0.6rem;
  padding: 8px;
  box-sizing: border-box;
  box-shadow: 0 0 0.5rem black;

  gap: o.5 rem 0;
  grid-template-columns: 1fr 1fr;
  text-shadow: -1px -1px 2px gray;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.chip {
  margin-top: 4px;
}

.vendor {
  max-height: 100px;
  margin-left: 270px;
  margin-bottom: 44px;
}

nav {
  height: 70px;
  width: 22rem;
  place-content: center;
  text-align: center;
  font-size: 1.5rem;
  margin-block-start: -0.3rem;
  padding-right: 6px;
  padding-top: 2px;
  padding-bottom: 1px;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
h6 {
  height: 10px;
  padding: 1px;
  margin: 1px;
}

h4 {
  height: 20px;
  margin-top: 10px;
}
.holder {
  width: 140px;
  height: 10px;
  margin: 1px;
}

.valid {
  width: 140;
  margin-left: 130px;
  height: 10px;
}
</style>
