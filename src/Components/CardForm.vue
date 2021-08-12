<template>
  <div class="container">
    <div class="item">
      <p class="Label">CARD NUMBER</p>
      <input class="field" v-model="value.cardnumber" />
    </div>

    <div class="item">
      <p class="Label">CARDHOLDER NAME</p>
      <input class="field" v-model="value.cardholder" />
    </div>

    <div class="item year-month">
      <div class="exp-container">
        <p class="Label">EXPYEAR</p>
        <select class="exp" v-model="value.expyear">
          <option v-for="year of expiringYears" :key="year" :value="year">
            {{ year }}
          </option>
        </select>
      </div>

      <div class="exp-container">
        <p class="Label">EXPMONTH</p>
        <select class="exp" v-model="value.expmonth">
          <option value="01">januari</option>
          <option value="02">februari</option>
          <option value="03">mars</option>
          <option value="04">april</option>
          <option value="05">maj</option>
          <option value="06">juni</option>
          <option value="07">juli</option>
          <option value="08">augusti</option>
          <option value="09">september</option>
          <option value="10">oktober</option>
          <option value="11">november</option>
          <option value="12">december</option>
        </select>
      </div>
    </div>

    <div class="item">
      <p class="Label">VENDOR</p>
      <select class="field vendors" v-model="value.vendor">
        <option value="bitcoin">BITCOIN INC</option>
        <option value="ninja">NINJA BANK</option>
        <option value="evil">BLOCK CHAIN INC</option>
        <option value="blockchain">EVIL CORP</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],

  computed: {
    expiringYears() {
      let years = [];

      let currentYear = new Date().getFullYear();
      for (let i = 0; i < 20; ++i) {
        years.push(currentYear++ + "");
      }

      return years;
    },
  },
};
</script>

<style scoped>
.container {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
}

.exp {
  width: 165px;
  height: 47px;
  border-radius: 8px;
  border-style: solid;
}

.exp-container {
  margin: 10px;
}

.year-month {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.item {
  width: 350px;
  max-width: 350px;
}

.Label {
  text-align: left;
  margin-bottom: 5px;
}

.field {
  width: 350px;
  height: 50px;
  border-radius: 8px;
}
.vendors {
  margin: auto;
  width: 350px;
  height: 55px;
}
</style>