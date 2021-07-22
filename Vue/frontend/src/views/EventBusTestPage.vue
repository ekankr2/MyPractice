<template>
  <div id="eventbus">
    <h2>EventBus Test</h2>
    <products></products>
    <product-detail></product-detail>
  </div>
</template>

<script>
import Products from "../components/eventbus/Products";
import ProductDetail from "../components/eventbus/ProductDetail";
export default {
  name: "EventBusTestPage",
  components: {ProductDetail, Products}
}
</script>

<style scoped>
ul {
  list-style-type: none;
  background: #3399ff;
  padding: 10px;
}
ul li {
  background: #cce5ff;
  margin: 5px;
}
</style>