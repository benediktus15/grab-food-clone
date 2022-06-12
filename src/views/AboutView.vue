<template>
  <div class="about">
    <a-date-picker v-model:value="value1" />

    <a-button type="primary" @click="products">Primary Button</a-button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  setup() {
    const products = () => {
      axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((response) => {
          console.log(response.data);
        });
    };

    return {
      products,
    };
  },
});
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
