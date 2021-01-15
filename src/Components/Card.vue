<template>
  <article class="card" :class="card.vendor">
    <header class="header"></header>
    <section class="number">
      <h1>{{ card.cardnumber }} <br /></h1>
    </section>

    <section class="info">
      <aside class="holder">
        <span>cardholder</span>
        <p>{{ card.cardholder }}</p>
      </aside>
      <aside class="valid">
        <span>Valid thru</span>
        <p>{{ card.expmonth }}/{{ card.expyear }}</p>
      </aside>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    card: Object,
  },
};
</script>

<style scoped>
.card {
  width: 24rem;
  height: 14rem;
  border-radius: 0.6rem;
  padding: 1rem;
  box-sizing: border-box;
  box-shadow: 0 0 0.5rem black;
  display: grid;
  gap: o.5 rem 0;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 2.8rem;
  text-shadow: -1px -1px 2px gray;
  font-size: 1.2rem;
}

h1 {
  font-size: 1.4rem;
  margin-block-start: -0.3rem;
}
</style>
