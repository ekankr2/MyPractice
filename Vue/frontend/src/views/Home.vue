<template>
  <div class="home">
    <div id="header">
    <router-link :to="{ name: 'Home'}"
                 class="nav-link"
                 active-class="active">
      Home
    </router-link>
      <router-link :to="{ name: 'Todo'}"
                   class="nav-link"
                   active-class="active">
        Todo
      </router-link>
      <router-link :to="{ name: 'EventBusTestPage'}"
                   class="nav-link"
                   active-class="active">
        EventBusTest
      </router-link>
  </div>
  </div>
</template>

<script>

  export default {
    name: 'Home',

    components: {
    },
  }
</script>

<style scoped>

body{
  text-align: center;
}
.home{
  margin: 20px;
}
.nav-link {
  margin: 20px;
  text-decoration: none;
  font-weight: bold;
  color: fuchsia;
  font-size: 2rem;
}

</style>
