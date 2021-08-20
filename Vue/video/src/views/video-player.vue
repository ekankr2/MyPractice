<template id="video-player">
  <div class="video-player">
    <div class="video-container">
      <div class="video-wrap">
        <iframe  :src="activeVideo.youtubeURL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <h3>{{ this.activeVideo.title }}</h3>
      <div class="row">
        <p>{{ this.activeVideo.views }} views</p><p>{{this.activeVideo.likes}} <button>Like</button></p>
      </div>
      <div class="describe">{{ this.activeVideo.describe }}</div>
    </div>

      <div class="video-list">
        <div  v-for="(video, idx) in videos" @click="chooseVideo(video)" :key="idx" class="thumbnail">
          <div class="thumbnail-img">
            <img :src="video.thumbnail" :alt="video.title" />
          </div>
           <div class="thumbnail-info">
            <h4>{{ video.title }}</h4>
            <div class="thumbnail-views">
              <span>{{ video.speaker }}</span>
              <span>{{video.views}} Views</span>
            </div>
            <div class="thumbnail-describe">{{ video.describe }}</div>
          </div>
        </div>
      </div>

  </div>
</template>


<script>
export default {
  name: "video-player",
  data() {
    return {
      videos: [
        { id: 1, title: 'Behind the Illusions: Impossibly high-performance layout animations',
          thumbnail: require('../assets/bike.jpg'), youtubeURL: "https://www.youtube.com/embed/JuWWQL7SfNA",
          speaker: 'David Khourshid', likes: 0, views: 0, describe: 'Lorem ipsum dolor sit amet, ' +
              'consectetur adipiscing elit. Fusce nec leo et quam condimentum varius. In scelerisque, ' +
              'tellus sit amet congue condimentum, erat dui elementum est, nec iaculis est.'},
        {
          id: 2, title: 'Journeys: What makes a developer, really?',
          thumbnail: require('../assets/car.jpg'), youtubeURL: "https://www.youtube.com/watch?v=P_A2kNpyQBs&ab",
          speaker: 'Ivana McConnell', likes: 0, views: 0, describe: 'Lorem ipsum dolor sit amet, ' +
              'consectetur adipiscing elit. Fusce nec leo et quam condimentum varius. In scelerisque, ' +
              'tellus sit amet congue condimentum, erat dui elementum est, nec iaculis est.'},
        {
          id: 3, title: 'Journeys: What makes a developer, really?',
          thumbnail: require('../assets/bike.jpg'), youtubeURL: "https://www.youtube.com/watch?v=xjS6SftYQaQ",
          speaker: 'Ivana McConnell', likes: 0, views: 0, describe: 'Lorem ipsum dolor sit amet, ' +
              'consectetur adipiscing elit. Fusce nec leo et quam condimentum varius. In scelerisque, ' +
              'tellus sit amet congue condimentum, erat dui elementum est, nec iaculis est.'},
        {
          id: 4, title: 'Journeys: What makes a developer, really?',
          thumbnail: require('../assets/motorcycle.jpg'), youtubeURL: "https://www.youtube.com/watch?v=xjS6SftYQaQ",
          speaker: 'Ivana McConnell', likes: 0, views: 0, describe: 'Lorem ipsum dolor sit amet, ' +
              'consectetur adipiscing elit. Fusce nec leo et quam condimentum varius. In scelerisque, ' +
              'tellus sit amet congue condimentum, erat dui elementum est, nec iaculis est.'},
      ],

    }
  },
  computed: {
    activeVideo() {
      return this.videos[0]
    }
  },
  methods: {
    chooseVideo (video) {
      this.activeVideo = video
      video.views += 1
    }
  }
}
</script>

<style scoped>
img{
  width: 300px;
  height: 210px;
}
</style>
