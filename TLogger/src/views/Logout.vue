<template>
  <div class="logout">
    <b-alert show>Are you sure to Logout?</b-alert>
    <b-button block variant="primary" @click="logout">Yes</b-button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
</script>