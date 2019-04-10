<template>
  <div class="upload">
    <div v-if="!uploaded && !uploading">
      <h2>Upload a cover picture</h2>
      <form action="/somewhere/to/upload" enctype="multipart/form-data">
        <input name="img" @change="img" id="img" type="file" accept="image/*">
      </form>
      <b-button @click="imgup">upload</b-button>
    </div>
    <b-progress v-if="uploading" :max="max" :value="progressUpload" class="mt-2" variant="primary"></b-progress>
    <img v-if="uploaded" :src="url" width="20%">
    <br>
    <br>
    <div class="text">
      <b-form-input v-model="title" placeholder="Title"></b-form-input>
      <b-form-input v-model="name" placeholder="Auther Name"></b-form-input>
      <b-form-input v-model="place" placeholder="Country"></b-form-input>
      <vue-editor id="writer" v-model="content"></vue-editor>
    </div>
    <p>
      <button @click="upload">submit</button>
    </p>
    <br>
  </div>
</template>

<script>
import firebase from "firebase";
import firestore from "firebase/firestore";
import { db } from "../main.js";
import { VueEditor } from "vue2-editor";
import { request } from "https";
export default {
  name: "upload",
  components: {
    VueEditor
  },
  data() {
    return {
      title: "",
      name: "",
      content: "",
      place: "",
      Files: {},
      url: "",
      uploadTask: "",
      progressUpload: 0,
      uploading: false,
      uploaded: false,
      max: 100
    };
  },
  methods: {
    upload: function() {
      db.collection("posts")
        .doc(this.title.replace(/ /g, "-"))
        .set({
          author: this.name,
          content: this.content,
          title: this.title,
          place: this.place,
          user: firebase.auth().currentUser.email,
          id: this.title.replace(/ /g, "-"),
          url: this.url
        });
      alert("upload success!\nTitle:" + this.title);
      this.$router.replace("home");
    },
    img(input) {
      var file = input.target.files[0];
      this.Files = file;
    },
    imgup() {
      var file = this.Files;
      console.log(file);
      var storageRef = firebase.storage().ref();
      this.uploadTask = storageRef.child("image/" + file.name).put(file);
      this.uploading = true;
    }
  },
  watch: {
    uploadTask: function() {
      this.uploadTask.on(
        "state_changed",
        sp => {
          this.progressUpload = Math.floor(
            (sp.bytesTransferred / sp.totalBytes) * 100
          );
        },
        null,
        () => {
          this.uploadTask.snapshot.ref.getDownloadURL().then(url => {
            this.url = url;
            console.log(url);
            this.uploading = false;
            this.uploaded = true;
          });
        }
      );
    }
  }
};
</script>
<style>
#writer {
  min-height: 500pt;
}
.upload {
  border-left: 10px;
}
.progress-bar {
  margin: 10px 0;
}
.text {
  margin-left: 10%;
  margin-right: 10%;
}
</style>
