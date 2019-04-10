<template>
  <div class="single">
    <h1>{{title}}</h1>
    <h6>By {{author}}</h6>
    <img :src="url" style="width:40%">
    <article class="arti" v-html="content" align="left" margin></article>
  </div>
</template>

<script>
import firebase, { functions } from "firebase";
import firestore from "firebase/firestore";
import { db } from "../main.js";
export default {
  data() {
    return {
      id: this.$route.params.id,
      title: "",
      author: "",
      content: "",
      url: ""
    };
  },
  created() {
    var docRef = db.collection("posts").doc(this.id);
    docRef
      .get()
      .then(doc => {
        if (doc.exists) {
          this.title = doc.data().title;
          this.author = doc.data().author;
          this.content = doc.data().content;
          this.url = doc.data().url;
        } else {
          console.log("找不到文件");
        }
      })
      .catch(function(error) {
        console.log("提取文件時出錯:", error);
      });
  }
};
</script>
<style >
.arti {
  background-color: #eee;
  margin-top: 25px;
  margin-left: 10%;
  margin-right: 10%;
}
</style>
