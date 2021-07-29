<template>
  <div>
    <router-link :to="{ name: 'Home' }"
                 class="nav-link"
                 active-class="active">
      Home
    </router-link>
    <br>
    <b>random: {{ this.$store.getters.randomFromSpring }}</b><br>
    <input type="button" @click="randomNumber()" value="random"/><br>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "RandomNumberTest",
  methods: {
    ...mapActions ([
        'generateRandomNumber'
    ]),
    randomNumber () {
      this.generateRandomNumber()
    }
  }
}
</script>

<style scoped>

</style>