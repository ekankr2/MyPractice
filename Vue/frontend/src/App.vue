<template>
  <div id="app">
    <global-component></global-component>
    <local-component></local-component>
    <child-component></child-component>
  </div>
</template>

<script>
import LocalComponent from "./components/local-component";
import ChildComponent from "./components/child-component";
export default {
  name: 'app',
  components: {
    ChildComponent,
    'local-component' :LocalComponent
  },
}
</script>