<template>
  <div class="view">
    <br>

    <input type="text" v-model="search" placeholder="search posts" style="width:70%">
    <br>
    <br>

    <b-card-group deck>
      <div v-for="i in filterTitle">
        <b-card
          :img-src="i.url"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-title>{{i.title}}</b-card-title>
          <b-card-text>Author:{{i.author}}</b-card-text>
          <b-card-text>#{{i.place}}</b-card-text>

          <b-button v-bind:to="'/post/'+i.id" variant="primary">Read</b-button>
        </b-card>
      </div>
    </b-card-group>
  </div>
</template>

<script>
import firebase, { functions } from "firebase";
import firestore from "firebase/firestore";
import { db } from "../main.js";
export default {
  name: "upload",
  data() {
    return {
      collection: "",
      message: "",
      rrr: "",
      nana: "",
      titles: [],
      search: ""
    };
  },
  created() {
    var titleRef = db.collection("posts");
    titleRef.get().then(snap => {
      const array = [];
      snap.forEach(doc => {
        array.push(doc.data());
      });
      this.titles = array;
    });
  },
  computed: {
    filterTitle: function() {
      return this.titles.filter(title => {
        return title.title.match(this.search);
      });
    }
  },
  methods: {}
};
</script>
<style>
#writer {
  min-height: 500pt;
}
</style>
