<template>

  <div class="menus">
    <a v-for="(menu, index) in 메뉴들" :key="index ">{{ menu }}</a>
  </div>

  <div v-for="(items, index) in 원룸들" :key="index">
    <img :src="items.image" class="room-img">
    <h4>{{  items.title }}</h4>
    <p>{{  items.price }}원</p>
  </div>
</template>

<script>

import rooms from './assets/oneroom';


export default {
  name: 'App',
  data(){
    return {
      원룸들 : rooms,
      모달창열렸니 : false,
      신고수 : [0,0,0],
      메뉴들 : ['Home','Shop','About'],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      prices : ['50 ','70 ','80 ']
    }
  },
  methods : {
    increase(index) {
    this.신고수[index]++;
    },
    close() {
      this.모달창열렸니 = false
    }
  },
  components: {

  }
}
</script>

<style>

body{
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg{
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}

.white-bg{
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}

.white-bg span{
  cursor: pointer;
  position: absolute;
  right: 60px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

.room-img{
  width: 100%;
  margin-top: 40px;
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

.productName{
  cursor: pointer;
}
</style>
