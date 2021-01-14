<template>
  <div class="CardStack">
    <main>
      <Card />
    </main>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  components: { Card },
};
</script>

<style scoped>
.CardStack {
  height: 100px;
  width: 40px;
}
</style>