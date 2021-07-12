<template>

  <div class="menus">
    <a v-for="(menu, index) in 메뉴들" :key="index ">{{ menu }}</a>
  </div>

  <div>
    <h4>{{  products[0] }}</h4>
    <p>50 만원</p>
    <button v-on:click="increase">허위매물신고</button><span>신고수 : {{신고수}}</span>
  </div>
  <div>
    <h4>{{ products[1] }}</h4>
    <p>70 만원</p>
  </div>
  <div>
    <h4>{{ products[2] }}</h4>
    <p>80 만원</p>
  </div>
</template>

<script>



export default {
  name: 'App',
  data(){
    return {
      신고수 : 0,
      메뉴들 : ['Home','Shop','About'],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      prices : ['50 ','70 ','80 ']
    }
  },
  methods : {
    increase() {
    this.신고수++;
    }
  },
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

.menus{
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menus a{
  color: white;
  padding: 10px;
}

.room div{
  padding: 20px;
}
</style>
