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
      <router-link :to="{ name: 'StudentListPage' }"
                   class="nav-link"
                   active-class="active">
        학생 테스트
      </router-link>
      <router-link :to="{ name: 'RandomNumberTest' }"
                   class="nav-link"
                   active-class="active">
        랜덤숫자 테스트
      </router-link>
      <router-link :to="{ name: 'MaterializeTestPage' }"
                   class="nav-link"
                   active-class="active">
        Materialize 활용
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
