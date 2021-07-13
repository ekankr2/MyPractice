<template>

  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <span v-on:click="close">닫기</span>
      <h4>상세페이지임</h4>
      <p>상세페이지 내용임</p>
    </div>
  </div>
  <div class="menus">
    <a v-for="(menu, index) in 메뉴들" :key="index ">{{ menu }}</a>
  </div>

  <div>
    <img src="./assets/room0.jpg" class="room-img">
    <h4 class="productName" @click="모달창열렸니 = true">{{  products[0] }}</h4>
    <p>50 만원</p>
    <button v-on:click="increase(0)">허위매물신고</button><span>신고수 : {{신고수[0]}}</span>
  </div>
  <div>
    <img src="./assets/room1.jpg" class="room-img">
    <h4 @click="모달창열렸니 = true">{{ products[1] }}</h4>
    <p>70 만원</p>
    <button v-on:click="increase(1)">허위매물신고</button><span>신고수 : {{신고수[1]}}</span>
  </div>
  <div>
    <img src="./assets/room2.jpg" class="room-img">
    <h4 @click="모달창열렸니 = true">{{ products[2] }}</h4>
    <p>80 만원</p>
    <button v-on:click="increase(2)">허위매물신고</button><span>신고수 : {{신고수[2]}}</span>
  </div>
</template>

<script>



export default {
  name: 'App',
  data(){
    return {
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
