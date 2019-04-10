<template>
  <div class="home">
    <b-carousel
      id="carousel1"
      style="text-shadow: 1px 1px 2px #333;"
      controls
      indicators
      background="#ababab"
      :interval="4000"
      img-width="1024"
      img-height="480"
      v-model="slide"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide to="/view" img-src="https://picsum.photos/1024/480/?image=52">
        <h1>Start your Journey</h1>
      </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Share Your Story</h1>
      </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
        <h1>Explore the World</h1>
      </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=55">
        <h1>Enjoy Your Trip</h1>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "home",
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    },
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    test: function() {
      alert("??????");
    }
  }
};
</script>
